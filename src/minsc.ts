import {NPCDialog} from "./npcDialog";
import {NPC} from "./npc";
import {minscLines,minscGroupToLines,Groups} from "./minsc-lines"; 
  

const docNPC = document as FoundryDocument;

let npcDialog:NPCDialog;


export class Minsc extends NPC  {
   
	readonly DEFAULT_STYLE:string=`
				<style>
				.select-action { padding: 20px; background: #222; color: #eee; }
				.select-action button { margin: 5px; padding: 5px 10px; }
				.minsc-actions-buttons {  display: flex; flex-direction: column; gap: 8px; }
			`;
	groupToLines:Map<string,string>=minscGroupToLines;
	lines:any=minscLines;

	constructor() { 
		super("Minsc","modules/forgotten-realms/images/npcs/minsc.webp"); 

		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC = this;
		npcDialog=docNPC.COMMON_MODULE.NPC_DIALOG;

		if(!docNPC.COMMON_MODULE.NPC_DIALOG.npcs)
		{
			docNPC.COMMON_MODULE.NPC_DIALOG.npcs = new Map();
		}

		docNPC.COMMON_MODULE.NPC_DIALOG.npcs.set("minsc",this);
	}
 

	public async startScreen () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens.push({name:"start-screen",callback:docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.startScreen,type:"screen"} );

			docNPC.COMMON_MODULE.debug("docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens inicial: ",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.screens	);

			docNPC.COMMON_MODULE.debug("startScreen:10,char_name:",docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.name); 

			this.actor = game.actors.getName("Minsc de Rasemen");
			if (!docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.actor) return ui.notifications.error("Minsc não encontrado!");

			const title = "Minsc: Escolha o que fazer";
			 
			const content = `
				<div class="select-action">
				<H1>Escolha uma ação:</H1> `;

			docNPC.COMMON_MODULE.debug("startScreen:20. criando botoes"); 

				
			/** TODO : Melhorar o estilo pros botoes aparecerem de melhor maneira **/
			const buttons =[
					//ex com parametros		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-encontrando-alguem","Encontrando Alguém",true,"screen-context",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.findSomeone() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-encontrando-em-algum-lugar","Entrando em Um Lugar",true,"screen",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.enterInAPlace() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-sobrecarga-peso","Sobrecarga de peso",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.overWeight() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-concordando","Concordando",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.agree() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-discordando","Discordando",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.notAgree() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-reclamando-do-grupo","Reclamando do Grupo",true,"screen-context",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.complainingAboutGroup() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-durante-o-dia","Durante o dia",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.inDay() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-durante-a-noite","Durante a noite",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.inNight() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-nao-entendendo","Não entendendo",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.notUnderstood() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-durante-a-noite","Durante a noite",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createAmbush() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-criando-emboscada","Criar uma Emboscada",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.dooingAnAmbush() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-preparando-armadilha","Preparando uma armadilha",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.dooingATrap() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-se-liberando-de-uma-magia","Se Liberando de Uma Magia",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.freeOfTheMagic() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-exaustao","Exaustão",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.exaustion() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-levando-dano","Levando Dano",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.getHurt() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-armadura-completa","Com Armadura Completa",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.fullPlate() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-sendo-enganado","Sendo Enganado",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.beingFooled() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-pro-bardo","Pro Bardo",true,"action",async ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.orBard() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-entrando-no-grupo","Entrando no Grupo",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.enterInTheParty() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-saindo-do-grupo","Saindo do Grupo",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.quitOfTheParty() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-elogiando-uma-fala","Elogiando uma fala",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.complimentingASpeech() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-perdendo-invisibilidade","Perdendo Invisibilidade",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.loosingInvisibility() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-afirmando-que-esta-pronto","Afirmando que esta pronto",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.iAmReady() ),
					docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-alguem-pedindo-pra-pegar-boo","Alguém pedindo pra pegar Boo",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.getBoo() ),
				];

			docNPC.COMMON_MODULE.debug("startScreen:30 depois de criado botoes"); 

  
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createDialog( title ,content,buttons); 

