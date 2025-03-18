---
title: "KeyboardEvent: code-Eigenschaft"
short-title: code
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("UI Events")}}

Die `KeyboardEvent.code`-Eigenschaft repräsentiert eine physische Taste auf der Tastatur (im Gegensatz zu dem Zeichen, das durch das Drücken der Taste erzeugt wird). Mit anderen Worten, diese Eigenschaft gibt einen Wert zurück, der nicht durch das Tastaturlayout oder den Zustand der Modifikator-Tasten verändert wird.

Wenn das Eingabegerät keine physische Tastatur, sondern stattdessen eine virtuelle Tastatur oder ein barrierefreies Eingabegerät ist, wird der zurückgegebene Wert vom Browser so eingestellt, dass er so genau wie möglich dem entspricht, was mit einer physischen Tastatur passieren würde, um die Kompatibilität zwischen physischen und virtuellen Eingabegeräten zu maximieren.

Diese Eigenschaft ist nützlich, wenn Sie Tasten basierend auf ihren physischen Positionen auf dem Eingabegerät behandeln möchten, anstatt auf die Zeichen, die diesen Tasten zugeordnet sind; dies ist besonders häufig, wenn Code für Spielsteuerungen geschrieben wird, die ein Gamepad-ähnliches Umfeld mit Tastaturtasten simulieren. Beachten Sie jedoch, dass Sie den von `KeyboardEvent.code` gemeldeten Wert nicht verwenden können, um das durch den Tastendruck generierte Zeichen zu bestimmen, da der Name des Tastencodes möglicherweise nicht mit dem tatsächlichen Zeichen übereinstimmt, das auf der Taste aufgedruckt ist oder das vom Computer erzeugt wird, wenn die Taste gedrückt wird.

Zum Beispiel ist der zurückgegebene `code` `"KeyQ"` für die <kbd>Q</kbd>-Taste auf einer QWERTY-Tastatur, aber derselbe `code`-Wert repräsentiert auch die <kbd>'</kbd>-Taste auf Dvorak-Tastaturen und die <kbd>A</kbd>-Taste auf AZERTY-Tastaturen. Das macht es unmöglich, den Wert von `code` zu verwenden, um den Namen der Taste für Benutzer zu bestimmen, wenn sie nicht das erwartete Tastaturlayout verwenden.

Um zu bestimmen, welches Zeichen mit dem Tastenereignis übereinstimmt, verwenden Sie stattdessen die [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft.

## Wert

Die Code-Werte für Windows, Linux und macOS sind auf der Seite [KeyboardEvent: code values](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) aufgeführt.

## Beispiele

### Umgang mit KeyboardEvent

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

Um sicherzustellen, dass die Tastendrücke an das Beispiel gesendet werden, klicken oder fokussieren Sie das Ausgabefeld unten, bevor Sie Tasten drücken.

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### Steuerung von Tastaturereignissen in einem Spiel

Dieses Beispiel richtet einen Ereignis-Listener für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse ein, der die Steuerung per Tastatur für ein Spiel behandelt, das das typische "WASD"-Tastaturlayout für Vorwärts-, Links-, Rückwärts- und Rechtssteuerung verwendet. Dies wird unabhängig von den tatsächlich entsprechenden Zeichen immer die gleichen vier physischen Tasten verwenden, wie z. B. bei der Verwendung einer AZERTY-Tastatur.

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

Der erste Abschnitt des JavaScript-Codes legt einige Variablen fest, die wir verwenden werden. `shipSize` enthält die Größe des Schiffs, das der Spieler bewegt, zur Bequemlichkeit. `position` wird verwendet, um die Position des Schiffs im Spielfeld zu verfolgen. `moveRate` ist die Anzahl der Pixel, die das Schiff bei jedem Tastenanschlag vorwärts und rückwärts bewegt, und `turnRate` ist die Anzahl der Drehgrade, die die Links- und Rechtssteuerungen pro Tastendruck anwenden. `angle` ist der aktuelle Drehungsgrad, der auf das Schiff angewendet wird; es beginnt bei 0° (zeigt direkt nach oben). Schließlich wird `spaceship` auf das Element mit der ID `"spaceship"` gesetzt, das das SVG-Polygon darstellt, das das vom Spieler kontrollierte Schiff repräsentiert.

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

Als Nächstes folgt die Funktion `updatePosition()`. Diese Funktion nimmt als Eingabe die Strecke, die das Schiff bewegen soll, wobei positive Werte eine Vorwärtsbewegung und negative Werte eine Rückwärtsbewegung angeben. Diese Funktion berechnet die neue Position des Schiffs basierend auf der zurückgelegten Strecke und der aktuellen Richtung, in die das Schiff zeigt. Sie sorgt auch dafür, dass das Schiff über die Spielfeldgrenzen hinaus hinweg teleportiert, anstatt zu verschwinden.

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

Die `refresh()`-Funktion übernimmt das Anwenden der Drehung und Position, indem sie eine [SVG-Transformation](/de/docs/Web/SVG/Reference/Attribute/transform) verwendet.

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

Schließlich wird die Methode `addEventListener()` verwendet, um das Hören auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu starten, wobei auf jede Taste reagiert wird, indem die Schiffsposition und der Rotationswinkel aktualisiert und dann `refresh()` aufgerufen wird, um das Schiff in seiner neuen Position und mit dem neuen Winkel zu zeichnen.

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

Um sicherzustellen, dass die Tastendrücke an den Beispielcode gesendet werden, klicken oder fokussieren Sie das schwarze Spielfeld unten, bevor Sie Tasten drücken.

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

Es gibt mehrere Möglichkeiten, diesen Code zu verbessern. Die meisten echten Spiele würden auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse achten, die Bewegung beginnen, wenn dies passiert, und die Bewegung stoppen, wenn das entsprechende [`keyup`](/de/docs/Web/API/Element/keyup_event) auftritt, anstatt sich auf das Wiederholen der Taste zu verlassen. Das würde sowohl eine sanftere als auch eine schnellere Bewegung ermöglichen, aber auch erlauben, dass der Spieler gleichzeitig bewegen und steuern kann. Übergänge oder Animationen könnten genutzt werden, um die Bewegung des Schiffs noch sanfter zu gestalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
