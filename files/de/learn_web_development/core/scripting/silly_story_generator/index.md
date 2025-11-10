---
title: "Herausforderung: Lustige Geschichtengenerator"
short-title: "Herausforderung: Geschichtengenerator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung sollen Sie das bisher in diesem Modul erworbene Wissen anwenden, um eine unterhaltsame App zu erstellen, die zufällige lustige Geschichten generiert. Dabei wird Ihr Wissen zu Variablen, Mathematik, Zeichenfolgen und Arrays geprüft. Viel Spaß!

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der untenstehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektauftrag](#projektauftrag), um die JavaScript-Funktionalität zu vervollständigen.

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
// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// Partial return random string function

function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}
```

{{EmbedLiveSample("silly-story-start", "100%", 300)}}

## Projektauftrag

Sie haben einige Textzeichenfolgen und JavaScript-Funktionen zur Verfügung gestellt bekommen; Sie müssen das erforderliche JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Generiert eine lustige Geschichte, wenn die Schaltfläche "Zufällige Geschichte generieren" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Benutzerdefinierten Namen eingeben" eingegeben wurde, bevor die Generieren-Schaltfläche gedrückt wird.
- Konvertiert die standardmäßigen US-Gewichts- und Temperaturmengen und -einheiten in der Geschichte in britische Äquivalente, wenn das UK-Radiobutton angeklickt ist, bevor die Generieren-Schaltfläche gedrückt wird.
- Generiert jedes Mal, wenn die Schaltfläche gedrückt wird, eine neue zufällige lustige Geschichte.

### Initiale Variablen und Funktionen

Im JavaScript, unter dem Kommentar "Vervollständigen der Variablen-Definitionen und Zufallsfunktion", haben Sie drei Konstanten, die Verweise speichern auf:

- Das Textfeld "Benutzerdefinierten Namen eingeben": `customName`.
- Die Schaltfläche "Zufällige Geschichte generieren": `generateBtn`.
- Das {{htmlelement("p")}} Element am unteren Rand des HTML-Körpers, in welches die Geschichte kopiert wird: `story`.

Zusätzlich gibt es eine Funktion namens `randomValueFromArray()`, die ein Array als Eingabe nimmt und ein zufälliges Element aus dem Array zurückgibt.

Unter dem Kommentar "Rohtextzeichenfolgen", haben Sie einige kommentierte Textzeichenfolgen, die als Eingabe für unser Programm dienen. Bitte entfernen Sie die Kommentare dieser Zeichenfolgen und speichern Sie sie in Konstanten wie folgt:

1. Speichern Sie den ersten Satz von drei Zeichenfolgen innerhalb eines Arrays namens `characters`.
2. Speichern Sie den zweiten Satz von drei Zeichenfolgen innerhalb eines Arrays namens `places`.
3. Speichern Sie den dritten Satz von drei Zeichenfolgen innerhalb eines Arrays namens `events`.

### Vervollständigung der `returnRandomStoryString()` Funktion

Unter dem Kommentar "Teilweise Rückgabe der Zufallszeichenfolgenfunktion" haben Sie eine teilweise vervollständigte `returnRandomStoryString()` Funktion, die eine lange, kommentierte Zeichenfolge und eine `return`-Anweisung enthält, die einen Wert namens `storyText` zurückgibt.

Um diese Funktion zu vervollständigen:

1. Entfernen Sie die Kommentare der langen Zeichenfolge und speichern Sie sie in einer Variablen namens `storyText`. Dies sollte ein Template Literal sein.
2. Fügen Sie drei Konstanten namens `randomCharacter`, `randomPlace` und `randomEvent` direkt über dem Template Literal hinzu. Diese sollten drei `randomValueFromArray()`-Aufrufen zugeordnet werden, die jeweils einen zufälligen String aus den Arrays `characters`, `places` und `events` zurückgeben.
3. Ersetzen Sie in dem Template Literal die Instanzen `:insertx:`, `:inserty:` und `:insertz:` durch eingebettete Ausdrücke, die `randomCharacter`, `randomPlace` und `randomEvent` enthalten.

### Vervollständigung der `generateStory()` Funktion

Unter dem Kommentar "Ereignis-Listener und teilweise Definition der Generierungsfunktion", haben Sie ein paar Code-Elemente:

- Eine Zeile, die einen `click`-Ereignis-Listener zur `generateBtn` Variable hinzufügt, sodass bei Klick auf die Schaltfläche die `generateStory()` Funktion ausgeführt wird.
- Eine teilweise vervollständigte `generateStory()` Funktionsdefinition. Für den Rest der Herausforderung vervollständigen Sie die Zeilen innerhalb dieser Funktion, um sie fertigzustellen und richtig funktionieren zu lassen.

Folgen Sie diesen Schritten, um die Funktion zu vervollständigen:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie ihren Wert auf einen `returnRandomStoryString()`-Aufruf. Diese Funktion ist nötig, um jedes Mal, wenn die Schaltfläche gedrückt wird, eine neue zufällige Geschichte zu erstellen. Wenn wir `newStory` direkt auf `storyText` setzen, könnten wir nur einmal eine neue Geschichte generieren.
2. Fügen Sie im ersten `if`-Block einen Zeichenfolgenersetzungsmethodenaufruf hinzu, um den Namen `Bob` in der `newStory` Zeichenfolge durch die `name` Variable zu ersetzen. In diesem Block sagen wir "Wenn ein Wert in das `customName` Textfeld eingegeben wurde, ersetzen Sie `Bob` in der Geschichte durch diesen benutzerdefinierten Namen."
3. Im zweiten `if`-Block prüfen wir, ob das `uk` Auswahlfeld aktiviert wurde. Wenn ja, wollen wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umwandeln. Was Sie tun müssen, ist folgendes:
   1. Schauen Sie nach den Formeln zur Umrechnung von Pfund in Stein und Fahrenheit in Celsius.
   2. Ersetzen Sie in der Zeile, die die `weight` Konstante definiert, `300` durch eine Berechnung, die 300 Pfund in Steine umwandelt. Fügen Sie `" Stein"` an das Ende des Ergebnisses des gesamten `Math.round()` Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature` Variable definiert, `94` durch eine Berechnung, die 94 Fahrenheit in Celsius umwandelt. Fügen Sie `" Celsius"` an das Ende des Ergebnisses des gesamten `Math.round()` Aufrufs an.
   4. Fügen Sie direkt unter den beiden Variablendefinitionen zwei weitere Zeichenfolgenersetzungszeilen hinzu, die `300 pounds` mit dem Inhalt der `weight` Variable und `94 Fahrenheit` mit dem Inhalt der `temperature` Variable ersetzen.
4. Schließlich, in der vorletzten Zeile der Funktion, setzen Sie die `textContent` Eigenschaft der `story` Variable (die auf den Absatz verweist) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML und CSS in keiner Weise bearbeiten.
- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenfolgen, die ersetzt werden müssen. Sie könnten die `replace()` Methode oder eine andere Lösung verwenden.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("silly-story-finish", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige JavaScript sollte in etwa so aussehen:

```js live-sample___silly-story-finish
// Complete variable definitions and random function

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Solution: Raw text strings

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away",
];

// Solution: Partial return random string function

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Solution: Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
```

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
