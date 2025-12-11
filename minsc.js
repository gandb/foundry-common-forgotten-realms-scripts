"use strict";
const minscLines = { 1: "Fique parado e entregue-se, para que meu hamster possa dar uma boa olhada em você!",
    2: "Não, não se desespere! Eu vou te inspirar avançando com tudo!",
    3: "Preciso de cura para continuar lutando!",
    4: "Por favor, cuide de... Boo...",
    5: "Boo gosta da florestas! E eu também. Há muito o que roer aqui.",
    6: "Tanta gente com pessoas tão pequenas! Abram caminho para Minsc e Boo, pequenos!",
    7: "Um covil de maldade fétida! Na verdade, essa maldade não é tão fedida quanto costuma ser. Mesmo assim viemos por você, maldade bem lavada!",
    8: "Ahh, eu prefiro a luz do dia. A maldade merece ver a justiça que distribuo!",
    9: "Boo dorme: embora continuemos em frente.",
    10: "Aham?",
    11: "Sim?",
    12: "Você quer o Boo?",
    13: "O quê?",
    14: "Hein?",
    15: "Problemas?",
    16: "Primeiro vem a espada!",
    17: "Menos conversa, mais luta!",
    18: "Sim!",
    19: "Quando o perigo chama, Minsc responde. Primeiro vem a espada !",
    20: "Eu dou chutes em traseiros ruins, e não posso mentir sobre isso.",
    21: "Só existe um BOO! Ha! Não aceita substitutos.",
    22: "Abram caminho, maldade! Estou armado até os dentes e com um hamster!",
    23: "Caiu como uma árvore poderosa!",
    24: "Dynaheir! Eu falhei com você!",
    25: "Isso doi, não doi, maldade ?",
    26: "Um golpe e um erro!",
    27: "Sem efeito? Preciso de uma espada maior.",
    28: "Embora Minsc seja forte como poucos, ele não pode carregar tudo. E ele deve fazer espaço para Boo.",
    29: "Minsc não tem certeza de como ele fez isto.",
    30: "Ninguém me verá, embora o meu grito de batalha possa me entregar.",
    31: "Espadas não falham, mas feitiços falham. Como este falhou.",
    32: "O astuto Minsc prepara uma armadilha para a maldade entrar! Venham por aqui, maldade!",
    33: "AHHHH! Minsc será livre! Esses laços não segurarão minha fúria! Traseiros serão generosamente chutados!",
    34: "Irmandade, aventura e aço contra aço. A matéria das lendas e dos heróis! Certo, Boo?",
    35: "Sim, Boo, eu concordo. Este grupo merece um puxão de moral.",
    36: "Se eu continuar com isso, eu nunca mais poderei olhar Boo nos olhos. Escolha com cuidado; não deixarei isso acontecer e você não vai querer ter Minsc como inimigo, vai ? ",
    37: "Você ultrapassou a linha da maldade! Prove a justiça do hamster!",
    38: "Magia é impressionante, mas agora Minsc lidera! Espadas para todos!",
    39: "Preciso descansar, estou com uma péssima irritação por causa da armadura.",
    40: "Meu hamster está inquieto! Se somos aventureiros, vamos aventurar!",
    41: "Vá direto para os olhos, Boo. VÁ PARA OLHOS! RrraaaAAGHGHH!",
    42: "Preciso de ajuda em breve... para que meu hamster não fique órfão.",
    43: "Boo gosta da floresta.",
    44: "Maldade a cada esquina. Cuidado para não pisar em nenhuma.",
    45: "Ahh, noite. Boa para se aproximar da maldade.",
    46: "Quem quer um pouco?",
    47: "Vocês apontam, eu soco.",
    48: "Menos conversa, mais luta!",
    49: "Chutando traseiros por uma boa causa!",
    50: "Quem não chora não leva chute.",
    51: "Armadura completa e carregando aço afiado!",
    52: "Engane-me uma vez, vergonha sua; engane-me duas, cuidado! Eu sou enorme!",
    53: "Quando a coisa ficar difícil, sigam meu roedor.",
    54: "Há segurança em números, e eu sou dois ou três, pelo menos.",
    55: "Será como você quer. É meu dever solene garantir o que você precisa.",
    56: "Toque em algo que eu protejo, e para sempre você responderá ao chamado da natureza com uma boa cor vermelha na urina!",
    57: "Continue tocando, bardo! É música doce para meu amigo peludo.",
    58: "Se você viaja com Minsc, você se mantém na linha! Não tolerarei vagabundos enquanto estou ocupado sendo um herói!",
    59: "Boo não gosta do seu jeito. Ficarei longe de você!",
    60: "Escolha seus amigos sabiamente. Nem todos são tão confiáveis quanto Minsc e Boo.",
    61: "Não há lugar melhor para morrer do que no campo de batalha!",
    62: "Sou de poucas palavras e menos hesitações! O aviso já passou, e agora você vai morrer!",
    63: "Suas palavras são tão afiadas quanto minha lâmina, embora não sejam nem metade tão brilhantes. Oooo, brilhante adoro coisas com brilho.",
    64: "Não me ofendo com seus comentários. Você simplesmente não entende os laços que tenho com Boo.",
    65: "Eh? Onde você nos trouxe, Boo? Estou devidamente impressionado com seu espetáculo de grandes poderes, mas um pequeno aviso teria sido bom. Não importa! Onde quer que o mal pise, Minsc pisa mais alto!",
    66: "Ooo! Olhe quem você encontrou, Boo, com seu infalível senso de direção de hamster! É nosso bom amigo, <CHARNAME_TARGET_01>! Uma reunião de heróis! Que todo o mal trema diante de nós como gelatina rançosa, ha!",
    67: "Todos nós somos heróis, você, Boo e eu! Hamsters e rangers em toda parte, festejem!",
    68: "Esse comportamento não pode continuar! Sinta o olhar ardente do meu hamster e mude suas maneiras!",
    69: "Isso não está certo. Mude nosso curso ou terei que aplicar um golpe considerável de virtude em você!",
    70: "Boo só suporta até certo ponto!",
    71: "Minsc liderará com lâmina e chute ! Boo que cuida dos detalhes.",
    72: "Precisamos descansar em breve. Boo está ficando inquieto.",
    73: "Boo precisa se exercitar",
    74: "Sinta o golpe da justiça!",
    75: "Divertido demais! Hehe. Certo, Boo?",
    76: "Preciso de ajuda logo. Boo é muito jovem para ter que me vingar.",
    77: "Você sabe... acho que a floresta gosta de Boo.",
    78: "Cidades sempre estão repletas de mal e decadência. Vamos dar uma boa sacudida e ver o que cai!",
    79: "Uma toca de mal fedido. Cubra o nariz, Boo. Não deixaremos nenhuma fenda sem investigar!",
    80: "Coisas estranhas se movem à noite, mas nenhuma se move mais do que Minsc!",
    81: "Espadas, não palavras!",
    82: "Minsc e Boo estão prontos.",
    83: "Cada hamster tem seu dia.",
    84: "Armado, afiado e pronto para agir.",
    85: "Boo diz, \"O quê?!\"",
    86: "Onde Minsc vai, o mal se afasta.",
    87: "Salte pra cima da minha espada enquanto pode, mal. Não serei tão gentil!",
    88: "Viva pela espada, viva por muito tempo!",
    89: "Afaste-se para a justiça!",
    90: "Vê a batalha, Boo? Corra, Boo, corra!",
    91: "Dê passagem, vilania! Herói a caminho!",
    92: "Quanto maiores, mais forte eu bato!",
    93: "Não ensine meu hamster a rezar a missa!",
    94: "Ah não!",
    95: "Ah, isso não está certo!",
    96: "Virei para proteger Boo e perdi meu feitiço. NÃO estou arrependido.",
    97: "Tive que largar o que você me deu. Tenho apenas dois braços e não tenho mais espaço.",
    98: "Aiii!",
    99: "Arght!",
    100: "Uiii!",
    101: "Boo não é um rato, ele é uma miniatura de um Hamster Espacial Gigante. Não o ofenda! Para que ele não roa suas orelhas enquanto você dorme!",
    102: "Ohh, você é esperto mesmo! Agora estou entendendo."
};
const groupToLines = new Map([
    ["1", "1"],
    ["2", "2;16;17;19;22;38;41;46;47;48;49;50;61;62;74;81;87;89;90;91;20;54"],
    ["3", "42;76;98;99;100"],
    ["4", "5;43;77"],
    ["5", "6;78;44"],
    ["6", "7;44;79"],
    ["7", "12"],
    ["8", "85;13;10;11"],
    ["9", "15;56"],
    ["10", "92"],
    ["11", "18;55"],
    ["12", "70;95;94"],
    ["13", "23"],
    ["14", "25;22;38;46;49;50;74"],
    ["15", "26"],
    ["17", "28;97"],
    ["18", "29"],
    ["19", "32"],
    ["20", "33"],
    ["21", "39;72"],
    ["24", "8"],
    ["23", "80"],
    ["25", "51"],
    ["26", "52"],
    ["27", "94"],
    ["28", "57"],
    ["29", "58"],
    ["30", "59"],
    ["31", "63;102"],
    ["33", "82;84"],
    ["34", "93"],
    ["35", "96"],
    ["38", "10;11;14"],
    ["41", "32"],
    ["37", "9;20;21;24;34;40;53;60;65;67;71;73;75;83;86;88"],
    ["1;32", "66"],
    ["2;3;36", "3;4"],
    ["2;16", "27"],
    ["2;39", "30"],
    ["2;10", "92"],
    ["3;36", "3;4"],
    ["2;3", "3;4;42;76"],
    ["2;3;22", "42;76"],
    ["2;3;36", "3;4"],
    ["3;22", "42;76"],
    ["12;40", "31"],
    ["12;42", "35;36;68;69;24"],
    ["12;44", "37"],
    ["12;47", "64;101"]
]);
const FIND_SOMEONE = "1";
const ENTER_IN_BATTLE = "2";
const GETTING_HURT = "3";
const IN_FOREST = "4";
const IN_CITY = "5";
const IN_DUNGEON = "6";
const IF_SOMEONE_ASKS_TO_CATCH_THE_BOO = "7";
const I_DONT_UNDERSTAND_SOMETHING = "8";
const IF_SOMEONE_HURTS_A_GROUP_MEMBER = "9";
const BIG_ENEMY = "10";
const AGREEING_WITH_THE_GROUP = "11";
const COMPLAINING_ABOUT_THE_GROUP = "12";
const KILLING_AN_ENEMY = "13";
const LANDING_A_HIT = "14";
const MISSING_THE_HIT = "15";
const ENEMY_WITH_IMMUNITY = "16";
const OVERWEIGHT = "17";
const AFTER_SOMEONE_CASTS_MAGIC = "18";
const SETTING_AN_AMBUSH = "19";
const BREAKING_FREE_FROM_MAGIC = "20";
const WITH_EXHAUSTION = "21";
const HALF_LIFE = "22";
const DURING_NIGHT = "23";
const DURING_DAY = "24";
const FULL_ARMOR = "25";
const ON_BEING_DECEIVED = "26";
const TO_THE_BARD = "28";
const JOINING_THE_GROUP = "29";
const LEAVING_THE_GROUP = "30";
const PRAISING_THE_SPEECH = "31";
const FIND_SOMEONE_FAMILIAR = "32";
const I_AM_READY = "33";
const LOSING_INVISIBILITY_MAGIC = "35";
const ONE_QUARTER_LIFE = "36";
const RANDOM = "37";
const NOT_AGREEING_WITH_SOMETHING = "38";
const STEALTHY = "39";
const AFTER_MAGIC_FAILS = "40";
const LOWERING_MORALE = "42";
const ZERO_MORALE = "44";
const ABOUT_THE_BOO = "47";
const COMPLAINING_ABOUT_RECEIVING_ORDERS = "34";
const SETTING_A_TRAP = "41";
const LOW_MORALE = "43";
const doc = document;
class Minsc {
    name = "Minsc";
    actor;
    groups = new Set();
    screens = new Array();
    DEFAULT_STYLE = ` 
				<style>
				.select-action { padding: 20px; background: #222; color: #eee; }
				.select-action button { margin: 5px; padding: 5px 10px; }
				.minsc-actions-buttons {  display: flex; flex-direction: column; gap: 8px; }
			`;
    constructor() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc = this;
        this.screens.push({ name: "npc-dialog", callback: doc.COMMON_MODULE.NPC_DIALOG.showNPCChooseDialog });
        if (!doc.COMMON_MODULE.NPC_DIALOG.npcs) {
            doc.COMMON_MODULE.NPC_DIALOG.npcs = new Map();
        }
        doc.COMMON_MODULE.NPC_DIALOG.npcs.set("minsc", this);
    }
    decrementGroup() {
        const array = [...doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups];
        const last = array.at(-1);
        const newArray = array.slice(0, -1);
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups = new Set(newArray);
    }
    async createDialog(title, content, options, submits) {
        const innerSelectOptions = `
		<option selected="selected" value="minsc-random">Aleatório dado o contexto até aqui</option>
		` + options.reduce((obj, button) => {
            if (button.action == "minsc-back" || button.action == "minsc-send" || button.action == "minsc-cancel")
                return obj;
            const previous = typeof obj === "string" ? obj : `<option value="${obj.action}">${obj.label} </option>obj`;
            return `
				${previous} 
				<option value="${button.action}">${button.label} </option>
			`;
        });
        const newContent = `${content}
			<div class="minsc-actions-buttons">
				<SELECT>
					${innerSelectOptions}
				</SELECT>
			</div>
		`;
        doc.COMMON_MODULE.debug("Minsc.createDialog:10", options);
        doc.COMMON_MODULE.debug("Minsc.createDialog:15:doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups);
        if (!submits) {
            doc.COMMON_MODULE.debug("Minsc.createDialog:20");
            submits = [
                doc.COMMON_MODULE.DIALOG_UTILS.createButton("send", "Enviar", true, "action", async () => {
                    doc.COMMON_MODULE.debug("Minsc.createDialog, before creating send:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups);
                    doc.COMMON_MODULE.debug("Minsc.createDialog [10]: Escolhido a opcao enviar");
                    const queryResult = doc.querySelector(".minsc-actions-buttons SELECT") || null;
                    const result = queryResult?.value;
                    if (result === null || result === undefined) {
                        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.console.error("Minsc.createDialog: Erro ao obter a opcao selecionada");
                        return;
                    }
                    doc.COMMON_MODULE.debug("Minsc.createDialog [20]: depois de selecionar o resultado", result);
                    if (result === "minsc-random") {
                        const lastScreen = doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.at(-1);
                        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.push({ name: result, callback: doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send, type: lastScreen.type });
                        doc.COMMON_MODULE.debug("Minsc.createDialog, before  random send:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups);
                        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send(false);
                        doc.COMMON_MODULE.debug("Minsc.createDialog, after random send:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups);
                        return;
                    }
                    options.forEach((button) => {
                        if (button.action != result) {
                            return;
                        }
                        doc.COMMON_MODULE.debug("Minsc.Enviado a opcao :" + result);
                        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.push({ name: result, callback: button.callback, type: button.type });
                        button.callback();
                        doc.COMMON_MODULE.debug("Minsc.createDialog, after 3 creating send:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups);
                        return;
                    });
                }),
                doc.COMMON_MODULE.DIALOG_UTILS.createButton("back", "Voltar", true, "action", async () => {
                    doc.COMMON_MODULE.debug("Minsc.screens ao voltar - antes: ", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens);
                    const previousLastScreen = doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.at(-2);
                    const lastScreen = doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.pop();
                    doc.COMMON_MODULE.debug("lastScreen:", lastScreen);
                    doc.COMMON_MODULE.debug("screens ao voltar - depois: ", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens);
                    if (lastScreen.type == "screen-context") {
                        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.decrementGroup();
                    }
                    previousLastScreen.callback();
                }),
                doc.COMMON_MODULE.DIALOG_UTILS.createButton("cancel", "Cancelar", true, "action", async () => {
                    doc.COMMON_MODULE.debug("Minsc.Cancelado a tela do minsc");
                })
            ];
            doc.COMMON_MODULE.debug("Minsc.createDialog:25. Create submits", submits);
            doc.COMMON_MODULE.debug("Minsc.createDialog:30 - depois de criar submits");
        }
        const submit = (action, label, defaultValue, callback) => {
        };
        doc.COMMON_MODULE.debug("Minsc.createDialog:40 - antes de criar dialogo");
        doc.COMMON_MODULE.DIALOG_UTILS.createDialog(title, doc.COMMON_MODULE.NPC_DIALOG.activeNpc.DEFAULT_STYLE, newContent, submits, submit);
        doc.COMMON_MODULE.debug("Minsc.createDialog:50 - depois de criar dialogo");
    }
    async startScreen() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.push({ name: "start-screen", callback: doc.COMMON_MODULE.NPC_DIALOG.activeNpc.startScreen, type: "screen" });
        doc.COMMON_MODULE.debug("doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens inicial: ", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens);
        doc.COMMON_MODULE.debug("startScreen:10,char_name:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.name);
        this.actor = game.actors.getName("Minsc de Rasemen");
        if (!doc.COMMON_MODULE.NPC_DIALOG.activeNpc.actor)
            return ui.notifications.error("Minsc não encontrado!");
        const title = "Minsc: Escolha o que fazer";
        const content = `
				<div class="select-action">
				<H1>Escolha uma ação:</H1> `;
        doc.COMMON_MODULE.debug("startScreen:20. criando botoes");
        /** TODO : Melhorar o estilo pros botoes aparecerem de melhor maneira **/
        const buttons = [
            //ex com parametros		doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-encontrando-alguem", "Encontrando Alguém", true, "screen-context", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.findSomeone()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-encontrando-em-algum-lugar", "Entrando em Um Lugar", true, "screen", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.enterInAPlace()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-sobrecarga-peso", "Sobrecarga de peso", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.overWeight()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-concordando", "Concordando", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.agree()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-discordando", "Discordando", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.notAgree()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-reclamando-do-grupo", "Reclamando do Grupo", true, "screen-context", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.complainingAboutGroup()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-durante-o-dia", "Durante o dia", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.inDay()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-durante-a-noite", "Durante a noite", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.inNight()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-nao-entendendo", "Não entendendo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.notUnderstood()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-durante-a-noite", "Durante a noite", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createAmbush()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-criando-emboscada", "Criar uma Emboscada", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.dooingATrapOrAmbush()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-se-liberando-de-uma-magia", "Se Liberando de Uma Magia", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.freeOfTheMagic()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-exaustao", "Exaustão", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.exaustion()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-levando-dano", "Levando Dano", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.getHurt()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-armadura-completa", "Com Armadura Completa", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.fullPlate()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-sendo-enganado", "Sendo Enganado", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.beingFooled()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-pro-bardo", "Pro Bardo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.orBard()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-entrando-no-grupo", "Entrando no Grupo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.enterInTheParty()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-saindo-do-grupo", "Saindo do Grupo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.quitOfTheParty()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-elogiando-uma-fala", "Elogiando uma fala", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.complimentingASpeech()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-perdendo-invisibilidade", "Perdendo Invisibilidade", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.loosingInvisibility()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-afirmando-que-esta-pronto", "Afirmando que esta pronto", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.iAmReady()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-alguem-pedindo-pra-pegar-boo", "Alguém pedindo pra pegar Boo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.getBoo()),
        ];
        doc.COMMON_MODULE.debug("startScreen:30 depois de criado botoes");
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createDialog(title, content, buttons);
        doc.COMMON_MODULE.debug("startScreen:40 depois de criado dialogo");
    }
    async iAmReady() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(I_AM_READY);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async complainingAboutGroup() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(COMPLAINING_ABOUT_THE_GROUP);
        const title = "Minsc: Escolha o que fazer";
        const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
        /** TODO : Melhorar o estilo pros botoes aparecerem de melhor maneira **/
        const buttons = [
            //ex com parametros		doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-sobre-boo", "Sobre o Boo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.aboutBoo()),
        ];
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createDialog(title, content, buttons);
    }
    async findSomeone() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(FIND_SOMEONE);
        const title = "Minsc: Escolha o que fazer";
        const content = `
		<div class="select-action">
		<H1>Escolha uma ação:</H1> `;
        /** TODO : Melhorar o estilo pros botoes aparecerem de melhor maneira **/
        const buttons = [
            //ex com parametros		doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-vendo-alguem-conhecido", "Vendo alguém conhecido", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.seeingSomeoneFamiliar()),
        ];
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createDialog(title, content, buttons);
    }
    async enterInAPlace() {
        const title = "Minsc Entrando em: Escolha a situação";
        /** TODO : Melhorar o estilo pros botoes aparecerem de melhor maneira **/
        const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
        doc.COMMON_MODULE.debug("enterInAPlace:10,before creating buttons");
        const buttons = [
            //ex com parametros		doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-em-batalha", "Entrando em Batalha", true, "screen-context", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.enterInBattle()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-numa-cidade", "Numa Cidade", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.enterInACity()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-na-floresta", "Na Floresta", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.enterInAFlorest()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-dungeon", "Dungeon", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.enterInDungeon()),
        ];
        doc.COMMON_MODULE.debug("enterInAPlace:10,after creating buttons");
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createDialog(title, content, buttons);
        doc.COMMON_MODULE.debug("enterInAPlace:10,after creating dialogs");
    }
    async enterInDungeon() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(IN_DUNGEON);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async enterInAFlorest() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(IN_FOREST);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async enterInACity() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(IN_CITY);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async stealthy() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(STEALTHY);
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async bigEnemy() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(BIG_ENEMY);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async inDay() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(DURING_DAY);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async inNight() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(DURING_NIGHT);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async friendGetHurt() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(IF_SOMEONE_HURTS_A_GROUP_MEMBER);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async getHurt() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(GETTING_HURT);
        const title = "Minsc se machucou: Escolha a situação";
        const content = `
		<div class="select-action">
		<H1>Escolha uma ação:</H1> `;
        const buttons = [
            //ex com parametros		doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-menos-de-25", "Menos de 25% de vida", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.less25p100OfLife()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-menos-de-50", "Menos de 50% de vida", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.less50p100OfLife()),
        ];
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createDialog(title, content, buttons);
    }
    async less25p100OfLife() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(ONE_QUARTER_LIFE);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async less50p100OfLife() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(HALF_LIFE);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async toHit() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(LANDING_A_HIT);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async agree() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(AGREEING_WITH_THE_GROUP);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async notAgree() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(NOT_AGREEING_WITH_SOMETHING);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async notUnderstood() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(I_DONT_UNDERSTAND_SOMETHING);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async getBoo() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(IF_SOMEONE_ASKS_TO_CATCH_THE_BOO);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async enterInBattle() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(ENTER_IN_BATTLE);
        const title = "Minsc em combate: Escolha a situação";
        const content = `
			<div class="select-action">
			<H1>Escolha uma ação:</H1> `;
        const buttons = [
            //ex com parametros		doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createButton("minsc","Minsc",true,(event, button, dialog) => npcDialog.callMinsc()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-matou-alguem", "Matou alguém", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.killingSomeone()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-errou-alvo", "Errando Alvo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.missingHit()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-levou-dano", "Levando Dano", true, "screen-context", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.getHurt()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-amigo-levou-dano", "Amigo Recebendo Dano", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.friendGetHurt()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-magia-falhando", "Magia Falhando", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.missMagic()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-acertando-inimigo", "Acertando o Inimigo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.toHit()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-modo-furtivo", "Entrando em Modo Furtivo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.stealthy()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-inimigo-grande", "Inimigo Grande", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.bigEnemy()),
            doc.COMMON_MODULE.DIALOG_UTILS.createButton("minsc-inimigo-imune", "Notando imunidade do inimigo", true, "action", async () => doc.COMMON_MODULE.NPC_DIALOG.activeNpc.enemyImunne()),
        ];
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.createDialog(title, content, buttons);
    }
    async enemyImunne() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(ENEMY_WITH_IMMUNITY);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async missMagic() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(AFTER_MAGIC_FAILS);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async missingHit() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(MISSING_THE_HIT);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async killingSomeone() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(KILLING_AN_ENEMY);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async imunityDetected() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(ENEMY_WITH_IMMUNITY);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async overWeight() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(OVERWEIGHT);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async afterMagic() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(AFTER_SOMEONE_CASTS_MAGIC);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    ;
    async aboutBoo() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(ABOUT_THE_BOO);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    ;
    async afterMagicFail() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(AFTER_MAGIC_FAILS);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async moralDecrement() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(LOWERING_MORALE);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async oMoral() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(ZERO_MORALE);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async createAmbush() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(SETTING_AN_AMBUSH);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async freeOfTheMagic() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(BREAKING_FREE_FROM_MAGIC);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async exaustion() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(WITH_EXHAUSTION);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async ullPlate() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(FULL_ARMOR);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async beingFooled() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(ON_BEING_DECEIVED);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async orBard() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(TO_THE_BARD);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async enterInTheParty() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(JOINING_THE_GROUP);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async quitOfTheParty() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(LEAVING_THE_GROUP);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async complimentingASpeech() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(PRAISING_THE_SPEECH);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async seeingSomeoneFamiliar() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(FIND_SOMEONE_FAMILIAR);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async loosingInvisibility() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(LOSING_INVISIBILITY_MAGIC);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async dooingATrapOrAmbush() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(SETTING_AN_AMBUSH);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async randonAboutBoo() {
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(SETTING_AN_AMBUSH);
        await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.send();
    }
    async getListLinesFromGroup(groupsUnordered) {
        const groups = Array.from(groupsUnordered).map(Number).sort((a, b) => a - b);
        if (groups.length === 0) {
            return new Array();
        }
        if (groups.length == 1) {
            return groups;
        }
        let combinations = await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.getCombinations(groups);
        doc.COMMON_MODULE.debug("groups:", groups);
        doc.COMMON_MODULE.debug("keys:", combinations);
        return combinations;
    }
    ;
    async getCombinations(numbers, separator = ";") {
        const ret = new Array();
        if (numbers.length == 0 || numbers.length == 1) {
            return [...numbers];
        }
        doc.COMMON_MODULE.debug("numbers:", numbers);
        const generate = (start, path) => {
            doc.COMMON_MODULE.debug("generate start:", start, ",path", path);
            let combinationKey = numbers.join(";");
            doc.COMMON_MODULE.debug("combinationKey:", combinationKey);
            doc.COMMON_MODULE.debug("groupToLines:", groupToLines, "-", typeof combinationKey);
            if (groupToLines.has(combinationKey)) {
                doc.COMMON_MODULE.debug("find, return the combination");
                ret.push(combinationKey);
                return ret;
            }
            doc.COMMON_MODULE.debug("combinationKey not found:", combinationKey);
            for (let i = start; i < numbers.length; i++) {
                const newCombinationGroup = [...path, numbers[i]];
                doc.COMMON_MODULE.debug("novaCombinacao:", newCombinationGroup);
                combinationKey = newCombinationGroup.join(";");
                ret.push(combinationKey);
                generate(i + 1, newCombinationGroup);
            }
        };
        generate(0, []);
        return ret;
    }
    async speak(lineIndex) {
        const line = minscLines[lineIndex];
        doc.COMMON_MODULE.debug("line:", line);
        doc.COMMON_MODULE.debug("speak:talk:", line);
        ChatMessage.create({
            content: line,
            speaker: ChatMessage.getSpeaker({
                alias: doc.COMMON_MODULE.NPC_DIALOG.activeNpc.actor.name
            })
        });
        const formatedIndex = lineIndex.toString().padStart(3, '0');
        await AudioHelper.preloadSound(`modules/forgotten-realms/sounds/npcs/Minsc/${formatedIndex}/Minsc${formatedIndex}.ogg`);
        AudioHelper.play({ src: `modules/forgotten-realms/sounds/npcs/Minsc/${formatedIndex}/Minsc${formatedIndex}.ogg`, autoplay: true }, true);
    }
    async send(removeLastGroup = true) {
        if (doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.size === 0) {
            doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.add(RANDOM);
        }
        const list = await doc.COMMON_MODULE.NPC_DIALOG.activeNpc.getListLinesFromGroup(doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups);
        doc.COMMON_MODULE.debug("Minsc.send, before send,list:", list);
        const lines = new Array();
        for (const groupNumber of list) {
            const group = groupNumber.toString();
            doc.COMMON_MODULE.debug("group:", group);
            if (!groupToLines.has(group)) {
                doc.COMMON_MODULE.warn(`Minsc.send, afterSend:Grupo ${group} não encontrado em groupToLines!`);
                continue;
            }
            const size = group.split(";").length + 1;
            const linesForThisGroupConcat = groupToLines.get(group);
            doc.COMMON_MODULE.debug("Minsc.send, 50,linesForThisGroupConcat:", linesForThisGroupConcat, "-size:", size);
            const linesForThisGroup = linesForThisGroupConcat.split(";");
            doc.COMMON_MODULE.debug("Minsc.send, 60,linesForThisGroup:", linesForThisGroup);
            linesForThisGroup.forEach(line => {
                for (let i = 0; i < size; i++) {
                    lines.push(line);
                }
            });
        }
        doc.COMMON_MODULE.debug("Minsc.send, afterSend,lines:", lines);
        let randomIndex = Math.abs(Math.round((Math.random() * lines.length)));
        randomIndex = randomIndex >= lines.length ? lines.length - 1 : randomIndex;
        doc.COMMON_MODULE.debug("Minsc.send, afterSend,randomIndex:", randomIndex);
        const lineIndex = parseInt(lines[randomIndex], 10);
        doc.COMMON_MODULE.debug("Minsc.send, afterSend,lineIndex:", lineIndex);
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.speak(lineIndex);
        doc.COMMON_MODULE.debug("Minsc.send, afterSend,activeScreen:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens);
        const activeScreen = doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.at(-2);
        doc.COMMON_MODULE.NPC_DIALOG.activeNpc.screens.pop();
        activeScreen.callback();
        const lastIsRandom = doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups.has(RANDOM);
        removeLastGroup = removeLastGroup || lastIsRandom;
        doc.COMMON_MODULE.debug("Minsc.send, onlyRandom,removeLastGroup:", lastIsRandom, ",", removeLastGroup);
        if (removeLastGroup) {
            doc.COMMON_MODULE.NPC_DIALOG.activeNpc.decrementGroup();
        }
        doc.COMMON_MODULE.debug("Minsc.send, afterSend:", doc.COMMON_MODULE.NPC_DIALOG.activeNpc.groups);
    }
}
//# sourceMappingURL=minsc.js.map