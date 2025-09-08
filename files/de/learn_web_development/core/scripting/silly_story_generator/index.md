---
title: "Herausforderung: Unsinniger Geschichtengenerator"
short-title: "Herausforderung: Geschichtengenerator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung ist es Ihre Aufgabe, einige der Kenntnisse anzuwenden, die Sie in diesem Modul bisher erworben haben, und eine unterhaltsame App zu erstellen, die zufällige, unsinnige Geschichten generiert. Dabei testen wir Ihr Wissen über Variablen, Mathematik, Zeichenketten und Arrays. Viel Spaß!

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der untenstehenden Code-Fenster, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektauftrag](#projektauftrag), um die JavaScript-Funktionalität abzuschließen.

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

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
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

Ihnen wurden einige Textzeichenketten und JavaScript-Funktionen zur Verfügung gestellt; Sie müssen das notwendige JavaScript schreiben, um daraus ein funktionierendes Programm zu erstellen, das Folgendes tut:

- Generiert eine unsinnige Geschichte, wenn die Schaltfläche „Zufällige Geschichte generieren“ gedrückt wird.
- Ersetzt den Standardnamen „Bob“ in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld „Benutzerdefinierten Namen eingeben“ eingegeben wird, bevor die Generatortaste gedrückt wird.
- Konvertiert die standardmäßigen US-Gewichts- und Temperaturmengen und -einheiten in der Geschichte in UK-Äquivalente, wenn der UK-Radiobutton vor dem Drücken der Generatortaste ausgewählt ist.
- Generiert jedes Mal eine neue zufällige unsinnige Geschichte, wenn die Taste gedrückt wird.

### Anfangsvariablen und Funktionen

Im JavaScript, unter dem Kommentar "VOLLSTÄNDIGE VARIABLENDEFINITIONEN UND ZUFALLSFUNKTION", haben Sie drei Konstanten, die Referenzen speichern zu:

- Dem Textfeld „Benutzerdefinierten Namen eingeben“: `customName`.
- Der Schaltfläche „Zufällige Geschichte generieren“: `generateBtn`.
- Dem {{htmlelement("p")}}-Element am Ende des HTML-Körpers, in das die Geschichte kopiert wird: `story`.

Zusätzlich gibt es eine Funktion namens `randomValueFromArray()`, die ein Array als Eingabe nimmt und zufällig eines der darin gespeicherten Elemente zurückgibt.

Unter dem Kommentar "ROHDATEN-ZEICHENKETTEN" haben Sie einige kommentierte Textzeichenketten, die als Eingaben in unser Programm dienen. Bitte entfernen Sie die Kommentarzeichen und speichern Sie diese Zeichenketten innerhalb von Konstanten wie folgt:

1. Speichern Sie das erste Set von drei Zeichenketten in einem Array namens `characters`.
2. Speichern Sie das zweite Set von drei Zeichenketten in einem Array namens `places`.
3. Speichern Sie das dritte Set von drei Zeichenketten in einem Array namens `events`.

### Vervollständigung der Funktion `returnRandomStoryString()`

Unter dem Kommentar "TEILWEISE RÜCKGABE DER ZUFÄLLIGEN ZEICHENKETTENFUNKTION" haben Sie eine teilweise vervollständigte Funktion `returnRandomStoryString()` mit einer langen, kommentierten Textzeichenkette und einer `return`-Anweisung, die einen Wert namens `storyText` zurückgibt.

Um diese Funktion zu vervollständigen:

1. Entfernen Sie den Kommentar aus der langen Textzeichenkette und speichern Sie sie in einer Variablen namens `storyText`. Dies sollte ein Vorlagen-String sein.
2. Fügen Sie drei Konstanten namens `randomCharacter`, `randomPlace` und `randomEvent` direkt über dem Vorlagen-String hinzu. Diese sollten gleich drei `randomValueFromArray()`-Aufrufen gesetzt sein, die jeweils eine zufällige Zeichenkette aus den Arrays `characters`, `places` und `events` zurückgeben.
3. Ersetzen Sie in dem Vorlagen-String die Instanzen von `:insertx:`, `:inserty:`, und `:insertz:` durch eingebettete Ausdrücke, die `randomCharacter`, `randomPlace` und `randomEvent` enthalten.

### Vervollständigung der Funktion `generateStory()`

Unter dem Kommentar "EREIGNIS-LISTENER UND TEILWEISE FUNKTIONSDEFINITION" haben Sie einige Code-Elemente:

- Eine Zeile, die einen `click`-Ereignis-Listener zur Variablen `generateBtn` hinzufügt, sodass die Funktion `generateStory()` ausgeführt wird, wenn die Schaltfläche, die sie repräsentiert, angeklickt wird.
- Eine teilweise definierte Funktion `generateStory()`. Für den Rest der Herausforderung füllen Sie die Zeilen in dieser Funktion aus, um sie zu vervollständigen und richtig funktionieren zu lassen.

Folgen Sie diesen Schritten, um die Funktion zu vervollständigen:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie ihren Wert auf einen `returnRandomStoryString()`-Aufruf. Diese Funktion wird benötigt, damit wir jedes Mal, wenn die Taste gedrückt wird, eine neue zufällige Geschichte erstellen können. Wenn wir `newStory` direkt auf `storyText` setzen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Fügen Sie innerhalb des ersten `if`-Blocks einen String-Ersetzungsmethodenaufruf hinzu, um den Namen `Bob` in der Zeichenkette `newStory` durch die Variable `name` zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das Textfeld `customName` eingegeben wurde, ersetzen Sie `Bob` in der Geschichte durch diesen benutzerdefinierten Namen."
3. Innerhalb des zweiten `if`-Blocks überprüfen wir, ob der `uk`-Radiobutton ausgewählt wurde. Wenn ja, möchten wir die Gewicht- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umrechnen. Was Sie tun müssen, ist Folgendes:
   1. Suchen Sie die Formeln zur Umrechnung von Pfund in Stein und Fahrenheit in Celsius.
   2. Ersetzen Sie in der Zeile, die die Konstante `weight` definiert, `300` durch eine Berechnung, die 300 Pfund in Steine umwandelt. Verketteln Sie `" stone"` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs.
   3. Ersetzen Sie in der Zeile, die die Variable `temperature` definiert, `94` durch eine Berechnung, die 94 Fahrenheit in Celsius umwandelt. Verketteln Sie `" Celsius"` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs.
   4. Fügen Sie direkt unter den beiden Variablendefinitionen zwei weitere String-Ersetzungszeilen hinzu, die `300 pounds` durch den Inhalt der Variablen `weight` und `94 Fahrenheit` durch den Inhalt der Variablen `temperature` ersetzen.
4. Schließlich setzen Sie in der vorletzten Zeile der Funktion die `textContent`-Eigenschaft der Variable `story` (die den Absatz referenziert) auf `newStory`.

## Hinweise und Tipps

- Sie müssen den HTML- und CSS-Code in keiner Weise bearbeiten.
- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenketten, die ersetzt werden müssen. Sie könnten die Methode `replace()` oder eine andere Lösung verwenden.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("silly-story-finish", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige JavaScript sollte in etwa so aussehen:

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
