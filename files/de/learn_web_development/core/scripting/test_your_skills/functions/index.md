---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: "Test: Funktionen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unsere Artikel zu [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Funktionsrückgabewerte](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie bitte unseren Leitfaden zur [Benutzung des Fähigkeitstest](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der untenstehenden Fragen erfordern, dass Sie ein wenig {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen — wie z.B. das Erstellen neuer HTML-Elemente, das Festlegen ihrer Textinhalte auf bestimmte Zeichenfolgen und das Verschachteln innerhalb bestehender Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die dies verwenden, und wir möchten, dass Sie ein wenig recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial zur [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

## Interaktive Herausforderung

Zuerst geben wir Ihnen eine unterhaltsame, interaktive Herausforderung zu Funktionsrückgabewerten, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und erledigen Sie die Aufgabe auf der Zeitleiste (das kleine Geistsymbol), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Rückgabewerte in Funktionen" survey="true"></scrim-inline>

## Aufgabe 1

Um unsere erste Funktionsaufgabe abzuschließen:

1. Definieren Sie eine Funktion — `chooseName()`, die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Paragraphen (`para`) ausgibt.
2. Rufen Sie die Funktion `chooseName()` einmal auf.

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

Diese Aufgabe erfordert, dass Sie eine Funktion erstellen, die ein Rechteck auf dem bereitgestellten `<canvas>` zeichnet (Referenzvariable `canvas`, Kontext verfügbar in `ctx`), basierend auf den fünf bereitgestellten Eingabevariablen:

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

1. Refaktorieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen erhält, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die Funktion `chooseName()`, sodass sie die Zufallszahlenfunktion verwendet, das Array zur Auswahl als Parameter erhält (was sie flexibler macht) und das Ergebnis zurückgibt.
3. Geben Sie das zurückgegebene Ergebnis in die `textContent` des Paragraphen (`para`) aus.

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

In dieser Aufgabe haben wir ein Array von Namen und verwenden {{jsxref("Array.filter()")}}, um ein Array zu erhalten, das nur die Namen kürzer als 5 Zeichen enthält. Der Filter wird derzeit mit einer benannten Funktion `isShort()` übergeben. Diese überprüft die Länge des Namens und gibt `true` zurück, wenn der Name weniger als 5 Zeichen lang ist, und `false` sonst.

Um die Aufgabe abzuschließen, aktualisieren Sie den Code, sodass die Funktionalität innerhalb von `isShort()` direkt in den `filter()`-Aufruf als Pfeilfunktion aufgenommen wird. Sehen Sie, wie kompakt Sie es machen können.

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
// ...
// Don't edit the code above here!

// Update the code below here

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
