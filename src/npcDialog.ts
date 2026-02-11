import { Brizola } from "./brizola";
import {Minsc} from "./minsc";
import {NPC} from "./npc";
import { NPCPortraitDialog } from "./npcTalkDialog";

'use strict';

 

/*
To see groupids, see the minsc.groupids.txt file 

 
=Débito==
1-) Criar as falas do Brizola, um segundo personagem (brizola.ts)
	1.1-) Texto - OK
	1.2-) Grupos
		1.2.1) Constantes - OK
		1.2.2) Falas por grupo - OK
	1.3-) Telas - OK
	1.4-) Testar - OK
	1.5-) Melhorar falas usando o google ia - ok
	1.5 -) Gerar e testar sons, tentar achar sotaque gaucho - ok
	1.6-) Adicionar as girias e criar novos grupos pra explicá-las (ver abaixo as girias) - ok
	1.7-)  pra ter o sotaque vou ter que usar o voice changer interpretando o sotaque gaucho - ignorado por enquanto, pdoe ser que faça com dublador.
2-) Corrigir o warning: - ok
accessing the global "AudioHelper" which is now namespaced under foundry.audio.AudioHelper
Deprecated since Version 12
Backwards-compatible support will be removed in Version 14
  at Minsc.speak (minsc.js:836:3)
3-) Criar componente pra mensageria mas deixar o atual código comentado como failback (estudar este primeiro https://github.com/farling42/foundryvtt-socketlib)
3.1-) Criar a interface de socket - OK
3.2-) Criar a implementação usando socket - OK
3.3-) Criar a implementação usando dialogs, ver netsta arquivo o evento createChatMessage e a classe NPCPortraitDialog
3.4-) Trocar o uso dos dialogs em npcTalkDialog.ts para usar a nova interface de mensageria, usando createChatMessage 
3.5-) Trocar o uso dos dialogs em npcTalkDialog.ts para usar a nova implementação de mensageria, usando o socket 
3.6-) Alternar a configuração de qual implementação usar a depender de uma configuração. Alterar no factory de mensageria.
4-) Corrigir pro createDialog usar options em vez de depender da ordem dos parâmetros, criar uma interface pra options e documentar os campos.
5-) Nos npcs no lugar onde tem "action" , "screen", "screen-context", criar um enum pra isto com a documentação do que significa cada um
6-) o último voltar deveria reabrir a tela de escolha de npc
7-) melhorar o menu do minsc, o do brizola ficou melhor
8-) Tem como generalizar ainda mais o código pro próximo npc?

*/

const NPC_DIALOG_VERSION =  "1.0.2"; 
const docNpcDialog:FoundryDocument = document as FoundryDocument;
let commonModule:CommonModule;
let dialogUtils:DialogUtils;
let npcDialog:NPCDialog ;


 
/*Hooks without use
Hooks.once("init", async () => {	
});

Hooks.once("ready", async () => { 
});
*/

const alreadyStarted:boolean = false;
  

//com whisper


Hooks.on("onReadyDialogUtils", async (data:any) => {

	Hooks.on('createChatMessage', (message: any) => {
		try {
			commonModule.debug("createChatMessage recebido...") ;  
		// Verifica se é um evento nosso
		if (message.flags?.['forgotten-realms']?.type === 'npcDialogOnTalk') {
			const data = message.flags['forgotten-realms'].payload;
			commonModule.debug('[NPC Portrait] Evento recebido dos jogadores:', data);
				
			NPCPortraitDialog.renderTalk(data);
		}
		} catch (e) {
			commonModule.error('[NPC Portrait] Erro ao processar evento:', e);
		}
	});


	commonModule =docNpcDialog.COMMON_MODULE;
	dialogUtils = docNpcDialog.COMMON_MODULE.DIALOG_UTILS as DialogUtils; 
	
	commonModule.logPrefix("FR:");
 
	commonModule.debug("NPCDialog inicalizando...") ;  
	
	Hooks.callAll("onInitNPCDialog", { });

	
	commonModule.NPC_DIALOG =   new NPCDialog();
	npcDialog =  commonModule.NPC_DIALOG;


	Hooks.on("getSceneControlButtons", async (controls:any) => { 
		 

		await npcDialog.addNPCButtons(controls);

	
		
		//com sockets nao funcionou
		/*
		(game.socket as any).on('forgotten-realms', (data: any) => {
			if (data.type === 'npcDialogOnTalk') {
				commonModule.debug("recebendo o evento:");
	 
				NPCPortraitDialog.renderTalk(data);
			}
		});*/


		//com hoooks nao funcionou

		/**	Hooks.on('npcDialogOnTalk',async  (data: any) => {

		commonModule.debug("npcDialogOnTalk received...") ;  
		NPCPortraitDialog.renderTalk(data);
		commonModule.debug("npcDialogOnTalk created...") ;  

	}); */
 
		commonModule.debug("NPCDialogButton loaded...") ;  
	
		Hooks.callAll("onLoadNPCDialogButton", { });

		
	});

	commonModule.debug("NPCDialogButton ready...") ;  

	Hooks.callAll("onReadyNPCDialog", { });
});

	


