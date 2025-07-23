---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: Functions
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unsere Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich betrachtet

Einige der unten stehenden Fragen erfordern von Ihnen, etwas {{Glossary("DOM", "DOM")}}-Manipulationscode zu schreiben, um sie zu vervollständigen — etwa neue HTML-Elemente zu erstellen, deren Textinhalte auf spezifische Zeichenfolgenwerte festzulegen und sie innerhalb bestehender Elemente auf der Seite zu verschachteln — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die es verwenden. Wir möchten, dass Sie einige Recherchen darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Interaktive Herausforderung

Zunächst geben wir Ihnen eine unterhaltsame, interaktive Herausforderung, die Rückgabewerte von Funktionen behandelt, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und erfüllen Sie die Aufgabe auf der Zeitachse (das kleine Geistersymbol), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter beobachten, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Rückgabewerte in Funktionen" survey="true"></scrim-inline>

## Aufgabe 1

Um unsere erste Aufgabenstellung zu Funktionen abzuschließen:

1. Definieren Sie eine Funktion — `chooseName()` — die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) ausgibt.
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

In dieser Aufgabe kehren Sie zum Problem aus Aufgabe 1 zurück, mit dem Ziel, drei Verbesserungen daran vorzunehmen.

Um die Aufgabe zu vervollständigen:

1. Refaktorisieren Sie den Code, der die zufällige Zahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen nimmt, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die Funktion `chooseName()`, sodass sie die Zufallszahlenfunktion nutzt, das Array, aus dem gewählt werden soll, als Parameter nimmt (um sie flexibler zu machen) und das Ergebnis zurückgibt.
3. Geben Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`) aus.

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

In dieser Aufgabe haben wir ein Array von Namen und verwenden {{jsxref("Array.filter()")}}, um ein Array zu erhalten, das nur die Namen enthält, die kürzer als 5 Zeichen sind. Der Filter bekommt derzeit eine benannte Funktion `isShort()` übergeben. Diese überprüft die Länge des Namens und gibt `true` zurück, wenn der Name weniger als 5 Zeichen lang ist, andernfalls `false`.

Um die Aufgabe zu vervollständigen, aktualisieren Sie den Code so, dass die Funktionalität innerhalb von `isShort()` stattdessen direkt in den `filter()`-Aufruf als Pfeilfunktion einbezogen wird. Sehen Sie, wie kompakt Sie es machen können.

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
