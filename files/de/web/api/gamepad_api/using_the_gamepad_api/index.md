---
title: Verwendung der Gamepad API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("Gamepad API")}}

HTML stellt die notwendigen Komponenten für eine reichhaltige, interaktive Spielentwicklung bereit. Technologien wie `<canvas>`, WebGL, `<audio>` und `<video>`, zusammen mit JavaScript-Implementierungen, unterstützen Aufgaben, die ähnliche, wenn nicht sogar die gleichen, Funktionen wie nativer Code bieten. Die Gamepad API ermöglicht es Entwicklern und Designern, auf Gamepads und andere Spielcontroller zuzugreifen und diese zu verwenden.

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) führt neue Ereignisse für das {{ domxref("Window") }}-Objekt ein, um den Status von Gamepads und Controllern (im Folgenden als _Gamepad_ bezeichnet) zu lesen. Zusätzlich zu diesen Ereignissen fügt die API auch ein {{ domxref("Gamepad") }}-Objekt hinzu, mit dem Sie den Status eines angeschlossenen Gamepads abfragen können, und eine {{ domxref("navigator.getGamepads()") }}-Methode, mit der Sie eine Liste der der Seite bekannten Gamepads abrufen können.

## Verbindung zu einem Gamepad

Wenn ein neues Gamepad mit dem Computer verbunden wird, erhält die fokussierte Seite zunächst ein {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }}-Ereignis. Ist ein Gamepad bereits verbunden, wenn die Seite geladen wird, wird das {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }}-Ereignis an die fokussierte Seite gesendet, wenn der Benutzer eine Taste drückt oder eine Achse bewegt.

> [!NOTE]
> In Firefox werden Gamepads nur dann einer Seite angezeigt, wenn der Benutzer mit einem sichtbaren Gamepad interagiert. Dies hilft, eine Verwendung von Gamepads zur [Identifizierung](/de/docs/Glossary/Fingerprinting) des Benutzers zu verhindern. Sobald ein Gamepad verwendet wurde, werden andere verbundene Gamepads automatisch sichtbar.

Sie können {{domxref("Window/gamepadconnected_event", "gamepadconnected")}} so verwenden:

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad verbunden an Index %d: %s. %d Tasten, %d Achsen.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

Jedes Gamepad hat eine eindeutige ID, die über die {{domxref("GamepadEvent.gamepad", "gamepad")}}-Eigenschaft des Ereignisses verfügbar ist.

## Trennen eines Gamepads

Wenn ein Gamepad getrennt wird und eine Seite zuvor Daten für dieses Gamepad empfangen hat (z. B. {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }}), wird ein zweites Ereignis an das fokussierte Fenster gesendet, {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}:

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad getrennt von Index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

Die {{domxref("Gamepad.index", "index")}}-Eigenschaft des Gamepads ist für jedes Gerät, das an das System angeschlossen ist, eindeutig, selbst wenn mehrere Controller desselben Typs verwendet werden. Die `index`-Eigenschaft dient auch als Index im {{jsxref("Array")}}, das von {{ domxref("Navigator.getGamepads()") }} zurückgegeben wird.

