/*
  Petits Mots — deck file
  =======================
  This one file defines the app's built-in flashcards. To change the deck,
  edit this file, commit, and push — every phone syncs on its next launch
  (it can take up to two launches for the phone to fetch the new version).

  Card format — one object per card:
    k : unique id for the card. Lowercase letters/digits/hyphens. Once a
        card has shipped, NEVER change or reuse its k — it is how phones
        track progress for that card across edits.
    w : the French text. Shown big on the card and spoken aloud by the
        French voice. Include the article for nouns ("le chien").
    h : short English meaning, shown small for the grown-up.
    e : one or two emoji used as the card's picture.

  Rules:
  - To ADD a card: append a new object with a brand-new k.
  - To REMOVE a card: delete its line. Phones will remove it too.
  - To EDIT a card: change w/h/e but keep k the same. Progress is kept.
    (If a parent has edited that card inside the app, their version wins.)
  - Keep this file valid JavaScript. Accented letters are fine (UTF-8).
  - This repo is PUBLIC: no private details (ages, birthdays, school
    names, addresses) in any card.
*/
const DECK = {
  cards: [
    // Animals
    { k: "chien", w: "le chien", h: "dog", e: "🐶" },
    { k: "chat", w: "le chat", h: "cat", e: "🐱" },
    { k: "oiseau", w: "l'oiseau", h: "bird", e: "🐦" },
    { k: "poisson", w: "le poisson", h: "fish", e: "🐟" },
    { k: "cheval", w: "le cheval", h: "horse", e: "🐴" },
    { k: "lapin", w: "le lapin", h: "rabbit", e: "🐰" },
    { k: "vache", w: "la vache", h: "cow", e: "🐮" },
    { k: "canard", w: "le canard", h: "duck", e: "🦆" },
    { k: "papillon", w: "le papillon", h: "butterfly", e: "🦋" },

    // Colours
    { k: "rouge", w: "rouge", h: "red", e: "🔴" },
    { k: "bleu", w: "bleu", h: "blue", e: "🔵" },
    { k: "vert", w: "vert", h: "green", e: "🟢" },
    { k: "jaune", w: "jaune", h: "yellow", e: "🟡" },

    // Numbers
    { k: "un", w: "un", h: "one", e: "1️⃣" },
    { k: "deux", w: "deux", h: "two", e: "2️⃣" },
    { k: "trois", w: "trois", h: "three", e: "3️⃣" },

    // Food
    { k: "pomme", w: "la pomme", h: "apple", e: "🍎" },
    { k: "banane", w: "la banane", h: "banana", e: "🍌" },
    { k: "pain", w: "le pain", h: "bread", e: "🍞" },
    { k: "lait", w: "le lait", h: "milk", e: "🥛" },
    { k: "fromage", w: "le fromage", h: "cheese", e: "🧀" },
    { k: "gateau", w: "le gâteau", h: "cake", e: "🍰" },

    // Everyday things
    { k: "soleil", w: "le soleil", h: "sun", e: "☀️" },
    { k: "lune", w: "la lune", h: "moon", e: "🌙" },
    { k: "etoile", w: "l'étoile", h: "star", e: "⭐" },
    { k: "fleur", w: "la fleur", h: "flower", e: "🌸" },
    { k: "arbre", w: "l'arbre", h: "tree", e: "🌳" },
    { k: "maison", w: "la maison", h: "house", e: "🏠" },
    { k: "voiture", w: "la voiture", h: "car", e: "🚗" },
    { k: "ballon", w: "le ballon", h: "balloon", e: "🎈" },

    // Simple sentences
    { k: "s-appelle", w: "Je m'appelle Amy.", h: "My name is Amy", e: "👧" },
    { k: "s-couleur", w: "Ma couleur préférée est le bleu.", h: "My favourite colour is blue", e: "💙" },
    { k: "s-chips", w: "J'aime manger des chips.", h: "I like to eat chips (the crunchy kind!)", e: "🥔😋" },
    { k: "s-bonjour", w: "Bonjour !", h: "Hello!", e: "👋" },
    { k: "s-merci", w: "Merci beaucoup !", h: "Thank you very much!", e: "🙏" },
    { k: "s-je-taime", w: "Je t'aime.", h: "I love you", e: "❤️" },
    { k: "s-bonne-nuit", w: "Bonne nuit.", h: "Good night", e: "😴" },
    { k: "s-encore", w: "Encore, s'il te plaît !", h: "Again, please!", e: "🔁" },
    { k: "s-ecole", w: "L'école des sorcières et des fées d'Amy", h: "Amy's school of witches and fairies", e: "🧙‍♀️🧚" }
  ]
};
