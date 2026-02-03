---
title: "Testen Sie Ihre Fähigkeiten: Ereignisse"
short-title: "Test: Ereignisse"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Events
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie unseren Artikel [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung der Tests](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — wie z.B. neue HTML-Elemente zu erstellen, ihre Textinhalte mit bestimmten Zeichenfolgen zu versehen und sie in bestehende Elemente auf der Seite einzubetten — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die es verwenden, und wir möchten, dass Sie etwas Forschung dazu betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Leitfaden](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

## Ereignisse 1

Unsere erste auf Ereignissen basierende Aufgabe beinhaltet ein {{htmlelement("button")}}, das beim Klicken sein Textlabel aktualisiert. Der HTML-Code sollte nicht geändert werden; nur das JavaScript.

Um die Aufgabe zu vervollständigen, erstellen Sie einen Event-Listener, der den Text innerhalb des Buttons (`btn`) ändert, wenn er angeklickt wird, und wieder zurückändert, wenn er erneut angeklickt wird.

Der Startpunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("events-1", "100%", 80) }}

Hier ist der zugrundeliegende Code für diesen Startpunkt:

```css hidden live-sample___events-1 live-sample___events-1-finish
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

button {
  display: block;
  margin: 20px 0 20px 20px;
}

canvas {
  border: 1px solid black;
}
```

```html hidden live-sample___events-1 live-sample___events-1-finish
<button class="off">Machine is off</button>
```

```js live-sample___events-1
const btn = document.querySelector("button");

// Add your code here
```

Das aktualisierte Beispiel sollte sich so verhalten (versuchen Sie, den Button zu drücken):

{{ EmbedLiveSample("events-1-finish", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js live-sample___events-1-finish
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (btn.className === "on") {
    btn.textContent = "Machine is off";
    btn.className = "off";
  } else {
    btn.textContent = "Machine is on";
    btn.className = "on";
  }
});
```

</details>

## Ereignisse 2

Nun betrachten wir Tastaturereignisse.

Um diese Aufgabe zu vollenden, erstellen Sie einen Event-Listener, der den Kreis auf der bereitgestellten Leinwand bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die folgende Parameter als Eingaben verwendet:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

> [!WARNING]
> Beim Testen Ihres Codes müssen Sie zunächst auf die Leinwand fokussieren, bevor Sie Ihre Tastaturbefehle ausprobieren (z.B. darauf klicken oder mit der Tastatur darauf tabben). Andernfalls werden sie nicht funktionieren.

Der Startpunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("events-2", "100%", 350) }}

Hier ist der zugrundeliegende Code für diesen Startpunkt:

```html hidden live-sample___events-2 live-sample___events-2-finish
<canvas width="480" height="320" tabindex="0"> </canvas>
```

```css hidden live-sample___events-2 live-sample___events-2-finish
* {
  box-sizing: border-box;
}

canvas {
  border: 1px solid black;
}
```

```js live-sample___events-2
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);
// Don't edit the code above here!

// Add your code here
```

Das aktualisierte Beispiel sollte sich so verhalten (klicken Sie darauf und probieren Sie dann die Tastatursteuerung aus):

{{ EmbedLiveSample("events-2-finish", "100%", 350) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
// ...
// Don't edit the code above here!

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
  }

  drawCircle(x, y, size);
});
```

```js hidden live-sample___events-2-finish
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
  }

  drawCircle(x, y, size);
});
```

</details>

## Ereignisse 3

In der nächsten auf Ereignissen basierenden Aufgabe wird Ihr Wissen über das Ereignis-Bubbling getestet. Wir möchten, dass Sie einen Event-Listener auf das Elternelement der `<button>`s setzen (`<div class="button-bar"> … </div>`), der, wenn er durch Klicken auf einen der Buttons ausgelöst wird, den Hintergrund der `button-bar` auf die im `data-color`-Attribut des Buttons enthaltene Farbe setzt.

Wir möchten, dass Sie dies ohne Schleifen durch alle Buttons lösen und jedem einen eigenen Event-Listener geben.

Der Startpunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("events-3", "100%", 80) }}

Hier ist der zugrundeliegende Code für diesen Startpunkt:

```html hidden live-sample___events-3 live-sample___events-3-finish
<div class="button-bar">
  <button data-color="red">Red</button>
  <button data-color="yellow">Yellow</button>
  <button data-color="green">Green</button>
  <button data-color="purple">Purple</button>
</div>
```

```css hidden live-sample___events-3 live-sample___events-3-finish
* {
  box-sizing: border-box;
}

html,
body,
.button-bar {
  height: 100%;
}

.button-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button {
  padding: 5px 10px;
}
```

```js live-sample___events-3
const buttonBar = document.querySelector(".button-bar");

// Add your code here
```

Das aktualisierte Beispiel sollte sich so verhalten (versuchen Sie, die Buttons zu klicken):

{{ EmbedLiveSample("events-3-finish", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js live-sample___events-3-finish
const buttonBar = document.querySelector(".button-bar");

function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
