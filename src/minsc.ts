import {NPCDialog} from "./npcDialog";
import {NPC} from "./npc";

const minscLines:any = { 1:"Fique parado e entregue-se, para que meu hamster possa dar uma boa olhada em você!",
2:"Não, não se desespere! Eu vou te inspirar avançando com tudo!",
3:"Preciso de cura para continuar lutando!",
4:"Por favor, cuide de... Boo...",
5:"Boo gosta da florestas! E eu também. Há muito o que roer aqui.",
6:"Tanta gente com pessoas tão pequenas! Abram caminho para Minsc e Boo, pequenos!",
7:"Um covil de maldade fétida! Na verdade, essa maldade não é tão fedida quanto costuma ser. Mesmo assim viemos por você, maldade bem lavada!",
8:"Ahh, eu prefiro a luz do dia. A maldade merece ver a justiça que distribuo!",
9:"Boo dorme: embora continuemos em frente.",
10:"Aham?",
11:"Sim?",
12:"Você quer o Boo?",
13:"O quê?",
14:"Hein?",
15:"Problemas?",
16:"Primeiro vem a espada!",
17:"Menos conversa, mais luta!",
18:"Sim!",
19:"Quando o perigo chama, Minsc responde. Primeiro vem a espada !",
20:"Eu dou chutes em traseiros ruins, e não posso mentir sobre isso.",
21:"Só existe um BOO! Ha! Não aceita substitutos.",
22:"Abram caminho, maldade! Estou armado até os dentes e com um hamster!",
23:"Caiu como uma árvore poderosa!",
24:"Dynaheir! Eu falhei com você!",
25:"Isso doi, não doi, maldade ?",
26:"Um golpe e um erro!",
27:"Sem efeito? Preciso de uma espada maior.",
28:"Embora Minsc seja forte como poucos, ele não pode carregar tudo. E ele deve fazer espaço para Boo.",
29:"Minsc não tem certeza de como ele fez isto.",
30:"Ninguém me verá, embora o meu grito de batalha possa me entregar.",
31:"Espadas não falham, mas feitiços falham. Como este falhou.",
32:"O astuto Minsc prepara uma armadilha para a maldade entrar! Venham por aqui, maldade!",
33:"AHHHH! Minsc será livre! Esses laços não segurarão minha fúria! Traseiros serão generosamente chutados!",
34:"Irmandade, aventura e aço contra aço. A matéria das lendas e dos heróis! Certo, Boo?",
35:"Sim, Boo, eu concordo. Este grupo merece um puxão de moral.",
36:"Se eu continuar com isso, eu nunca mais poderei olhar Boo nos olhos. Escolha com cuidado; não deixarei isso acontecer e você não vai querer ter Minsc como inimigo, vai ? ",
37:"Você ultrapassou a linha da maldade! Prove a justiça do hamster!",
38:"Magia é impressionante, mas agora Minsc lidera! Espadas para todos!",
39:"Preciso descansar, estou com uma péssima irritação por causa da armadura.",
40:"Meu hamster está inquieto! Se somos aventureiros, vamos aventurar!",
41:"Vá direto para os olhos, Boo. VÁ PARA OLHOS! RrraaaAAGHGHH!",
42:"Preciso de ajuda em breve... para que meu hamster não fique órfão.",
43:"Boo gosta da floresta.",
44:"Maldade a cada esquina. Cuidado para não pisar em nenhuma.",
45:"Ahh, noite. Boa para se aproximar da maldade.",
46:"Quem quer um pouco?",
47:"Vocês apontam, eu soco.",
48:"Menos conversa, mais luta!",
49:"Chutando traseiros por uma boa causa!",
50:"Quem não chora não leva chute.",
51:"Armadura completa e carregando aço afiado!",
52:"Engane-me uma vez, vergonha sua; engane-me duas, cuidado! Eu sou enorme!",
53:"Quando a coisa ficar difícil, sigam meu roedor.",
54:"Há segurança em números, e eu sou dois ou três, pelo menos.",
55:"Será como você quer. É meu dever solene garantir o que você precisa.",
56:"Toque em algo que eu protejo, e para sempre você responderá ao chamado da natureza com uma boa cor vermelha na urina!",
57:"Continue tocando, bardo! É música doce para meu amigo peludo.",
58:"Se você viaja com Minsc, você se mantém na linha! Não tolerarei vagabundos enquanto estou ocupado sendo um herói!",
59:"Boo não gosta do seu jeito. Ficarei longe de você!",
60:"Escolha seus amigos sabiamente. Nem todos são tão confiáveis quanto Minsc e Boo.",
61:"Não há lugar melhor para morrer do que no campo de batalha!",
62:"Sou de poucas palavras e menos hesitações! O aviso já passou, e agora você vai morrer!",
63:"Suas palavras são tão afiadas quanto minha lâmina, embora não sejam nem metade tão brilhantes. Oooo, brilhante adoro coisas com brilho.",
64:"Não me ofendo com seus comentários. Você simplesmente não entende os laços que tenho com Boo.",
65:"Eh? Onde você nos trouxe, Boo? Estou devidamente impressionado com seu espetáculo de grandes poderes, mas um pequeno aviso teria sido bom. Não importa! Onde quer que o mal pise, Minsc pisa mais alto!",
66:"Ooo! Olhe quem você encontrou, Boo, com seu infalível senso de direção de hamster! É nosso bom amigo, <CHARNAME_TARGET_01>! Uma reunião de heróis! Que todo o mal trema diante de nós como gelatina rançosa, ha!",
67:"Todos nós somos heróis, você, Boo e eu! Hamsters e rangers em toda parte, festejem!",
68:"Esse comportamento não pode continuar! Sinta o olhar ardente do meu hamster e mude suas maneiras!",
69:"Isso não está certo. Mude nosso curso ou terei que aplicar um golpe considerável de virtude em você!",
70:"Boo só suporta até certo ponto!",
71:"Minsc liderará com lâmina e chute ! Boo que cuida dos detalhes.",
72:"Precisamos descansar em breve. Boo está ficando inquieto.",
73:"Boo precisa se exercitar",
74:"Sinta o golpe da justiça!",
75:"Divertido demais! Hehe. Certo, Boo?",
76:"Preciso de ajuda logo. Boo é muito jovem para ter que me vingar.",
77:"Você sabe... acho que a floresta gosta de Boo.",
78:"Cidades sempre estão repletas de mal e decadência. Vamos dar uma boa sacudida e ver o que cai!",
79:"Uma toca de mal fedido. Cubra o nariz, Boo. Não deixaremos nenhuma fenda sem investigar!",
80:"Coisas estranhas se movem à noite, mas nenhuma se move mais do que Minsc!",
81:"Espadas, não palavras!",
82:"Minsc e Boo estão prontos.",
83:"Cada hamster tem seu dia.",
84:"Armado, afiado e pronto para agir.",
85:"Boo diz, \"O quê?!\"",
86:"Onde Minsc vai, o mal se afasta.",
87:"Salte pra cima da minha espada enquanto pode, mal. Não serei tão gentil!",
88:"Viva pela espada, viva por muito tempo!",
89:"Afaste-se para a justiça!",
90:"Vê a batalha, Boo? Corra, Boo, corra!",
91:"Dê passagem, vilania! Herói a caminho!",
92:"Quanto maiores, mais forte eu bato!",
93:"Não ensine meu hamster a rezar a missa!",
94:"Ah não!",
95:"Ah, isso não está certo!",
96:"Virei para proteger Boo e perdi meu feitiço. NÃO estou arrependido.",
97:"Tive que largar o que você me deu. Tenho apenas dois braços e não tenho mais espaço.",
98:"Aiii!",
99:"Arght!",
100:"Uiii!" ,
101:"Boo não é um rato, ele é uma miniatura de um Hamster Espacial Gigante. Não o ofenda! Para que ele não roa suas orelhas enquanto você dorme!" ,
102:"Ohh, você é esperto mesmo! Agora estou entendendo."  
};

