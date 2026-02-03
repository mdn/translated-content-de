---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: "Test: Funktionen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Der Zweck dieses Fähigkeitstests ist es, Ihnen zu helfen zu beurteilen, ob Sie unsere Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Funktions-Rückgabewerte](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills)-Nutzungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu beantworten – wie das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Einbetten dieser Elemente in vorhandene Elemente auf der Seite – alles über JavaScript.

Dies haben wir im Kurs noch nicht ausdrücklich gelehrt, aber es wurden einige Beispiele gezeigt, die darauf basieren, und wir möchten, dass Sie einige Recherchen darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)-Tutorial.

## Interaktive Herausforderung

Zuerst geben wir Ihnen eine lustige, interaktive Herausforderung zu Funktions-Rückgabewerten, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Skript an und vervollständigen Sie die Aufgabe auf der Timeline (das kleine Geistersymbol), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Skript weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Rückgabe von Werten in Funktionen" survey="true"></mdn-scrim-inline>

## Funktionen 1

Um unsere erste Funktionaufgabe abzuschließen:

1. Definieren Sie eine Funktion—`chooseName()`—die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) druckt.
2. Rufen Sie die `chooseName()`-Funktion einmal auf.

<!-- Code, der in allen Beispielen geteilt wird -->

```html hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4 live-sample___functions-1-finish
<p></p>
```

```css hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4 live-sample___functions-1-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Beispiel-spezifischer Code -->

Der Ausgangspunkt der Aufgabe sieht so aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("functions-1", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Ihr aktualisierter Code sollte einen zufälligen Namen ausgeben:

{{ EmbedLiveSample("functions-1-finish", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

```js hidden live-sample___functions-1-finish
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

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

</details>

## Funktionen 2

Diese Aufgabe erfordert, dass Sie eine Funktion erstellen, die ein Rechteck auf das bereitgestellte `<canvas>`-Element zeichnet (Referenzvariable `canvas`, Kontext verfügbar in `ctx`), basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Der Ausgangspunkt der Aufgabe sieht so aus (es wird noch nichts auf dem `<canvas>` gezeigt):

{{ EmbedLiveSample("functions-2", "100%", 180) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html hidden live-sample___functions-2 live-sample___functions-2-finish
<canvas width="240" height="160"></canvas>
```

```css hidden live-sample___functions-2 live-sample___functions-2-finish
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

Das aktualisierte Output sollte so aussehen:

{{ EmbedLiveSample("functions-2-finish", "100%", 180) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

```js hidden live-sample___functions-2-finish
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);
```

</details>

## Funktionen 3

In dieser Aufgabe kehren Sie zum Problem aus Aufgabe 1 zurück, mit dem Ziel, drei Verbesserungen daran vorzunehmen.

Um die Aufgabe abzuschließen:

1. Refaktorieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen für die Zufallszahl übernimmt und das Ergebnis zurückgibt.
2. Aktualisieren Sie die Funktion `chooseName()`, sodass sie die Zufallszahl-Funktion verwendet, das zu wählende Array als Parameter nimmt (um es flexibler zu machen) und das Ergebnis zurückgibt.
3. Drucken Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`).

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("functions-3", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben für diese Aufgabe keine fertigen Inhalte bereitgestellt, da sie genauso aussieht wie der Ausgangspunkt. Der Code wurde nur refaktoriert.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
// ...
// Don't edit the code above here!

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseName(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseName(names);
```

```js hidden
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

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseName(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseName(names);
```

</details>

## Funktionen 4

In dieser Aufgabe haben wir ein Array von Namen, und wir verwenden {{jsxref("Array.filter()")}}, um ein Array zu erhalten, das nur die Namen enthält, die kürzer als 5 Zeichen sind. Der Filter wird derzeit eine benannte Funktion `isShort()` übergeben. Diese überprüft die Länge des Namens und gibt `true` zurück, wenn der Name weniger als 5 Zeichen lang ist, und `false` andernfalls.

Um die Aufgabe abzuschließen, aktualisieren Sie den Code so, dass die Funktionalität innerhalb von `isShort()` stattdessen direkt im `filter()`-Aufruf als Pfeilfunktion enthalten ist. Sehen Sie, wie kompakt Sie es machen können.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("functions-4", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben für diese Aufgabe keine fertigen Inhalte bereitgestellt, da sie genauso aussieht wie der Ausgangspunkt. Der Code wurde nur refaktoriert.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
// ...
// Don't edit the code above here!

// Update the code below here

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

```js hidden
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

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
