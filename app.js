const chapters = [
  {
    title: "Arjuna's Dilemma",
    hindi: "अर्जुन का विषाद",
    verses: 47,
    description: "On the battlefield, Arjuna is overwhelmed by the thought of fighting those he loves. His uncertainty opens the door to a deeper conversation.",
    descriptionHindi: "युद्धभूमि में अर्जुन अपने प्रियजनों के विरुद्ध लड़ने के विचार से विचलित हो जाते हैं। उनका यह संशय एक गहरे संवाद का द्वार खोलता है।",
    reflection: "What do you do when the right path feels difficult?",
    reflectionHindi: "जब सही रास्ता कठिन लगे, तब आप क्या करते हैं?",
    kicker: "THE FIRST STEP",
    kickerHindi: "पहला कदम"
  },
  {
    title: "The Yoga of Knowledge",
    hindi: "सांख्य योग",
    verses: 72,
    description: "Krishna begins by distinguishing the enduring self from what changes, and invites Arjuna to meet duty with steadiness.",
    descriptionHindi: "कृष्ण अविनाशी आत्मा और परिवर्तनशील शरीर का अंतर समझाते हैं, और अर्जुन को स्थिर बुद्धि से कर्तव्य निभाने का मार्ग दिखाते हैं।",
    reflection: "What remains steady when circumstances change?",
    reflectionHindi: "परिस्थितियाँ बदलें, तब भी आपके भीतर क्या स्थिर रहता है?",
    kicker: "THE NATURE OF SELF",
    kickerHindi: "आत्मा का स्वरूप"
  },
  {
    title: "The Yoga of Action",
    hindi: "कर्म योग",
    verses: 43,
    description: "Action is unavoidable. Krishna describes a way to act wholeheartedly without becoming attached to the outcome.",
    descriptionHindi: "कर्म से बचना संभव नहीं। कृष्ण फल की आसक्ति छोड़कर पूरे मन से कर्म करने का मार्ग बताते हैं।",
    reflection: "Could you give your best without needing to control the result?",
    reflectionHindi: "क्या आप परिणाम को नियंत्रित किए बिना अपना सर्वश्रेष्ठ दे सकते हैं?",
    kicker: "ACT WITH PURPOSE",
    kickerHindi: "उद्देश्य से कर्म"
  },
  {
    title: "The Yoga of Wisdom",
    hindi: "ज्ञान कर्म संन्यास योग",
    verses: 42,
    description: "Krishna speaks of wisdom passed through generations, and of recognizing understanding in the way we act.",
    descriptionHindi: "कृष्ण पीढ़ियों से चली आ रही दिव्य ज्ञान-परंपरा और विवेकपूर्ण कर्म के महत्व को समझाते हैं।",
    reflection: "What have you learned that changed how you act?",
    reflectionHindi: "किस सीख ने आपके कर्म करने का तरीका बदला है?",
    kicker: "WISDOM IN ACTION",
    kickerHindi: "कर्म में ज्ञान"
  },
  {
    title: "The Yoga of Renunciation",
    hindi: "कर्म संन्यास योग",
    verses: 29,
    description: "True renunciation is not simply leaving the world behind; it is loosening the grip of ego while still doing what is needed.",
    descriptionHindi: "सच्चा संन्यास संसार छोड़ना ही नहीं, बल्कि आवश्यक कर्म करते हुए अहंकार की पकड़ ढीली करना है।",
    reflection: "What could you do with less need for recognition?",
    reflectionHindi: "यदि प्रशंसा की चाह कम हो, तो आप क्या कर सकते हैं?",
    kicker: "FREEDOM IN DOING",
    kickerHindi: "कर्म में स्वतंत्रता"
  },
  {
    title: "The Yoga of Meditation",
    hindi: "ध्यान योग",
    verses: 47,
    description: "A balanced life and a trained, patient mind make space for meditation. Even an unsteady start matters.",
    descriptionHindi: "संतुलित जीवन और धैर्य से साधा गया मन ध्यान का आधार बनते हैं। अस्थिर शुरुआत भी मूल्यवान है।",
    reflection: "What small ritual helps you return to yourself?",
    reflectionHindi: "कौन-सा छोटा अभ्यास आपको स्वयं से जोड़ता है?",
    kicker: "MEET THE MIND",
    kickerHindi: "मन को समझें"
  },
  {
    title: "The Yoga of Understanding",
    hindi: "ज्ञान विज्ञान योग",
    verses: 30,
    description: "Krishna explores the nature of the divine and how a deeper understanding can shape the way we see everyday life.",
    descriptionHindi: "कृष्ण परम सत्य के स्वरूप और गहरी समझ से जीवन को देखने की दृष्टि के बारे में बताते हैं।",
    reflection: "Where do you find a sense of wonder in ordinary life?",
    reflectionHindi: "साधारण जीवन में आपको विस्मय कहाँ दिखाई देता है?",
    kicker: "SEEING MORE CLEARLY",
    kickerHindi: "स्पष्ट दृष्टि"
  },
  {
    title: "The Imperishable",
    hindi: "अक्षर ब्रह्म योग",
    verses: 28,
    description: "A reflection on the eternal, the meaning of remembrance, and how our attention shapes the direction of our lives.",
    descriptionHindi: "अविनाशी तत्व, स्मरण के अर्थ और हमारी चेतना जीवन की दिशा कैसे तय करती है—इस पर चिंतन।",
    reflection: "What deserves your attention most?",
    reflectionHindi: "आपके ध्यान का सबसे अधिक अधिकारी क्या है?",
    kicker: "WHAT ENDURES",
    kickerHindi: "जो शाश्वत है"
  },
  {
    title: "The Royal Knowledge",
    hindi: "राजविद्या राजगुह्य योग",
    verses: 34,
    description: "Krishna presents a welcoming path of trust and devotion, open to anyone who approaches with sincerity.",
    descriptionHindi: "कृष्ण श्रद्धा और भक्ति का सहज मार्ग बताते हैं, जो सच्चे मन से आने वाले हर व्यक्ति के लिए खुला है।",
    reflection: "What does wholehearted trust look like to you?",
    reflectionHindi: "आपके लिए सच्चे विश्वास का क्या अर्थ है?",
    kicker: "A PATH OPEN TO ALL",
    kickerHindi: "सबके लिए खुला मार्ग"
  },
  {
    title: "The Yoga of Divine Glory",
    hindi: "विभूति योग",
    verses: 42,
    description: "The many forms of excellence and beauty in the world become reminders of the sacred, wherever they appear.",
    descriptionHindi: "संसार में जहाँ भी श्रेष्ठता और सुंदरता दिखे, वे परमात्मा की विभूतियों का स्मरण कराती हैं।",
    reflection: "What beauty or excellence made you pause today?",
    reflectionHindi: "आज किस सुंदरता या श्रेष्ठता ने आपको ठहरकर देखने पर विवश किया?",
    kicker: "NOTICE THE EXTRAORDINARY",
    kickerHindi: "असाधारण को पहचानें"
  },
  {
    title: "The Vision of the Universal Form",
    hindi: "विश्वरूप दर्शन योग",
    verses: 55,
    description: "Arjuna is given a vast vision of existence, one that expands his understanding beyond the familiar and individual.",
    descriptionHindi: "अर्जुन को विराट स्वरूप का दर्शन होता है, जो उनकी समझ को परिचित और व्यक्तिगत सीमाओं से आगे ले जाता है।",
    reflection: "What helps you see beyond your own point of view?",
    reflectionHindi: "अपनी दृष्टि से आगे देखने में आपको क्या सहायता देता है?",
    kicker: "A WIDER VISION",
    kickerHindi: "विराट दृष्टि"
  },
  {
    title: "The Yoga of Devotion",
    hindi: "भक्ति योग",
    verses: 20,
    description: "Krishna describes devotion as a loving, steady practice, expressed through qualities like kindness, patience, and humility.",
    descriptionHindi: "कृष्ण भक्ति को प्रेमपूर्ण और स्थिर साधना बताते हैं, जो करुणा, धैर्य और विनम्रता में प्रकट होती है।",
    reflection: "Which quality would you like to practice more often?",
    reflectionHindi: "आप किस गुण का अधिक अभ्यास करना चाहेंगे?",
    kicker: "A HEARTFUL PRACTICE",
    kickerHindi: "हृदय से साधना"
  },
  {
    title: "The Field and the Knower",
    hindi: "क्षेत्र क्षेत्रज्ञ विभाग योग",
    verses: 35,
    description: "A distinction between the body and mind we experience, and the awareness that observes them.",
    descriptionHindi: "अनुभव किए जाने वाले शरीर-मन और उन्हें देखने वाली चेतना के बीच का अंतर।",
    reflection: "Can you notice a thought without becoming the thought?",
    reflectionHindi: "क्या आप किसी विचार को अपना स्वरूप माने बिना देख सकते हैं?",
    kicker: "THE INNER WITNESS",
    kickerHindi: "अंतर का साक्षी"
  },
  {
    title: "The Three Qualities",
    hindi: "गुणत्रय विभाग योग",
    verses: 27,
    description: "Three qualities—clarity, activity, and inertia—shape our choices. Awareness can help us move toward balance.",
    descriptionHindi: "सत्त्व, रज और तम—ये तीन गुण हमारे चुनावों को प्रभावित करते हैं। सजगता संतुलन की ओर ले जाती है।",
    reflection: "Which quality is most present in your day right now?",
    reflectionHindi: "इस समय आपके दिन में कौन-सा गुण सबसे अधिक है?",
    kicker: "FIND YOUR BALANCE",
    kickerHindi: "संतुलन खोजें"
  },
  {
    title: "The Supreme Self",
    hindi: "पुरुषोत्तम योग",
    verses: 20,
    description: "The image of an ancient tree invites reflection on our roots, attachments, and the source of lasting meaning.",
    descriptionHindi: "संसार रूपी अश्वत्थ वृक्ष का रूपक हमारी जड़ों, आसक्तियों और शाश्वत अर्थ के स्रोत पर चिंतन कराता है।",
    reflection: "Which attachment might you hold a little more lightly?",
    reflectionHindi: "किस आसक्ति को आप थोड़ा हल्के हाथ से थाम सकते हैं?",
    kicker: "ROOTS AND MEANING",
    kickerHindi: "जड़ें और अर्थ"
  },
  {
    title: "The Divine and the Demonic",
    hindi: "दैवासुर संपद्विभाग योग",
    verses: 24,
    description: "Krishna contrasts qualities that bring freedom with those that lead to harm, and emphasizes the value of self-awareness.",
    descriptionHindi: "कृष्ण मुक्ति देने वाले और बंधन बढ़ाने वाले गुणों का अंतर बताते हैं तथा आत्मचिंतन का महत्व समझाते हैं।",
    reflection: "Which quality do you want your choices to reflect?",
    reflectionHindi: "आपके चुनाव किस गुण को दर्शाएँ, यह आप चाहेंगे?",
    kicker: "CHOOSE WITH CARE",
    kickerHindi: "सजग चुनाव"
  },
  {
    title: "The Three Kinds of Faith",
    hindi: "श्रद्धात्रय विभाग योग",
    verses: 28,
    description: "Faith shows itself in what we value, how we eat, give, and speak. Intention gives these everyday acts their character.",
    descriptionHindi: "हमारे मूल्य, भोजन, दान और वाणी में श्रद्धा झलकती है। हमारी भावना इन साधारण कर्मों को अर्थ देती है।",
    reflection: "What do your everyday choices say you value?",
    reflectionHindi: "आपके रोज़मर्रा के चुनाव आपके मूल्यों के बारे में क्या बताते हैं?",
    kicker: "THE SHAPE OF FAITH",
    kickerHindi: "श्रद्धा का स्वरूप"
  },
  {
    title: "The Yoga of Liberation",
    hindi: "मोक्ष संन्यास योग",
    verses: 78,
    description: "The conversation comes together: act with care, understand your nature, and choose a path with a clear and open heart.",
    descriptionHindi: "संवाद का सार: सजगता से कर्म करें, अपने स्वभाव को समझें और खुले हृदय से अपना मार्ग चुनें।",
    reflection: "What is one insight you want to carry into tomorrow?",
    reflectionHindi: "कौन-सी एक सीख आप कल के लिए साथ ले जाना चाहेंगे?",
    kicker: "BRING IT TOGETHER",
    kickerHindi: "सार को अपनाएँ"
  }
];

