---
title: "Window: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 85d2ef85f395053ce12f3e2067b784a12eb77ae9
---

{{APIRef}}

Die **`window.requestAnimationFrame()`** Methode teilt dem Browser mit, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Rückruffunktion stimmt im Allgemeinen mit der Bildschirmaktualisierungsrate überein. Die häufigste Aktualisierungsrate beträgt 60 Hz (60 Zyklen/Bilder pro Sekunde), aber 75 Hz, 120 Hz und 144 Hz sind ebenfalls weit verbreitet. `requestAnimationFrame()` Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Rückruffunktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Achten Sie darauf, immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Uhrzeit) zu verwenden, um zu berechnen, wie weit die Animation in einem Frame fortschreiten wird — **andernfalls läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller ab**. Weitere Informationen finden Sie in den unten stehenden Beispielen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Rückruffunktion erhält ein einzelnes Argument:

    - `timestamp`

      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit des Renderings des vorherigen Bildes angibt (basierend auf der Anzahl von Millisekunden seit dem [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl, in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Für `Window` Objekte (nicht `Workers`) ist es gleich [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf demselben Agenten ausgeführt werden (alle Fenster mit gleichem Ursprung und, was noch wichtiger ist, iframe mit gleichem Ursprung) — was das Synchronisieren von Animationen über mehrere `requestAnimationFrame` Rückrufe ermöglicht. Der Zeitstempelwert ähnelt auch dem Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Rückruffunktion, ist jedoch nie derselbe Wert.

        Wenn mehrere Rückrufe, die durch `requestAnimationFrame()` in einem einzigen Frame eingereiht wurden, beginnen zu feuern, erhält jeder denselben Zeitstempel, obwohl während der Berechnung jeder vorhergehenden Rückrufbelastung Zeit vergangen ist.

### Rückgabewert

Ein `long` Integer-Wert, die Anforderungs-ID, die den Eintrag in der Rückrufliste eindeutig identifiziert. Dies ist ein von null verschiedener Wert, aber Sie sollten keine weiteren Annahmen über seinen Wert treffen. Diesen Wert können Sie an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Aktualisierungs-Rückrufanforderung abzubrechen.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixel) in Abhängigkeit von der seit Beginn der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die Endposition des Elements ist 200px (`0.1 * 2000`) rechts von seiner Ausgangsposition.

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

Die folgenden drei Beispiele zeigen verschiedene Ansätze zum Festlegen des Nullpunkts in der Zeit, die Basislinie zur Berechnung des Fortschritts Ihrer Animation in jedem Frame. Wenn Sie eine Synchronisation mit einer externen Uhr vornehmen möchten, wie z.B. [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), dann ist die höchste verfügbare Präzision die Dauer eines einzelnen Frames, 16,67ms @60Hz. Das Zeitstempel-Argument des Rückrufs stellt das Ende des vorherigen Frames dar, sodass der früheste Zeitpunkt, zu dem Ihre neu berechneten Werte gerendert werden, im nächsten Frame liegt.

Dieses Beispiel wartet, bis der erste Rückruf ausgeführt wird, um `zero` zu setzen. Wenn Ihre Animation bei Beginn auf einen neuen Wert springt, müssen Sie sie auf diese Weise strukturieren. Wenn Sie nichts Externes, wie z.B. Audio, synchronisieren müssen, wird dieser Ansatz empfohlen, da einige Browser eine Verzögerung von mehreren Frames zwischen dem initialen Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Rückruffunktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert vor dem ersten Aufruf von `requestAnimationFrame` zu setzen. `document.timeline.currentTime` stimmt mit dem `timestamp` Argument überein, sodass der Nullwert dem Zeitstempel des 0ten Frames entspricht.

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

Dieses Beispiel animiert mit [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des Zeitstempelwerts des Rückrufs. Sie könnten dies verwenden, um eine etwas höhere Synchronisationsgenauigkeit zu erreichen, obwohl der zusätzliche Grad der Präzision variabel und nicht sehr groß ist. Hinweis: Dieses Beispiel erlaubt Ihnen nicht, Animationsrückrufe zuverlässig zu synchronisieren.

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
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blogbeitrag
- [TestUFO: Testen Sie Ihren Webbrowser auf requestAnimationFrame() Timing-Abweichungen](https://www.testufo.com/#test=animation-time-graph)
