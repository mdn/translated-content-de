---
title: "KeyboardEvent: code Eigenschaft"
short-title: code
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("UI Events")}}

Die Eigenschaft `KeyboardEvent.code` repräsentiert eine physische Taste auf der Tastatur (im Gegensatz zu dem Zeichen, das durch das Drücken der Taste erzeugt wird). Mit anderen Worten, diese Eigenschaft gibt einen Wert zurück, der nicht durch die Tastaturbelegung oder den Zustand der Modifier-Tasten verändert wird.

Wenn das Eingabegerät keine physische Tastatur ist, sondern eine virtuelle Tastatur oder ein Barrierefreiheitsgerät, wird der zurückgegebene Wert vom Browser so eingestellt, dass er möglichst genau dem entspricht, was bei einer physischen Tastatur passieren würde, um die Kompatibilität zwischen physischen und virtuellen Eingabegeräten zu maximieren.

Diese Eigenschaft ist nützlich, wenn Sie Tasten basierend auf ihrer physischen Position auf dem Eingabegerät behandeln möchten, anstatt der Zeichen, die diesen Tasten zugeordnet sind; dies ist besonders häufig, wenn Code geschrieben wird, um Eingaben für Spiele zu behandeln, die eine gamepad-ähnliche Umgebung unter Verwendung von Tasten auf der Tastatur simulieren. Beachten Sie jedoch, dass Sie den von `KeyboardEvent.code` gemeldeten Wert nicht verwenden können, um das durch den Tastendruck erzeugte Zeichen zu bestimmen, da der Name des Tastencodes möglicherweise nicht mit dem tatsächlichen Zeichen übereinstimmt, das auf der Taste steht oder das vom Computer erzeugt wird, wenn die Taste gedrückt wird.

Zum Beispiel wird für die Taste <kbd>Q</kbd> auf einer QWERTY-Tastatur das `code` als `"KeyQ"` zurückgegeben, aber derselbe `code`-Wert repräsentiert die Taste <kbd>'</kbd> auf Dvorak-Tastaturen und die Taste <kbd>A</kbd> auf AZERTY-Tastaturen. Das macht es unmöglich, den Wert von `code` zu verwenden, um den Namen der Taste für Benutzer zu bestimmen, wenn sie nicht die erwartete Tastaturbelegung verwenden.

Um zu bestimmen, welches Zeichen dem Tastenereignis entspricht, verwenden Sie stattdessen die [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) Eigenschaft.

## Wert

Die Code-Werte für Windows, Linux und macOS sind auf der Seite [KeyboardEvent: code values](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) aufgelistet.

## Beispiele

### Nutzung von KeyboardEvent

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
window.addEventListener("keydown", (event) => {
  const p = document.createElement("p");
  p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
  document.getElementById("output").appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
});
```

#### Ausprobieren

Um sicherzustellen, dass die Tastendrücke zum Beispiel gelangen, klicken Sie auf das Ausgabefeld oder fokussieren Sie es unten, bevor Sie Tasten drücken.

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### Behandeln von Tastaturereignissen in einem Spiel

Dieses Beispiel richtet einen Ereignislistener für [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse ein, die Tastatureingaben für ein Spiel behandeln, das das typische "WASD"-Tastaturlayout für die Steuerung vorwärts, links, rückwärts und rechts verwendet. Dies verwendet physisch dieselben vier Tasten, unabhängig davon, welche tatsächlichen entsprechenden Zeichen vorhanden sind, zum Beispiel, wenn der Benutzer eine AZERTY-Tastatur verwendet.

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

Der erste Abschnitt des JavaScript-Codes legt einige Variablen fest, die wir verwenden werden. `shipSize` enthält die Größe des Schiffs, das der Spieler bewegt, zur Bequemlichkeit. `position` wird verwendet, um die Position des Schiffs innerhalb des Spielfelds zu verfolgen. `moveRate` ist die Anzahl der Pixel, die das Schiff bei jedem Tastendruck vorwärts und rückwärts bewegt, und `turnRate` ist, wie viele Grad Rotationskontrollen links und rechts pro Tastendruck gelten. `angle` ist der derzeitige Betrag der auf das Schiff angewendeten Rotation in Grad; er startet bei 0° (zeigt gerade nach oben). Schließlich wird `spaceship` auf das Element mit der ID `"spaceship"` gesetzt, welches das SVG-Polygon repräsentiert, das das vom Spieler kontrollierte Schiff darstellt.

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

Als nächstes kommt die Funktion `updatePosition()`. Diese Funktion nimmt die Entfernung, die das Schiff bewegt werden soll, als Eingabe, wobei Positives eine Vorwärtsbewegung und Negatives eine Rückwärtsbewegung darstellt. Diese Funktion berechnet die neue Position des Schiffs, gegeben die Bewegung und die aktuelle Richtung, in die das Schiff schaut. Sie sorgt auch dafür, dass das Schiff über die Spielfeldgrenzen hinweg schaltet, anstatt zu verschwinden.

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

Die `refresh()` Funktion übernimmt die Anwendung der Rotation und Position unter Verwendung einer [SVG-Transformation](/de/docs/Web/SVG/Reference/Attribute/transform).

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

Schließlich wird die `addEventListener()` Methode verwendet, um mit dem Lauschen auf [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse zu beginnen und jede Taste durch Aktualisieren der Schiffsposition und des Rotationswinkels zu behandeln, dann wird `refresh()` aufgerufen, um das Schiff an seiner neuen Position und seinem neuen Winkel zu zeichnen.

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

#### Ausprobieren

Um sicherzustellen, dass die Tastendrücke in die Beispielcodierung gehen, klicken oder fokussieren Sie das schwarze Spielfeld unten, bevor Sie Tasten drücken.

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

Es gibt mehrere Möglichkeiten, diesen Code zu verbessern. Die meisten echten Spiele würden auf [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse achten, die Bewegung starten, wenn das passiert, und die Bewegung stoppen, wenn das entsprechende [`keyup`](/de/docs/Web/API/Element/keyup_event) erfolgt, anstatt sich auf Tastenwiederholungen zu verlassen. Das würde sowohl eine flüssigere als auch schnellere Bewegung ermöglichen, aber es würde auch dem Spieler erlauben, sich zu bewegen und gleichzeitig zu steuern. Übergänge oder Animationen könnten verwendet werden, um die Bewegung des Schiffs ebenfalls flüssiger zu machen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
