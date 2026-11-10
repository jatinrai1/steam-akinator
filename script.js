const persons = [
    {
        name: "Albert Einstein",
        questions: [
            { text: "Ha formulato la teoria della relatività?", answer: true },
            { text: "È nato in Germania?", answer: true },
            { text: "Ha vinto il premio Nobel per la fisica?", answer: true }
        ]
    },
    {
        name: "Marie Curie",
        questions: [
            { text: "Ha scoperto il radio e il polonio?", answer: true },
            { text: "È di origine polacca?", answer: true },
            { text: "Ha vinto più di un premio Nobel?", answer: true }
        ]
    },
    {
        name: "Nikola Tesla",
        questions: [
            { text: "È famoso per le sue ricerche sulla corrente alternata?", answer: true },
            { text: "È nato in Croazia?", answer: true }
        ]
    },
    {
        name: "Leonardo da Vinci",
        questions: [
            { text: "Ha dipinto La Gioconda?", answer: true },
            { text: "È stato un grande artista e inventore italiano del Rinascimento?", answer: true }
        ]
    },
    {
        name: "Ada Lovelace",
        questions: [
            { text: "È considerata la prima programmatrice della storia?", answer: true },
            { text: "Ha lavorato alla Macchina Analitica di Babbage?", answer: true }
        ]
    },
    {
        name: "Isaac Newton",
        questions: [
            { text: "È famoso per la legge della gravitazione universale e la mela?", answer: true },
            { text: "È uno scienziato e matematico inglese?", answer: true }
        ]
    },
    {
        name: "Steve Jobs",
        questions: [
            { text: "È il co-fondatore di Apple?", answer: true },
            { text: "Ha rivoluzionato il mondo degli smartphone con l'iPhone?", answer: true }
        ]
    },
    {
        name: "Galileo Galilei",
        questions: [
            { text: "Ha perfezionato il cannocchiale e sostenuto il modello eliocentrico?", answer: true },
            { text: "È uno scienziato italiano del Seicento?", answer: true }
        ]
    },
    {
        name: "Hedy Lamarr",
        questions: [
            { text: "Oltre a essere un'attrice, ha inventato la tecnologia alla base del Wi-Fi?", answer: true },
            { text: "È nata in Austria?", answer: true }
        ]
    },
    {
        name: "Pythagoras",
        questions: [
            { text: "È il matematico greco famoso per il teorema sui triangoli rettangoli?", answer: true },
            { text: "È vissuto nell'antica Grecia?", answer: true }
        ]
    },
    {
        name: "Alan Turing",
        questions: [
            { text: "Ha decifrato il codice Enigma durante la Seconda Guerra Mondiale?", answer: true },
            { text: "È considerato il padre dell'informatica?", answer: true }
        ]
    },
    {
        name: "Johannes Kepler",
        questions: [
            { text: "Ha formulato le tre leggi sul movimento dei pianeti attorno al Sole?", answer: true },
            { text: "È un astronomo tedesco?", answer: true }
        ]
    },
    {
        name: "Thomas Edison",
        questions: [
            { text: "Ha brevettato la lampadina a incandescenza commerciale e il fonografo?", answer: true },
            { text: "È un inventore statunitense?", answer: true }
        ]
    },
    {
        name: "Stephen Hawking",
        questions: [
            { text: "È un celebre astrofisico e cosmologo britannico noto per i suoi studi sui buchi neri?", answer: true },
            { text: "Ha scritto il bestseller 'Dal Big Bang ai buchi neri'?", answer: true }
        ]
    },
    {
        name: "Leonardo Fibonacci",
        questions: [
            { text: "È il matematico italiano celebre per la famosa successione numerica (0, 1, 1, 2, 3, 5...)?", answer: true },
            { text: "Ha introdotto le cifre arabe in Europa?", answer: true }
        ]
    },
    {
        name: "Katherine Johnson",
        questions: [
            { text: "È una matematica della NASA i cui calcoli sono stati fondamentali per le missioni Apollo?", answer: true },
            { text: "È una scienziata afroamericana?", answer: true }
        ]
    },
    {
        name: "Maria Goeppert Mayer",
        questions: [
            { text: "Ha vinto il premio Nobel per la fisica per il modello a strati del nucleo atomico?", answer: true },
            { text: "È una fisica teorica di origine tedesca?", answer: true }
        ]
    },
    {
        name: "Barbara McClintock",
        questions: [
            { text: "Ha vinto il premio Nobel per la scoperta dei trasposoni (geni saltanti)?", answer: true },
            { text: "È una biologa e geneticista statunitense?", answer: true }
        ]
    },
    {
        name: "Mary Jackson",
        questions: [
            { text: "È stata la prima donna ingegnere afroamericana della NASA?", answer: true },
            { text: "La sua storia è raccontata nel film 'Il diritto di contare'?", answer: true }
        ]
    },
    {
        name: "Lise Meitner",
        questions: [
            { text: "È la fisica austriaca che ha fornito la prima spiegazione teorica della fissione nucleare?", answer: true },
            { text: "Le è stato intitolato l'elemento chimico Meitnerio?", answer: true }
        ]
    }
];

