---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: Functions
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 449a2acf7d57948a55e4c8381d52da4360743402
---

Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie unsere [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values) Artikel verstanden haben.

> [!NOTE]
> Bei Aufgaben 1–4 können Sie Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Tritt ein Fehler auf, wird dieser im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern von Ihnen, etwas {{Glossary("DOM", "DOM")}}-Manipulationscode zu schreiben, um sie zu lösen — wie z.B. neue HTML-Elemente zu erstellen, deren Textinhalte auf bestimmte Zeichenkettenwerte zu setzen und sie in vorhandene Elemente auf der Seite zu verschachteln — alles über JavaScript.

Wir haben dies noch nicht explizit im Kurs behandelt, aber Sie haben vielleicht einige Beispiele gesehen, die es verwenden, und wir möchten, dass Sie etwas Recherche betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Interaktive Herausforderung

Zunächst präsentieren wir Ihnen eine unterhaltsame, interaktive Herausforderung mit Rückgabewerten von Funktionen, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich den eingebetteten Clip an, und vervollständigen Sie die Aufgabe auf der Zeitachse (das kleine Geistsymbol), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie den Clip weiter ansehen, um zu prüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Rückgabewerte in Funktionen" survey="true"></scrim-inline>

## Aufgabe 1

Um unsere erste Funktionen-Aufgabe abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Definieren Sie eine Funktion — `chooseName()` — die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) ausgibt.
3. Rufen Sie die `chooseName()` Funktion einmal auf.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich steckenbleiben, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Diese Aufgabe erfordert, dass Sie eine Funktion definieren, die auf ein `<canvas>`-Element zeichnet.

Um die Aufgabe abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie eine Funktion, die ein Rechteck auf das bereitgestellte `<canvas>` (Referenzvariable `canvas`, Kontext verfügbar in `ctx`) basierend auf den fünf bereitgestellten Eingabevariablen zeichnet:
   - `x` — die x-Koordinate des Rechtecks.
   - `y` — die y-Koordinate des Rechtecks.
   - `width` — die Breite des Rechtecks.
   - `height` — die Höhe des Rechtecks.
   - `color` — die Farbe des Rechtecks.

> [!CALLOUT]
>
> Sie können [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich steckenbleiben, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

In dieser Aufgabe kehren Sie zu dem in Aufgabe 1 gestellten Problem zurück, um drei Verbesserungen daran vorzunehmen.

Um die Aufgabe abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Refaktorieren Sie den Code, der die Zufallszahl erzeugt, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen nimmt, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
3. Aktualisieren Sie die `chooseName()` Funktion so, dass sie die Zufallszahlenfunktion verwendet, das Array, aus dem gewählt wird, als Parameter übernimmt (sodass sie flexibler wird), und das Ergebnis zurückgibt.
4. Geben Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`) aus.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich steckenbleiben, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

In dieser Aufgabe haben wir ein Array von Namen, und wir verwenden {{jsxref("Array.filter()")}}, um ein Array zu erhalten, das nur die Namen enthält, die kürzer als 5 Zeichen sind. Der Filter wird derzeit mit einer benannten Funktion `isShort()` aufgerufen. Diese prüft die Länge des Namens und gibt `true` zurück, wenn der Name weniger als 5 Zeichen lang ist, und `false` ansonsten.

Um die Aufgabe abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Aktualisieren Sie den Code so, dass die Funktionalität innerhalb von `isShort()` stattdessen direkt innerhalb des `filter()`-Aufrufs als Pfeilfunktion eingeschlossen wird. Schauen Sie, wie kompakt Sie es machen können.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich steckenbleiben, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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
