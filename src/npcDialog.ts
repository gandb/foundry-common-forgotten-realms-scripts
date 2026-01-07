import { Brizola } from "./brizola";
import {Minsc} from "./minsc";
import {NPC} from "./npc";
import { NPCPortraitDialog } from "./npcTalkDialog";

'use strict';

 

/*
To see groupids, see the minsc.groupids.txt file 

==Primeiro os erros==

Erros
1-)mins ao durante a noite:
mensagens erradas e fora de contexto depois da primeira mensagem
2-)-brizola nao funciona

=Débito==
1-) Criar as falas do Brizola, um segundo personagem (brizola.ts)
	1.1-) Texto - OK
	1.2-) Grupos
		1.2.1) Constantes - OK
		1.2.2) Falas por grupo - OK
	1.3-) Telas - OK
	1.4-) Testar
	1.5 -) Sons e testar sons
2-) Corrigir o warning:
accessing the global "AudioHelper" which is now namespaced under foundry.audio.AudioHelper
Deprecated since Version 12
Backwards-compatible support will be removed in Version 14
  at Minsc.speak (minsc.js:836:3)
3-) Criar componente pra tornar genérico envio de eventos entre GM e jogadores, e no chat aparecer Evento X recebido, ignore esta mensagem
4-) Remover do chat mensagens de eventos
5-) Nos npcs no lugar onde tem "action" , "screen", "screen-context", criar um enum pra isto com a documentação do que significa cada um
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

		dialogUtils.createDialog( title ,style,content,buttons); 

		commonModule.debug("showNPCChooseDialog:30 after createDialog");		

	}

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
