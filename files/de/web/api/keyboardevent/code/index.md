---
title: "KeyboardEvent: code-Eigenschaft"
short-title: code
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`code`** der Schnittstelle [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) steht für eine physische Taste auf der Tastatur (im Gegensatz zu dem Zeichen, das beim Drücken der Taste erzeugt wird). Mit anderen Worten: Diese Eigenschaft gibt einen Wert zurück, der weder durch das Tastaturlayout noch durch den Zustand der Modifikatortasten verändert wird.

Wenn das Eingabegerät keine physische Tastatur, sondern eine virtuelle Tastatur oder ein Hilfsgerät für Barrierefreiheit ist, legt der Browser den zurückgegebenen Wert so fest, dass er möglichst genau dem Wert entspricht, der bei einer physischen Tastatur zurückgegeben würde. So wird die Kompatibilität zwischen physischen und virtuellen Eingabegeräten maximiert.

Diese Eigenschaft ist nützlich, wenn Sie Tasten anhand ihrer physischen Position auf dem Eingabegerät statt anhand der ihnen zugeordneten Zeichen verarbeiten möchten. Das ist besonders häufig bei Code für Spiele der Fall, die mithilfe von Tastaturtasten eine Gamepad-ähnliche Steuerung nachbilden. Beachten Sie jedoch, dass Sie aus dem von `KeyboardEvent.code` zurückgegebenen Wert nicht das beim Tastendruck erzeugte Zeichen bestimmen können. Der Name des Tastencodes muss weder mit dem auf der Taste aufgedruckten Zeichen noch mit dem Zeichen übereinstimmen, das der Computer beim Drücken der Taste erzeugt.

Beispielsweise wird für die Taste <kbd>Q</kbd> auf einer Tastatur mit QWERTY-Layout als `code` der Wert `"KeyQ"` zurückgegeben. Derselbe `code`-Wert steht auf Tastaturen mit Dvorak-Layout jedoch für die Taste <kbd>'</kbd> und auf Tastaturen mit AZERTY-Layout für die Taste <kbd>A</kbd>. Wenn Benutzer ein anderes als das erwartete Tastaturlayout verwenden, lässt sich aus dem Wert von `code` daher nicht bestimmen, wie die Taste für sie heißt.

Um zu bestimmen, welches Zeichen einem Tastaturereignis entspricht, verwenden Sie stattdessen die Eigenschaft [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key).

## Wert

Die `code`-Werte für Windows, Linux und macOS sind auf der Seite [KeyboardEvent: code-Werte](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) aufgeführt.

## Beispiele

### KeyboardEvent ausprobieren

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

#### Ausprobieren

Damit Ihre Tastendrücke beim Beispiel ankommen, klicken Sie vor dem Drücken der Tasten in das Ausgabefeld unten oder fokussieren Sie es.

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### Tastaturereignisse in einem Spiel verarbeiten

In diesem Beispiel wird ein Event-Listener für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse eingerichtet. Er verarbeitet die Tastatureingaben für ein Spiel, das die übliche „WASD“-Tastenanordnung zum Steuern nach vorn, links, hinten und rechts verwendet. Dabei werden unabhängig von den tatsächlich zugeordneten Zeichen dieselben vier physischen Tasten verwendet, beispielsweise auch dann, wenn der Benutzer eine Tastatur mit AZERTY-Layout verwendet.

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

Im ersten Abschnitt des JavaScript-Codes werden einige Variablen festgelegt, die wir verwenden werden. `shipSize` enthält der Einfachheit halber die Größe des Schiffs, das der Spieler bewegt. Mit `position` wird die Position des Schiffs innerhalb des Spielfelds verfolgt. `moveRate` gibt an, um wie viele Pixel jeder Tastendruck das Schiff vorwärts oder rückwärts bewegt, und `turnRate` gibt an, um wie viele Grad die Links- und Rechtssteuerung das Schiff pro Tastendruck dreht. `angle` ist der aktuelle Drehwinkel des Schiffs in Grad; er beginnt bei 0° (das Schiff zeigt gerade nach oben). Schließlich verweist `spaceship` auf das Element mit der ID `"spaceship"` – das SVG-Polygon, das das vom Spieler gesteuerte Schiff darstellt.

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

Als Nächstes folgt die Funktion `updatePosition()`. Sie nimmt als Eingabe die Strecke entgegen, um die das Schiff bewegt werden soll. Ein positiver Wert bedeutet eine Bewegung vorwärts, ein negativer Wert eine Bewegung rückwärts. Die Funktion berechnet die neue Position des Schiffs anhand dieser Strecke und seiner aktuellen Ausrichtung. Sie sorgt außerdem dafür, dass das Schiff beim Überschreiten einer Spielfeldgrenze auf der gegenüberliegenden Seite wieder erscheint, statt zu verschwinden.

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

Die Funktion `refresh()` wendet Drehung und Position mithilfe einer [SVG-Transformation](/de/docs/Web/SVG/Reference/Attribute/transform) an.

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

Zum Schluss wird mit der Methode `addEventListener()` ein Listener für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse eingerichtet. Bei jedem entsprechenden Tastendruck aktualisiert er die Position und den Drehwinkel des Schiffs und ruft anschließend `refresh()` auf, um das Schiff an seiner neuen Position und mit seiner neuen Ausrichtung darzustellen.

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

Damit Ihre Tastendrücke beim Beispielcode ankommen, klicken Sie vor dem Drücken der Tasten in das schwarze Spielfeld unten oder fokussieren Sie es.

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

Dieser Code lässt sich auf verschiedene Weise verbessern. Die meisten Spiele würden auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse reagieren, die Bewegung bei einem solchen Ereignis beginnen und sie beim entsprechenden [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis beenden, statt sich auf wiederholte Tastaturereignisse zu verlassen. Das würde eine flüssigere und schnellere Bewegung ermöglichen und es dem Spieler außerdem erlauben, sich gleichzeitig zu bewegen und zu lenken. Auch mit Übergängen oder Animationen ließe sich die Bewegung des Schiffs flüssiger gestalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