const translations = {
  en: {
    navHome: "Home", navChapters: "Chapters", navPractice: "My practice",
    eyebrow: "YOUR DAILY MOMENT OF CLARITY", welcomeLine1: "A little wisdom,", welcomeLine2: "every day.",
    welcomeText: "Explore the Bhagavad Gita at your own pace. Begin wherever you are.",
    exploreButton: "Explore the Gita", verseOfDay: "VERSE FOR TODAY", verseReference: "CHAPTER 2 · VERSE 47",
    verseMeaning: "You have the right to your actions, not to the fruits they bring. Let your work be your focus—not its reward—and do not retreat from action.",
    verseNote: "A plain-language reflection", markLearned: "Mark as reflected", learned: "Reflected today",
    yourJourney: "YOUR JOURNEY", steadySteps: "Steady steps.", chaptersExplored: "Chapters explored",
    journeyNote: "Every thoughtful step is progress. Continue when you're ready.", continueButton: "Continue learning",
    theJourney: "THE JOURNEY", exploreChapters: "Explore the chapters",
    chaptersSubtitle: "Eighteen conversations. One timeless path.", searchPlaceholder: "Find a chapter",
    minutes: "8 min read", reflectionPrompt: "A QUESTION TO CARRY", completeChapter: "Mark chapter complete",
    completedChapter: "Chapter completed", noChapters: "No chapters found. Try another search.",
    footerText: "A quiet space to learn, reflect, and return.", saveVerse: "Save verse", verseSaved: "Verse saved to your practice.",
    verseRemoved: "Verse removed from your practice.", reflectionRemoved: "Reflection unchecked.", chapterSaved: "Chapter marked complete.",
    chapterRemoved: "Chapter marked as in progress.", storageError: "Progress could not be saved. Check your browser storage settings.",
    searchShortcut: "Press / to search chapters", learningDashboard: "Your learning dashboard",
    chapterListLabel: "Bhagavad Gita chapters", chaptersCompleted: "Chapters completed",
    findChapter: "Find a chapter", readerEyebrow: "THE ORIGINAL TEXT",
    readerSubtitle: "Read each Sanskrit shloka with its transliteration.",
    loadingVerses: "Loading verses…", versesLoadError: "Verses could not be loaded. Please reload the page to try again.",
    verseCount: "verses", verseLabel: "VERSE", sanskritLabel: "संस्कृत",
    transliterationLabel: "Transliteration",
    verseSourceIntro: "Sanskrit text and transliteration from the ",
    verseSourceLicense: ", released under the Unlicense."
  },
  hi: {
    navHome: "मुखपृष्ठ", navChapters: "अध्याय", navPractice: "मेरा अभ्यास",
    eyebrow: "हर दिन स्पष्टता का एक पल", welcomeLine1: "थोड़ा ज्ञान,", welcomeLine2: "हर दिन।",
    welcomeText: "भगवद्गीता को अपनी गति से जानें। जहाँ हैं, वहीं से शुरू करें।",
    exploreButton: "गीता को जानें", verseOfDay: "आज का श्लोक", verseReference: "अध्याय २ · श्लोक ४७",
    verseMeaning: "आपका अधिकार कर्म पर है, उसके फल पर नहीं। अपने कर्म को ध्येय बनाएँ, फल को नहीं—और कर्म से विमुख न हों।",
    verseNote: "सरल भावार्थ", markLearned: "चिंतन पूरा करें", learned: "आज चिंतन किया",
    yourJourney: "आपकी यात्रा", steadySteps: "धीरे-धीरे आगे।", chaptersExplored: "पूरे किए अध्याय",
    journeyNote: "हर सजग कदम प्रगति है। तैयार हों, तब आगे बढ़ें।", continueButton: "सीखना जारी रखें",
    theJourney: "आपकी यात्रा", exploreChapters: "अध्यायों को जानें",
    chaptersSubtitle: "अठारह संवाद। एक शाश्वत मार्ग।", searchPlaceholder: "अध्याय खोजें",
    minutes: "८ मिनट", reflectionPrompt: "चिंतन का प्रश्न", completeChapter: "अध्याय पूरा करें",
    completedChapter: "अध्याय पूरा हुआ", noChapters: "अध्याय नहीं मिला। कुछ और खोजें।",
    footerText: "सीखने, चिंतन करने और लौटने का शांत स्थान।", saveVerse: "श्लोक सहेजें", verseSaved: "श्लोक आपके अभ्यास में सहेजा गया।",
    verseRemoved: "श्लोक आपके अभ्यास से हटाया गया।", reflectionRemoved: "चिंतन का चिह्न हटाया गया।", chapterSaved: "अध्याय पूरा चिह्नित किया गया।",
    chapterRemoved: "अध्याय को जारी चिह्नित किया गया।", storageError: "प्रगति सहेजी नहीं जा सकी। ब्राउज़र स्टोरेज सेटिंग जाँचें।",
    searchShortcut: "अध्याय खोजने के लिए / दबाएँ", learningDashboard: "आपका अध्ययन डैशबोर्ड",
    chapterListLabel: "भगवद्गीता के अध्याय", chaptersCompleted: "पूरे किए अध्याय",
    findChapter: "अध्याय खोजें", readerEyebrow: "मूल पाठ",
    readerSubtitle: "हर संस्कृत श्लोक को उसके लिप्यंतरण के साथ पढ़ें।",
    loadingVerses: "श्लोक लोड हो रहे हैं…", versesLoadError: "श्लोक लोड नहीं हो सके। कृपया पृष्ठ फिर से लोड करें।",
    verseCount: "श्लोक", verseLabel: "श्लोक", sanskritLabel: "संस्कृत",
    transliterationLabel: "लिप्यंतरण",
    verseSourceIntro: "संस्कृत पाठ और लिप्यंतरण का स्रोत: ",
    verseSourceLicense: " (Unlicense के अंतर्गत उपलब्ध)।"
  }
};

