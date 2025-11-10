---
title: Verwendung der Gamepad API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("Gamepad API")}}

HTML bietet die notwendigen Komponenten für die Entwicklung von reichhaltigen, interaktiven Spielen. Technologien wie `<canvas>`, WebGL, `<audio>` und `<video>`, zusammen mit JavaScript-Implementierungen, unterstützen Aufgaben, die ähnliche, wenn nicht sogar die gleichen Funktionen wie nativer Code bieten. Die Gamepad API ermöglicht es Entwicklern und Designern, auf Gamepads und andere Spielsteuerungen zuzugreifen und diese zu nutzen.

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) führt neue Ereignisse auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ein, um den Zustand von Gamepads und Controllern (im Folgenden als _Gamepad_ bezeichnet) zu lesen. Neben diesen Ereignissen fügt die API auch ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt hinzu, das Sie verwenden können, um den Zustand eines angeschlossenen Gamepads abzufragen, und eine Methode [`navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), mit der Sie eine Liste der der Seite bekannten Gamepads abrufen können.

## Verbindung mit einem Gamepad

Wenn ein neues Gamepad an den Computer angeschlossen wird, empfängt die fokussierte Seite zuerst ein [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis. Wenn ein Gamepad bereits beim Laden der Seite angeschlossen ist, wird das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis an die fokussierte Seite gesendet, wenn der Benutzer eine Taste drückt oder eine Achse bewegt.

> [!NOTE]
> In Firefox werden Gamepads einer Seite nur angezeigt, wenn der Benutzer mit einem bei sichtbarer Seite interagiert. Dies hilft zu verhindern, dass Gamepads zur {{Glossary("Fingerprinting", "Fingerabdruckerstellung")}} des Benutzers verwendet werden. Sobald mit einem Gamepad interagiert wurde, werden andere angeschlossene Gamepads automatisch sichtbar.

Sie können [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) wie folgt verwenden:

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

Jedes Gamepad hat eine eindeutige ID, die in der [`gamepad`](/de/docs/Web/API/GamepadEvent/gamepad)-Eigenschaft des Ereignisses verfügbar ist.

## Trennung eines Gamepads

Wenn ein Gamepad getrennt wird und eine Seite zuvor Daten für dieses Gamepad erhalten hat (z. B. [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)), wird ein zweites Ereignis an das fokussierte Fenster gesendet: [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event):

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

Die [`index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft des Gamepads ist einzigartig für jedes mit dem System verbundene Gerät, selbst wenn mehrere Controller desselben Typs verwendet werden. Die `index`-Eigenschaft dient auch als Index im {{jsxref("Array")}}, das von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird.

```js
const gamepads = {};

function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

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

Dieses vorherige Beispiel zeigt auch, wie die `gamepad`-Eigenschaft nach Abschluss des Ereignisses gehalten werden kann - eine Technik, die wir später zur Abfrage des Gerätezustands verwenden werden.

## Abfragen des Gamepad-Objekts

Wie Sie sehen können, enthalten die oben besprochenen **gamepad**-Ereignisse eine `gamepad`-Eigenschaft im Ereignisobjekt, die ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt zurückgibt. Wir können dies nutzen, um zu ermitteln, welches Gamepad (d.h. seine ID) das Ereignis verursacht hat, da mehrere Gamepads gleichzeitig angeschlossen sein könnten. Wir können mit dem [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt viel mehr tun, einschließlich des Haltens einer Referenz darauf und des Abfragens, um herauszufinden, welche Tasten und Achsen zu einem bestimmten Zeitpunkt gedrückt werden. Dies ist oft wünschenswert für Spiele oder andere interaktive Webseiten, die den Zustand eines Gamepads jetzt im Vergleich zum nächsten Feuer eines Ereignisses kennen müssen.

Solche Prüfungen erfolgen oft in Verbindung mit einer Animationsschleife (z. B. [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)), bei der Entwickler basierend auf dem Zustand des Gamepads oder der Gamepads Entscheidungen für den aktuellen Frame treffen wollen.

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) gibt ein Array aller dem Webpage derzeit sichtbaren Geräte als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte zurück (der erste Wert ist immer `null`, daher wird `null` zurückgegeben, wenn keine Gamepads angeschlossen sind). Dies kann dann verwendet werden, um die gleiche Information zu erhalten. Zum Beispiel könnte das erste Codebeispiel oben wie unten umgeschrieben werden:

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

Die Eigenschaften des [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekts sind wie folgt:

- `id`: Ein Zeichenfolgenwert, der einige Informationen über den Controller enthält. Dieser ist nicht strikt spezifiziert, aber in Firefox enthält er drei durch Bindestriche (`-`) getrennte Informationen: Zwei 4-stellige Hexadezimalzahlen, die die USB-Hersteller- und Produkt-ID des Controllers enthalten, und den vom Treiber bereitgestellten Namen des Controllers. Diese Informationen sollen es ermöglichen, eine Zuordnung für die Steuerelemente auf dem Gerät zu finden und nützliches Feedback an den Benutzer anzuzeigen.
- `index`: Eine ganzzahlige Zahl, die für jedes momentan mit dem System verbundene Gamepad einzigartig ist. Dies kann verwendet werden, um mehrere Controller zu unterscheiden. Beachten Sie, dass bei Trennung eines Geräts und anschließender Verbindung eines neuen Geräts der vorherige Index wiederverwendet werden kann.
- `mapping`: Ein Zeichenfolgenwert, der angibt, ob der Browser die Steuerelemente auf dem Gerät einem bekannten Layout zugeordnet hat. Derzeit gibt es nur ein unterstütztes bekanntes Layout - der [Standard-Gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). Wenn der Browser in der Lage ist, die Steuerelemente auf dem Gerät diesem Layout zuzuordnen, wird die `mapping`-Eigenschaft auf den Zeichenfolgenwert `standard` gesetzt.
- `connected`: Ein boolescher Wert, der angibt, ob das Gamepad noch mit dem System verbunden ist. Wenn ja, ist der Wert `True`; wenn nicht, ist er `False`.
- `buttons`: Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten, die die auf dem Gerät vorhandenen Tasten darstellen. Jedes [`GamepadButton`](/de/docs/Web/API/GamepadButton) hat eine `pressed`- und eine `value`-Eigenschaft:
  - Die `pressed`-Eigenschaft ist ein boolescher Wert, der angibt, ob die Taste momentan gedrückt (`true`) oder nicht gedrückt (`false`) ist.
  - Die `value`-Eigenschaft ist ein Gleitkommawert, der verwendet wird, um analoge Tasten darzustellen, wie z. B. die Trigger vieler moderner Gamepads. Die Werte werden auf den Bereich 0.0..1.0 normalisiert, wobei 0.0 eine nicht gedrückte Taste und 1.0 eine vollständig gedrückte Taste darstellt.

- `axes`: Ein Array, das die mit Achsen ausgestatteten Steuerelemente auf dem Gerät darstellt (z. B. analoge Daumensticks). Jedes Element im Array ist ein Gleitkommawert im Bereich -1.0 - 1.0, der die Achsenposition vom niedrigsten Wert (-1.0) bis zum höchsten Wert (1.0) darstellt.
- `timestamp`: Dies gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die letzte Aktualisierungszeit der Daten für dieses Gamepad darstellt, sodass Entwickler feststellen können, ob die `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zur `navigationStart`-Eigenschaft der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle sein. Die Werte sind monoton steigend, sodass sie verglichen werden können, um die Reihenfolge der Aktualisierungen zu bestimmen, da neuere Werte immer größer oder gleich älteren Werten sein werden. Beachten Sie, dass diese Eigenschaft in Firefox derzeit nicht unterstützt wird.

> [!NOTE]
> Das Gamepad-Objekt ist aus Sicherheitsgründen auf dem [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis und nicht auf dem [`Window`](/de/docs/Web/API/Window)-Objekt selbst verfügbar. Sobald wir eine Referenz darauf haben, können wir seine Eigenschaften abfragen, um Informationen über den aktuellen Zustand des Gamepads zu erhalten. Im Hintergrund wird dieses Objekt jedes Mal aktualisiert, wenn sich der Zustand des Gamepads ändert.

### Verwendung von Tasteninformationen

Sehen wir uns ein Beispiel an, das Verbindungsinformationen für ein Gamepad anzeigt (es ignoriert nachfolgende Gamepad-Verbindungen) und es Ihnen ermöglicht, einen Ball auf dem Bildschirm mit den vier Gamepad-Tasten auf der rechten Seite des Gamepads zu bewegen. Sie können [die Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und [den Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master).

Zu Beginn deklarieren wir einige Variablen: Den `gamepadInfo`-Absatz, in den die Verbindungsinformationen geschrieben werden, den `ball`, den wir bewegen möchten, die `start`-Variable, die als ID für `requestAnimationFrame` dient, die `a`- und `b`-Variablen, die als Positionsmodifikatoren zum Bewegen des Balls dienen, und die Kurzvariablen, die für die plattformübergreifenden Abzweigungen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) verwendet werden.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Als nächstes verwenden wir das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis, um zu prüfen, ob ein Gamepad angeschlossen ist. Wenn eines angeschlossen ist, holen wir das Gamepad mit [`navigator.getGamepads()[0]`](/de/docs/Web/API/Navigator/getGamepads), geben Informationen über das Gamepad in unser gamepad info `div` aus und starten die `gameLoop()`-Funktion, die den gesamten Ballbewegungsprozess startet.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

Jetzt verwenden wir das [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignis, um zu prüfen, ob das Gamepad wieder getrennt ist. Wenn ja, stoppen wir die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife (siehe unten) und setzen die Gamepad-Informationen auf den ursprünglichen Zustand zurück.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Nun zur Hauptspielschleife. In jeder Ausführung der Schleife prüfen wir, ob eine von vier Tasten gedrückt wird; falls ja, aktualisieren wir die Werte der Bewegungsvariablen `a` und `b` entsprechend und aktualisieren die {{ cssxref("left") }}- und {{ cssxref("top") }}-Eigenschaften, indem wir deren Werte auf die aktuellen Werte von `a` und `b` ändern. Dies hat den Effekt, den Ball auf dem Bildschirm zu bewegen.

Nachdem all dies erledigt ist, verwenden wir unser `requestAnimationFrame()`, um den nächsten Animationsframe anzufordern, und führen `gameLoop()` erneut aus.

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

## Vollständiges Beispiel: Anzeige des Gamepad-Status

Dieses Beispiel zeigt, wie man das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt sowie die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)- und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignisse verwendet, um den Status aller mit dem System verbundenen Gamepads anzuzeigen. Das Beispiel basiert auf einem [Gamepad-Demo](https://luser.github.io/gamepadtest/), dessen [Quellcode auf GitHub verfügbar ist](https://github.com/luser/gamepadtest).

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