```js
const gamepads = {};

function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Hinweis:
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

Dieses vorherige Beispiel zeigt auch, wie die `gamepad`-Eigenschaft nach Abschluss des Ereignisses beibehalten werden kann — eine Technik, die wir später für die Abfrage des Gerätezustands nutzen werden.

## Abfragen des Gamepad-Objekts

Wie Sie sehen, enthalten die oben besprochenen **Gamepad**-Ereignisse eine `gamepad`-Eigenschaft im Ereignisobjekt, das ein {{ domxref("Gamepad") }}-Objekt zurückgibt. Damit kann bestimmt werden, welches Gamepad (d. h. dessen ID) das Ereignis verursacht hat, da mehrere Gamepads gleichzeitig verbunden sein könnten. Darüber hinaus kann das {{ domxref("Gamepad") }}-Objekt für vieles mehr genutzt werden, einschließlich des Haltens einer Referenz und der Abfrage, um herauszufinden, welche Tasten und Achsen gerade gedrückt werden. Dies ist oft wünschenswert für Spiele oder andere interaktive Webseiten, die den Zustand eines Gamepads jetzt im Vergleich zur nächsten Auslösung eines Ereignisses kennen müssen.

Solche Überprüfungen beinhalten häufig die Verwendung des {{ domxref("Gamepad") }}-Objekts in Verbindung mit einer Animationsschleife (z. B. {{ domxref("Window.requestAnimationFrame","requestAnimationFrame") }}), bei der Entwickler Entscheidungen für den aktuellen Frame basierend auf dem Zustand des Gamepads oder der Gamepads treffen möchten.

Die {{domxref("Navigator.getGamepads()")}}-Methode gibt ein Array aller Geräte zurück, die der Webseite derzeit sichtbar sind, als {{ domxref("Gamepad") }}-Objekte (der erste Wert ist immer `null`, daher wird `null` zurückgegeben, wenn keine Gamepads verbunden sind.) Dies kann dann genutzt werden, um die gleiche Information zu erhalten. Beispielsweise könnte das erste oben gezeigte Codebeispiel so umgeschrieben werden:

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "Gamepad verbunden an Index %d: %s. %d Tasten, %d Achsen.",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

Die Eigenschaften des {{ domxref("Gamepad") }}-Objekts sind wie folgt:

- `id`: Eine Zeichenfolge, die einige Informationen über den Controller enthält. Dies ist nicht genau festgelegt, aber in Firefox enthält sie drei Informationen, getrennt durch Bindestriche (`-`): zwei 4-stellige hexadezimale Zeichenfolgen, die die USB-Hersteller- und Produkt-ID des Controllers enthalten, und den Namen des Controllers, wie vom Treiber bereitgestellt. Diese Informationen sollen es Ihnen ermöglichen, eine Zuordnung für die Steuerungen auf dem Gerät zu finden und nützliche Rückmeldungen an den Benutzer zu geben.
- `index`: Eine ganze Zahl, die für jedes Gamepad, das derzeit mit dem System verbunden ist, eindeutig ist. Dies kann verwendet werden, um mehrere Controller zu unterscheiden. Beachten Sie, dass das Trennen eines Geräts und dann das Anschließen eines neuen Geräts den vorherigen Index wiederverwenden kann.
- `mapping`: Eine Zeichenfolge, die angibt, ob der Browser die Steuerungen des Geräts auf ein bekanntes Layout umgestellt hat. Derzeit gibt es nur ein unterstütztes bekanntes Layout — das [Standard-Gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). Wenn der Browser in der Lage ist, Steuerungen auf dem Gerät auf dieses Layout zuzuordnen, wird die `mapping`-Eigenschaft auf die Zeichenfolge `standard` gesetzt.
- `connected`: Ein boolescher Wert, der angibt, ob das Gamepad noch mit dem System verbunden ist. Wenn dies der Fall ist, ist der Wert `True`; wenn nicht, ist er `False`.
- `buttons`: Ein Array von {{ domxref("GamepadButton") }}-Objekten, die die auf dem Gerät vorhandenen Tasten darstellen. Jedes {{ domxref("GamepadButton") }} hat eine `pressed`-Eigenschaft und eine `value`-Eigenschaft:
  - Die `pressed`-Eigenschaft ist ein boolescher Wert, der angibt, ob die Taste gerade gedrückt (`true`) oder nicht gedrückt (`false`) ist.
  - Die `value`-Eigenschaft ist ein Gleitkommawert, der zur Darstellung von analogen Tasten verwendet wird, wie sie bei den Trigger-Tasten auf vielen modernen Gamepads vorkommen. Die Werte sind auf den Bereich 0,0..1,0 normalisiert, wobei 0,0 bedeutet, dass die Taste nicht gedrückt ist, und 1,0 bedeutet, dass die Taste vollständig gedrückt ist.

- `axes`: Ein Array, das die Steuerelemente mit Achsen auf dem Gerät darstellt (z. B. analoge Daumensticks). Jedes Element im Array ist ein Gleitkommawert im Bereich -1,0 - 1,0 und repräsentiert die Achsenposition von dem niedrigsten Wert (-1,0) bis zum höchsten Wert (1,0).
- `timestamp`: Dies gibt einen {{ domxref("DOMHighResTimeStamp") }} zurück, der den Zeitpunkt darstellt, zu dem die Daten für dieses Gamepad zuletzt aktualisiert wurden, was es Entwicklern ermöglicht, festzustellen, ob die `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zum `navigationStart`-Attribut der {{ domxref("PerformanceTiming") }}-Schnittstelle sein. Werte sind monoton steigend, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Aktualisierungen zu bestimmen, da neuere Werte immer größer oder gleich älteren Werten sein werden. Beachten Sie, dass diese Eigenschaft derzeit in Firefox nicht unterstützt wird.