const storageKey = "gita-learning-progress";
const defaultProgress = { completed: [], verseReflected: false, verseSaved: false };
let progress = loadProgress();
let language = "en";
let selectedChapter = 0;
let toastTimeout;
let versesByChapter = [];

const chapterList = document.querySelector("#chapterList");
const searchInput = document.querySelector("#chapterSearch");
const lessonNumber = document.querySelector("#lessonNumber");
const lessonKicker = document.querySelector("#lessonKicker");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonDescription = document.querySelector("#lessonDescription");
const lessonVerses = document.querySelector("#lessonVerses");
const lessonReflection = document.querySelector("#lessonReflection");
const completeButton = document.querySelector("#completeButton");
const progressCount = document.querySelector("#progressCount");
const progressFill = document.querySelector("#progressFill");
const progressBar = document.querySelector("#progressBar");
const statusMessage = document.querySelector("#statusMessage");
const bookmarkButton = document.querySelector("#bookmarkButton");
const learnedButton = document.querySelector("#learnedButton");
const readingChapterTitle = document.querySelector("#readingChapterTitle");
const readingCount = document.querySelector("#readingCount");
const verseLoadStatus = document.querySelector("#verseLoadStatus");
const verseList = document.querySelector("#verseList");

function loadProgress() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return { ...defaultProgress };
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.completed) || typeof parsed.verseReflected !== "boolean" || typeof parsed.verseSaved !== "boolean") {
      throw new TypeError("Saved learning progress has an unexpected format.");
    }
    return {
      completed: parsed.completed.filter((index) => Number.isInteger(index) && index >= 0 && index < chapters.length),
      verseReflected: parsed.verseReflected,
      verseSaved: parsed.verseSaved
    };
  } catch (error) {
    console.error("Could not read saved Gita learning progress.", error);
    return { ...defaultProgress };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error("Could not save Gita learning progress.", error);
    showToast(translations[language].storageError);
    return false;
  }
}

