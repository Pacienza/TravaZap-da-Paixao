// COMPATIBILIDADE COM FIREFOX
(() => {
    const buscarOriginal = Element.prototype.querySelector;

    Element.prototype.querySelector = function(seletor) {
        if (
            seletor === '[data-testid="send"]' ||
            seletor === '[data-icon="send"]'
        ) {
            return buscarOriginal.call(
                this,
                'button[aria-label="Enviar"]'
            );
        }

        return buscarOriginal.call(this, seletor);
    };
})();

// Mapa de caracteres (1 = ❤️, 0 = espaço)
//  A FAZER: CORRIGIR O ESPAÇAMENTO PARA FUNCIONAR NO WHATSAPP WEB
const MAPA_CORACOES = {
    A: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ],
    B: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
    ],
    C: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
    ],
    D: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
    ],
    E: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
    ],
    F: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
    ],
    G: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
    ],
    H: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ],
    I: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    J: [
        [0, 0, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [1, 0, 0, 1, 0],
        [0, 1, 1, 0, 0],
    ],
    K: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
    ],
    L: [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ],
    M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ],
    N: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
    ],
    O: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
    ],
    P: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
    ],
    Q: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0],
        [0, 1, 1, 0, 1],
    ],
    R: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
    ],
    S: [
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
    ],
    T: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    U: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
    ],
    V: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
    ],
    W: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
    ],
    X: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
    ],
    Y: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    Z: [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ],
    " ": [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
    ],
};

function normalizarLetra(char) {
    return char
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();
}

function fraseParaCoracoes(frase) {
    const blocos = [];

    for (const charBruto of frase) {
        const char = normalizarLetra(charBruto);
        const matriz = MAPA_CORACOES[char];
        if (!matriz) continue;

        const linhasLetra = matriz
            .map(linha => {
                // Remove zeros trailing para evitar espaços sobrando no fim da linha
                let fim = linha.length;
                while (fim > 0 && linha[fim - 1] === 0) fim--;
                if (fim === 0) return "";
                return linha
                    .slice(0, fim)
                    .map(pixel => (pixel === 1 ? "❤️" : "  "))
                    .join("");
            })
            .filter(Boolean);

        if (linhasLetra.length > 0) {
            blocos.push(linhasLetra.join("\n"));
        }
    }

    return blocos.join("\n\n");
}

function inserirTextoComQuebras(textarea, texto) {
    const linhas = texto.split("\n");
    textarea.focus();

    linhas.forEach((linha, indice) => {
        document.execCommand("insertText", false, linha);
        if (indice < linhas.length - 1) {
            textarea.dispatchEvent(
                new InputEvent("beforeinput", {
                    inputType: "insertLineBreak",
                    bubbles: true,
                    cancelable: true
                })
            );
            document.execCommand("insertLineBreak");
        }
    });

    textarea.dispatchEvent(new Event("change", { bubbles: true }));
}

async function enviarScript(itens) {
    const lista = Array.isArray(itens)
        ? itens.map(item => fraseParaCoracoes(item)).filter(Boolean)
        : String(itens)
            .split(/\n-{3,}\n/g)
            .map(msg => msg.trim())
            .filter(Boolean);

    const main = document.querySelector("#main");
    const textarea = main?.querySelector(`div[contenteditable="true"]`);

    if (!textarea) throw new Error("Não há uma conversa aberta");

    for (const msg of lista) {
        console.log("Enviando mensagem:\n" + msg);

        inserirTextoComQuebras(textarea, msg);

        await new Promise(resolve => setTimeout(resolve, 250));
        const botaoEnviar =
            main.querySelector(`[data-testid="send"]`) ||
            main.querySelector(`[data-icon="send"]`);
        botaoEnviar?.click();

        await new Promise(resolve => setTimeout(resolve, 700));
    }

    return lista.length;
}

