# steam-akinator
Un gioco interattivo in JavaScript stile Akinator dedicato ai personaggi storici e scientifici della cultura STEAM (Science, Technology, Engineering, Art, Mathematics).
# 👻 Steam Who? (Akinator STEAM Edition)

**Steam Who?** è un'applicazione web interattiva ispirata al celebre gioco *Akinator*, realizzata come progetto finale per il corso extracurricolare di **JavaScript**.

L'applicazione sfida l'utente a pensare a una delle 20 personalità storiche e scientifiche dell'ambito **STEAM** (*Science, Technology, Engineering, Art, Mathematics*). Attraverso un algoritmo di domande mirate sulle scoperte, invenzioni e biografie dei personaggi, il sistema restringe il campo fino ad indovinare a chi stai pensando.

🌐 **Demo Live**: [Gioca a Steam Who? online](https://jatinrai1.github.io/steam-akinator/)

---

## 🎯 Personaggi STEAM Inclusi

La lista include 20 grandi figure del mondo della scienza, tecnologia, ingegneria, arte e matematica:

- 🧠 **Albert Einstein**
- ☢️ **Marie Curie**
- ⚡ **Nikola Tesla**
- 🎨 **Leonardo da Vinci**
- 💻 **Ada Lovelace**
- 🍎 **Isaac Newton**
- 📱 **Steve Jobs**
- 🔭 **Galileo Galilei**
- 📻 **Hedy Lamarr**
- 📐 **Pythagoras**
- 🔑 **Alan Turing**
- 🪐 **Johannes Kepler**
- 💡 **Thomas Edison**
- 🌌 **Stephen Hawking**
- 🔢 **Leonardo Fibonacci**
- 🚀 **Katherine Johnson**
- ⚛️ **Maria Goeppert Mayer**
- 🧬 **Barbara McClintock**
- 🛸 **Mary Jackson**
- 🔬 **Lise Meitner**

---

## ✨ Funzionalità Principali

- **Domande Biografiche Univoche**: Quesiti specifici sulle scoperte e la vita di ciascun personaggio per evitare domande ridondanti o ripetitive.
- **Interfaccia Grafica Responsive**: Design moderno in modalità scura (*dark mode*), layout flessibile ed effetti visivi animati con CSS.
- **Stato dei Controlli Dinamico**: Pulsanti attivati/disattivati in base allo stato del gioco e schermata finale con immagine del personaggio indovinato.

---

## 🛠️ Tecnologie Utilizzate

| Tecnologia | Descrizione |
| :--- | :--- |
| **HTML5** | Strutturazione semantica dell'interfaccia. |
| **CSS3** | Layout responsive (Flexbox/Grid), variabili e animazioni `@keyframes`. |
| **JavaScript (ES6)** | Logica decisionale, gestione dello stato ed eventi DOM. |
| **GitHub Pages** | Hosting e pubblicazione online del progetto. |

---

## 📁 Struttura del Progetto

```text
steam-akinator/
│
├── css/
│   └── style.css          # Fogli di stile per layout, tema scuro e animazioni
├── img/
│   ├── question_mark.gif  # Immagine di copertina / placeholder
│   └── *.jpg / *.jpeg     # Ritratti ed illustrazioni dei personaggi STEAM
├── index.html             # Struttura HTML principale della pagina
├── script.js              # Logica di gioco, dataset personaggi e gestione eventi
└── README.md              # Documentazione ufficiale del progetto