			docNPC.COMMON_MODULE.debug("startScreen:40 depois de criado dialogo"); 

	}

		
	public async iAmReady() {
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.I_AM_READY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public async iNotReceivedCommands(){
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.COMPLAINING_ABOUT_RECEIVING_ORDERS);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async complainingAboutGroup() {

		const title = "Minsc Reclamando do Grupo: Escolha a situação";
		
			 
		const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
			

		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.COMPLAINING_ABOUT_THE_GROUP); 

		docNPC.COMMON_MODULE.debug("complainingAboutGroup:10,before creating buttons"); 

		const buttons =[
				//ex com parametros		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-reclamando-de-receber-ordens","Por Receber Ordens",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.iNotReceivedCommands() )
			];
		docNPC.COMMON_MODULE.debug("complainingAboutGroup:20,before creating the dialog"); 

 		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createDialog( title ,content,buttons);


	}



  public async findSomeone() {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.FIND_SOMEONE);
	
	const title = "Minsc: Escolha o que fazer";
 
	const content = `
		<div class="select-action">
		<H1>Escolha uma ação:</H1> `;
		
	/** TODO : Melhorar o estilo pros botoes aparecerem de melhor maneira **/


	const buttons =[
			//ex com parametros		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
			docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-vendo-alguem-conhecido","Vendo alguém conhecido",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.seeingSomeoneFamiliar() )
		];

	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createDialog( title ,content,buttons); 

  }

  public async enterInAPlace () {	
	
		const title = "Minsc Entrando em: Escolha a situação";
		
			
		/** TODO : Melhorar o estilo pros botoes aparecerem de melhor maneira **/
		const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
			
		docNPC.COMMON_MODULE.debug("enterInAPlace:10,before creating buttons"); 

		const buttons =[
				//ex com parametros		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-em-batalha","Entrando em Batalha",true,"screen-context",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.enterInBattle() ),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-numa-cidade","Numa Cidade",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.enterInACity() ),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-na-floresta","Na Floresta",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.enterInAFlorest() ),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-dungeon","Dungeon",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.enterInDungeon() ), 
			];

		docNPC.COMMON_MODULE.debug("enterInAPlace:10,after creating buttons"); 


		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createDialog( title ,content,buttons);

		docNPC.COMMON_MODULE.debug("enterInAPlace:10,after creating dialogs"); 

	} 
 
	public async enterInDungeon(){
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.IN_DUNGEON);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	

  public async enterInAFlorest () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.IN_FOREST);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
  
  public async enterInACity () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.IN_CITY);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
 
   public async stealthy () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.STEALTHY);
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send();
  }

   public async bigEnemy () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.BIG_ENEMY);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
  
   public async inDay () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.DURING_DAY);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async inNight () {
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.DURING_NIGHT);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
  public async friendGetHurt () {	
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.IF_SOMEONE_HURTS_A_GROUP_MEMBER);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async getHurt  () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.GETTING_HURT); 

	const title = "Minsc se machucou: Escolha a situação";
 
	const content = `
		<div class="select-action">
		<H1>Escolha uma ação:</H1> `;
		 
	const buttons =[
			//ex com parametros		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
			docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-menos-de-25","Menos de 25% de vida",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.less25p100OfLife() ),
			docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-menos-de-50","Menos de 50% de vida",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.less50p100OfLife() ), 
		];

	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createDialog( title ,content,buttons);  
  }
 
  public async less25p100OfLife () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.ONE_QUARTER_LIFE);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async less50p100OfLife  () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.HALF_LIFE);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async toHit() {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.LANDING_A_HIT);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 

  }

  
  public async agree () {	
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.AGREEING_WITH_THE_GROUP);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send();  
  }
	
	public async notAgree  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.NOT_AGREEING_WITH_SOMETHING);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async notUnderstood () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.I_DONT_UNDERSTAND_SOMTHING);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async getBoo () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.IF_SOMEONE_ASKS_TO_CATCH_THE_BOO);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	

	public async enterInBattle () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.ENTER_IN_BATTLE); 

		const title = "Minsc em combate: Escolha a situação";
		
		const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
			
		const buttons =[
				//ex com parametros		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-matou-alguem","Matou alguém",true,"action", async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.killingSomeone() ),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-errou-alvo","Errando Alvo",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.missingHit() ), 
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-levou-dano","Levando Dano",true,"screen-context",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.getHurt() ),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-amigo-levou-dano","Amigo Recebendo Dano",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.friendGetHurt() ), 
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-magia-falhando","Magia Falhando",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.missMagic() ),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-acertando-inimigo","Acertando o Inimigo",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.toHit() ), 
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-modo-furtivo","Entrando em Modo Furtivo",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.stealthy() ),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-inimigo-grande","Inimigo Grande",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.bigEnemy() ), 
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-inimigo-imune","Notando imunidade do inimigo",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.enemyImunne() ), 
			];

		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createDialog( title ,content,buttons);  
	}

	public async enemyImunne () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.ENEMY_WITH_IMMUNITY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public async missMagic () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.LOSING_INVISIBILITY_MAGIC);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async missingHit () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.MISSING_THE_HIT);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async killingSomeone () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.KILLING_AN_ENEMY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async imunityDetected () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.ENEMY_WITH_IMMUNITY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async overWeight () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.OVERWEIGHT);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async afterMagic  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.AFTER_SOMEONE_CASTS_MAGIC);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	};

	 
	
	public async moralDecrement  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.LOWERING_MORALE);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	
	public async oMoral   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.ZERO_MORALE);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}


	public async createAmbush   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.SETTING_AN_AMBUSH);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async freeOfTheMagic   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.BREAKING_FREE_FROM_MAGIC);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public   async exaustion  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.WITH_EXHAUSTION);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async ullPlate   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.FULL_ARMOR);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public   async beingFooled  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.ON_BEING_DECEIVED);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async orBard   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.TO_THE_BARD);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async enterInTheParty  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.JOINING_THE_GROUP);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async quitOfTheParty  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.LEAVING_THE_GROUP);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public   async complimentingASpeech  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.PRAISING_THE_SPEECH);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
      
	public   async seeingSomeoneFamiliar  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.FIND_SOMEONE_FAMILIAR);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async loosingInvisibility  () {
   		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.LOSING_INVISIBILITY_MAGIC);
	  	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}


	public async dooingATrap () {
   		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.SETTING_A_TRAP);
	  	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}


	public async dooingAnAmbush () {
   		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(Groups.SETTING_AN_AMBUSH);
	  	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

     
 
 
}
