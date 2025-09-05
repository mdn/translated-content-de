---
title: "Herausforderung: Alberne Geschichte-Generator"
short-title: "Herausforderung: Geschichte-Generator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 45327605b81a4503410411d8f6a9490798e156fb
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung sollen Sie einige der Kenntnisse, die Sie in diesem Modul bisher erworben haben, anwenden, um eine lustige App zu erstellen, die zufällige alberne Geschichten generiert. Dabei testen wir Ihr Wissen über Variablen, Mathematik, Strings und Arrays. Viel Spaß!

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Taste in einem der untenstehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität zu vervollständigen.

```html live-sample___silly-story-start live-sample___silly-story-finish
<div>
  <label for="custom-name">Enter custom name:</label>
  <input id="custom-name" type="text" placeholder="" />
</div>
<fieldset>
  <legend>Choose locale:</legend>
  <label for="us">US</label
  ><input id="us" type="radio" name="uk-us" value="us" checked />
  <label for="uk">UK</label
  ><input id="uk" type="radio" name="uk-us" value="uk" />
</fieldset>
<div>
  <button class="generate">Generate random story</button>
</div>
<!-- Thanks a lot to Willy Aguirre for his help with the code for this assessment -->
<p class="story"></p>
```

```css hidden live-sample___silly-story-start live-sample___silly-story-finish
body {
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
  width: 500px;
}

fieldset {
  border: 0;
}

fieldset,
legend {
  padding: 0;
  margin: 0;
}

input[type="text"] {
  margin-top: 5px;
  padding: 5px;
  width: 50%;
  display: block;
}

div,
fieldset {
  margin-top: 20px;
}

p {
  margin-top: 10px;
  background: #ffc125;
  padding: 20px;
  visibility: hidden;
}
```

```js live-sample___silly-story-start
// 1. COMPLETE VARIABLE DEFINITIONS AND RANDOM FUNCTION

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// 3. PARTIAL RETURN RANDOM STRING FUNCTION

function returnRandomStoryString() {

// It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

return storyText;

}

// 4. EVENT LISTENER AND PARTIAL GENERATE FUNCTION DEFINITION

generateBtn.addEventListener('click', generateStory);

function generateStory() {

  if(customName.value !== "") {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = "visible";
}
```

{{EmbedLiveSample("silly-story-start", "100%", 300)}}

## Projektbeschreibung

Ihnen wurden einige Textstrings und JavaScript-Funktionen bereitgestellt; Sie müssen das notwendige JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Erzeugt eine alberne Geschichte, wenn die Schaltfläche "Erzeuge zufällige Geschichte" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Geben Sie einen benutzerdefinierten Namen ein" eingegeben wird, bevor der Generieren-Button gedrückt wird.
- Konvertiert die standardmäßigen US-Gewichts- und Temperaturmengen und -einheiten in der Geschichte in britische Äquivalente, wenn die UK-Radiobox aktiviert ist, bevor der Generieren-Button gedrückt wird.
- Erzeugt jedes Mal eine neue zufällige alberne Geschichte, wenn die Schaltfläche gedrückt wird.

### Anfangsvariablen und Funktionen

Im JavaScript, unterhalb des Kommentars "COMPLETE VARIABLE DEFINITIONS AND RANDOM FUNCTION", haben Sie drei Konstanten, die Referenzen speichern zu:

- Dem Textfeld "Geben Sie einen benutzerdefinierten Namen ein": `customName`.
- Der Schaltfläche "Erzeuge zufällige Geschichte": `generateBtn`.
- Dem {{htmlelement("p")}} Element am unteren Rand des HTML-Körpers, in das die Geschichte kopiert wird: `story`.

Zusätzlich gibt es eine Funktion namens `randomValueFromArray()`, die ein Array als Eingabe nimmt und einen der darin gespeicherten Einträge zufällig zurückgibt.

Unterhalb des Kommentars "RAW TEXT STRINGS" haben Sie einige auskommentierte Textstrings, die als Eingabe in unser Programm dienen werden. Wir möchten, dass Sie diese Strings auskommentieren und in Konstanten speichern, und zwar so:

1. Speichern Sie die erste Gruppe von drei Strings in einem Array namens `characters`.
2. Speichern Sie die zweite Gruppe von drei Strings in einem Array namens `places`.
3. Speichern Sie die dritte Gruppe von drei Strings in einem Array namens `events`.