const minscGroupToLines:Map<string,string> = new Map([ 
  ["1","1"],
  ["2","2;16;17;19;22;38;41;46;47;48;49;50;61;62;74;81;87;89;90;91;20;54"],
  ["3","42;76;98;99;100"],
  ["4","5;43;77"],
  ["5","6;78;44"],
  ["6","7;44;79"],
  ["7","12"],
  ["8","85;13;10;11"],
  ["9","15;56"],
  ["10","92"],
  ["11","18;55"],
  ["12","70;95;94"],
  ["13","23"],
  ["14","25;22;38;46;49;50;74"],
  ["15","26"], 
  ["17","28;97"],
  ["18","29"],
  ["19","32"],
  ["20","33"],
  ["21","39;72"],
  ["24","8"],
  ["23","80"],
  ["25","51"],
  ["26","52"],
  ["27","94"],
  ["28","57"],
  ["29","58"],
  ["30","59"],
  ["31","63;102"], 
  ["33","82;84"],
  ["34","93"],
  ["35","96"],
  ["38","10;11;14"],
  ["41","32"],
  ["37","9;20;21;24;34;40;53;60;65;67;71;73;75;83;86;88"],
  ["1;32","66"],
  ["2;3;36","3;4"],
  ["2;16","27"],
  ["2;39","30"],
  ["2;10","92"], 
  ["3;36","3;4"],
  ["2;3","3;4;42;76"],
  ["2;3;22","42;76"],
  ["2;3;36","3;4"],
  ["3;22","42;76"], 
  ["12;40","31"],
  ["12;42","35;36;68;69;24"],
  ["12;44","37"],
  ["12;47","64;101"]
]);
 

