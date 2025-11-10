---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: "Test: Funktionen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 7524bc9075ab71beb764d32aaecd14d91bbc4038
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unsere Artikel zu [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function), und [Funktionsrückgabewerte](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — wie das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Verschachteln innerhalb bestehender Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die es nutzen, und wir möchten, dass Sie einige Recherchen darüber machen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Interaktive Herausforderung

Zunächst geben wir Ihnen eine unterhaltsame, interaktive Herausforderung zu Rückgabewerten von Funktionen, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und vervollständigen Sie die Aufgabe auf der Zeitleiste (das kleine Geistersymbol), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim fortsetzen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Rückgabe von Werten in Funktionen" survey="true"></scrim-inline>

## Aufgabe 1

Um unsere erste Funktionsaufgabe abzuschließen:

1. Definieren Sie eine Funktion — `chooseName()` — die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) schreibt.
2. Rufen Sie die `chooseName()`-Funktion einmal auf.

<!-- Code shared across examples -->

```html hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4
<p></p>
```

```css hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___functions-1
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("functions-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

</details>

## Aufgabe 2

Diese Aufgabe erfordert, dass Sie eine Funktion erstellen, die ein Rechteck auf das bereitgestellte `<canvas>` (Referenzvariable `canvas`, Kontext verfügbar in `ctx`) zeichnet, basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

```html hidden live-sample___functions-2
<canvas width="240" height="160"></canvas>
```

```css hidden live-sample___functions-2
canvas {
  border: 1px solid black;
}
```

```js live-sample___functions-2
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("functions-2", "100%", 180) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);
```

</details>

## Aufgabe 3

In dieser Aufgabe kehren Sie zu dem in Aufgabe 1 gestellten Problem zurück, mit dem Ziel, drei Verbesserungen daran vorzunehmen.

Um die Aufgabe abzuschließen:

1. Überarbeiten Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die zwei generische Grenzen als Parameter nimmt, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die `chooseName()`-Funktion so, dass sie von der Zufallszahlenfunktion Gebrauch macht, das Array zum Auswählen als Parameter nimmt (um es flexibler zu machen), und das Ergebnis zurückgibt.
3. Schreiben Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`).

```js live-sample___functions-3
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

{{ EmbedLiveSample("functions-3", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseItem(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseItem(names);
```

</details>

## Aufgabe 4

In dieser Aufgabe haben wir ein Array von Namen, und wir verwenden {{jsxref("Array.filter()")}}, um ein Array zu erhalten, das nur die Namen enthält, die kürzer als 5 Zeichen sind. Der Filter wird derzeit mit einer benannten Funktion `isShort()` aufgerufen. Diese überprüft die Länge des Namens und gibt `true` zurück, wenn der Name weniger als 5 Zeichen lang ist, und `false` andernfalls.

Um die Aufgabe abzuschließen, aktualisieren Sie den Code so, dass die Funktionalität innerhalb von `isShort()` stattdessen direkt im `filter()`-Aufruf als Pfeilfunktion enthalten ist. Sehen Sie, wie kompakt Sie es machen können.

```js live-sample___functions-4
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(isShort);
para.textContent = shortNames;
```

{{ EmbedLiveSample("functions-4", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

// Update the code below here

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