export class NPCDialog {

	public npcSelected:NPC|any;
	public activeNPC:NPC|any;
	public npcs:Map<string,NPC>=new Map();
	public buttonloaded:boolean=false;

	constructor() {
	}

	
	public async addNPCButtons (controls:any) {
			const gm = game.users.activeGM;
			if (gm && gm.id !== game.user.id) {
				commonModule.debug("NPC Buttons off");
				return;
			} 

			commonModule.debug("Criando botão dos NPCs especiais");
			controls.tokens.tools["npcButton"]={
				name:"npcButton",
				title: "NPCs Especiais",
				icon:  "fa-solid fa-web-awesome",
				button: true,
				toggle: false,
				onClick:() => {
					commonModule.debug("Botão de NPCs especiais pressionado");
					console.log("npcDialog",npcDialog);
					npcDialog.showNPCChooseDialog();
					commonModule.debug("Após abrir janela de NPCs especiais");
				}
			};

			commonModule.debug("Botão de NPC criado"); 
	}

	
	public async showNPCChooseDialog () {
		commonModule.debug("Botão NPCsespecial pressionado, mostrando diálogo...");

		const title = "Escolha um NPC Especial";
		const style =   `
					.select-npc  { padding: 20px; background: #222; color: #eee; }
					.select-npc button { margin: 5px; padding: 5px 10px; }
					`;
		const content =  `
					<div class="select-npc">
					<H1>Escolha uma opção:</H1> 
					</div>`;

		commonModule.debug("showNPCChooseDialog:10 before creating buttons");		
		
		const buttons =[
			//ex com parametros		dialogUtils.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
			dialogUtils.createButton("minsc","Minsc",true,"screen",npcDialog.callMinsc.bind(npcDialog)),
			dialogUtils.createButton("brizola","Brizola",true,"screen",npcDialog.callBrizola.bind(npcDialog)),
			dialogUtils.createButton("cancel","Cancel",false,"screen")
		];

		commonModule.debug("showNPCChooseDialog:20 after creating buttons");		

		dialogUtils.createDialog( title ,style,content,buttons,undefined,200,undefined, 400); 

		commonModule.debug("showNPCChooseDialog:30 after createDialog");		

	}


	public helpSubmit:string = `
			Submit need be a function:
			(action,label,defaultValue,callback)=>{
				return result => {
						if ( result === "minsc" ) console.log("User picked minsc options.");
						else console.log("User picked option:  ", rsult );
					}
			}
			`;	
   

   public async callMinsc (frmModule:Module)
	{
		commonModule.debug("Selecionado Minsc...");
		npcDialog.npcSelected = new Minsc();
			await npcDialog.npcSelected.startScreen();

	} 

    public async callBrizola (frmModule:Module)
	{
		commonModule.debug("Selecionado Brizola...");
		npcDialog.npcSelected = new Brizola();

		commonModule.debug("commonModule:",commonModule," npcDialog:",npcDialog);
		await npcDialog.npcSelected.startScreen();

	} 
}  