function textFor(key) {
  return translations[language][key];
}

function chapterTitle(chapter) {
  return language === "hi" ? chapter.hindi : chapter.title;
}

function renderChapters() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filtered = chapters
    .map((chapter, index) => ({ chapter, index }))
    .filter(({ chapter, index }) => {
      const number = String(index + 1).padStart(2, "0");
      return !query || `${chapter.title} ${chapter.hindi} ${number}`.toLocaleLowerCase().includes(query);
    });

  chapterList.replaceChildren();
  document.querySelector("#emptyState").hidden = filtered.length !== 0;

  for (const { chapter, index } of filtered) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-item";
    if (index === selectedChapter) button.classList.add("selected");
    if (progress.completed.includes(index)) button.classList.add("completed");
    button.setAttribute("aria-pressed", String(index === selectedChapter));
    button.setAttribute("aria-label", `${language === "hi" ? "अध्याय" : "Chapter"} ${index + 1}: ${chapterTitle(chapter)}`);

    const number = document.createElement("span");
    number.className = "chapter-index";
    number.textContent = String(index + 1).padStart(2, "0");

    const copy = document.createElement("span");
    copy.className = "chapter-copy";
    const title = document.createElement("strong");
    title.textContent = chapterTitle(chapter);
    const meta = document.createElement("span");
    meta.textContent = `${chapter.verses} ${language === "hi" ? "श्लोक" : "verses"}`;
    copy.append(title, meta);

    const state = document.createElement("span");
    state.className = "chapter-status";
    state.setAttribute("aria-hidden", "true");
    state.textContent = progress.completed.includes(index) ? "✓" : "";

    button.append(number, copy, state);
    button.addEventListener("click", () => {
      selectedChapter = index;
      renderChapters();
      renderLesson();
      renderVerses();
    });
    chapterList.append(button);
  }
}

