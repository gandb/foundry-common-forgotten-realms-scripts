import {NPCDialog} from "./npcDialog";
   
const docNPC:FoundryDocument = document as FoundryDocument;


export abstract class NPC   {
 
	abstract readonly name:string ;
	actor:any;
	groups:Set<string> = new Set();
	screens = new Array<Screen|any>();
	abstract readonly DEFAULT_STYLE:string;
	abstract groupToLines:Map<string,string>;
	abstract lines:any;
	RANDOM_GROUP:string = "37";

	constructor(){
 		this.screens.push({name:"npc-dialog",callback:docNPC.COMMON_MODULE.NPC_DIALOG.showNPCChooseDialog});		
	}
 
	public  decrementGroup (){
		const array = [...docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups];
		const last = array.at(-1);
		const newArray = array.slice(0, -1); 
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups =new Set(newArray);

	}

	public getAlias(){
		return this.name.toLocaleLowerCase();
	}

    public async createDialog (title:string ,content:string,options:Array<any>,submits:Array<any>|null)
	{
		const alias = docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.getAlias();
		const innerSelectOptions = `
		<option selected="selected" value="minsc-random">Aleatório dado o contexto até aqui</option>
		` + options.reduce((obj, button) => {
			const backAction:string =  `${alias}-back`; 
			const sendAction:string =   `${alias}-send`;
			const cancelction:string =   `${alias}-cancel`;

			if(button.action== backAction||button.action==sendAction||button.action==cancelction){
				return obj;
			} 

			const previous = typeof obj === "string" ? obj : `<option value="${obj.action}">${obj.label} </option>obj`;
	                                                                                   
			return  `
				${previous} 
				<option value="${button.action}">${button.label} </option>
			`;
		});

		const newContent = `${content}
			<div class="${alias}-actions-buttons">
				<SELECT>
					${innerSelectOptions}
				</SELECT>
			</div>
		`;

		docNPC.COMMON_MODULE.debug("NPC.createDialog:10",options);
		docNPC.COMMON_MODULE.debug("NPC.createDialog:15:activeNPC.groups:",
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups);

		if(!submits){
			
			docNPC.COMMON_MODULE.debug("NPC.createDialog:20");

			submits = [
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("send","Enviar",true,"action",async ()=> {
					docNPC.COMMON_MODULE.debug("NPC.createDialog, before creating send:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups	);
	
					docNPC.COMMON_MODULE.debug("NPC.createDialog [10]: Escolhido a opcao enviar");					

					const queryResult = docNPC.querySelector(".minsc-actions-buttons SELECT") as HTMLSelectElement || null;
					const result = queryResult?.value;

					if(result===null || result===undefined){
						docNPC.COMMON_MODULE.error("NPC.createDialog: Erro ao obter a opcao selecionada");
						return
					}

					docNPC.COMMON_MODULE.debug("NPC.createDialog [20]: depois de selecionar o resultado",result);


					if(result===`${alias}-random`)
					{
						const lastScreen  = docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.at(-1);
						docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.push( {name:result,callback:docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send,type:lastScreen.type} );
						docNPC.COMMON_MODULE.debug("NPC.createDialog, before  random send:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups	);	
						docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(false);
						docNPC.COMMON_MODULE.debug("NPC.createDialog, after random send:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups	);
	
						return;
					}
					options.forEach((button)=>{	
						if(button.action!=result){
							return;
						}

						docNPC.COMMON_MODULE.debug("NPC.Enviado a opcao :" + result );
						docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.push({name:result,callback:button.callback,type:button.type} );
						button.callback();
						docNPC.COMMON_MODULE.debug("NPC.createDialog, after 3 creating send:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups	);
	
						return;
					});
					
				}),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("back","Voltar",true,"action",async ()=> {

					docNPC.COMMON_MODULE.debug("NPC.screens ao voltar - antes: ",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens	);
					 
					const previousLastScreen = docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.at(-2);
					const lastScreen = docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.pop();		
					docNPC.COMMON_MODULE.debug("lastScreen:", lastScreen)
					docNPC.COMMON_MODULE.debug("screens ao voltar - depois: ",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens	);
					
					if(lastScreen.type=="screen-context")
					{
						docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.decrementGroup();
					}

					previousLastScreen.callback();

					  

				}),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("cancel","Cancelar",true,"action",async ()=> {
					docNPC.COMMON_MODULE.debug("NPC.Cancelado a tela do minsc"); 
				})
			];	

			docNPC.COMMON_MODULE.debug("NPC.createDialog:25. Create submits",submits);

			docNPC.COMMON_MODULE.debug("NPC.createDialog:30 - depois de criar submits");
		}
  
	  
		const submit = (action:string,label:string,defaultValue:string,callback:any)=>{
		};

		docNPC.COMMON_MODULE.debug("NPC.createDialog:40 - antes de criar dialogo");

		docNPC.COMMON_MODULE.DIALOG_UTILS.createDialog( title ,docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.DEFAULT_STYLE ,newContent,submits,submit);

		docNPC.COMMON_MODULE.debug("NPC.createDialog:50 - depois de criar dialogo");

	}

	public abstract startScreen ():Promise<void> ; 

		       
	public async getListLinesFromGroup (groupsUnordered:any) {

		const groups = Array.from(groupsUnordered).map(Number).sort((a, b) => a - b);

		if(groups.length === 0) {
			return new Array();
		} 

		if(groups.length==1)
		{
			return groups;
		}
		
		let combinations = await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.getCombinations(groups);
		docNPC.COMMON_MODULE.debug("groups:",groups);
		docNPC.COMMON_MODULE.debug("keys:",combinations);
		 
		return combinations;
	

	};


	public async getCombinations (numbers:Array<number>,separator:string=";") {
		
		
		const ret = new Array();

		if(numbers.length==0 || numbers.length==1)
		{
			return  [...numbers];
		}

 		 
	 	docNPC.COMMON_MODULE.debug("numbers:",numbers);

		const generate = (start:number, path:Array<number>) => {
			docNPC.COMMON_MODULE.debug("generate start:",start,",path",path);


			let combinationKey = numbers.join(";") 
			docNPC.COMMON_MODULE.debug("combinationKey:",combinationKey);

			docNPC.COMMON_MODULE.debug("groupToLines:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groupToLines,"-",typeof combinationKey);

			if(docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groupToLines.has(combinationKey)) {
				docNPC.COMMON_MODULE.debug("find, return the combination");
				ret.push(combinationKey);
				return ret;
			}
		   docNPC.COMMON_MODULE.debug("combinationKey not found:",combinationKey);
			for (let i = start; i < numbers.length; i++) {
				const newCombinationGroup:Array<number> = [...path, numbers[i]];
				docNPC.COMMON_MODULE.debug("novaCombinacao:",newCombinationGroup);
				combinationKey = newCombinationGroup.join(";") 
				ret.push(combinationKey);
	 			generate(i + 1, newCombinationGroup);
			}

		};

		generate(0, []);
		return ret;
	}

	public async speak  (lineIndex:number){
		const line = docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.lines[lineIndex];

		docNPC.COMMON_MODULE.debug("line:",line);


		docNPC.COMMON_MODULE.debug("speak:talk:",line);
		ChatMessage.create({
			content: line,
			speaker: ChatMessage.getSpeaker({
				alias: docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.actor.name
			})
		});

		const formatedIndex = lineIndex.toString().padStart(3, '0'); 
		const name =  docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.name;
		const src = `modules/forgotten-realms/sounds/npcs/${name}/${formatedIndex}/${name}${formatedIndex}.ogg`;
		await AudioHelper.preloadSound(src);
		AudioHelper.play({ src, autoplay: true }, true);
		 
	}
 
	
	public  async send(removeLastGroup=true) {
			if(docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.size === 0) {
				docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.RANDOM_GROUP);
			} 
	
			const list = await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.getListLinesFromGroup(docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups);
			
		 
			docNPC.COMMON_MODULE.debug("NPC.send, before send,list:",list);

			const lines = new Array();

			for(const groupNumber of list) {
		
				const group = groupNumber.toString();
				docNPC.COMMON_MODULE.debug("group:",group);
				if(!docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groupToLines.has(group))
				{
					docNPC.COMMON_MODULE.warn(`NPC.send, afterSend:Grupo ${group} não encontrado em groupToLines!`);
					continue;
				}
	
				const size = group.split(";").length +1;

		
				const linesForThisGroupConcat:string =  docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groupToLines.get(group) as string;
				docNPC.COMMON_MODULE.debug("NPC.send, 50,linesForThisGroupConcat:",linesForThisGroupConcat,"-size:",size);

				const linesForThisGroup = linesForThisGroupConcat.split(";"); 
				docNPC.COMMON_MODULE.debug("NPC.send, 60,linesForThisGroup:",linesForThisGroup);
				linesForThisGroup.forEach(line=>{
					for(let i=0;i<size;i++) {
						lines.push(  line);
					}
				});
				
			}

			docNPC.COMMON_MODULE.debug("NPC.send, afterSend,lines:",lines);

			let randomIndex = Math.abs(  Math.round( (Math.random( )*lines.length))); 
			randomIndex = randomIndex>=lines.length ? lines.length-1: randomIndex;

			docNPC.COMMON_MODULE.debug("NPC.send, afterSend,randomIndex:",randomIndex);

			const lineIndex = parseInt( lines[randomIndex],10);

			docNPC.COMMON_MODULE.debug("NPC.send, afterSend,lineIndex:",lineIndex);


			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.speak(lineIndex);
	

			docNPC.COMMON_MODULE.debug("NPC.send, afterSend,activeScreen:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens	);
		
			const activeScreen = docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.at(-2);
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.pop();
		
			activeScreen.callback();

	
			const lastIsRandom = docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.has(docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.RANDOM_GROUP); 
			removeLastGroup = removeLastGroup || lastIsRandom;
			docNPC.COMMON_MODULE.debug("NPC.send, onlyRandom,removeLastGroup:", lastIsRandom,",",removeLastGroup);

			if(removeLastGroup)
			{
				docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.decrementGroup();
			}
			docNPC.COMMON_MODULE.debug("NPC.send, afterSend:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups	);
		
	}
 
 
}