> [!NOTE]
> Das Gamepad-Objekt ist aus Sicherheitsgründen beim {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }}-Ereignis und nicht beim {{ domxref("Window") }}-Objekt selbst verfügbar. Sobald wir eine Referenz darauf haben, können wir seine Eigenschaften abfragen, um Informationen über den aktuellen Zustand des Gamepads zu erhalten. Im Hintergrund wird dieses Objekt jedes Mal aktualisiert, wenn sich der Status des Gamepads ändert.

### Verwendung von Tasteninformationen

Betrachten wir ein einfaches Beispiel, das Verbindungsinformationen für ein Gamepad anzeigt (es ignoriert nachfolgende Gamepad-Verbindungen) und es Ihnen ermöglicht, mit den vier Tasten auf der rechten Seite des Gamepads einen Ball auf dem Bildschirm zu bewegen. Sie können sich die [Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und den [Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master).

Zunächst deklarieren wir einige Variablen: Der `gamepadInfo`-Absatz, in den die Verbindungsinformationen geschrieben werden, der `ball`, den wir bewegen möchten, die `start`-Variable, die als ID für `requestAnimation Frame` fungiert, und die `a`- und `b`-Variablen, die als Positionsmodifikatoren für die Bewegung des Balls dienen, sowie die Kurzversionen der Variablen für die {{ domxref("Window.requestAnimationFrame", "requestAnimationFrame()") }} und {{ domxref("Window.cancelAnimationFrame", "cancelAnimationFrame()") }}-Browserkompatibilitäten.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Als Nächstes verwenden wir das {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}-Ereignis, um zu überprüfen, ob ein Gamepad angeschlossen ist. Wenn eines angeschlossen ist, greifen wir das Gamepad mit {{ domxref("Navigator.getGamepads()", "navigator.getGamepads()[0]") }} ab, geben Informationen über das Gamepad in unser `div`, das die Gamepad-Informationen enthält, aus und rufen die `gameLoop()`-Funktion auf, die den gesamten Ballbewegungsprozess startet.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad verbunden an Index ${gp.index}: ${gp.id}. Es hat ${gp.buttons.length} Tasten und ${gp.axes.length} Achsen.`;

  gameLoop();
});
```

Nun verwenden wir das {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}-Ereignis, um zu überprüfen, ob das Gamepad wieder getrennt wird. Ist dies der Fall, stoppen wir die {{DOMxRef("Window.requestAnimationFrame", "requestAnimationFrame()")}}-Schleife (siehe unten) und setzen die Gamepad-Informationen auf ihren ursprünglichen Zustand zurück.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Warten auf ein Gamepad.";

  cancelAnimationFrame(start);
});
```

Nun zur Hauptspielschleife. Bei jeder Ausführung der Schleife überprüfen wir, ob eine der vier Tasten gedrückt wird; wenn ja, aktualisieren wir die Werte der Bewegungsvariablen `a` und `b` entsprechend, und dann aktualisieren wir die {{ cssxref("left") }}- und {{ cssxref("top") }}-Eigenschaften, indem wir ihre Werte auf die aktuellen Werte von `a` und `b` ändern. Dies hat zur Folge, dass sich der Ball auf dem Bildschirm bewegt.

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

## Vollständiges Beispiel: Anzeigen des Gamepad-Zustands

Dieses Beispiel zeigt, wie das {{domxref("Gamepad")}}-Objekt sowie die {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}- und {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}-Ereignisse verwendet werden können, um den Status aller mit dem System verbundenen Gamepads anzuzeigen. Das Beispiel basiert auf einer [Gamepad-Demo](https://luser.github.io/gamepadtest/), wobei der [Quellcode auf GitHub verfügbar ist](https://github.com/luser/gamepadtest).

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
    e.textContent = `Taste ${i}`;
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
        el.textContent = `Taste ${i} [GEDRÜCKT]`;
        el.style.color = "#42f593";
        el.className = "button pressed";
      } else {
        el.textContent = `Taste ${i}`;
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