function renderLesson() {
  const chapter = chapters[selectedChapter];
  lessonNumber.textContent = String(selectedChapter + 1).padStart(2, "0");
  lessonKicker.textContent = language === "hi" ? chapter.kickerHindi : chapter.kicker;
  lessonTitle.textContent = chapterTitle(chapter);
  lessonDescription.textContent = language === "hi" ? chapter.descriptionHindi : chapter.description;
  lessonVerses.textContent = `${chapter.verses} ${language === "hi" ? "श्लोक" : "verses"}`;
  lessonReflection.textContent = language === "hi" ? chapter.reflectionHindi : chapter.reflection;
  const completed = progress.completed.includes(selectedChapter);
  completeButton.setAttribute("aria-pressed", String(completed));
  completeButton.querySelector("span:first-child").textContent = completed ? textFor("completedChapter") : textFor("completeChapter");
}

async function loadVerseData() {
  try {
    const response = await fetch(new URL("data/gita-verses.json", document.baseURI));
    if (!response.ok) throw new Error(`Verse data request failed with HTTP ${response.status}.`);

    const verses = await response.json();
    if (!Array.isArray(verses)) throw new TypeError("Verse data must be an array.");

    const grouped = chapters.map(() => []);
    for (const verse of verses) {
      if (!Number.isInteger(verse.chapter) || !Number.isInteger(verse.verse)
        || typeof verse.sanskrit !== "string" || !verse.sanskrit.trim()
        || typeof verse.transliteration !== "string" || !verse.transliteration.trim()
        || !grouped[verse.chapter - 1]) {
        throw new TypeError("Verse data contains an invalid entry.");
      }
      grouped[verse.chapter - 1].push(verse);
    }

    for (const [index, chapterVerses] of grouped.entries()) {
      chapterVerses.sort((a, b) => a.verse - b.verse);
      if (chapterVerses.length !== chapters[index].verses
        || chapterVerses.some((verse, verseIndex) => verse.verse !== verseIndex + 1)) {
        throw new TypeError(`Verse data is incomplete or out of sequence for chapter ${index + 1}.`);
      }
    }

    versesByChapter = grouped;
    renderVerses();
  } catch (error) {
    console.error("Could not load Bhagavad Gita verse text.", error);
    verseList.replaceChildren();
    verseLoadStatus.textContent = textFor("versesLoadError");
    verseLoadStatus.hidden = false;
  }
}

