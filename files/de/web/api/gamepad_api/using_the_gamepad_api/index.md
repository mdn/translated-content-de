---
title: Verwendung der Gamepad API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("Gamepad API")}}

HTML bietet die notwendigen Komponenten für eine reiche, interaktive Spielentwicklung. Technologien wie `<canvas>`, WebGL, `<audio>` und `<video>` zusammen mit JavaScript-Implementierungen unterstützen Aufgaben, die ähnliche, wenn nicht sogar gleiche Funktionen wie nativer Code bieten. Die Gamepad API ermöglicht Entwicklern und Designern den Zugriff auf und die Nutzung von Gamepads und anderen Gamecontrollern.

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) führt neue Ereignisse auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ein, um den Zustand von Gamepads und Controllern (im Folgenden als _Gamepad_ bezeichnet) zu lesen. Zusätzlich zu diesen Ereignissen fügt die API auch ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt hinzu, das Sie verwenden können, um den Zustand eines verbundenen Gamepads abzufragen, und eine [`navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)-Methode, mit der Sie eine Liste von der Seite bekannten Gamepads abrufen können.

## Verbindung zu einem Gamepad herstellen

Wenn ein neues Gamepad an den Computer angeschlossen wird, erhält die fokussierte Seite zuerst ein [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis. Wenn ein Gamepad bereits verbunden ist, wenn die Seite geladen wird, wird das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis an die fokussierte Seite gesendet, wenn der Benutzer eine Taste drückt oder eine Achse bewegt.

> [!NOTE]
> In Firefox werden Gamepads einer Seite nur angezeigt, wenn der Benutzer mit einer Seite sichtbar mit einem interagiert. Dies hilft zu verhindern, dass Gamepads zum {{Glossary("Fingerprinting", "Fingerprinting")}} des Benutzers verwendet werden. Sobald mit einem Gamepad interagiert wurde, werden andere, die verbunden sind, automatisch sichtbar.

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

Wenn ein Gamepad getrennt wird und eine Seite zuvor Daten für dieses Gamepad erhalten hat (z.B. [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)), wird ein zweites Ereignis an das fokussierte Fenster gesendet, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event):

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

Die [`index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft des Gamepads ist für jedes mit dem System verbundene Gerät einzigartig, auch wenn mehrere Controller desselben Typs verwendet werden. Die `index`-Eigenschaft dient auch als Index in das {{jsxref("Array")}}, das von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird.

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

Dieses vorherige Beispiel zeigt auch, wie die `gamepad`-Eigenschaft nach Abschluss des Ereignisses gehalten werden kann – eine Technik, die wir später zur Abfrage des Gerätestatus verwenden werden.

## Abfragen des Gamepad-Objekts

Wie Sie sehen können, enthalten die oben besprochenen **gamepad**-Ereignisse eine `gamepad`-Eigenschaft am Ereignisobjekt, die ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt zurückgibt. Wir können dies nutzen, um festzustellen, welches Gamepad (d.h. dessen ID) das Ereignis ausgelöst hat, da mehrere Gamepads gleichzeitig verbunden sein könnten. Wir können viel mehr mit dem [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt machen, einschließlich des Haltens einer Referenz darauf und dessen Abfrage, um herauszufinden, welche Tasten und Achsen zu einem bestimmten Zeitpunkt gedrückt werden. Dies ist oft wünschenswert für Spiele oder andere interaktive Webseiten, die den Zustand eines Gamepads jetzt im Vergleich zum nächsten Mal, wenn ein Ereignis ausgelöst wird, kennen müssen.

Solche Überprüfungen durchzuführen, neigt dazu, das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt in Verbindung mit einer Animationsschleife (z.B. [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)) zu verwenden, wo Entwickler Entscheidungen für das aktuelle Frame basierend auf dem Zustand des Gamepads oder der Gamepads treffen möchten.

Die [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)-Methode gibt ein Array aller Geräte zurück, die derzeit der Webseite sichtbar sind, als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte (der erste Wert ist immer `null`, daher wird `null` zurückgegeben, wenn keine Gamepads verbunden sind). Dies kann dann verwendet werden, um dieselben Informationen zu erhalten. Zum Beispiel könnte das erste Codebeispiel oben wie unten umgeschrieben werden:

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

- `id`: Ein Zeichenfolgenwert, der einige Informationen über den Controller enthält. Dies ist nicht streng spezifiziert, aber in Firefox enthält er drei durch Bindestriche (`-`) getrennte Informationen: zwei 4-stellige hexadezimale Zeichenfolgen, die die USB-Anbieter- und Produkt-ID des Controllers enthalten, und den Namen des Controllers, wie ihn der Treiber bereitstellt. Diese Informationen sind dafür gedacht, Ihnen zu helfen, eine Zuordnung für die Steuerungen auf dem Gerät zu finden und dem Benutzer nützliches Feedback anzuzeigen.
- `index`: Eine Ganzzahl, die für jedes gerade mit dem System verbundene Gamepad einzigartig ist. Dies kann verwendet werden, um mehrere Controller zu unterscheiden. Beachten Sie, dass das Trennen eines Geräts und anschließende Verbinden eines neuen Geräts den vorherigen Index möglicherweise wiederverwendet.
- `mapping`: Ein Zeichenfolgenwert, der anzeigt, ob der Browser die Steuerungen auf dem Gerät in ein bekanntes Layout umgemappt hat. Derzeit gibt es nur ein unterstütztes bekanntes Layout — das [Standard-Gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). Wenn der Browser in der Lage ist, die Steuerungen auf dem Gerät auf dieses Layout zuzuordnen, wird die `mapping`-Eigenschaft auf die Zeichenfolge `standard` gesetzt.
- `connected`: Ein boolescher Wert, der anzeigt, ob das Gamepad noch mit dem System verbunden ist. Wenn dies der Fall ist, ist der Wert `True`; andernfalls ist er `False`.
- `buttons`: Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten, die die auf dem Gerät vorhandenen Tasten darstellen. Jede [`GamepadButton`](/de/docs/Web/API/GamepadButton) enthält die Eigenschaften `pressed` und `value`:

  - Die Eigenschaft `pressed` ist ein boolescher Wert, der anzeigt, ob die Taste derzeit gedrückt (`true`) oder nicht gedrückt (`false`) ist.
  - Die Eigenschaft `value` ist ein Gleitkommawert, der verwendet wird, um analoge Tasten darzustellen, wie zum Beispiel die Trigger auf vielen modernen Gamepads. Die Werte sind auf den Bereich 0,0...1,0 normalisiert, wobei 0,0 eine nicht gedrückte Taste und 1,0 eine vollständig gedrückte Taste repräsentiert.

- `axes`: Ein Array, das die Steuerungen mit Achsen auf dem Gerät darstellt (z.B. analoge Daumensticks). Jeder Eintrag im Array ist ein Gleitkommawert im Bereich von -1,0 bis 1,0, der die Achsposition vom niedrigsten Wert (-1,0) bis zum höchsten Wert (1,0) darstellt.
- `timestamp`: Dies gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der das letzte Mal darstellt, als die Daten für dieses Gamepad aktualisiert wurden, sodass Entwickler feststellen können, ob die `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zum `navigationStart`-Attribut der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle sein. Werte sind monoton steigend, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Aktualisierungen zu bestimmen, da neuere Werte immer größer oder gleich älteren Werten sind. Beachten Sie, dass diese Eigenschaft derzeit in Firefox nicht unterstützt wird.

> [!NOTE]
> Das Gamepad-Objekt ist aus Sicherheitsgründen auf dem [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis verfügbar und nicht auf dem [`Window`](/de/docs/Web/API/Window)-Objekt selbst. Sobald wir eine Referenz darauf haben, können wir seine Eigenschaften abfragen, um Informationen über den aktuellen Zustand des Gamepads zu erhalten. Hinter den Kulissen wird dieses Objekt jedes Mal aktualisiert, wenn sich der Zustand des Gamepads ändert.

### Verwendung von Tasteninformationen

Sehen wir uns ein einfaches Beispiel an, das die Verbindungsinformationen für ein Gamepad anzeigt (ignoiert anschließende Gamepad-Verbindungen) und es Ihnen ermöglicht, einen Ball mithilfe der vier Gamepadtasten auf der rechten Seite des Gamepads über den Bildschirm zu bewegen. Sie können [das Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und [den Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master).

Zuerst deklarieren wir einige Variablen: Der `gamepadInfo`-Absatz, in den die Verbindungsinformationen geschrieben werden, der `ball`, den wir bewegen möchten, die `start`-Variable, die als ID für `requestAnimation Frame` dient, die `a` und `b`-Variablen, die als Positionsmodifikatoren zum Bewegen des Balls dienen, und die Abkürzungen, die für die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)- und [`cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)-Cross-Browser-Gabeln verwendet werden.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Als nächstes verwenden wir das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis, um nach einem verbundenen Gamepad zu suchen. Wenn eines verbunden ist, holen wir das Gamepad mit [`navigator.getGamepads()[0]`](/de/docs/Web/API/Navigator/getGamepads), drucken Informationen über das Gamepad in unser `div` für Gamepad-Informationen und starten die `gameLoop()`-Funktion, die den gesamten Prozess der Ballbewegung in Gang setzt.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

Nun verwenden wir das [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignis, um zu prüfen, ob das Gamepad wieder getrennt wurde. Wenn ja, stoppen wir die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife (siehe unten) und setzen die Gamepad-Informationen zurück auf den ursprünglichen Wert.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Jetzt zur Hauptspielschleife. In jeder Ausführung der Schleife prüfen wir, ob eine von vier Tasten gedrückt wird; wenn ja, aktualisieren wir die Werte der Bewegungsvariablen `a` und `b` entsprechend und aktualisieren die Eigenschaften {{ cssxref("left") }} und {{ cssxref("top") }}, indem wir ihre Werte auf die aktuellen Werte von `a` und `b` ändern. Dies hat den Effekt, den Ball über den Bildschirm zu bewegen.

Nachdem dies alles erledigt ist, verwenden wir unseren `requestAnimationFrame()`, um das nächste Animationsbild anzufordern und `gameLoop()` erneut auszuführen.

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

Dieses Beispiel zeigt, wie man das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt sowie die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)- und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignisse verwendet, um den Zustand aller mit dem System verbundenen Gamepads anzuzeigen. Das Beispiel basiert auf einer [Gamepad-Demo](https://luser.github.io/gamepadtest/), deren [Quellcode auf GitHub verfügbar ist](https://github.com/luser/gamepadtest).

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
