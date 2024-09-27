---
title: Verwendung der Gamepad API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("Gamepad API")}}

HTML bietet die notwendigen Komponenten für die Entwicklung von reichhaltigen, interaktiven Spielen. Technologien wie `<canvas>`, WebGL, `<audio>` und `<video>`, zusammen mit JavaScript-Implementierungen, unterstützen Aufgaben, die ähnliche, wenn nicht sogar die gleichen, Funktionen wie nativer Code bieten. Die Gamepad API ermöglicht es Entwicklern und Designern, Gamepads und andere Spielcontroller zu nutzen und darauf zuzugreifen.

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) führt neue Ereignisse auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ein, um den Zustand von Gamepads und Controllern (im Folgenden als _Gamepad_ bezeichnet) zu lesen. Zusätzlich zu diesen Ereignissen stellt die API auch ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt bereit, das Sie verwenden können, um den Zustand eines verbundenen Gamepads abzufragen, und eine [`navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)-Methode, mit der Sie eine Liste von Gamepads abrufen können, die der Seite bekannt sind.

## Verbindung zu einem Gamepad

Wenn ein neues Gamepad mit dem Computer verbunden wird, erhält die fokussierte Seite zuerst ein [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis. Wenn ein Gamepad bereits verbunden ist, wenn die Seite geladen wird, wird das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis an die fokussierte Seite gesendet, wenn der Benutzer eine Taste drückt oder eine Achse bewegt.

> [!NOTE]
> In Firefox werden Gamepads einer Seite nur dann verfügbar gemacht, wenn der Benutzer mit einem auf der sichtbaren Seite interagiert. Dies hilft zu verhindern, dass Gamepads zur [Fingerabdruckerstellung](/de/docs/Glossary/Fingerprinting) des Benutzers verwendet werden. Sobald mit einem Gamepad interagiert wurde, werden andere verbundene Gamepads automatisch sichtbar.

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

Jedes Gamepad hat eine eindeutige ID, die über die [`gamepad`](/de/docs/Web/API/GamepadEvent/gamepad)-Eigenschaft des Ereignisses verfügbar ist.

## Trennen eines Gamepads

Wenn ein Gamepad getrennt wird und eine Seite zuvor Daten für dieses Gamepad erhalten hat (z. B. [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)), wird ein zweites Ereignis an das fokussierte Fenster gesendet, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event):

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

Die [`index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft des Gamepads ist für jedes an das System angeschlossene Gerät eindeutig, selbst wenn mehrere Controller desselben Typs verwendet werden. Die `index`-Eigenschaft funktioniert auch als Index in das {{jsxref("Array")}}, das von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird.

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

Dieses vorhergehende Beispiel zeigt auch, wie die `gamepad`-Eigenschaft nach Abschluss des Ereignisses beibehalten werden kann – eine Technik, die wir später zur Abfrage des Gerätezustands verwenden werden.

## Abfragen des Gamepad-Objekts

Wie Sie sehen können, enthalten die oben genannten **gamepad**-Ereignisse eine `gamepad`-Eigenschaft auf dem Ereignisobjekt, das ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt zurückgibt. Wir können dies verwenden, um festzustellen, welches Gamepad (d. h. seine ID) das Ereignis ausgelöst hat, da möglicherweise mehrere Gamepads gleichzeitig angeschlossen sind. Wir können viel mehr mit dem [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt tun, einschließlich einer Referenz darauf halten und es abfragen, um herauszufinden, welche Tasten und Achsen zu einem beliebigen Zeitpunkt gedrückt werden. Dies ist häufig wünschenswert für Spiele oder andere interaktive Webseiten, die den Zustand eines Gamepads jetzt im Vergleich zum nächsten Mal, wenn ein Ereignis ausgelöst wird, kennen müssen.

Solche Überprüfungen beinhalten oft die Verwendung des [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekts in Verbindung mit einer Animationsschleife (z. B. [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)), wo Entwickler basierend auf dem Zustand des Gamepads oder der Gamepads Entscheidungen für den aktuellen Frame treffen wollen.

Die [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)-Methode gibt ein Array aller Geräte zurück, die derzeit für die Webseite sichtbar sind, als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte (der erste Wert ist immer `null`, sodass `null` zurückgegeben wird, wenn keine Gamepads angeschlossen sind). Dies kann dann verwendet werden, um die gleichen Informationen zu erhalten. Das erste Codebeispiel oben könnte so umgeschrieben werden, wie unten gezeigt:

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

- `id`: Ein String, der einige Informationen über den Controller enthält. Dies ist nicht streng spezifiziert, aber in Firefox wird er drei Informationen enthalten, die durch Bindestriche (`-`) getrennt sind: zwei 4-stellige hexadezimale Zeichenfolgen mit der USB-Anbieter- und Produkt-ID des Controllers und der Name des Controllers, wie vom Treiber bereitgestellt. Diese Informationen sollen es Ihnen ermöglichen, eine Zuordnung für die Bedienelemente auf dem Gerät zu finden und dem Benutzer nützliches Feedback zu geben.
- `index`: Eine Ganzzahl, die für jedes derzeit mit dem System verbundene Gamepad eindeutig ist. Dies kann verwendet werden, um mehrere Controller zu unterscheiden. Beachten Sie, dass beim Trennen eines Geräts und anschließenden Anschließen eines neuen Geräts möglicherweise der vorherige Index wiederverwendet wird.
- `mapping`: Ein String, der angibt, ob der Browser die Bedienelemente des Geräts auf ein bekanntes Layout abgebildet hat. Derzeit gibt es nur ein unterstütztes bekanntes Layout – das [standard gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). Wenn der Browser in der Lage ist, die Steuerungen auf dem Gerät auf dieses Layout abzubilden, wird die `mapping`-Eigenschaft auf den String `standard` gesetzt.
- `connected`: Ein Boolean, der angibt, ob das Gamepad noch mit dem System verbunden ist. Wenn dies der Fall ist, ist der Wert `True`; wenn nicht, ist es `False`.
- `buttons`: Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten, die die auf dem Gerät vorhandenen Tasten darstellen. Jedes [`GamepadButton`](/de/docs/Web/API/GamepadButton) hat eine `pressed`- und eine `value`-Eigenschaft:

  - Die `pressed`-Eigenschaft ist ein Boolean, der angibt, ob die Taste derzeit gedrückt (`true`) oder ungedrückt (`false`) ist.
  - Die `value`-Eigenschaft ist ein Gleitkommawert, der zur Darstellung analoger Tasten verwendet wird, wie etwa bei vielen modernen Gamepads die Auslöser. Die Werte sind auf den Bereich 0,0 bis 1,0 normalisiert, wobei 0,0 eine nicht gedrückte Taste und 1,0 eine vollständig gedrückte Taste darstellt.

- `axes`: Ein Array, das die Steuerungen mit Achsen auf dem Gerät darstellt (z. B. analoge Daumensticks). Jedes Element im Array ist ein Gleitkommawert im Bereich von -1,0 bis 1,0, der die Achsenposition vom niedrigsten Wert (-1,0) bis zum höchsten Wert (1,0) darstellt.
- `timestamp`: Dies gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die letzte Zeit repräsentiert, zu der die Daten für dieses Gamepad aktualisiert wurden, was Entwicklern ermöglicht festzustellen, ob die `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zum `navigationStart`-Attribut der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle sein. Werte steigen monoton an, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Updates zu bestimmen, da neuere Werte immer größer oder gleich älteren Werten sind. Beachten Sie, dass diese Eigenschaft derzeit in Firefox nicht unterstützt wird.

> [!NOTE]
> Das Gamepad-Objekt ist aus Sicherheitsgründen beim [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis verfügbar und nicht auf dem [`Window`](/de/docs/Web/API/Window)-Objekt selbst. Sobald wir eine Referenz darauf haben, können wir seine Eigenschaften abfragen, um Informationen über den aktuellen Zustand des Gamepads zu erhalten. Im Hintergrund wird dieses Objekt jedes Mal aktualisiert, wenn sich der Zustand des Gamepads ändert.

### Verwendung von Tasteninformationen

Werfen wir einen Blick auf ein einfaches Beispiel, das Verbindungsinformationen für ein Gamepad anzeigt (es ignoriert nachfolgende Gamepad-Verbindungen) und es Ihnen ermöglicht, einen Ball auf dem Bildschirm mit den vier Tasten auf der rechten Seite des Gamepads zu bewegen. Sie können sich [die Live-Demo ansehen](https://chrisdavidmills.github.io/gamepad-buttons/), und [finden Sie den Quellcode](https://github.com/chrisdavidmills/gamepad-buttons/tree/master) auf GitHub.

Zu Beginn deklarieren wir einige Variablen: Der `gamepadInfo`-Absatz, in den die Verbindungsinformationen geschrieben werden, der `Ball`, den wir bewegen wollen, die `start`-Variable, die als ID für `requestAnimation Frame` fungiert, die `a`- und `b`-Variablen, die als Positionsmodifikatoren zum Bewegen des Balls fungieren, und die Kurzvariablen, die für die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) cross-browser Forks verwendet werden.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Als nächstes verwenden wir das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis, um zu überprüfen, ob ein Gamepad verbunden wird. Wenn eines verbunden ist, greifen wir auf das Gamepad mit [`navigator.getGamepads()[0]`](/de/docs/Web/API/Navigator/getGamepads) zu, geben Informationen über das Gamepad in unseren `div` mit den Gamepad-Infos aus und starten die `gameLoop()`-Funktion, die den gesamten Prozess zum Bewegen des Balls in Gang setzt.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

Jetzt verwenden wir das [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignis, um zu überprüfen, ob das Gamepad wieder getrennt wurde. Falls ja, stoppen wir die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife (siehe unten) und setzen die Gamepad-Informationen auf den ursprünglichen Zustand zurück.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Nun zur Hauptspielschleife. In jeder Ausführung der Schleife prüfen wir, ob eine der vier Tasten gedrückt wird; falls ja, aktualisieren wir die Werte der Bewegungsvariablen `a` und `b` entsprechend und aktualisieren die {{ cssxref("left") }}- und {{ cssxref("top") }}-Eigenschaften, indem wir deren Werte auf die aktuellen Werte von `a` und `b` setzen. Dies hat den Effekt, dass sich der Ball auf dem Bildschirm bewegt.

Nachdem dies alles erledigt ist, verwenden wir unser `requestAnimationFrame()`, um den nächsten Animationsrahmen anzufordern, und führen `gameLoop()` erneut aus.

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

Dieses Beispiel zeigt, wie man das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt sowie die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)- und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignisse nutzen kann, um den Zustand aller mit dem System verbundenen Gamepads anzuzeigen. Das Beispiel basiert auf einer [Gamepad-Demo](https://luser.github.io/gamepadtest/), deren [Quellcode auf GitHub verfügbar](https://github.com/luser/gamepadtest) ist.

```js
let loopstarted = false;

window.addEventListener("gamepadconnected", (evt) => {
  addgamepad(evt.gamepad);
});
window.addEventListener("gamepaddisconnected", (evt) => {
  removegamepad(evt.gamepad);
});

function addgamepad(gamepad) {
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
  if (!loopstarted) {
    requestAnimationFrame(updateStatus);
    loopstarted = true;
  }
}

function removegamepad(gamepad) {
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