### Vervollständigen der Funktion `returnRandomStoryString()`

Unterhalb des Kommentars "PARTIAL RETURN RANDOM STRING FUNCTION" haben Sie eine teilweise vervollständigte Funktion `returnRandomStoryString()`, die einen langen, auskommentierten Textstring und eine `return`-Anweisung enthält, die einen Wert namens `storyText` zurückgibt.

Um diese Funktion zu vervollständigen:

1. Heben Sie die Auskommentierung des langen Textstrings auf und speichern Sie ihn in einer Variablen namens `storyText`. Dies sollte ein Template Literal sein.
2. Fügen Sie drei Konstanten namens `randomCharacter`, `randomPlace` und `randomEvent` direkt über dem Template Literal hinzu. Diese sollten auf drei `randomValueFromArray()`-Aufrufe gesetzt werden, die einen zufälligen String aus den Arrays `characters`, `places` und `events` zurückgeben.
3. Ersetzen Sie im Template Literal die Instanzen von `:insertx:`, `:inserty:`, und `:insertz:` durch eingebettete Ausdrücke, die `randomCharacter`, `randomPlace` und `randomEvent` enthalten.

### Vervollständigen der Funktion `generateStory()`

Unterhalb des Kommentars "EVENT LISTENER AND PARTIAL GENERATE FUNCTION DEFINITION", haben Sie ein paar Code-Elemente:

- Eine Zeile, die einen `click`-Event-Listener zur Variablen `generateBtn` hinzufügt, sodass, wenn die von ihr dargestellte Schaltfläche geklickt wird, die Funktion `generateStory()` ausgeführt wird.
- Eine teilweise vervollständigte Definition der Funktion `generateStory()`. Für den Rest der Herausforderung füllen Sie Zeilen in dieser Funktion aus, um sie zu vervollständigen und richtig arbeiten zu lassen.

Befolgen Sie diese Schritte, um die Funktion zu vervollständigen:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie deren Wert gleich einem Aufruf von `returnRandomStoryString()`. Diese Funktion wird benötigt, damit wir jedes Mal, wenn der Button gedrückt wird, eine neue zufällige Geschichte erstellen können. Wenn wir `newStory` direkt auf `storyText` setzen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Fügen Sie im ersten `if`-Block einen String-Ersatzmethodenaufruf hinzu, um den Namen `Bob`, der im String `newStory` gefunden wird, durch die Variable `name` zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das `customName` Textinput eingegeben wurde, ersetze `Bob` in der Geschichte durch diesen benutzerdefinierten Namen."
3. Im zweiten `if`-Block prüfen wir, ob die `uk`-Radiobox ausgewählt wurde. Wenn ja, wollen wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Stones und Celsius umrechnen. Folgendes müssen Sie tun:
   1. Recherchieren Sie die Formeln zum Umrechnen von Pfund in Stein und von Fahrenheit in Celsius.
   2. Ersetzen Sie in der Zeile, die die Konstante `weight` definiert, `300` durch eine Berechnung, die 300 Pfund in Stones umrechnet. Verketteln Sie `" stone"` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs.
   3. Ersetzen Sie in der Zeile, die die Variable `temperature` definiert, `94` durch eine Berechnung, die 94 Fahrenheit in Celsius umrechnet. Verketteln Sie `" Celsius"` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs.
   4. Fügen Sie direkt unter den beiden Variablendefinitionen zwei weitere String-Ersatzzeilen hinzu, die `300 pounds` durch den Inhalt der `weight`-Variablen und `94 Fahrenheit` durch den Inhalt der `temperature`-Variablen ersetzen.
4. Schließlich machen Sie in der vorletzten Zeile der Funktion die `textContent`-Eigenschaft der `story`-Variable (die den Absatz referenziert) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen HTML und CSS in keiner Weise bearbeiten.
- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Strings, die ersetzt werden müssen. Sie könnten die Methode `replace()` verwenden oder eine andere Lösung.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("silly-story-finish", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige JavaScript sollte ungefähr so aussehen:

```js live-sample___silly-story-finish
// 1. COMPLETE VARIABLE DEFINITIONS AND RANDOM FUNCTION

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away",
];

// 3. PARTIAL RETURN RANDOM STRING FUNCTION

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// 4. EVENT LISTENER AND PARTIAL GENERATE FUNCTION DEFINITION

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * (5 / 9)) + " Celsius";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
```

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
