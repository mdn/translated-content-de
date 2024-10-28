---
title: Verwendung der Gamepad-API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("Gamepad API")}}

HTML bietet die notwendigen Komponenten für eine reichhaltige, interaktive Spieleentwicklung. Technologien wie `<canvas>`, WebGL, `<audio>` und `<video>`, zusammen mit JavaScript-Implementierungen, unterstützen Aufgaben, die ähnliche, wenn nicht sogar die gleichen, Funktionen wie nativer Code bieten. Die Gamepad-API ermöglicht es Entwicklern und Designern, Gamepads und andere Spielsteuerungen zu nutzen.

Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) führt neue Ereignisse im [`Window`](/de/docs/Web/API/Window)-Objekt ein, um den Zustand von Gamepads und Controllern (im Folgenden als _Gamepad_ bezeichnet) auszulesen. Zusätzlich zu diesen Ereignissen fügt die API ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt hinzu, das Sie verwenden können, um den Zustand eines angeschlossenen Gamepads abzufragen, und eine [`navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)-Methode, mit der Sie eine Liste von Gamepads abrufen können, die der Seite bekannt sind.

## Anschluss eines Gamepads

Wenn ein neues Gamepad an den Computer angeschlossen wird, erhält die fokussierte Seite zuerst ein [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis. Wenn beim Laden der Seite bereits ein Gamepad angeschlossen ist, wird das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis an die fokussierte Seite gesendet, wenn der Benutzer eine Taste drückt oder eine Achse bewegt.

> [!NOTE]
> In Firefox werden Gamepads einer Seite nur dann angezeigt, wenn der Benutzer mit sichtbarer Seite mit einem interagiert. Dies hilft zu verhindern, dass Gamepads zur {{Glossary("Fingerprinting", "Profilerstellung")}} des Benutzers genutzt werden. Sobald mit einem Gamepad interagiert wurde, werden andere angeschlossene Gamepads automatisch sichtbar.

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

Jedes Gamepad hat eine eindeutige ID, die in der Eigenschaft [`gamepad`](/de/docs/Web/API/GamepadEvent/gamepad) des Ereignisses verfügbar ist.

## Trennung eines Gamepads

Wenn ein Gamepad getrennt wird und wenn eine Seite zuvor Daten für dieses Gamepad empfangen hat (z. B. [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)), wird ein zweites Ereignis an das fokussierte Fenster gesendet, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event):

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

Die [`index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft des Gamepads ist für jedes an das System angeschlossene Gerät eindeutig, auch wenn mehrere Controller desselben Typs verwendet werden. Die `index`-Eigenschaft dient auch als Index im {{jsxref("Array")}}, das von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird.

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

Dieses vorherige Beispiel zeigt auch, wie die `gamepad`-Eigenschaft nach Abschluss des Ereignisses gehalten werden kann – eine Technik, die wir später zum Abfragen des Gerätestatus verwenden werden.

## Abfragen des Gamepad-Objekts

Wie Sie sehen können, enthalten die oben besprochenen **Gamepad**-Ereignisse eine `gamepad`-Eigenschaft im Ereignisobjekt, die ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt zurückgibt. Wir können dieses nutzen, um zu bestimmen, welches Gamepad (d. h. seine ID) das Ereignis verursacht hat, da mehrere Gamepads gleichzeitig angeschlossen sein könnten. Wir können viel mehr mit dem [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt machen, einschließlich der Referenzierung und Abfragen, um herauszufinden, welche Tasten und Achsen zu einem beliebigen Zeitpunkt gedrückt werden. Dies ist oft wünschenswert für Spiele oder andere interaktive Webseiten, die den Zustand eines Gamepads jetzt im Vergleich zum nächsten Zeitpunkt wenn ein Ereignis ausgelöst wird, kennen müssen.

Solche Überprüfungen neigen dazu, das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt in Verbindung mit einer Animationsschleife zu verwenden (z. B. [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)), bei der Entwickler Entscheidungen für den aktuellen Frame auf Basis des Zustands des Gamepads oder der Gamepads treffen möchten.

Die [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)-Methode gibt ein Array aller Geräte zurück, die der Webseite derzeit sichtbar sind, als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte (der erste Wert ist immer `null`, so dass `null` zurückgegeben wird, wenn keine Gamepads angeschlossen sind). Dies kann dann verwendet werden, um die gleiche Information zu erhalten. Zum Beispiel könnte das erste oben gezeigte Codebeispiel umgeschrieben werden wie unten:

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

- `id`: Ein String, der einige Informationen über den Controller enthält. Dies ist nicht strikt spezifiziert, aber in Firefox enthält er drei durch Bindestriche (`-`) getrennte Informationen: zwei 4-stellige hexadezimale Strings, die die USB-Video- und Produkt-ID des Controllers enthalten, und den Namen des Controllers, wie er vom Treiber bereitgestellt wird. Diese Informationen sollen es Ihnen ermöglichen, eine Zuordnung der Steuerungen auf dem Gerät zu finden und dem Benutzer nützliches Feedback anzuzeigen.
- `index`: Eine Ganzzahl, die für jedes derzeit mit dem System verbundene Gamepad eindeutig ist. Dies kann verwendet werden, um mehrere Controller zu unterscheiden. Beachten Sie, dass das Trennen eines Geräts und anschließendes Anschließen eines neuen Geräts möglicherweise den vorherigen Index erneut verwendet.
- `mapping`: Ein String, der angibt, ob der Browser die Steuerung auf dem Gerät auf ein bekanntes Layout umgelegt hat. Derzeit gibt es nur ein unterstütztes bekanntes Layout — das [Standard-Gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). Wenn der Browser in der Lage ist, Steuerung auf dem Gerät auf dieses Layout abzubilden, wird die `mapping`-Eigenschaft auf den String `standard` gesetzt.
- `connected`: Ein Boolean, der angibt, ob das Gamepad noch mit dem System verbunden ist. Wenn dies der Fall ist, ist der Wert `True`; wenn nicht, ist er `False`.
- `buttons`: Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten, die die Tasten darstellen, die auf dem Gerät vorhanden sind. Jedes [`GamepadButton`](/de/docs/Web/API/GamepadButton) hat eine `pressed`- und eine `value`-Eigenschaft:

  - Die `pressed`-Eigenschaft ist ein Boolean, der angibt, ob die Taste derzeit gedrückt (`true`) oder ungedrückt (`false`) ist.
  - Die `value`-Eigenschaft ist ein Fließkommawert, der verwendet wird, um analoge Tasten darzustellen, wie z. B. die Trigger an vielen modernen Gamepads. Die Werte sind auf den Bereich 0.0..1.0 normiert, wobei 0.0 eine Taste darstellt, die nicht gedrückt ist, und 1.0 eine Taste, die vollständig gedrückt ist.

- `axes`: Ein Array, das die Steuerungen mit Achsen darstellt, die auf dem Gerät vorhanden sind (z. B. analoge Daumensticks). Jeder Eintrag im Array ist ein Fließkommawert im Bereich von -1.0 bis 1.0, der die Achsenposition vom niedrigsten Wert (-1.0) bis zum höchsten Wert (1.0) darstellt.
- `timestamp`: Dies gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die letzte Aktualisierungszeit der Daten für dieses Gamepad darstellt, sodass Entwickler bestimmen können, ob `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zur `navigationStart`-Attribut der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle sein. Werte steigen monoton an, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Updates zu bestimmen, da neuere Werte immer größer oder gleich älteren Werten sein werden. Beachten Sie, dass diese Eigenschaft derzeit in Firefox nicht unterstützt wird.

> [!NOTE]
> Das Gamepad-Objekt ist aus Sicherheitsgründen beim [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis verfügbar, nicht jedoch im [`Window`](/de/docs/Web/API/Window)-Objekt selbst. Sobald wir eine Referenz darauf haben, können wir seine Eigenschaften abfragen, um Informationen über den aktuellen Zustand des Gamepads zu erhalten. Hinter den Kulissen wird dieses Objekt jedes Mal aktualisiert, wenn sich der Zustand des Gamepads ändert.

### Verwendung von Tasteninformationen

Schauen wir uns ein einfaches Beispiel an, das Verbindungsinformationen für ein Gamepad anzeigt (weitere Gamepad-Verbindungen werden ignoriert) und es Ihnen ermöglicht, einen Ball über den Bildschirm zu bewegen, indem Sie die vier Gamepad-Tasten auf der rechten Seite des Gamepads verwenden. Sie können [das Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und [den Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master).

Zunächst deklarieren wir einige Variablen: Der `gamepadInfo`-Absatz, in den die Verbindungsinformationen geschrieben werden, der `Ball`, den wir bewegen wollen, die `start`-Variable, die als ID für `requestAnimation Frame` dient, die `a`- und `b`-Variablen, die als Positionsmodifikatoren zum Bewegen des Balls fungieren, und die Abkürzungsvariablen, die für die plattformübergreifenden Gabeln von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) verwendet werden.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Als nächstes verwenden wir das [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis, um zu überprüfen, ob ein Gamepad angeschlossen ist. Wenn eines angeschlossen ist, greifen wir auf das Gamepad mit [`navigator.getGamepads()[0]`](/de/docs/Web/API/Navigator/getGamepads) zu, geben Informationen über das Gamepad in unser `div` gamepad info aus und rufen die `gameLoop()`-Funktion auf, die den gesamten Ballbewegungsprozess startet.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

Jetzt verwenden wir das [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignis, um zu überprüfen, ob das Gamepad wieder getrennt wird. Wenn dies der Fall ist, stoppen wir die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife (siehe unten) und setzen die Gamepad-Informationen auf ihren ursprünglichen Zustand zurück.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Nun zur Hauptspielschleife. Bei jeder Ausführung der Schleife überprüfen wir, ob eine der vier Tasten gedrückt wird; wenn ja, aktualisieren wir die Werte der Bewegungsvariablen `a` und `b` entsprechend, und aktualisieren die {{ cssxref("left") }}- und {{ cssxref("top") }}-Eigenschaften, indem wir ihre Werte auf die aktuellen Werte von `a` und `b` setzen. Dies hat zur Folge, dass der Ball über den Bildschirm bewegt wird.

Nachdem all dies erledigt ist, verwenden wir unser `requestAnimationFrame()`, um den nächsten Animationsframe anzufordern und `gameLoop()` erneut auszuführen.

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

## Komplettes Beispiel: Anzeigen des Gamepad-Status

Dieses Beispiel zeigt, wie man das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt sowie die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)- und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignisse verwendet, um den Status aller mit dem System verbundenen Gamepads anzuzeigen. Das Beispiel basiert auf einem [Gamepad-Demo](https://luser.github.io/gamepadtest/), dessen [Quellcode auf GitHub verfügbar](https://github.com/luser/gamepadtest) ist.

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
