import {Minsc} from "./minsc";
import {NPC} from "./npc";

'use strict';


//alert("TODO:  Converter em typescript o arquivo npcDialog");

/*
To see groupids, see the minsc.groupids.txt file 

=Débito==
1-) Resolver os últimos 3 grupos que carecem de serem usados, tem som? Se sim porque não tem opção pra eles?
2-) Tentar gerar uma classe base para o Minsc
3-) Criar o rosto dele e uma tela de chat com a fala pros jogadores em vez de só mandar pro chat
4-) Tentar enviar pro chat com o rosto e nome dele, se não cancelar o envio pro chat.
5-) Criar as falas do Brizola, um segundo personagem
6-) Corrigir o warning:
accessing the global "AudioHelper" which is now namespaced under foundry.audio.AudioHelper
Deprecated since Version 12
Backwards-compatible support will be removed in Version 14
  at Minsc.speak (minsc.js:836:3)
*/

const DEBUG_NPC_DIALOG = true;
const NPC_DIALOG_PROPERTIES	= { version: "version" };
const NPC_DIALOG_VERSION =  "1.0.2";
const NPC_DIALOG_NAME = "npc-dialog-module";
 
const docNpcDialog:FoundryDocument = document as FoundryDocument;



export class NPCDialog {

	npcSelected:NPC|any;
	activeNPC:NPC|any;
	npcs:Map<string,NPC>=new Map();

  constructor() {
	docNpcDialog.COMMON_MODULE.NPC_DIALOG = this;
  }

 
   async addNPCButtons (controls:any) {
    	const gm = game.users.activeGM;
		if (gm && gm.id !== game.user.id) {
			docNpcDialog.COMMON_MODULE.debug("NPC Buttons off");
			return;
		} 

		docNpcDialog.COMMON_MODULE.debug("Criando botão dos NPCs especiais");
		controls.tokens.tools["npcButton"]={
			name:"npcButton",
			title: "NPCs Especiais",
			icon:  "fa-solid fa-web-awesome",
			button: true,
			toggle: false,
			onClick:() => {
				docNpcDialog.COMMON_MODULE.debug("Botão de NPCs especiais pressionado");
				docNpcDialog.COMMON_MODULE.NPC_DIALOG.showNPCChooseDialog();
				docNpcDialog.COMMON_MODULE.debug("Após abrir janela de NPCs especiais");
			}
		};

		docNpcDialog.COMMON_MODULE.debug("Botão de NPC criado"); 
  }

  
  async showNPCChooseDialog () {
	docNpcDialog.COMMON_MODULE.debug("Botão NPCsespecial pressionado, mostrando diálogo...");

	const title = "Escolha um NPC Especial";
	const style =   `
				.select-npc  { padding: 20px; background: #222; color: #eee; }
				.select-npc button { margin: 5px; padding: 5px 10px; }
				`;
	const content =  `
				<div class="select-npc">
				<H1>Escolha uma opção:</H1> 
				</div>`;

	docNpcDialog.COMMON_MODULE.debug("showNPCChooseDialog:10 before creating buttons");		
	
	const buttons =[
		//ex com parametros		docNpcDialog.COMMON_MODULE.DIALOG_UTILS.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
		docNpcDialog.COMMON_MODULE.DIALOG_UTILS.createButton("minsc","Minsc",true,"screen",docNpcDialog.COMMON_MODULE.NPC_DIALOG.callMinsc.bind(docNpcDialog.COMMON_MODULE.NPC_DIALOG)),
		docNpcDialog.COMMON_MODULE.DIALOG_UTILS.createButton("cancel","Cancel",false,"screen")
	];

	docNpcDialog.COMMON_MODULE.debug("showNPCChooseDialog:20 after creating buttons");		

	docNpcDialog.COMMON_MODULE.DIALOG_UTILS.createDialog( title ,style,content,buttons); 

	docNpcDialog.COMMON_MODULE.debug("showNPCChooseDialog:30 after createDialog");		

  }

   async callMinsc (frmModule:Module)
	{
		docNpcDialog.COMMON_MODULE.debug("Selecionado Minsc...");
		docNpcDialog.COMMON_MODULE.NPC_DIALOG.npcSelected = new Minsc();
			await docNpcDialog.COMMON_MODULE.NPC_DIALOG.npcSelected.startScreen();

	}
  
	async warnAboutUpdate  (lastVersion:any){
	  docNpcDialog.COMMON_MODULE.info(`Atualizando da versão ${lastVersion} para ${NPC_DIALOG_VERSION}`);
	}
 
 
 
	 
 
}  

 
/*Hooks without use
Hooks.once("init", async () => {	
});

Hooks.once("ready", async () => { 
});
*/


Hooks.on("onInitDialogUtils", async (controls) => {
	docNpcDialog.COMMON_MODULE.logPrefix("FR:");
 

	docNpcDialog.COMMON_MODULE.NPC_DIALOG =  new NPCDialog();

	
	docNpcDialog.COMMON_MODULE.info("NPCDialog inicalizando...") ;  
	  
});


Hooks.on("getSceneControlButtons", async (controls) => { 
	await docNpcDialog.COMMON_MODULE.NPC_DIALOG.addNPCButtons(controls);
});

