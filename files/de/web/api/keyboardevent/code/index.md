---
title: "KeyboardEvent: code-Eigenschaft"
short-title: code
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("UI Events")}}

Die `KeyboardEvent.code`-Eigenschaft repräsentiert eine physische Taste auf der Tastatur (im Gegensatz zu dem Zeichen, das durch das Drücken der Taste erzeugt wird). Mit anderen Worten, diese Eigenschaft gibt einen Wert zurück, der nicht durch das Tastaturlayout oder den Zustand der Modifikatortasten verändert wird.

Wenn das Eingabegerät keine physische Tastatur ist, sondern eine virtuelle Tastatur oder ein Eingabegerät für Barrierefreiheit, wird der zurückgegebene Wert vom Browser so eingestellt, dass er möglichst genau dem Verhalten einer physischen Tastatur entspricht, um die Kompatibilität zwischen physischen und virtuellen Eingabegeräten zu maximieren.

Diese Eigenschaft ist nützlich, wenn Sie Tasten basierend auf ihrer physischen Position auf dem Eingabegerät behandeln möchten, anstatt der mit diesen Tasten assoziierten Zeichen; dies ist besonders üblich, wenn Sie Code schreiben, der Eingaben für Spiele behandelt, die eine gamepad-ähnliche Umgebung mithilfe von Tasten auf der Tastatur simulieren. Beachten Sie jedoch, dass Sie den von `KeyboardEvent.code` gemeldeten Wert nicht verwenden können, um das durch den Tastendruck erzeugte Zeichen zu bestimmen, da der Name des Tastencodes möglicherweise nicht mit dem tatsächlichen Zeichen übereinstimmt, das auf der Taste aufgedruckt ist oder das vom Computer erzeugt wird, wenn die Taste gedrückt wird.

Zum Beispiel ist der zurückgegebene `code` für die <kbd>Q</kbd>-Taste auf einer QWERTY-Tastatur-Layout `"KeyQ"`, aber der gleiche `code`-Wert repräsentiert auch die <kbd>'</kbd>-Taste auf Dvorak-Tastaturen und die <kbd>A</kbd>-Taste auf AZERTY-Tastaturen. Das macht es unmöglich, den Wert von `code` zu verwenden, um zu bestimmen, welchen Namen die Taste für Nutzer hat, wenn sie kein erwartetes Tastaturlayout verwenden.

Um festzustellen, welches Zeichen dem Tastenereignis entspricht, verwenden Sie stattdessen die [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft.

## Wert

Die `code`-Werte für Windows, Linux und macOS sind auf der Seite [KeyboardEvent: code-Werte](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) aufgelistet.

## Beispiele

### Verwendung von KeyboardEvent

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
  font-family: Arial, Helvetica, sans-serif;
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
window.addEventListener(
  "keydown",
  (event) => {
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    document.getElementById("output").appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
  },
  true,
);
```

#### Probieren Sie es aus

Um sicherzustellen, dass die Tastenanschläge an das Beispiel gesendet werden, klicken Sie in das Ausgabefeld unten oder fokussieren Sie es, bevor Sie Tasten drücken.

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### Behandlung von Tastaturereignissen in einem Spiel

Dieses Beispiel erstellt einen Ereignis-Listener für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse, der die Tastatureingabe für ein Spiel behandelt, das das typische "WASD"-Tastaturlayout für die Steuerung nach vorne, links, hinten und rechts verwendet. Dies wird unabhängig davon dieselben vier Tasten physisch verwenden, unabhängig davon, welche tatsächlichen zugehörigen Zeichen sind, beispielsweise wenn ein Benutzer eine AZERTY-Tastatur verwendet.

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

Der erste Abschnitt des JavaScript-Codes legt einige Variablen fest, die wir verwenden werden. `shipSize` enthält die Größe des Schiffes, das der Spieler bewegt, der Bequemlichkeit halber. `position` wird verwendet, um die Position des Schiffes innerhalb des Spielfeldes zu verfolgen. `moveRate` ist die Anzahl der Pixel, die das Schiff bei jedem Tastendruck vorwärts und rückwärts bewegt, und `turnRate` ist die Anzahl der Rotation in Grad, die die Links- und Rechtssteuerungen pro Tastendruck anwenden. `angle` ist die aktuelle Menge der Rotation, die auf das Schiff in Grad angewendet wird; es beginnt bei 0° (zeigt direkt nach oben). Schließlich wird `spaceship` auf das Element mit der ID `"spaceship"` gesetzt, welches das SVG-Polygon darstellt, das das vom Spieler gesteuerte Schiff repräsentiert.

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

Als nächstes kommt die Funktion `updatePosition()`. Diese Funktion nimmt als Eingabewert die Distanz, die das Schiff bewegt werden soll, wobei positiv eine Vorwärtsbewegung und negativ eine Rückwärtsbewegung darstellt. Diese Funktion berechnet die neue Position des Schiffes in Anbetracht der zurückgelegten Distanz und der aktuellen Richtung, in die das Schiff zeigt. Sie sorgt auch dafür, dass das Schiff die Ränder des Spielfeldes überschreitet, anstatt zu verschwinden.

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

Die `refresh()`-Funktion sorgt dafür, dass die Drehung und Position mittels einer [SVG-Transformation](/de/docs/Web/SVG/Attribute/transform) angewendet wird.

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

Schließlich wird die `addEventListener()`-Methode verwendet, um das Lauschen von [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignissen zu starten, die auf jede Taste reagieren, indem sie die Position und den Rotationswinkel des Schiffs aktualisieren und dann `refresh()` aufrufen, um das Schiff an seiner neuen Position und in seinem neuen Winkel zu zeichnen.

```js
window.addEventListener(
  "keydown",
  (event) => {
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
  },
  true,
);
```

#### Probieren Sie es aus

Um sicherzustellen, dass die Tastenanschläge den Beispielcode erreichen, klicken Sie auf das schwarze Spiel-Spielfeld unten oder fokussieren Sie es, bevor Sie Tasten drücken.

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

Es gibt mehrere Möglichkeiten, wie dieser Code verbessert werden kann. Die meisten echten Spiele würden auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse achten, die Bewegung starten, wenn das passiert, und die Bewegung beenden, wenn die entsprechende [`keyup`](/de/docs/Web/API/Element/keyup_event) erfolgt, anstatt sich auf automatische Tastenwiederholungen zu verlassen. Dadurch wäre sowohl eine sanftere als auch schnellere Bewegung möglich, würde aber auch erlauben, dass der Spieler gleichzeitig bewegt und lenkt. Übergänge oder Animationen könnten verwendet werden, um die Bewegung des Schiffes ebenfalls sanfter zu gestalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