const frasesEmVariosIdiomas = [
    "EU TE AMO", // Português
    "I LOVE YOU", // Inglês
    "TE AMO", // Espanhol
    "JE T AIME", // Francês
    "TI AMO", // Italiano
    "ICH LIEBE DICH", // Alemão
    "IK HOU VAN JOU", // Holandês
    "EK IS LIEF VIR JOU", // Africâner
    "JAG ALSKAR DIG", // Sueco
    "JEG ELSKER DEG", // Norueguês
    "JEG ELSKER DIG", // Dinamarquês
    "EG ELSKA DIG", // Islandês
    "MINA RAKASTAN SINUA", // Finlandês
    "MA ARMASTAN SIND", // Estoniano
    "ES TEVI MILU", // Letão
    "AS TAVE MYLIU", // Lituano
    "KOCHAM CIE", // Polonês
    "MILUJI TE", // Tcheco
    "LUBIM TA", // Eslovaco
    "LJUBIM TE", // Esloveno
    "VOLIM TE", // Croata
    "VOLIM TE", // Sérvio
    "VOLIM TE", // Bósnio
    "TE SAKAM", // Macedônio
    "OBICHAM TE", // Búlgaro
    "YA TEBYA LYUBLYU", // Russo
    "YA TEBE KOKHAYU", // Ucraniano
    "YA TSYABE KAKHAYU", // Bielorrusso
    "S AGAPO", // Grego
    "TE DUA", // Albanês
    "TE IUBESC", // Romeno
    "SZERETLEK", // Húngaro
    "SENI SEVIYORUM", // Turco
    "MEN SENI SEVIREM", // Azerbaijano
    "YES KEZ SIRUM EM", // Armênio
    "ME SHEN MIQVARKHAR", // Georgiano
    "ANA UHIBBUKA", // Árabe masculino
    "ANA UHIBBUKI", // Árabe feminino
    "ANI OHEV OTACH", // Hebraico
    "ANI OHEVET OTCHA", // Hebraico
    "DOOSET DARAM", // Persa
    "EZ TE HEZ DIKIM", // Curdo
    "ZA TA SARA MEENA LARAM", // Pashto
    "MAIN TUMSE PYAAR KARTA HOON", // Hindi masculino
    "MAIN TUMSE PYAAR KARTI HOON", // Hindi feminino
    "MAIN TUMSE MOHABBAT KARTA HOON", // Urdu masculino
    "MAIN TUMSE MOHABBAT KARTI HOON", // Urdu feminino
    "AMI T OMAKE BHALOBASHI", // Bengali
    "MAIN TAINU PYAR KARDA HAAN", // Punjabi masculino
    "MAIN TAINU PYAR KARDI HAAN", // Punjabi feminino
    "HU TANE PREM KARU CHHU", // Gujarati
    "MA TIMILAI MAYA GARCHHU", // Nepalês
    "MAMA OYATA ADAREI", // Cingalês
    "NAAN UNNAI KADHALIKKIREN", // Tâmil
    "NENU NINNU PREMISTUNNANU", // Telugu
    "NAANU NINNANNU PREETISUTTENE", // Kannada
    "NJAN NINNE SNEHIKKUNNU", // Malaiala
    "WO AI NI", // Chinês mandarim
    "NGOH OI NEIH", // Cantonês
    "AISHITERU", // Japonês
    "SARANGHAE", // Coreano
    "ANH YEU EM", // Vietnamita masculino
    "EM YEU ANH", // Vietnamita feminino
    "CHAN RAK KHUN", // Tailandês feminino
    "PHOM RAK KHUN", // Tailandês masculino
    "KHOI HAK CHAO", // Lao
    "KHNHOM SROLANH ANAK", // Khmer
    "CHIT TAL", // Birmanês
    "AKU CINTA KAMU", // Indonésio
    "SAYA CINTAKAN AWAK", // Malaio
    "MAHAL KITA", // Filipino Tagalog
    "AKU TRESNA KARO KOWE", // Javanês
    "BI CHAMD KHAIRTAI", // Mongol
    "MEN SENI SUYEMIN", // Cazaque
    "MEN SENI SEVAMAN", // Uzbeque
    "MEN SENI SUYOM", // Quirguiz
    "MAN TURO DUST MEDORAM", // Tadjique
    "NAKUPENDA", // Suaíli
    "NGIYAKUTHANDA", // Zulu
    "NDIYAKUTHANDA", // Xhosa
    "MO NIFE RE", // Iorubá
    "A HURU M GI N ANYA", // Igbo
    "INA SON KA", // Hauçá masculino
    "INA SON KI", // Hauçá feminino
    "EWEDIH ALEHU", // Amárico
    "WAAN KU JECLAHAY", // Somali
    "TIAKO IANAO", // Malgaxe
    "AROHA AHAU KI A KOE", // Maori
    "ALOHA WAU IA OE", // Havaiano
    "OU TE ALOFA IA OE", // Samoano
    "OKU OU OFA ATU KIATE KOE", // Tonganês
    "AU DOMONI IKO", // Fijiano
    "TA GRA AGAM DUIT", // Irlandês
    "THA GAOL AGAM ORT", // Gaélico escocês
    "RWYN DY GARU DI", // Galês
    "MAITE ZAITUT", // Basco
    "T ESTIMO", // Catalão
    "QUEROTE", // Galego
    "TE AMO", // Latim
    "MI AMAS VIN", // Esperanto
    "IKH HOB DIKH LIB", // Iídiche
    "ECH HUNN DECH GAR", // Luxemburguês
    "INHOBBOK", // Maltês
    "EGO TE AMO", // Latim eclesiástico
    "OA VO UME", //Chave-Pluto
    "POR TODO",
    "INFINITAMMUS",
];

enviarScript(frasesEmVariosIdiomas)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);