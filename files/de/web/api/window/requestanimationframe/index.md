---
title: "Window: requestAnimationFrame() method"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 55cecdcd812a8e88851def4b9687171c05e6d505
---

{{APIRef}}

Die **`window.requestAnimationFrame()`**-Methode informiert den Browser darüber, dass Sie eine Animation durchführen möchten. Es fordert den Browser auf, eine vom Benutzer bereitgestellte Callback-Funktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildwiederholfrequenz des Displays. Die gängigste Bildwiederholrate ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. Aufrufe von `requestAnimationFrame()` werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder in versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Callback-Funktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie einen weiteren Frame animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Achten Sie stets darauf, das erste Argument (oder eine andere Methode, um die aktuelle Zeit zu erhalten) zu verwenden, um zu berechnen, wie weit die Animation in einem Frame fortschreitet — **anderfalls läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**.
> Möglichkeiten dazu finden Sie in den unten stehenden Beispielen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:

    - `timestamp`

      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit der Rendering des vorherigen Frames anzeigt (basierend auf der Anzahl der Millisekunden seit dem [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Präzision von 1 Millisekunde. Für `Window`-Objekte (nicht `Workers`) entspricht er [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf dem gleichen Agenten laufen (alle gleichherkunftlichen Fenster und, noch wichtiger, gleichherkunftliche iframes) — was eine Synchronisation der Animationen über mehrere `requestAnimationFrame`-Callbacks hinweg ermöglicht. Der Zeitstempelwert ähnelt auch dem Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion, ist jedoch nie derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` gequeue-te Callbacks in einem einzelnen Frame zu feuern beginnen, erhält jeder den gleichen Zeitstempel, auch wenn während der Berechnung der Arbeitslast jedes vorherigen Callbacks Zeit verstrichen ist.

### Rückgabewert

Ein `unsigned long` Integerwert, die Anfrage-ID, die den Eintrag in der Callback-Liste eindeutig identifiziert. Sie sollten keine Annahmen über seinen Wert machen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Neuzeichnungs-Callback-Anfrage abzubrechen.

> [!WARNING]
> Die Anfrage-ID wird typischerweise als ein sich pro Fenster erhöhender Zähler implementiert. Daher kann sie, auch wenn sie mit 1 zählt, überlaufen und schließlich 0 erreichen.
> Obwohl es unwahrscheinlich ist, dass es bei kurzlebigen Anwendungen Probleme verursacht, sollten Sie `0` als Wächterwert für ungültige Anfrage-Identifikator-IDs vermeiden und stattdessen nicht erreichbare Werte wie `null` bevorzugen.
> Die Spezifikation spezifiziert das Überlaufverhalten nicht, daher haben Browser voneinander abweichende Verhaltensweisen. Beim Überlaufen würde der Wert entweder auf 0 oder einen negativen Wert springen oder mit einem Fehler fehlschlagen.
> Solange das Überlaufen keinen Fehler verursacht, sind Anfrage-IDs auch nicht wirklich einzigartig, da es nur eine endliche Anzahl von 32-Bit-Integern für möglicherweise unendlich viele Callbacks gibt.
> Beachten Sie jedoch, dass es etwa 500 Tage dauern würde, um das Problem zu erreichen, wenn bei 60 Hz mit 100 Aufrufen von `requestAnimationFrame()` pro Frame gerendert wird.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit Beginn der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die Endposition des Elements ist 200px (`0.1 * 2000`) rechts von seiner ursprünglichen Position.

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  // Math.min() is used here to make sure the element stops at exactly 200px
  const shift = Math.min(0.1 * elapsed, 200);
  element.style.transform = `translateX(${shift}px)`;
  if (shift < 200) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
```

Die folgenden drei Beispiele veranschaulichen verschiedene Ansätze zur Festlegung des Nullpunkts, der Basislinie zur Berechnung des Fortschritts Ihrer Animation in jedem Frame. Wenn Sie mit einer externen Uhr synchronisieren möchten, wie zum Beispiel [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), ist die höchste verfügbare Präzision die Dauer eines einzelnen Frames, 16,67ms @60hz. Das Zeitstempelargument des Callbacks repräsentiert das Ende des vorherigen Frames, sodass der früheste Zeitpunkt, zu dem Ihre neu berechneten Werte gerendert werden, im nächsten Frame liegt.

Dieses Beispiel wartet, bis der erste Callback ausgeführt wird, um `zero` festzulegen. Wenn Ihre Animation beim Starten zu einem neuen Wert springt, müssen Sie sie auf diese Weise strukturieren. Wenn Sie nichts externes wie Audio synchronisieren müssen, wird dieser Ansatz empfohlen, da einige Browser eine Mehrframe-Verzögerung zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Callback-Funktion haben.

```js
let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timestamp) {
  zero = timestamp;
  animate(timestamp);
}
function animate(timestamp) {
  const value = (timestamp - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert vor dem ersten Aufruf von `requestAnimationFrame` festzulegen. `document.timeline.currentTime` stimmt mit dem `timestamp`-Argument überein, sodass der Nullwert dem Zeitstempel des 0. Frames entspricht.

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animate);
function animate(timestamp) {
  const value = (timestamp - zero) / duration; // animation-timing-function: linear
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

Dieses Beispiel animiert mithilfe von [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des Zeitstempelwerts des Callbacks. Sie könnten dies verwenden, um eine etwas höhere Synchronisationspräzision zu erreichen, obwohl der zusätzliche Grad an Präzision variabel ist und nicht viel zunimmt.
Hinweis: Dieses Beispiel ermöglicht es Ihnen nicht, Animation-Callbacks zuverlässig zu synchronisieren.

```js
const zero = performance.now();
requestAnimationFrame(animate);
function animate() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- [Animieren mit JavaScript: vom setInterval zu requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blogpost
- [TestUFO: Testen Sie Ihren Webbrowser auf Timing-Abweichungen von requestAnimationFrame()](https://www.testufo.com/#test=animation-time-graph)
- [Firefox wechselt zu uint32_t für die requestAnimationFrame-Anfrage-ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
