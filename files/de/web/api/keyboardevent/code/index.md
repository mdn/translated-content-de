---
title: "KeyboardEvent: code-Eigenschaft"
short-title: code
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

Die `KeyboardEvent.code`-Eigenschaft steht für eine physische Taste auf der Tastatur (im Gegensatz zu dem durch das Drücken der Taste erzeugten Zeichen). Anders ausgedrückt gibt diese Eigenschaft einen Wert zurück, der nicht durch das Tastaturlayout oder den Zustand der Modifikatortasten verändert wird.

Wenn das Eingabegerät keine physische Tastatur, sondern eine virtuelle Tastatur oder ein Barrierefreiheitsgerät ist, wird der zurückgegebene Wert vom Browser so eingestellt, dass er so gut wie möglich dem entspricht, was mit einer physischen Tastatur passieren würde, um die Kompatibilität zwischen physischen und virtuellen Eingabegeräten zu maximieren.

Diese Eigenschaft ist nützlich, wenn Sie Tasten basierend auf ihren physischen Positionen auf dem Eingabegerät und nicht den damit verbundenen Zeichen behandeln möchten; dies ist besonders häufig der Fall, wenn Sie Code schreiben, um Eingaben für Spiele zu behandeln, die eine Gamepad-ähnliche Umgebung mit Tasten auf der Tastatur simulieren. Beachten Sie jedoch, dass Sie den von `KeyboardEvent.code` gemeldeten Wert nicht verwenden können, um das durch den Tastenanschlag erzeugte Zeichen zu bestimmen, da der Name des Tastencodes möglicherweise nicht mit dem tatsächlich auf der Taste aufgedruckten Zeichen übereinstimmt oder dem, das vom Computer erzeugt wird, wenn die Taste gedrückt wird.

Beispielsweise wird `KeyQ` für die <kbd>Q</kbd>-Taste auf einer QWERTY-Tastatur zurückgegeben, aber derselbe `code`-Wert repräsentiert auch die <kbd>'</kbd>-Taste auf Dvorak-Tastaturen und die <kbd>A</kbd>-Taste auf AZERTY-Tastaturen. Das macht es unmöglich, den Wert von `code` zu verwenden, um den Benutzernamen der Taste zu bestimmen, wenn sie nicht das erwartete Tastaturlayout verwenden.

Um zu bestimmen, welches Zeichen dem Tastenereignis entspricht, verwenden Sie stattdessen die {{domxref("KeyboardEvent.key")}}-Eigenschaft.

## Wert

Die Code-Werte für Windows, Linux und macOS sind auf der Seite [KeyboardEvent: code values](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) aufgelistet.

## Beispiele

### KeyboardEvent ausprobieren

#### HTML

```html
<p>
  Drücken Sie Tasten auf der Tastatur, um zu sehen, welche Werte die KeyboardEvent's key- und code-Eigenschaften für jede Taste haben.
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

Um sicherzustellen, dass die Tastenanschläge an das Beispiel gesendet werden, klicken Sie vor dem Drücken der Tasten oder fokussieren Sie das Ausgabefeld unten.

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### Behandeln von Tastaturereignissen in einem Spiel

Dieses Beispiel legt einen Ereignis-Listener für {{domxref("Element/keydown_event", "keydown")}}-Ereignisse fest, die die Tastatureingabe für ein Spiel behandeln, das das typische "WASD"-Tastaturlayout zum Steuern von Vorwärts-, Links-, Rückwärts- und Rechtsbewegungen verwendet. Dies wird unabhängig von den tatsächlichen entsprechenden Zeichen dieselben vier physischen Tasten verwenden, beispielsweise wenn der Benutzer eine AZERTY-Tastatur verwendet.

#### HTML

```html
<p>Verwenden Sie die WASD (ZQSD auf AZERTY) Tasten, um sich zu bewegen und zu steuern.</p>
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