const characterImages = {
    "Albert Einstein": "img/albert_einstein.jpeg",
    "Marie Curie": "img/marie_curie.jpg",
    "Nikola Tesla": "img/nikola_tesla.jpg",
    "Leonardo da Vinci": "img/leonardo_da_vinci.jpg",
    "Ada Lovelace": "img/ada_lovelace.jpg",
    "Isaac Newton": "img/isaac_newton.jpg",
    "Steve Jobs": "img/steve_jobs.jpg",
    "Galileo Galilei": "img/galileo_galilei.jpg",
    "Hedy Lamarr": "img/hedy_lamarr.jpg",
    "Pythagoras": "img/pythagoras.jpg",
    "Alan Turing": "img/alan_turing.jpg",
    "Johannes Kepler": "img/johannes_kepler.jpg",
    "Thomas Edison": "img/thomas_edison.jpg",
    "Stephen Hawking": "img/stephen_hawking.jpg",
    "Leonardo Fibonacci": "img/leonardo_fibonacci.jpg",
    "Katherine Johnson": "img/katherine_johnson.jpg",
    "Maria Goeppert Mayer": "img/maria_goeppert_mayer.jpg",
    "Barbara McClintock": "img/barbara_mcclintock.jpg",
    "Mary Jackson": "img/mary_jackson.jpg",
    "Lise Meitner": "img/lise_meitner.jpg"
};

let currentCharacterIndex = 0;
let currentQuestionIndex = 0;
let isPlaying = false;

function Inizia() {
    currentCharacterIndex = 0;
    currentQuestionIndex = 0;
    isPlaying = true;

    document.getElementById("btnYes").disabled = false;
    document.getElementById("btnNo").disabled = false;
    document.getElementById("btnStart").innerText = "Ricomincia";
    
    const charImg = document.getElementById("characterImage");
    charImg.src = "img/question_mark.gif";
    charImg.alt = "Indovina il personaggio";

    ask_question();
}

function ask_question() {
    const questionElement = document.getElementById("question");
    
    if (currentCharacterIndex < persons.length) {
        if (currentQuestionIndex < persons[currentCharacterIndex].questions.length) {
            questionElement.innerText = persons[currentCharacterIndex].questions[currentQuestionIndex].text;
        } else {
            showResult();
        }
    } else {
        questionElement.innerText = "Non sono riuscito ad indovinare! Vuoi riprovare?";
        resetGameControls();
    }
}

function risposta(bool) {
    if (!isPlaying) return;

    if (currentCharacterIndex < persons.length) {
        if (currentQuestionIndex < persons[currentCharacterIndex].questions.length) {
            if (bool === persons[currentCharacterIndex].questions[currentQuestionIndex].answer) {
                currentQuestionIndex++;
                ask_question();
            } else {
                currentCharacterIndex++;
                currentQuestionIndex = 0;
                ask_question();
            }
        } else {
            showResult();
        }
    } else {
        questionElement.innerText = "Non sono riuscito ad indovinare! Vuoi riprovare?";
        resetGameControls();
    }
}

function showResult() {
    const nomePersonaggio = persons[currentCharacterIndex].name;
    const sourceImmagine = characterImages[nomePersonaggio] || "img/question_mark.gif";

    const imgElement = document.getElementById("characterImage");
    imgElement.src = sourceImmagine;
    imgElement.alt = nomePersonaggio;

    document.getElementById("question").innerHTML = `🎉 Hai indovinato! Il personaggio è <strong>${nomePersonaggio}</strong>!`;
    
    resetGameControls();
}

function resetGameControls() {
    isPlaying = false;
    document.getElementById("btnYes").disabled = true;
    document.getElementById("btnNo").disabled = true;
    document.getElementById("btnStart").innerText = "Gioca di Nuovo";
}