function renderVerses() {
  const chapter = chapters[selectedChapter];
  const chapterVerses = versesByChapter[selectedChapter];
  readingChapterTitle.textContent = chapterTitle(chapter);
  readingCount.textContent = `${chapter.verses} ${textFor("verseCount")}`;
  verseList.replaceChildren();

  if (!chapterVerses) {
    verseLoadStatus.textContent = textFor("loadingVerses");
    verseLoadStatus.hidden = false;
    return;
  }

  verseLoadStatus.hidden = true;
  for (const verse of chapterVerses) {
    const card = document.createElement("article");
    card.className = "verse-entry";

    const label = document.createElement("p");
    label.className = "verse-entry-number";
    label.textContent = `${textFor("verseLabel")} ${verse.verse}`;

    const sanskritLabel = document.createElement("p");
    sanskritLabel.className = "verse-entry-label";
    sanskritLabel.textContent = textFor("sanskritLabel");

    const sanskrit = document.createElement("p");
    sanskrit.className = "verse-entry-sanskrit";
    sanskrit.lang = "sa";
    sanskrit.textContent = verse.sanskrit;

    const transliterationLabel = document.createElement("p");
    transliterationLabel.className = "verse-entry-label";
    transliterationLabel.textContent = textFor("transliterationLabel");

    const transliteration = document.createElement("p");
    transliteration.className = "verse-entry-transliteration";
    transliteration.lang = "sa-Latn";
    transliteration.textContent = verse.transliteration;

    card.append(label, sanskritLabel, sanskrit, transliterationLabel, transliteration);
    verseList.append(card);
  }
}

