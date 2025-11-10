---
title: "KeyboardEvent: code-Eigenschaft"
short-title: code
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{APIRef("UI Events")}}

Die `KeyboardEvent.code`-Eigenschaft repräsentiert eine physische Taste auf der Tastatur (im Gegensatz zu dem Zeichen, das durch Drücken der Taste erzeugt wird). Mit anderen Worten, diese Eigenschaft gibt einen Wert zurück, der nicht durch das Tastaturlayout oder den Zustand der Modifikationstasten verändert wird.

Wenn das Eingabegerät keine physische Tastatur, sondern stattdessen eine virtuelle Tastatur oder ein barrierefreies Gerät ist, wird der zurückgegebene Wert vom Browser so gesetzt, dass er möglichst genau dem entspricht, was bei einer physischen Tastatur passieren würde, um die Kompatibilität zwischen physischen und virtuellen Eingabegeräten zu maximieren.

Diese Eigenschaft ist nützlich, wenn Sie Tasten basierend auf ihren physischen Positionen auf dem Eingabegerät behandeln möchten, anstatt auf den mit diesen Tasten verbundenen Zeichen; dies ist besonders häufig, wenn Sie Code schreiben, um Eingaben für Spiele zu behandeln, die eine gamepad-ähnliche Umgebung mit Tasten auf der Tastatur simulieren. Seien Sie sich jedoch bewusst, dass Sie den von `KeyboardEvent.code` gemeldeten Wert nicht verwenden können, um das durch den Tastenanschlag erzeugte Zeichen zu bestimmen, da der Name des Tasten-Codes möglicherweise nicht mit dem tatsächlichen Zeichen übereinstimmt, das auf der Taste aufgedruckt oder vom Computer erzeugt wird, wenn die Taste gedrückt wird.

Zum Beispiel wird der zurückgegebene `code` mit `"KeyQ"` bezeichnet für die Taste <kbd>Q</kbd> auf einer QWERTY-Tastatur, aber derselbe `code`-Wert repräsentiert auch die Taste <kbd>'</kbd> auf Dvorak-Tastaturen und die Taste <kbd>A</kbd> auf AZERTY-Tastaturen. Das macht es unmöglich, den Wert von `code` zu verwenden, um den Namen der Taste für Benutzer zu bestimmen, wenn sie nicht das erwartete Tastaturlayout verwenden.

