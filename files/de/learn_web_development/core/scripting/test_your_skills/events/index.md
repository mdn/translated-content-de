---
title: "Testen Sie Ihre Fähigkeiten: Events"
short-title: "Test: Events"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Events
l10n:
  sourceCommit: 952d0a3a076d16f0cf7566040e5cbe059996138d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

Ziel dieses Fähigkeitstests ist es, Ihnen dabei zu helfen, einzuschätzen, ob Sie unseren Artikel [Einführung in Events](/de/docs/Learn_web_development/Core/Scripting/Events) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unsere [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Gebrauchsanweisung. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}} Manipulationscode schreiben, um sie zu beantworten — wie zum Beispiel neue HTML-Elemente zu erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte zu setzen und sie in vorhandene Elemente auf der Seite zu verschachteln — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit behandelt, aber Sie haben einige Beispiele gesehen, die dies nutzen, und wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Events 1

Unsere erste auf Events bezogene Aufgabe beinhaltet einen {{htmlelement("button")}}, der bei einem Klick sein Text-Label aktualisiert. Das HTML sollte nicht geändert werden, nur das JavaScript.

Um die Aufgabe abzuschließen, erstellen Sie einen Event-Listener, der bewirkt, dass sich der Text innerhalb des Buttons (`btn`) ändert, wenn er angeklickt wird, und sich wieder zurückändert, wenn er erneut angeklickt wird.

```css hidden live-sample___events-1
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

```html hidden live-sample___events-1
<button class="off">Machine is off</button>
```

```js live-sample___events-1
const btn = document.querySelector("button");

// Add your code here
```

{{ EmbedLiveSample("events-1", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
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

## Events 2

Jetzt betrachten wir Tastaturevents.

Um diese Aufgabe abzuschließen, erstellen Sie einen Event-Listener, der den Kreis auf der bereitgestellten Leinwand bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die die folgenden Parameter als Eingaben annimmt:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

> [!WARNING]
> Wenn Sie Ihren Code testen, müssen Sie den Fokus auf die Leinwand setzen, bevor Sie Ihre Tastaturbefehle ausprobieren (zum Beispiel darauf klicken oder mit der Tastatur darauf tabben). Andernfalls funktionieren sie nicht.

```html hidden live-sample___events-2
<canvas width="480" height="320" tabindex="0"> </canvas>
```

```css hidden live-sample___events-2
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

{{ EmbedLiveSample("events-2", "100%", 350) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

</details>

## Events 3

In der nächsten auf Events bezogenen Aufgabe wird Ihr Wissen über Event-Bubbling getestet. Wir möchten, dass Sie einen Event-Listener auf das übergeordnete Element der `<button>`s (`<div class="button-bar"> … </div>`) setzen, der beim Klicken auf einen der Buttons den Hintergrund der `button-bar` auf die Farbe setzt, die im `data-color` Attribut des Buttons enthalten ist.

Wir möchten, dass Sie dies lösen, ohne durch alle Buttons zu schleifen und jedem einen eigenen Event-Listener zu geben.

```html hidden live-sample___events-3
<div class="button-bar">
  <button data-color="red">Red</button>
  <button data-color="yellow">Yellow</button>
  <button data-color="green">Green</button>
  <button data-color="purple">Purple</button>
</div>
```

```css hidden live-sample___events-3
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

{{ EmbedLiveSample("events-3", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const buttonBar = document.querySelector(".button-bar");

function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
