---
title: "Herausforderung: Lustiger Geschichtengenerator"
short-title: "Herausforderung: Geschichtengenerator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung ist es Ihre Aufgabe, einige der Kenntnisse, die Sie bisher in diesem Modul erworben haben, anzuwenden, um eine lustige App zu erstellen, die zufällige witzige Geschichten generiert. Dabei werden wir Ihr Wissen über Variablen, Mathematik, Zeichenketten und Arrays testen. Viel Spaß!

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Taste in einem der unten stehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Sie folgen dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität abzuschließen.

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
// Complete variable definitions and random functio

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

## Projektbeschreibung

Ihnen wurden einige Textzeichenketten und JavaScript-Funktionen zur Verfügung gestellt; Sie müssen das notwendige JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Generiert eine lustige Geschichte, wenn der "Generiere zufällige Geschichte"-Button gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn vor dem Drücken des Generieren-Buttons ein benutzerdefinierter Name in das Textfeld "Geben Sie einen benutzerdefinierten Namen ein" eingegeben wird.
- Konvertiert die Standard-US-Gewichts- und Temperaturangaben und -einheiten in der Geschichte in britische Entsprechungen, wenn das UK-Radioschaltfläche markiert ist, bevor der Generator-Button gedrückt wird.
- Generiert jedes Mal, wenn der Button gedrückt wird, eine neue zufällige lustige Geschichte.

### Anfangsvariablen und Funktionen

Im JavaScript, unterhalb des Kommentars "Vervollständigen Sie die Variablen-Definitionen und die Zufallsfunktion", haben Sie drei Konstanten, die Verweise speichern auf:

- Das Textfeld "Geben Sie einen benutzerdefinierten Namen ein": `customName`.
- Den Button "Generiere zufällige Geschichte": `generateBtn`.
- Das {{htmlelement("p")}}-Element am unteren Ende des HTML-Körpers, in das die Geschichte kopiert wird: `story`.

Zusätzlich haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array als Eingabe nimmt und einen der darin gespeicherten Einträge zufällig zurückgibt.

Unterhalb des Kommentars "Rohtextzeichenketten" haben Sie einige kommentierte Textzeichenketten, die als Eingabe in unser Programm dienen sollen. Wir möchten, dass Sie diese Zeichenketten auskommentieren und sie in Konstanten wie folgt speichern:

1. Speichern Sie das erste Set von drei Zeichenketten in einem Array namens `characters`.
2. Speichern Sie das zweite Set von drei Zeichenketten in einem Array namens `places`.
3. Speichern Sie das dritte Set von drei Zeichenketten in einem Array namens `events`.

### Vervollständigung der `returnRandomStoryString()` Funktion

Unterhalb des Kommentars "Partielle Rückgabe zufälliger Zeichenkettenfunktion" haben Sie eine teilweise vervollständigte `returnRandomStoryString()` mit einer langen, auskommentierten Textzeichenkette und einer `return`-Anweisung, die einen Wert namens `storyText` zurückgibt.

Um diese Funktion zu vervollständigen:

1. Kommentieren Sie die lange Textzeichenkette wieder ein und speichern Sie sie in einer Variablen namens `storyText`. Dies sollte ein Template Literal sein.
2. Fügen Sie drei Konstanten namens `randomCharacter`, `randomPlace` und `randomEvent` direkt oberhalb des Template Literals hinzu. Diese sollten gleich drei `randomValueFromArray()`-Aufrufen gesetzt sein, welche jeweils eine zufällige Zeichenkette aus den `characters`, `places` und `events`-Arrays zurückgeben sollten.
3. Ersetzen Sie in dem Template Literal die Instanzen von `:insertx:`, `:inserty:` und `:insertz:` durch eingebettete Ausdrücke, die `randomCharacter`, `randomPlace` und `randomEvent` enthalten, beziehungsweise.

### Vervollständigung der `generateStory()` Funktion

Unterhalb des Kommentars "Ereignislistener und partielle Generierungsfunktionsdefinition" haben Sie einige Code-Elemente:

- Eine Zeile, die einen `click`-Ereignis-Listener zur `generateBtn`-Variable hinzufügt, sodass, wenn der dargestellte Button geklickt wird, die `generateStory()`-Funktion ausgeführt wird.
- Eine teilweise vervollständigte Definition der `generateStory()`-Funktion. Bis zum Ende der Herausforderung werden Sie Zeilen innerhalb dieser Funktion ausfüllen müssen, um sie zu vervollständigen und ordnungsgemäß zum Laufen zu bringen.

Folgen Sie diesen Schritten, um die Funktion zu vervollständigen:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie deren Wert gleich einem `returnRandomStoryString()`-Aufruf. Diese Funktion ist erforderlich, damit wir jedes Mal, wenn der Button gedrückt wird, eine neue zufällige Geschichte erstellen können. Wenn wir `newStory` direkt auf `storyText` setzen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Fügen Sie innerhalb des ersten `if`-Blocks einen Methodenaufruf zur Zeichenkettenersetzung hinzu, um den Namen `Bob` zu ersetzen, der in der `newStory`-Zeichenkette gefunden wird, durch die `name`-Variable. In diesem Block sagen wir: "Wenn ein Wert in das `customName`-Texteingabefeld eingegeben wurde, ersetzen Sie `Bob` in der Geschichte durch den benutzerdefinierten Namen."
3. Im zweiten `if`-Block prüfen wir, ob das `uk`-Radioschaltfläche ausgewählt wurde. Falls ja, möchten wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umrechnen. Was Sie tun müssen, ist Folgendes:
   1. Suchen Sie die Formeln zum Umrechnen von Pfund in Stein und Fahrenheit in Celsius.
   2. Ersetzen Sie innerhalb der Zeile, die die `weight`-Konstante definiert, `300` durch eine Berechnung, die 300 Pfund in Steine umrechnet. Verketteln Sie `" stone"` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs.
   3. Ersetzen Sie innerhalb der Zeile, die die `temperature`-Variable definiert, `94` durch eine Berechnung, die 94 Fahrenheit in Celsius umrechnet. Verketteln Sie `" Celsius"` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs.
   4. Fügen Sie direkt unterhalb der beiden Variablendefinitionen zwei weitere Zeichenkettenersetzungszeilen hinzu, die `300 pounds` mit dem Inhalt der `weight`-Variable und `94 Fahrenheit` mit dem Inhalt der `temperature`-Variable ersetzen.
4. Schließlich setzen Sie in der zweitletzten Zeile der Funktion die `textContent`-Eigenschaft der `story`-Variable (die den Absatz referenziert) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML und CSS in keiner Weise bearbeiten.
- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine integrierte JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenketten, die ersetzt werden müssen. Sie könnten die `replace()`-Methode verwenden oder eine andere Lösung.

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