const FIND_SOMEONE:string = "1";
const ENTER_IN_BATTLE:string = "2";
const GETTING_HURT:string = "3";
const IN_FOREST:string = "4";
const IN_CITY:string = "5";
const IN_DUNGEON:string = "6";
const IF_SOMEONE_ASKS_TO_CATCH_THE_BOO:string = "7";
const I_DONT_UNDERSTAND_SOMETHING:string = "8";
const IF_SOMEONE_HURTS_A_GROUP_MEMBER:string = "9"; 
const BIG_ENEMY:string = "10";
const AGREEING_WITH_THE_GROUP:string = "11";
const COMPLAINING_ABOUT_THE_GROUP:string = "12";
const KILLING_AN_ENEMY:string = "13";
const LANDING_A_HIT:string = "14";
const MISSING_THE_HIT:string = "15";
const ENEMY_WITH_IMMUNITY:string = "16";
const OVERWEIGHT:string = "17";
const AFTER_SOMEONE_CASTS_MAGIC = "18";
const SETTING_AN_AMBUSH:string = "19";
const BREAKING_FREE_FROM_MAGIC:string = "20";
const WITH_EXHAUSTION:string= "21";
const HALF_LIFE:string = "22";
const DURING_NIGHT:string = "23";
const DURING_DAY:string = "24";
const FULL_ARMOR:string= "25";
const ON_BEING_DECEIVED:string = "26"; 
const TO_THE_BARD:string = "28";
const JOINING_THE_GROUP:string = "29";
const LEAVING_THE_GROUP:string = "30";
const PRAISING_THE_SPEECH:string = "31";
const FIND_SOMEONE_FAMILIAR:string = "32";
const I_AM_READY:string = "33";
const LOSING_INVISIBILITY_MAGIC:string = "35";
const ONE_QUARTER_LIFE:string = "36"; 
const NOT_AGREEING_WITH_SOMETHING:string = "38";
const STEALTHY:string = "39";
const AFTER_MAGIC_FAILS:string = "40";
const LOWERING_MORALE:string = "42";
const ZERO_MORALE = "44"; 
const COMPLAINING_ABOUT_RECEIVING_ORDERS:string = "34";
const SETTING_A_TRAP:string = "41"; 