function renderProgress() {
  const completedCount = progress.completed.length;
  progressCount.textContent = `${completedCount} / 18`;
  progressFill.style.width = `${(completedCount / chapters.length) * 100}%`;
  progressBar.setAttribute("aria-valuenow", String(completedCount));
  bookmarkButton.setAttribute("aria-pressed", String(progress.verseSaved));
  bookmarkButton.setAttribute("aria-label", textFor("saveVerse"));
  learnedButton.querySelector("span:first-child").textContent = progress.verseReflected ? textFor("learned") : textFor("markLearned");
  learnedButton.setAttribute("aria-pressed", String(progress.verseReflected));
}

function renderLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = textFor(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = textFor(element.dataset.i18nPlaceholder);
  });
  document.querySelector("#languageToggle").textContent = language === "en" ? "हिंदी" : "English";
  document.querySelector("#languageToggle").setAttribute("aria-label", language === "en" ? "हिन्दी में बदलें" : "Switch to English");
  document.querySelector("#dashboard").setAttribute("aria-label", textFor("learningDashboard"));
  chapterList.setAttribute("aria-label", textFor("chapterListLabel"));
  searchInput.setAttribute("aria-label", textFor("findChapter"));
  progressBar.setAttribute("aria-label", textFor("chaptersCompleted"));
  document.querySelector("#verseMeaning").textContent = textFor("verseMeaning");
  renderChapters();
  renderLesson();
  renderVerses();
  renderProgress();
}

function showToast(message) {
  statusMessage.textContent = message;
  statusMessage.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => statusMessage.classList.remove("visible"), 2600);
}

document.querySelector("#languageToggle").addEventListener("click", () => {
  language = language === "en" ? "hi" : "en";
  renderLanguage();
});

searchInput.addEventListener("input", renderChapters);

document.querySelector("#completeButton").addEventListener("click", () => {
  const wasCompleted = progress.completed.includes(selectedChapter);
  progress.completed = wasCompleted
    ? progress.completed.filter((index) => index !== selectedChapter)
    : [...progress.completed, selectedChapter];
  if (!saveProgress()) {
    progress.completed = wasCompleted
      ? [...progress.completed, selectedChapter]
      : progress.completed.filter((index) => index !== selectedChapter);
    return;
  }
  renderChapters();
  renderLesson();
  renderProgress();
  showToast(textFor(wasCompleted ? "chapterRemoved" : "chapterSaved"));
});

learnedButton.addEventListener("click", () => {
  progress.verseReflected = !progress.verseReflected;
  if (!saveProgress()) {
    progress.verseReflected = !progress.verseReflected;
    return;
  }
  renderProgress();
  showToast(textFor(progress.verseReflected ? "learned" : "reflectionRemoved"));
});

bookmarkButton.addEventListener("click", () => {
  progress.verseSaved = !progress.verseSaved;
  if (!saveProgress()) {
    progress.verseSaved = !progress.verseSaved;
    return;
  }
  renderProgress();
  showToast(textFor(progress.verseSaved ? "verseSaved" : "verseRemoved"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderLanguage();
loadVerseData();
