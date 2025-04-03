---
title: Verwendung der Gamepad-API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Gamepad API")}}

HTML bietet die notwendigen Komponenten für eine umfangreiche, interaktive Spieleentwicklung. Technologien wie `<canvas>`, WebGL, `<audio>` und `<video>`, zusammen mit JavaScript-Implementierungen, unterstützen Aufgaben, die ähnliche, wenn nicht sogar gleiche Funktionen wie nativer Code bieten. Die Gamepad-API ermöglicht es Entwicklern und Designern, auf Gamepads und andere Spielsteuerungen zuzugreifen und diese zu verwenden.

Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) führt neue Ereignisse auf dem [`Window`](/de/docs/Web/API/Window) Objekt ein, um den Zustand von Gamepads und Steuerungen (im Folgenden als _Gamepad_ bezeichnet) auszulesen. Zusätzlich zu diesen Ereignissen fügt die API auch ein [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt hinzu, das verwendet werden kann, um den Zustand eines angeschlossenen Gamepads abzufragen, und eine Methode [`navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), die eine Liste von Gamepads liefert, die der Seite bekannt sind.

## Verbindung zu einem Gamepad

Wenn ein neues Gamepad mit dem Computer verbunden wird, erhält die fokussierte Seite zuerst ein [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis. Wenn ein Gamepad bereits verbunden ist, wenn die Seite geladen wird, wird das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis an die fokussierte Seite gesendet, wenn der Benutzer eine Taste drückt oder eine Achse bewegt.

> [!NOTE]
> In Firefox werden Gamepads einer Seite nur dann zugänglich gemacht, wenn der Benutzer mit einem auf der sichtbaren Seite interagiert. Dies hilft, das Fingerprinting des Nutzers zu verhindern. Sobald mit einem Gamepad interagiert wurde, werden andere verbundene Gamepads automatisch sichtbar.

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

Jedem Gamepad ist eine eindeutige ID zugewiesen, die in der [`gamepad`](/de/docs/Web/API/GamepadEvent/gamepad) Eigenschaft des Ereignisses verfügbar ist.

## Trennen eines Gamepads

Wenn ein Gamepad getrennt wird und eine Seite zuvor Daten für dieses Gamepad erhalten hat (z. B. durch [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)), wird ein zweites Ereignis an das fokussierte Fenster gesendet, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event):

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

Die [`index`](/de/docs/Web/API/Gamepad/index) Eigenschaft des Gamepads ist für jedes mit dem System verbundene Gerät eindeutig, selbst wenn mehrere Controller desselben Typs verwendet werden. Die `index` Eigenschaft dient auch als Index in das {{jsxref("Array")}}, das durch [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird.

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

window.addEventListener(
  "gamepadconnected",
  (e) => {
    gamepadHandler(e, true);
  },
  false,
);
window.addEventListener(
  "gamepaddisconnected",
  (e) => {
    gamepadHandler(e, false);
  },
  false,
);
```

Dieses vorherige Beispiel zeigt auch, wie die `gamepad` Eigenschaft nach Abschluss des Ereignisses gehalten werden kann - eine Technik, die wir später zur Abfrage des Gerätestatus verwenden werden.

## Abfrage des Gamepad-Objekts

Wie Sie sehen können, beinhalten die oben besprochenen **Gamepad**-Ereignisse eine `gamepad` Eigenschaft im Ereignisobjekt, die ein [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt zurückgibt. Wir können dies verwenden, um festzustellen, welches Gamepad (d.h. dessen ID) das Ereignis ausgelöst hat, da möglicherweise mehrere Gamepads gleichzeitig angeschlossen sind. Wir können mit dem [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt noch viel mehr tun, einschließlich das Halten einer Referenz darauf und das Abfragen, um herauszufinden, welche Tasten und Achsen zu einem beliebigen Zeitpunkt gedrückt werden. Dies ist oft wünschenswert für Spiele oder andere interaktive Webseiten, die den aktuellen Zustand eines Gamepads kennen müssen, im Vergleich zu dem nächsten Mal, wenn ein Ereignis ausgelöst wird.

Solche Prüfungen erfolgen in der Regel unter Verwendung des [`Gamepad`](/de/docs/Web/API/Gamepad) Objekts in Verbindung mit einer Animationsschleife (z. B. [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)), bei der Entwickler Entscheidungen für den aktuellen Frame basierend auf dem Zustand des Gamepads oder der Gamepads treffen möchten.

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) gibt ein Array aller Geräte zurück, die der Webseite derzeit sichtbar sind, als [`Gamepad`](/de/docs/Web/API/Gamepad) Objekte (der erste Wert ist immer `null`, daher wird `null` zurückgegeben, wenn keine Gamepads angeschlossen sind.) Dies kann dann verwendet werden, um dieselben Informationen zu erhalten. Das erste Codebeispiel oben könnte beispielsweise wie folgt umgeschrieben werden:

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

- `id`: Ein String, der einige Informationen über den Controller enthält. Dies ist nicht strikt spezifiziert, aber in Firefox enthält er drei durch Bindestriche (`-`) getrennte Informationen: zwei 4-stellige hexadezimale Strings, die die USB-Hersteller- und Produkt-ID des Controllers enthalten, und den vom Treiber bereitgestellten Namen des Controllers. Diese Informationen sollen es ermöglichen, eine Zuordnung für die Steuerelemente auf dem Gerät zu finden sowie nützliches Feedback an den Benutzer anzuzeigen.
- `index`: Eine Ganzzahl, die für jedes derzeit mit dem System verbundene Gamepad eindeutig ist. Dies kann verwendet werden, um mehrere Controller zu unterscheiden. Beachten Sie, dass das Trennen eines Geräts und anschließende Verbinden eines neuen Geräts den vorherigen Index möglicherweise erneut verwendet.
- `mapping`: Ein String, der angibt, ob der Browser die Steuerelemente auf dem Gerät auf ein bekanntes Layout abgebildet hat. Derzeit gibt es nur ein unterstütztes bekanntes Layout - das [Standard-Gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). Wenn der Browser in der Lage ist, die Steuerelemente auf dem Gerät diesem Layout zuzuordnen, wird die `mapping` Eigenschaft auf den String `standard` gesetzt.
- `connected`: Ein boolescher Wert, der anzeigt, ob das Gamepad noch mit dem System verbunden ist. Wenn dies der Fall ist, ist der Wert `True`; andernfalls ist er `False`.
- `buttons`: Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton) Objekten, die die auf dem Gerät vorhandenen Tasten darstellen. Jedes [`GamepadButton`](/de/docs/Web/API/GamepadButton) hat eine `pressed` und eine `value` Eigenschaft:

  - Die `pressed` Eigenschaft ist ein boolescher Wert, der angibt, ob die Taste derzeit gedrückt (`true`) oder ungedrückt (`false`) ist.
  - Die `value` Eigenschaft ist ein Gleitkommawert, der verwendet wird, um analoge Tasten, wie die Trigger auf vielen modernen Gamepads, darzustellen. Die Werte sind auf den Bereich 0.0..1.0 normiert, wobei 0.0 für eine Taste steht, die nicht gedrückt ist, und 1.0 für eine Taste, die vollständig gedrückt ist.

- `axes`: Ein Array, das die auf dem Gerät vorhandenen Steuerungen mit Achsen darstellt (z. B. analoge Daumensticks). Jedes Element im Array ist ein Gleitkommawert im Bereich von -1.0 bis 1.0, der die Achsposition vom niedrigsten Wert (-1.0) bis zum höchsten Wert (1.0) darstellt.
- `timestamp`: Dies gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die letzte Aktualisierungszeit der Daten für dieses Gamepad darstellt, was es Entwicklern ermöglicht, festzustellen, ob die `axes` und `button` Daten aus der Hardware aktualisiert wurden. Der Wert muss relativ zum `navigationStart` Attribut der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle sein. Die Werte steigen monoton an, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Updates zu bestimmen, da neuere Werte immer größer oder gleich älteren Werten sein werden. Beachten Sie, dass diese Eigenschaft derzeit in Firefox nicht unterstützt wird.

> [!NOTE]
> Das Gamepad-Objekt ist aus Sicherheitsgründen beim [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis verfügbar, nicht jedoch im [`Window`](/de/docs/Web/API/Window) Objekt selbst. Sobald wir eine Referenz darauf haben, können wir seine Eigenschaften abfragen, um Informationen über den aktuellen Zustand des Gamepads zu erhalten. Hinter den Kulissen wird dieses Objekt jedes Mal aktualisiert, wenn sich der Zustand des Gamepads ändert.

### Verwendung von Tasteninformationen

Sehen wir uns ein Beispiel an, das Verbindungsinformationen für ein Gamepad anzeigt (es ignoriert nachfolgende Gamepad-Verbindungen) und es Ihnen ermöglicht, einen Ball über den Bildschirm zu bewegen, indem Sie die vier Gamepad-Tasten auf der rechten Seite des Gamepads verwenden. Sie können [die Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und [den Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master).

Zunächst deklarieren wir einige Variablen: Das `gamepadInfo` Paragraph, in das die Verbindungsinformationen geschrieben werden, den `ball`, den wir bewegen möchten, die `start` Variable, die als ID für `requestAnimation Frame` dient, die `a` und `b` Variablen, die als Positionsmodifikatoren für die Bewegung des Balls fungieren, und die Kurzhandvariablen, die für die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) Cross-Browser Gabeln verwendet werden.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Als Nächstes verwenden wir das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, um zu prüfen, ob ein Gamepad verbunden wird. Wenn eines verbunden ist, holen wir das Gamepad mit [`navigator.getGamepads()[0]`](/de/docs/Web/API/Navigator/getGamepads), drucken Informationen über das Gamepad in unser Gamepad Infos `div` und starten die `gameLoop()` Funktion, die den gesamten Ballbewegungsprozess in Gang setzt.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

Nun verwenden wir das [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis, um zu prüfen, ob das Gamepad wieder getrennt wird. Falls dies der Fall ist, stoppen wir die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Schleife (siehe unten) und setzen die Gamepad-Informationen auf den ursprünglichen Zustand zurück.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Nun zur Hauptspielschleife. Bei jeder Ausführung der Schleife prüfen wir, ob eine von vier Tasten gedrückt wird; falls ja, aktualisieren wir die Werte der Bewegungsvariablen `a` und `b` entsprechend, dann aktualisieren wir die {{ cssxref("left") }} und {{ cssxref("top") }} Eigenschaften und ändern deren Werte in die aktuellen Werte von `a` und `b`. Dies hat den Effekt, den Ball über den Bildschirm zu bewegen.

Nachdem dies alles erledigt ist, verwenden wir unser `requestAnimationFrame()`, um den nächsten Animationsframe anzufordern und `gameLoop()` erneut auszuführen.

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

## Vollständiges Beispiel: Anzeige des Gamepad-Zustands

Dieses Beispiel zeigt, wie das [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt sowie die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse verwendet werden, um den Zustand aller mit dem System verbundenen Gamepads anzuzeigen. Das Beispiel basiert auf einer [Gamepad-Demo](https://luser.github.io/gamepadtest/), deren [Quellcode auf GitHub verfügbar ist](https://github.com/luser/gamepadtest).

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
