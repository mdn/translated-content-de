---
title: Verwendung der Gamepad API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: 7cd581673928ad7649d34a9e7ae7f046ad241040
---

{{DefaultAPISidebar("Gamepad API")}}

HTML stellt die notwendigen Komponenten für eine reichhaltige, interaktive Spielentwicklung bereit. Technologien wie `<canvas>`, WebGL, `<audio>` und `<video>`, zusammen mit JavaScript-Implementierungen, unterstützen Aufgaben, die ähnliche, wenn nicht sogar die gleichen Funktionen wie nativer Code bieten. Die Gamepad API ermöglicht es Entwicklern und Designern, Gamepads und andere Spielsteuerungen zu verwenden und darauf zuzugreifen.

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) führt neue Ereignisse auf dem [`Window`](/de/docs/Web/API/Window) Objekt ein, um den Status von Gamepads und Controllern (im Folgenden als _Gamepad_ bezeichnet) auszulesen. Zusätzlich zu diesen Ereignissen fügt die API ein [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt hinzu, welches zum Abfragen des Status eines verbundenen Gamepads verwendet werden kann, und eine Methode [`navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), mit der Sie eine Liste der der Seite bekannten Gamepads abrufen können.

## Verbindung mit einem Gamepad

Wenn ein neues Gamepad mit dem Computer verbunden wird, erhält die fokussierte Seite zuerst ein [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis. Wenn ein Gamepad bereits verbunden ist, wenn die Seite geladen wird, wird das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis an die fokussierte Seite gesendet, wenn der Benutzer eine Taste drückt oder eine Achse bewegt.

> [!NOTE]
> In Firefox werden Gamepads einer Seite nur dann angezeigt, wenn der Benutzer mit der sichtbaren Seite mit einem interagiert. Dies hilft zu verhindern, dass Gamepads für das {{Glossary("Fingerprinting", "Fingerprinting")}} des Benutzers verwendet werden. Sobald mit einem Gamepad interagiert wurde, werden andere verbundene Gamepads automatisch sichtbar sein.

Sie können [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) folgendermaßen verwenden:

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

Jedes Gamepad hat eine eindeutige ID, die im [`gamepad`](/de/docs/Web/API/GamepadEvent/gamepad) Eigenschaft des Ereignisses verfügbar ist.

## Trennen eines Gamepads

Wenn ein Gamepad getrennt wird, und falls eine Seite zuvor Daten für dieses Gamepad erhalten hat (z.B. [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)), wird ein zweites Ereignis an das fokussierte Fenster gesendet, das [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event):

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

Die [`index`](/de/docs/Web/API/Gamepad/index) Eigenschaft des Gamepads ist eindeutig pro Gerät, das mit dem System verbunden ist, selbst wenn mehrere Controller desselben Typs verwendet werden. Die `index` Eigenschaft dient auch als Index in das von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegebene {{jsxref("Array")}}.

```js
const gamepads = {};

function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Note: Use gamepad.index as the stable key, then read the latest
  // state from navigator.getGamepads() inside your update loop.

  if (connected) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener("gamepadconnected", (e) => {
  gamepadHandler(e, true);
});
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadHandler(e, false);
});
```

Dieses vorherige Beispiel zeigt, wie man den Überblick darüber behält, welche Geräte anhand ihrer `index` Eigenschaften verbunden sind. Für den aktuellen Tasten- und Achsenzustand rufen Sie in jedem Frame [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) auf und lesen Sie das neueste Objekt für diesen `index`.

## Abfrage des Gamepad-Objekts

Wie Sie sehen können, enthalten die oben besprochenen **gamepad** Ereignisse eine `gamepad` Eigenschaft im Ereignisobjekt, die ein [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt zurückgibt. Wir können dies verwenden, um zu bestimmen, welches Gamepad (d.h. seine ID) das Ereignis ausgelöst hat, da mehrere Gamepads gleichzeitig angeschlossen sein könnten. Um den aktuellen Tasten- und Achsenzustand zu lesen, nutzen Sie den `index` des Gamepads und holen Sie das neueste Objekt von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) in Ihrer Animationsschleife.

Solche Überprüfungen tendieren dazu, das [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt zusammen mit einer Animationsschleife (z.B. [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)) zu verwenden, bei der Entwickler Entscheidungen für den aktuellen Frame basierend auf dem Zustand des Gamepads oder der Gamepads treffen möchten.

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) liefert ein Array aller derzeit für die Webseite sichtbaren Geräte als [`Gamepad`](/de/docs/Web/API/Gamepad) Objekte (der erste Wert ist immer `null`, sodass `null` zurückgegeben wird, wenn keine Gamepads verbunden sind). Dies kann dann verwendet werden, um die gleiche Information zu erhalten. Zum Beispiel könnte das erste Codebeispiel oben wie folgt umgeschrieben werden:

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

Die Eigenschaften des [`Gamepad`](/de/docs/Web/API/Gamepad) Objekts sind wie folgt:

- `id`: Ein String, der einige Informationen über den Controller enthält. Dies ist nicht streng spezifiziert, aber in Firefox wird er drei Informationen enthalten, die durch Bindestriche (`-`) getrennt sind: zwei 4-stellige Hexadezimalzeichenfolgen, die die USB-Hersteller- und Produkt ID des Controllers enthalten, und den vom Treiber bereitgestellten Namen des Controllers. Diese Informationen sollen helfen, eine Zuordnung für die Bedienelemente auf dem Gerät zu finden und nützliches Feedback an den Benutzer zu geben.
- `index`: Eine Ganzzahl, die für jedes derzeit mit dem System verbundene Gamepad eindeutig ist. Dies kann verwendet werden, um mehrere Controller zu unterscheiden. Beachten Sie, dass das Trennen eines Geräts und anschließendes Verbinden eines neuen Geräts den vorherigen Index erneut verwenden kann.
- `mapping`: Ein String, der angibt, ob der Browser die Bedienelemente auf dem Gerät auf ein bekanntes Layout umgemappt hat. Derzeit gibt es nur ein unterstütztes bekanntes Layout - das [standardmäßige Gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). Wenn der Browser in der Lage ist, die Bedienelemente auf dem Gerät auf dieses Layout zu mappen, wird die `mapping` Eigenschaft auf den String `standard` gesetzt.
- `connected`: Ein Boolescher Wert, der angibt, ob das Gamepad noch mit dem System verbunden ist. Wenn dies der Fall ist, lautet der Wert `True`; andernfalls `False`.
- `buttons`: Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton) Objekten, die die auf dem Gerät vorhandenen Tasten repräsentieren. Jeder [`GamepadButton`](/de/docs/Web/API/GamepadButton) besitzt eine `pressed` und eine `value` Eigenschaft:
  - Die `pressed` Eigenschaft ist ein Boolean, der angibt, ob die Taste derzeit gedrückt (`true`) oder ungedrückt (`false`) ist.
  - Die `value` Eigenschaft ist ein Fließkommawert, der verwendet wird, um analoge Tasten darzustellen, wie z.B. die Trigger bei vielen modernen Gamepads. Die Werte sind auf den Bereich 0.0..1.0 normalisiert, wobei 0.0 eine ungedrückte Taste darstellt und 1.0 eine vollständig gedrückte Taste.

- `axes`: Ein Array, das die Steuerungen mit Achsen auf dem Gerät repräsentiert (z.B. analoge Thumbsticks). Jeder Eintrag im Array ist ein Fließkommawert im Bereich von -1.0 bis 1.0, der die Achsenposition vom niedrigsten Wert (-1.0) bis zum höchsten Wert (1.0) darstellt.
- `timestamp`: Dies gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, welches den Zeitpunkt der letzten Aktualisierung der Daten für dieses Gamepad darstellt. Dadurch können Entwickler feststellen, ob die `axes` und `button` Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zum Attribut `navigationStart` der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle sein. Die Werte sind monoton steigend, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Aktualisierungen zu bestimmen, da neuere Werte stets größer oder gleich älteren Werten sind. Beachten Sie, dass diese Eigenschaft derzeit in Firefox nicht unterstützt wird.

> [!NOTE]
> Das Gamepad-Objekt ist aus Sicherheitsgründen im [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis verfügbar und nicht im [`Window`](/de/docs/Web/API/Window) Objekt selbst. Sie können auch über [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) auf Gamepads zugreifen. In der Praxis sollten Sie [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) abfragen und jede Bildaktualisierung das aktuelle Objekt für einen bekannten `index` lesen, anstatt sich auf eine langfristige Referenz eines früheren Ereignisses zu verlassen.

### Verwendung von Tasteninformationen

Schauen wir uns ein Beispiel an, das Verbindungsinformationen für ein Gamepad anzeigt (nachfolgende Gamepad-Verbindungen werden ignoriert) und es ermöglicht, einen Ball über den Bildschirm zu bewegen, indem die vier Gamepad-Tasten auf der rechten Seite des Gamepads verwendet werden. Sie können die [Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und [den Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master).

Zuerst deklarieren wir einige Variablen: Der `gamepadInfo` Absatz, in den die Verbindungsinformationen geschrieben werden, der `ball`, den wir bewegen wollen, die `start`-Variable, die als ID für `requestAnimationFrame` dient, die `a` und `b` Variablen, die als Positionsmodifikatoren für die Ballbewegung fungieren, und die Kurzvariablen, die für die plattformübergreifenden Variationen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) verwendet werden.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Als nächstes verwenden wir das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, um zu prüfen, ob ein Gamepad angeschlossen ist. Wenn eines angeschlossen ist, holen wir das Gamepad mit [`navigator.getGamepads()[0]`](/de/docs/Web/API/Navigator/getGamepads), drucken Informationen über das Gamepad in unser `div` für Gamepad-Informationen und starten die `gameLoop()` Funktion, die den gesamten Ballbewegungsprozess ins Rollen bringt.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

Jetzt verwenden wir das [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis, um zu überprüfen, ob das Gamepad wieder getrennt wird. Falls ja, beenden wir die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Schleife (siehe unten) und setzen die Gamepaddaten auf ihren ursprünglichen Zustand zurück.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Jetzt zur Hauptspielschleife. Bei jeder Ausführung der Schleife prüfen wir, ob eine der vier Tasten gedrückt wird; falls ja, aktualisieren wir die Werte der Bewegungsvariablen `a` und `b` entsprechend und aktualisieren die {{ cssxref("left") }} und {{ cssxref("top") }} Eigenschaften, indem wir ihre Werte auf die aktuellen Werte von `a` und `b` setzen. Dies hat den Effekt, den Ball über den Bildschirm zu bewegen.

Nachdem dies alles erledigt ist, verwenden wir unser `requestAnimationFrame()`, um das nächste Animationsbild anzufordern und `gameLoop()` erneut auszuführen.

```js
function gameLoop() {
  const gamepads = navigator.getGamepads();
  if (!gamepads) {
    return;
  }

  const gp = gamepads[0];
  if (gp.buttons[0].pressed) {
    b--;
  }
  if (gp.buttons[2].pressed) {
    b++;
  }
  if (gp.buttons[1].pressed) {
    a++;
  }
  if (gp.buttons[3].pressed) {
    a--;
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  start = requestAnimationFrame(gameLoop);
}
```

## Komplettes Beispiel: Anzeige des Gamepad-Zustands

Dieses Beispiel zeigt, wie das [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt sowie die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) verwendet werden, um den Zustand aller mit dem System verbundenen Gamepads anzuzeigen. Das Beispiel basiert auf einer [Gamepad-Demo](https://luser.github.io/gamepadtest/), deren [Quellcode auf GitHub](https://github.com/luser/gamepadtest) verfügbar ist.

```js
let loopStarted = false;

window.addEventListener("gamepadconnected", (evt) => {
  addGamepad(evt.gamepad);
});
window.addEventListener("gamepaddisconnected", (evt) => {
  removeGamepad(evt.gamepad);
});

function addGamepad(gamepad) {
  const d = document.createElement("div");
  d.setAttribute("id", `controller${gamepad.index}`);

  const t = document.createElement("h1");
  t.textContent = `gamepad: ${gamepad.id}`;
  d.append(t);

  const b = document.createElement("ul");
  b.className = "buttons";
  gamepad.buttons.forEach((button, i) => {
    const e = document.createElement("li");
    e.className = "button";
    e.textContent = `Button ${i}`;
    b.append(e);
  });

  d.append(b);

  const a = document.createElement("div");
  a.className = "axes";

  gamepad.axes.forEach((axis, i) => {
    const p = document.createElement("progress");
    p.className = "axis";
    p.setAttribute("max", "2");
    p.setAttribute("value", "1");
    p.textContent = i;
    a.append(p);
  });

  d.appendChild(a);

  // See https://github.com/luser/gamepadtest/blob/master/index.html
  const start = document.querySelector("#start");
  if (start) {
    start.style.display = "none";
  }

  document.body.append(d);
  if (!loopStarted) {
    requestAnimationFrame(updateStatus);
    loopStarted = true;
  }
}

function removeGamepad(gamepad) {
  document.querySelector(`#controller${gamepad.index}`).remove();
}

function updateStatus() {
  for (const gamepad of navigator.getGamepads()) {
    if (!gamepad) continue;

    const d = document.getElementById(`controller${gamepad.index}`);
    const buttonElements = d.getElementsByClassName("button");

    for (const [i, button] of gamepad.buttons.entries()) {
      const el = buttonElements[i];

      const pct = `${Math.round(button.value * 100)}%`;
      el.style.backgroundSize = `${pct} ${pct}`;
      if (button.pressed) {
        el.textContent = `Button ${i} [PRESSED]`;
        el.style.color = "#42f593";
        el.className = "button pressed";
      } else {
        el.textContent = `Button ${i}`;
        el.style.color = "#2e2d33";
        el.className = "button";
      }
    }

    const axisElements = d.getElementsByClassName("axis");
    for (const [i, axis] of gamepad.axes.entries()) {
      const el = axisElements[i];
      el.textContent = `${i}: ${axis.toFixed(4)}`;
      el.setAttribute("value", axis + 1);
    }
  }

  requestAnimationFrame(updateStatus);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