Der erste Abschnitt des JavaScript-Codes legt einige Variablen fest, die wir verwenden werden. `shipSize` enthält die Größe des Schiffes, das der Spieler bewegt, zweckmäßigerweise. `position` wird verwendet, um die Position des Schiffes innerhalb des Spielfeldes zu verfolgen. `moveRate` ist die Anzahl der Pixel, die jedes Tastendrücken das Schiff vorwärts und rückwärts bewegt, und `turnRate` ist, wie viele Grad der Drehung die Steuerungen für links und rechts pro Tastendruck anwenden. `angle` ist der aktuelle Betrag der Rotation, der in Grad auf das Schiff angewandt wird; es beginnt bei 0° (nach oben zeigend). Schließlich wird `spaceship` auf das Element mit der ID `"spaceship"` gesetzt, welches das SVG-Polygon darstellt, das das vom Spieler gesteuerte Schiff repräsentiert.

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

Es folgt die Funktion `updatePosition()`. Diese Funktion nimmt als Eingabe die Distanz an, die das Schiff bewegt werden soll, wobei positiv eine Vorwärtsbewegung und negativ eine Rückwärtsbewegung ist. Diese Funktion berechnet die neue Position des Schiffes basierend auf der zurückgelegten Entfernung und der aktuellen Blickrichtung des Schiffes. Sie stellt auch sicher, dass das Schiff über die Grenzen des Spielfeldes hinweg rollt, anstatt zu verschwinden.

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

Die `refresh()`-Funktion behandelt das Anwenden der Drehung und Position durch die Verwendung einer [SVG-Transformation](/de/docs/Web/SVG/Attribute/transform).

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

Schließlich wird die `addEventListener()`-Methode verwendet, um mit dem Hören auf {{domxref("Element/keydown_event", "keydown")}}-Ereignisse zu beginnen, die auf jede Taste durch Aktualisieren der Schiffsposition und des Rotationswinkels reagieren, und dann `refresh()` zu rufen, um das Schiff an seiner neuen Position und unter seinem neuen Winkel zu zeichnen.

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Nichts tun, wenn das Ereignis bereits behandelt wurde
    }

    switch (event.code) {
      case "KeyS":
      case "ArrowDown":
        // "zurück" behandeln
        updatePosition(-moveRate);
        break;
      case "KeyW":
      case "ArrowUp":
        // "vorwärts" behandeln
        updatePosition(moveRate);
        break;
      case "KeyA":
      case "ArrowLeft":
        // "nach links drehen" behandeln
        angle -= turnRate;
        break;
      case "KeyD":
      case "ArrowRight":
        // "nach rechts drehen" behandeln
        angle += turnRate;
        break;
    }

    refresh();

    if (event.code !== "Tab") {
      // Das Ereignis verbrauchen, damit es nicht zweimal behandelt wird,
      // solange der Benutzer nicht versucht, den Fokus zu verschieben
      event.preventDefault();
    }
  },
  true,
);
```

#### Probieren Sie es aus

Um sicherzustellen, dass die Tastenanschläge an den Beispielcode gesendet werden, klicken Sie vor dem Drücken der Tasten oder fokussieren Sie das schwarze Spielfeld unten.

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

Es gibt verschiedene Möglichkeiten, wie dieser Code verbessert werden kann. Die meisten echten Spiele würden auf {{domxref("Element/keydown_event", "keydown")}}-Ereignisse warten, die Bewegung starten, wenn dies geschieht, und die Bewegung beenden, wenn das entsprechende {{domxref("Element/keyup_event", "keyup")}}-Ereignis eintritt, anstatt sich auf Tastwiederholungen zu verlassen. Das würde sowohl sanftere als auch schnellere Bewegungen ermöglichen, aber auch ermöglichen, dass der Spieler gleichzeitig bewegt wird und steuert. Übergänge oder Animationen könnten ebenfalls verwendet werden, um die Bewegung des Schiffes flüssiger zu gestalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
