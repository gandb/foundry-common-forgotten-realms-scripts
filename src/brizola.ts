import {NPCDialog} from "./npcDialog";
import {NPC} from "./npc";
import {brizolaLines,brizolaGroupToLines,Groups} from "./brizola-lines";
 
const docNPC = document as FoundryDocument;

const commonModule:CommonModule = docNPC.COMMON_MODULE;

let dialogUtils:DialogUtils ;

let npcDialog:NPCDialog = commonModule.NPC_DIALOG;

export class Brizola extends NPC  {
   

	groupToLines:Map<string,string>=brizolaGroupToLines;
	lines:any=brizolaLines;

	constructor() { 
		super("brizola","modules/common-assets/images/npcs/humanos/brizola.webp"); 

    docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC = this;   

    npcDialog = docNPC.COMMON_MODULE.NPC_DIALOG;

		npcDialog.activeNPC = this;

		if(!npcDialog.npcs)
		{
			npcDialog.npcs = new Map();
		}

		npcDialog.npcs.set("brizola",this);
	}
 

	public async startScreen () {
      dialogUtils = docNPC.COMMON_MODULE.DIALOG_UTILS as DialogUtils;

			npcDialog.activeNPC.screens.push({name:"start-screen",callback:npcDialog.activeNPC.startScreen,type:"screen"} );

			commonModule.debug("docbrizola.COMMON_MODULE.NPC_DIALOG.activeNPC.screens inicial: ",npcDialog.activeNPC.screens	);

			commonModule.debug("startScreen:10,char_name:",npcDialog.activeNPC.name); 

			this.actor = game.actors.getName("Leôncio Brizola");
			if (!npcDialog.activeNPC.actor) return ui.notifications.error("brizola não encontrado!");

			const title = "Brizola: Escolha o que fazer";
			 
			const content = `
				<div class="select-action">
				<H1>Escolha uma ação:</H1> `;

			commonModule.debug("startScreen:20. criando botoes"); 
	    const callback: any = npcDialog.activeNPC.createcallbackSend;

			const buttons = [
          dialogUtils.createButton("brizola-about-enviroment","Sobre o ambiente",true,"screen",async ()=> npcDialog.activeNPC.aboutEnviroment() ),
					dialogUtils.createButton("brizola-about-weather","Sobre o clima",true,"screen",async ()=> npcDialog.activeNPC.aboutWeather() ),
          dialogUtils.createButton("brizola-about-combat","Em combate",true,"screen",async ()=> npcDialog.activeNPC.aboutCombat() ),
          dialogUtils.createButton("brizola-social-interaction","Interagindo Socialmente",true,"screen",async ()=> npcDialog.activeNPC.socialInteraction() ),
          dialogUtils.createButton("brizola-about-party","Sobre o grupo",true,"screen",async ()=> npcDialog.activeNPC.aboutParty() ),
          dialogUtils.createButton("brizola-exhausted", "Exaustão / Sono", true, "action", callback(Groups.EXHAUSTED_AND_SLEEPY)),
          dialogUtils.createButton("brizola-weight", "Sobrecarga de Peso", true, "action", callback(Groups.EXCESS_WEIGHT)),
          dialogUtils.createButton("brizola-item", "Achou Item Interessante", true, "action", callback(Groups.FIND_SOME_PECULIAR_ITEM)),
        ];

			commonModule.debug("startScreen:30 depois de criado botoes"); 
  
			npcDialog.activeNPC.createDialog( title ,content,buttons); 

			commonModule.debug("startScreen:40 depois de criado dialogo"); 

	}
 

  
 	public createcallbackSend(group:number){
    return async ()=>{
		commonModule.debug("callback em createcallbackSend acionada :group",group); 
    	npcDialog.activeNPC.groups.add(group);
		commonModule.debug("callback em createcallbackSend depois antes de enviar :npcDialog.activeNPC.groups.",npcDialog.activeNPC.groups); 
		  await npcDialog.activeNPC.send(); 
    };
	}

  public async aboutEnviroment () {	
	
		const title = "brizola Entrando em: Escolha a situação";

		const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
			
		commonModule.debug("enterInAPlace:10,before creating buttons"); 

    const callback: any = npcDialog.activeNPC.createcallbackSend;

		const buttons =[
				//ex com parametros		docbrizola.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("brizola","brizola",true,(event, button, dialog) => npcDialog.callbrizola()),
				dialogUtils.createButton("brizola-numa-cidade","Numa Cidade",true,"action", callback(Groups.ENTERING_CITY )  ),
				dialogUtils.createButton("brizola-na-floresta","Na Floresta",true,"action", callback(Groups.ENTERING_FOREST) ),
				dialogUtils.createButton("brizola-dark-place","Entrando num lugar escuro e assustador",true,"action",callback(Groups.ENTERING_DARK_PLACE) ), 
				dialogUtils.createButton("brizola-glommy-place","Entrando num lugar iluminado mas assustador",true,"action",callback(Groups.ENTERING_DARK_PLACE) ), 
				dialogUtils.createButton("brizola-sacred-place","Entrando num lugar sagrado",true,"action",callback(Groups.ENTERING_SACRED_PLACE) )
			];

		commonModule.debug("enterInAPlace:10,after creating buttons"); 

		npcDialog.activeNPC.createDialog( title ,content,buttons);

		commonModule.debug("enterInAPlace:10,after creating dialogs"); 
	} 