const RANDOM :string = "999"; //required this group


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
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(I_AM_READY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public async iNotReceivedCommands(){
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(COMPLAINING_ABOUT_RECEIVING_ORDERS);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async complainingAboutGroup() {

		const title = "Minsc Reclamando do Grupo: Escolha a situação";
		
			 
		const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
			

		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(COMPLAINING_ABOUT_THE_GROUP); 

		docNPC.COMMON_MODULE.debug("complainingAboutGroup:10,before creating buttons"); 

		const buttons =[
				//ex com parametros		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
				docNPC.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-reclamando-de-receber-ordens","Por Receber Ordens",true,"action",async  ()=> docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.iNotReceivedCommands() )
			];
		docNPC.COMMON_MODULE.debug("complainingAboutGroup:20,before creating the dialog"); 

 		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.createDialog( title ,content,buttons);


	}



  public async findSomeone() {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(FIND_SOMEONE);
	
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
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(IN_DUNGEON);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	

  public async enterInAFlorest () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(IN_FOREST);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
  
  public async enterInACity () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(IN_CITY);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
 
   public async stealthy () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(STEALTHY);
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send();
  }

   public async bigEnemy () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(BIG_ENEMY);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
  
   public async inDay () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(DURING_DAY);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async inNight () {
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(DURING_NIGHT);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }
  public async friendGetHurt () {	
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(IF_SOMEONE_HURTS_A_GROUP_MEMBER);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async getHurt  () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(GETTING_HURT); 

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
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(ONE_QUARTER_LIFE);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async less50p100OfLife  () {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(HALF_LIFE);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
  }

  public async toHit() {
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(LANDING_A_HIT);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 

  }

  
  public async agree () {	
	docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(AGREEING_WITH_THE_GROUP);
	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send();  
  }
	
	public async notAgree  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(NOT_AGREEING_WITH_SOMETHING);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async notUnderstood () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(I_DONT_UNDERSTAND_SOMETHING);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async getBoo () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(IF_SOMEONE_ASKS_TO_CATCH_THE_BOO);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	

	public async enterInBattle () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(ENTER_IN_BATTLE); 

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
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(ENEMY_WITH_IMMUNITY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public async missMagic () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(AFTER_MAGIC_FAILS);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async missingHit () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(MISSING_THE_HIT);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async killingSomeone () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(KILLING_AN_ENEMY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async imunityDetected () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(ENEMY_WITH_IMMUNITY);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async overWeight () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(OVERWEIGHT);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async afterMagic  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(AFTER_SOMEONE_CASTS_MAGIC);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	};

	
	public  async afterMagicFail   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(AFTER_MAGIC_FAILS);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public async moralDecrement  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(LOWERING_MORALE);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	
	public async oMoral   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(ZERO_MORALE);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}


	public async createAmbush   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(SETTING_AN_AMBUSH);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public async freeOfTheMagic   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(BREAKING_FREE_FROM_MAGIC);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public   async exaustion  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(WITH_EXHAUSTION);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async ullPlate   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(FULL_ARMOR);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public   async beingFooled  () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(ON_BEING_DECEIVED);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async orBard   () {	
		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(TO_THE_BARD);
		await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async enterInTheParty  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(JOINING_THE_GROUP);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async quitOfTheParty  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(LEAVING_THE_GROUP);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
	
	public   async complimentingASpeech  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(PRAISING_THE_SPEECH);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}
      
	public   async seeingSomeoneFamiliar  () {
			docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(FIND_SOMEONE_FAMILIAR);
			await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

	public   async loosingInvisibility  () {
   		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(LOSING_INVISIBILITY_MAGIC);
	  	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}


	public async dooingATrap () {
   		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(SETTING_A_TRAP);
	  	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}


	public async dooingAnAmbush () {
   		docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.groups.add(SETTING_AN_AMBUSH);
	  	await docNPC.COMMON_MODULE.NPC_DIALOG.activeNPC.send(); 
	}

     
 
 
}
