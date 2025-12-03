
'use strict';


alert("TODO: Criar Git do Forgotten Commons");

/*
To see groupids, see the minsc.groupids.txt file

Ir alternando entre as duas tarefas abaixo:
TAREFAS - fazer 1 tarefa de feature e 1 de débito técnico, a próxima é débito técnico

IMPORTANTE : O próximo é FEATURES

=FEATURES=
1-) Criar git do script
1.1-) Forgotten 
1.2-) commons

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


class NPCDialogModule {

  constructor() {
	this.startVersion = "";
	this.npcSelected = null;  
	this.createDialog = game.dialogUtils.createDialog;
	this.createButton = game.dialogUtils.createButton;
	this.createSubmit = game.dialogUtils.createSubmit;

	game.npcDialog = this;

  }

 
   async addNPCButtons (controls) {
    	const gm = game.users.activeGM;
		if (gm && gm.id !== game.user.id) {
			game.npcDialog.debug("NPC Buttons off");
			return;
		} 

		game.npcDialog.debug("Criando botão dos NPCs especiais");
		controls.tokens.tools["npcButton"]={
			name:"npcButton",
			title: "NPCs Especiais",
			icon:  "fa-solid fa-web-awesome",
			button: true,
			toggle: false,
			onClick:() => {
				game.npcDialog.debug("Botão de NPCs especiais pressionado");
				game.npcDialog.showNPCChooseDialog();
				game.npcDialog.debug("Após abrir janela de NPCs especiais");
			}
		};

		game.npcDialog.debug("Botão de NPC criado"); 
  }

  
  async showNPCChooseDialog () {
	game.npcDialog.debug("Botão NPCsespecial pressionado, mostrando diálogo...");

	const title = "Escolha um NPC Especial";
	const style =   `
				.select-npc  { padding: 20px; background: #222; color: #eee; }
				.select-npc button { margin: 5px; padding: 5px 10px; }
				`;
	const content =  `
				<div class="select-npc">
				<H1>Escolha uma opção:</H1> 
				</div>`;

	game.npcDialog.debug("showNPCChooseDialog:10 before creating buttons");		
	
	const buttons =[
		//ex com parametros		game.npcDialog.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
		game.npcDialog.createButton("minsc","Minsc",true,"screen",game.npcDialog.callMinsc.bind(game.npcDialog)),
		game.npcDialog.createButton("cancel","Cancel",false,"screen")
	];

	game.npcDialog.debug("showNPCChooseDialog:20 after creating buttons");		

	game.npcDialog.createDialog( title ,style,content,buttons); 

	game.npcDialog.debug("showNPCChooseDialog:30 after createDialog");		

  }

   async callMinsc (frmModule)
	{
		game.npcDialog.debug("Selecionado Minsc...");
		game.npcDialog.npcSelected = new Minsc()
			await game.npcDialog.npcSelected.startScreen();

	}

	
	async registerNewSettings (){
		game.npcDialog.debug("registerNewSettings:10,module_name:",NPC_DIALOG_NAME,",version=",game.npcDialog.version);
		game.settings.register(NPC_DIALOG_NAME,NPC_DIALOG_PROPERTIES.version,{ 
		  scope: 'world',   
		  config: false,      
		  type: String,
		  default: game.npcDialog.version,
		});
		game.npcDialog.debug("registerNewSettings:20,module_name:",NPC_DIALOG_NAME,",version=",game.npcDialog.version);

	}

	async addInitChanges (){
		game.npcDialog.debug("addInitChanges:10.1");
		await game.npcDialog.registerNewSettings(); 
		game.npcDialog = game.npcDialog;
		game.npcDialog.debug("addInitChanges:20");
	}

	 

	async updateVersions  (instalatedVersion,nextVersionUpdated) {
		game.npcDialog.info("Atualizando da versão ",instalatedVersion," para ",nextVersionUpdated);
	 
		if(instalatedVersion!=nextVersionUpdated) 
		{ 
			game.npcDialog.warnAboutUpdate(nextVersionUpdated);

			//code...
			game.settings.set(NPC_DIALOG_NAME,NPC_DIALOG_PROPERTIES.version,nextVersionUpdated); 
			}

	  /*
	  nextVersionUpdated = "1.0.7";
	  if(instalatedVersion!=nextVersionUpdated) 
	  {
		warnAboutUpdate(nextVersionUpdated);
		
		//code...
		 
		instalatedVersion=nextVersionUpdated;
		game.settings.set(NPC_DIALOG_NAME,game.npcDialog.version,instalatedVersion); 
	  } 

	  */
	}

	async warnAboutUpdate  (lastVersion){
	  game.npcDialog.info(`Atualizando da versão ${lastVersion} para ${NPC_DIALOG_VERSION}`);
	}

	async  getVersion  () {
		try{
			const activeVersion = await game.settings.get(NPC_DIALOG_NAME, NPC_DIALOG_PROPERTIES.version);  
 	  		return activeVersion
		}finally{
			return "1.0.0";
		}
	}

   	async  startModule  () {
		await game.npcDialog.addInitChanges();	
	}

	
	async endModuleAfterUpdate  (){
		
		const activeVersion = await game.settings.get(NPC_DIALOG_NAME, NPC_DIALOG_PROPERTIES.version);  
		if(activeVersion!=NPC_DIALOG_VERSION) {
			game.npcDialog.error("NPCDialogModule não está instalado ou não foi iniciado corretamente. Version installed:" + activeVersion + " expected " + NPC_DIALOG_VERSION);
			return;
		}
	
		game.npcDialog.info(`NPCDialog  ${game.npcDialog.version} carregado com sucesso!`); 
	}
 
	debug  (...args)  {
		if(!DEBUG_NPC_DIALOG)
		{
			return;
		}
		console.log("NPCDialog:",...args);
	}

	info  (...args)  {
		console.log("NPCDialog:",...args);
	}

	error  (...args){
		console.error("NPCDialog:",...args);
	}


	 warn  (...args) {
		console.warn("NPCDialog:",...args);
	}
 
}  
 
let __npcDialog = null;

Hooks.once("init", async () => {	
	//here, all scripts already loaded
	__npcDialog = new NPCDialogModule();

	__npcDialog.info("NPCDialogModule inicalizando...") ; 
	game.npcDialog = __npcDialog;
	await game.npcDialog.startModule(); 
});

Hooks.once("ready", async () => { 

	//ATUALIZAÇÃO DE VERSÃO - settings não é carregado no init e sim depois, pouco antes de chegar no ready
	let instalatedVersion  = game.settings.get(NPC_DIALOG_NAME, NPC_DIALOG_PROPERTIES.version);

	instalatedVersion=(instalatedVersion)?instalatedVersion:"1.0.0";

	game.npcDialog.info("NPCDialogModule v",instalatedVersion," detectada.") ; 
 
	if (instalatedVersion == NPC_DIALOG_VERSION) {
		game.npcDialog.info("NPCDialogModule v",instalatedVersion," carregado com sucesso!") ;
		return;
	}

	await game.npcDialog.updateVersions(instalatedVersion,NPC_DIALOG_VERSION);

	//FIM DE ATUALIZAÇÃO DE VERSÃO
	
	if(!await game.npcDialog.endModuleAfterUpdate()){
		game.npcDialog.error("NPCDialogModule não finalizou corretamente ver logs anteriores.");
		return;
	}
});

Hooks.on("getSceneControlButtons", async (controls) => {
	await game.npcDialog.addNPCButtons(controls);
});

