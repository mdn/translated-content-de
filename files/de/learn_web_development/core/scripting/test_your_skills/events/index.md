---
title: "Testen Sie Ihre Fähigkeiten: Ereignisse"
short-title: "Test: Ereignisse"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Events
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) Artikel verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unser [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Verwendungshandbuch. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}} Manipulationscode schreiben, um sie zu vervollständigen — wie das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Einfügen in vorhandene Elemente auf der Seite — alles über JavaScript.

Wir haben dies noch nicht explizit in dem Kurs unterrichtet, aber Sie werden einige Beispiele gesehen haben, die davon Gebrauch machen, und wir möchten, dass Sie etwas Forschung darüber betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Ereignisse 1

Unsere erste auf Ereignissen basierende Aufgabe beinhaltet einen {{htmlelement("button")}}, der, wenn er angeklickt wird, sein Textlabel aktualisiert. Das HTML sollte nicht geändert werden; nur das JavaScript.

Um die Aufgabe zu vervollständigen, erstellen Sie einen Ereignis-Listener, der bewirkt, dass sich der Text innerhalb des Buttons (`btn`) ändert, wenn darauf geklickt wird, und erneut ändert, wenn erneut darauf geklickt wird.

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

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

## Ereignisse 2

Nun wollen wir uns Tastaturereignisse ansehen.

Um diese Aufgabe zu vervollständigen, erstellen Sie einen Ereignis-Listener, der den Kreis auf der bereitgestellten Leinwand bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die die folgenden Parameter als Eingaben nimmt:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

> [!WARNING]
> Beim Testen Ihres Codes müssen Sie sich auf die Leinwand fokussieren, bevor Sie Ihre Tastaturbefehle ausprobieren (zum Beispiel darauf klicken oder mit der Tastatur dorthin wechseln). Andernfalls funktionieren sie nicht.

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

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

## Ereignisse 3

In der nächsten auf Ereignissen basierenden Aufgabe wird Ihr Wissen über das Ereignis-Bubbling getestet. Wir möchten, dass Sie einen Ereignis-Listener auf dem Eltern-Element der `<button>`s (`<div class="button-bar"> … </div>`) setzen, der, wenn er durch Klicken auf einen der Buttons aufgerufen wird, den Hintergrund der `button-bar` auf die Farbe setzt, die im `data-color` Attribut des Buttons enthalten ist.

Wir möchten, dass Sie dies lösen, ohne alle Buttons zu durchlaufen und jedem seine eigenen Ereignis-Listener zu geben.

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const buttonBar = document.querySelector(".button-bar");

function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}
