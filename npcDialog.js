
'use strict';


//alert("TODO:  Converter em typescript o arquivo npcDialog");

/*
To see groupids, see the minsc.groupids.txt file 

=Débito==
1-) Converter em typescript o arquivo npcDialog
2-) Remover o export {} no final do arquivo, isto esta gerando erros
2.1-) Tentar resolver via IA
2.2-) Se não conseguir, fazer manualmente via um script
3-) Resolver os últimos 3 grupos que carecem de serem usados, tem som? Se sim porque não tem opção pra eles?
4-) Tentar gerar uma classe base para o Minsc
5-) Criar o rosto dele e uma tela de chat com a fala pros jogadores em vez de só mandar pro chat
6-) Tentar enviar pro chat com o rosto e nome dele, se não cancelar o envio pro chat.
7-) Criar as falas do Brizola, um segundo personagem
8-) Corrigir o warning:
accessing the global "AudioHelper" which is now namespaced under foundry.audio.AudioHelper
Deprecated since Version 12
Backwards-compatible support will be removed in Version 14
  at Minsc.speak (minsc.js:836:3)
*/

const DEBUG_NPC_DIALOG = true;
const NPC_DIALOG_PROPERTIES	= { version: "version" };
const NPC_DIALOG_VERSION =  "1.0.2";
const NPC_DIALOG_NAME = "npc-dialog-module";




class NPCDialog {

  constructor() {
	this.startVersion = "";
	this.npcSelected = null;  
	const dialogUtils = document.COMMON_MODULE.DIALOG_UTILS;

	this.createDialog = dialogUtils.createDialog;
	this.createButton = dialogUtils.createButton;
	this.createSubmit = dialogUtils.createSubmit;
	
 

  }

 
   async addNPCButtons (controls) {
    	const gm = game.users.activeGM;
		if (gm && gm.id !== game.user.id) {
			document.COMMON_MODULE.debug("NPC Buttons off");
			return;
		} 

		document.COMMON_MODULE.debug("Criando botão dos NPCs especiais");
		controls.tokens.tools["npcButton"]={
			name:"npcButton",
			title: "NPCs Especiais",
			icon:  "fa-solid fa-web-awesome",
			button: true,
			toggle: false,
			onClick:() => {
				document.COMMON_MODULE.debug("Botão de NPCs especiais pressionado");
				document.COMMON_MODULE.NPC_DIALOG.showNPCChooseDialog();
				document.COMMON_MODULE.debug("Após abrir janela de NPCs especiais");
			}
		};

		document.COMMON_MODULE.debug("Botão de NPC criado"); 
  }

  
  async showNPCChooseDialog () {
	document.COMMON_MODULE.debug("Botão NPCsespecial pressionado, mostrando diálogo...");

	const title = "Escolha um NPC Especial";
	const style =   `
				.select-npc  { padding: 20px; background: #222; color: #eee; }
				.select-npc button { margin: 5px; padding: 5px 10px; }
				`;
	const content =  `
				<div class="select-npc">
				<H1>Escolha uma opção:</H1> 
				</div>`;

	document.COMMON_MODULE.debug("showNPCChooseDialog:10 before creating buttons");		
	
	const buttons =[
		//ex com parametros		document.COMMON_MODULE.NPC_DIALOG.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
		document.COMMON_MODULE.NPC_DIALOG.createButton("minsc","Minsc",true,"screen",document.COMMON_MODULE.NPC_DIALOG.callMinsc.bind(document.COMMON_MODULE.NPC_DIALOG)),
		document.COMMON_MODULE.NPC_DIALOG.createButton("cancel","Cancel",false,"screen")
	];

	document.COMMON_MODULE.debug("showNPCChooseDialog:20 after creating buttons");		

	document.COMMON_MODULE.NPC_DIALOG.createDialog( title ,style,content,buttons); 

	document.COMMON_MODULE.debug("showNPCChooseDialog:30 after createDialog");		

  }

   async callMinsc (frmModule)
	{
		document.COMMON_MODULE.debug("Selecionado Minsc...");
		document.COMMON_MODULE.NPC_DIALOG.npcSelected = new Minsc();
			await document.COMMON_MODULE.NPC_DIALOG.npcSelected.startScreen();

	}
  
	async warnAboutUpdate  (lastVersion){
	  document.COMMON_MODULE.info(`Atualizando da versão ${lastVersion} para ${NPC_DIALOG_VERSION}`);
	}
 
 

	
	async endModuleAfterUpdate  (){
		
		const activeVersion = await game.settings.get(NPC_DIALOG_NAME, NPC_DIALOG_PROPERTIES.version);  
		if(activeVersion!=NPC_DIALOG_VERSION) {
			document.COMMON_MODULE.error("NPCDialog não está instalado ou não foi iniciado corretamente. Version installed:" + activeVersion + " expected " + NPC_DIALOG_VERSION);
			return;
		}
	
		document.COMMON_MODULE.info(`NPCDialog  ${document.COMMON_MODULE.NPC_DIALOG.version} carregado com sucesso!`); 
	}
 
	 
 
}  

 

Hooks.once("init", async () => {	

	
});

Hooks.once("ready", async () => { 
	
	if(!await document.COMMON_MODULE.NPC_DIALOG.endModuleAfterUpdate()){
		document.COMMON_MODULE.error("NPCDialog não finalizou corretamente ver logs anteriores.");
		return;
	}
});


 


Hooks.on("onInitDialogUtils", async (controls) => {
	document.COMMON_MODULE.logPrefix("FR:");
 

	document.COMMON_MODULE.NPC_DIALOG =  new NPCDialog();

	
	document.COMMON_MODULE.info("NPCDialog inicalizando...") ;  
	  
});



Hooks.on("getSceneControlButtons", async (controls) => { 
	await document.COMMON_MODULE.NPC_DIALOG.addNPCButtons(controls);
});