  public async aboutWeather () {	
	
		const title = "brizola Entrando em: Escolha a situação";
		
			
		
		const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
			
		commonModule.debug("enterInAPlace:10,before creating buttons"); 
     const callback: any = npcDialog.activeNPC.createcallbackSend;

		const buttons =[
			    // --- CLIMA ---
          dialogUtils.createButton("brizola-sunny", "Tempo Ensolarado", true, "action",callback(Groups.SUNNY) ),
          dialogUtils.createButton("brizola-cloudy", "Tempo Nublado", true, "action",callback(Groups.CLOUDY) ),
          dialogUtils.createButton("brizola-raining", "Chovendo", true, "action",callback(Groups.RAINING) ),
          dialogUtils.createButton("brizola-campfire", "Na Fogueira", true, "action",callback(Groups.BY_CAMPFIRE) )        
			];
 

		commonModule.debug("enterInAPlace:10,after creating buttons"); 

		npcDialog.activeNPC.createDialog( title ,content,buttons);

		commonModule.debug("enterInAPlace:10,after creating dialogs"); 
	} 

  public async aboutCombat () {	
	
		const title = "brizola Entrando em Combate: Escolha a situação";
		
			
		
		const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
			
		commonModule.debug("enterInAPlace:10,before creating buttons"); 
     const callback: any = npcDialog.activeNPC.createcallbackSend;

     const buttons = [
      // --- COMBATE E SAÚDE ---
	  	dialogUtils.createButton("brizola-em-batalha","Entrando em Batalha",true,"action",  callback(Groups.ENTERING_BATTLE) ),
      dialogUtils.createButton("brizola-hurt", "Levando Dano", true, "action", callback(Groups.GETTING_HURT)),
      dialogUtils.createButton("brizola-health-50", "Vida abaixo de 50%", true, "action", callback(Groups.BELOW_FIFTY_PERCENT_HEALTH)),
      dialogUtils.createButton("brizola-health-25", "Vida abaixo de 25%", true, "action", callback(Groups.BELOW_TWENTY_FIVE_PERCENT_HEALTH)),
      dialogUtils.createButton("brizola-friend-hurt", "Amigo Ferido", true, "action", callback(Groups.FRIEND_GETTING_HURT)),
      dialogUtils.createButton("brizola-friend-fall", "Amigo Caiu", true, "action", callback(Groups.FRIEND_FALLING_IN_BATTLE)),
      dialogUtils.createButton("brizola-giant-enemy", "Inimigo Gigante", true, "action", callback(Groups.FACING_GIANT_ENEMY)),
      dialogUtils.createButton("brizola-kill-enemy", "Matou Inimigo", true, "action", callback(Groups.KILLING_ENEMY)),
      dialogUtils.createButton("brizola-miss-attack", "Errou Golpe", true, "action", callback(Groups.MISSING_ATTACK)),
      dialogUtils.createButton("brizola-immunity", "Inimigo Imune", true, "action", callback(Groups.ENEMY_WITH_IMMUNITY))
  ];
  

		commonModule.debug("enterInAPlace:10,after creating buttons"); 

		npcDialog.activeNPC.createDialog( title ,content,buttons);

		commonModule.debug("enterInAPlace:10,after creating dialogs"); 
	} 

  public async socialInteraction () {	
	
		const title = "brizola Interagindo Socialmente: Escolha a situação";
		
			
		const content = `
        <div class="select-action">
        <H1>Escolha uma ação:</H1> `;
        
      commonModule.debug("enterInAPlace:10,before creating buttons"); 
      const callback: any = npcDialog.activeNPC.createcallbackSend;

      const buttons = [
        // --- COMBATE E SAÚDE --- 
        dialogUtils.createButton("brizola-meeting", "Conhecendo Alguém", true, "action", callback(Groups.MEETING_SOMEONE)),
        dialogUtils.createButton("brizola-tarastia", "Quem é Tarástia?", true, "action", callback(Groups.EXPLAINING_TARASTIA)),
        dialogUtils.createButton("brizola-dictionary", "Ombú, Bugio e Cusco", true, "action", callback(Groups.EXPLAINING_OMBU_BUGIO_CUSCO)),
        dialogUtils.createButton("brizola-minsc-boo", "Interagindo com Minsc & Boo", true, "action", callback(Groups.INTERACTING_WITH_MINSC_AND_BOO)),
        dialogUtils.createButton("brizola-mordenkainen", "Interagindo com Mordenkainen", true, "action", callback(Groups.INTERACTING_WITH_MORDENKAINEN))
    ];

		commonModule.debug("enterInAPlace:10,after creating buttons"); 

		npcDialog.activeNPC.createDialog( title ,content,buttons);

		commonModule.debug("enterInAPlace:10,after creating dialogs"); 
	} 

  public async aboutParty () {	
	
		const title = "brizola Interagindo Socialmente: Escolha a situação";
		
		const content = `
        <div class="select-action">
        <H1>Escolha uma ação:</H1> `;
        
    commonModule.debug("enterInAPlace:10,before creating buttons"); 
    const callback: any = npcDialog.activeNPC.createcallbackSend;

    const buttons = [
        dialogUtils.createButton("brizola-meeting", "Conhecendo Alguém", true, "action", callback(Groups.COMPLAINING_ABOUT_GROUP)),
        dialogUtils.createButton("brizola-tarastia", "Quem é Tarástia?", true, "action", callback(Groups.BEING_DECEIVED_BY_GROUP)),
        dialogUtils.createButton("brizola-dictionary", "Ombú, Bugio e Cusco", true, "action", callback(Groups.LEAVING_GROUP)) 
  
    ];

		commonModule.debug("enterInAPlace:10,after creating buttons"); 

		npcDialog.activeNPC.createDialog( title ,content,buttons);

		commonModule.debug("enterInAPlace:10,after creating dialogs"); 
	} 

    
}