Um zu bestimmen, welches Zeichen dem Tastendruck-Ereignis entspricht, verwenden Sie stattdessen die [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft.

## Wert

Die `code`-Werte für Windows, Linux und macOS sind auf der Seite [KeyboardEvent: code values](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) aufgeführt.

## Beispiele

### Verarbeitung von KeyboardEvent

#### HTML

```html
<p>
  Press keys on the keyboard to see what the KeyboardEvent's key and code values
  are for each one.
</p>
<div id="output" tabindex="0"></div>
```

#### CSS

```css
#output {
  font-family: "Helvetica", "Arial", sans-serif;
  border: 1px solid black;
  width: 95%;
  margin: auto;
}
#output:focus-visible {
  outline: 3px solid dodgerblue;
}
```

#### JavaScript

```js
window.addEventListener("keydown", (event) => {
  const p = document.createElement("p");
  p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
  document.getElementById("output").appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
});
```

#### Probieren Sie es aus

Um sicherzustellen, dass die Tastenanschläge zum Beispiel gehen, klicken oder fokussieren Sie das Ausgabefeld unten, bevor Sie Tasten drücken.

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### Tastenereignisse in einem Spiel behandeln

Dieses Beispiel richtet einen Ereignislistener für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse ein, die Tastatureingaben für ein Spiel behandeln, das das typische "WASD"-Tastaturlayout für Vorwärts-, Links-, Rückwärts- und Rechtssteuerung verwendet. Dies wird die gleichen vier physischen Tasten verwenden, unabhängig von den tatsächlichen korrespondierenden Zeichen, zum Beispiel falls der Benutzer eine AZERTY-Tastatur verwendet.

#### HTML

```html
<p>Use the WASD (ZQSD on AZERTY) keys to move and steer.</p>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  class="world"
  tabindex="0">
  <polygon id="spaceship" points="15,0 0,30 30,30" />
</svg>
```

#### CSS

```css
.world {
  margin: 0px;
  padding: 0px;
  background-color: black;
  width: 400px;
  height: 400px;
}
.world:focus-visible {
  outline: 5px solid dodgerblue;
}
#spaceship {
  fill: orange;
  stroke: red;
  stroke-width: 2px;
}
```

#### JavaScript

Der erste Abschnitt des JavaScript-Codes dient dazu, einige Variablen zu etablieren, die wir verwenden werden. `shipSize` enthält die Größe des Schiffs, das der Spieler steuert, zur Bequemlichkeit. `position` wird verwendet, um die Position des Schiffs innerhalb des Spielfeldes zu verfolgen. `moveRate` ist die Anzahl der Pixel, die das Schiff bei jedem Tastenanschlag vorwärts- und rückwärts bewegt wird, und `turnRate` ist, wie viele Grad Drehung die Steuerung links und rechts pro Tastenanschlag anwenden. `angle` ist die aktuelle Drehung des Schiffs in Grad; sie beginnt bei 0° (zeigt gerade nach oben). Schließlich wird `spaceship` so gesetzt, dass es auf das Element mit der ID `"spaceship"` verweist, das das SVG-Polygon darstellt, das das vom Spieler gesteuerte Schiff ist.

```js
let shipSize = {
  width: 30,
  height: 30,
};

let position = {
  x: 200,
  y: 200,
};

let moveRate = 9;
let turnRate = 5;

let angle = 0;

let spaceship = document.getElementById("spaceship");
```

Als nächstes kommt die Funktion `updatePosition()`. Diese Funktion nimmt als Eingabe die Entfernung, die das Schiff bewegt werden soll, wobei positiv eine Vorwärtsbewegung und negativ eine Rückwärtsbewegung ist. Diese Funktion berechnet die neue Position des Schiffs basierend auf der zurückgelegten Entfernung und der aktuellen Richtung, in die das Schiff zeigt. Sie sorgt auch dafür, dass das Schiff über die Grenzen des Spielfelds hinaus geschwenkt wird, anstatt zu verschwinden.

```js
function updatePosition(offset) {
  let rad = angle * (Math.PI / 180);
  position.x += Math.sin(rad) * offset;
  position.y -= Math.cos(rad) * offset;

  if (position.x < 0) {
    position.x = 399;
  } else if (position.x > 399) {
    position.x = 0;
  }

  if (position.y < 0) {
    position.y = 399;
  } else if (position.y > 399) {
    position.y = 0;
  }
}
```

Die `refresh()`-Funktion kümmert sich um die Anwendung der Drehung und Position mithilfe einer [SVG-Transformation](/de/docs/Web/SVG/Reference/Attribute/transform).

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

Schließlich wird die `addEventListener()`-Methode verwendet, um das Abhören von [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignissen zu starten, wobei jede Taste behandelt wird, indem die Schiffposition und der Drehwinkel aktualisiert werden, und dann `refresh()` aufgerufen wird, um das Schiff an seiner neuen Position und seinem neuen Winkel zu zeichnen.

```js
window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch (event.code) {
    case "KeyS":
    case "ArrowDown":
      // Handle "back"
      updatePosition(-moveRate);
      break;
    case "KeyW":
    case "ArrowUp":
      // Handle "forward"
      updatePosition(moveRate);
      break;
    case "KeyA":
    case "ArrowLeft":
      // Handle "turn left"
      angle -= turnRate;
      break;
    case "KeyD":
    case "ArrowRight":
      // Handle "turn right"
      angle += turnRate;
      break;
  }

  refresh();

  if (event.code !== "Tab") {
    // Consume the event so it doesn't get handled twice,
    // as long as the user isn't trying to move focus away
    event.preventDefault();
  }
});
```

#### Probieren Sie es aus

Um sicherzustellen, dass die Tastenanschläge zum Beispielcode gehen, klicken oder fokussieren Sie das schwarze Spielfeld unten, bevor Sie Tasten drücken.

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

Es gibt mehrere Möglichkeiten, wie dieser Code verbessert werden kann. Die meisten echten Spiele würden auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse achten, die Bewegung starten, wenn das passiert, und die Bewegung stoppen, wenn das entsprechende [`keyup`](/de/docs/Web/API/Element/keyup_event) auftritt, anstatt sich auf Tastenwiederholungen zu verlassen. Das würde sowohl geschmeidigere als auch schnellere Bewegungen ermöglichen, aber auch den Spieler erlauben, sich gleichzeitig zu bewegen und zu steuern. Übergänge oder Animationen könnten verwendet werden, um die Bewegung des Schiffs geschmeidiger zu gestalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
