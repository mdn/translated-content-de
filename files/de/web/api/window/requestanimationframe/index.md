---
title: "Window: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 85d2ef85f395053ce12f3e2067b784a12eb77ae9
---

{{APIRef}}

Die **`window.requestAnimationFrame()`**-Methode informiert den Browser darüber, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Rückruffunktion entspricht im Allgemeinen der Bildwiederholfrequenz des Displays. Die häufigste Bildwiederholfrequenz ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Rückruffunktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist ein Einmalaufruf.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Bild fortschreiten wird — **anderenfalls läuft die Animation auf Bildschirmen mit hoher Bildwiederholfrequenz schneller**. Für Möglichkeiten, dies zu tun, siehe die unten stehenden Beispiele.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Rückruffunktion wird mit einem einzigen Argument aufgerufen:

    - `timestamp`

      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der das Endzeitpunkt der Rendering des vorherigen Bildes angibt (basierend auf der Anzahl der Millisekunden seit [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Für `Window`-Objekte (nicht `Workers`) entspricht er [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf dem gleichen Agenten laufen (alle gleichherkünften Fenster und, was wichtiger ist, gleichherkünften iframes) — was die Synchronisierung von Animationen über mehrere `requestAnimationFrame`-Rückrufe ermöglicht. Der Zeitstempelwert ist auch ähnlich wie ein Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Rückruffunktion, ist jedoch niemals derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` eingereihten Rückrufe in einem einzigen Bild ausgelöst werden, erhält jeder den gleichen Zeitstempel, auch wenn während der Berechnung der Arbeitslast jedes vorherigen Rückrufs Zeit vergangen ist.

### Rückgabewert

Ein `long`-Integerwert, die Anforderungs-ID, die den Eintrag in der Rückrufliste eindeutig identifiziert. Dies ist ein Wert ungleich null, aber Sie dürfen keine anderen Annahmen über seinen Wert treffen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Anforderung des Aktualisierungs-Rückrufs abzubrechen.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit Beginn der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die Endposition des Elements ist 200px (`0.1 * 2000`) rechts von seiner Anfangsposition.

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

Die folgenden drei Beispiele zeigen verschiedene Ansätze zum Setzen des Nullpunkts in der Zeit, der Baseline zur Berechnung des Fortschritts Ihrer Animation in jedem Bild. Wenn Sie sich mit einer externen Uhr synchronisieren möchten, wie zum Beispiel [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), liegt die höchste Präzision in der Dauer eines einzelnen Bildes, 16,67ms @60Hz. Das `timestamp`-Argument des Rückrufs repräsentiert das Ende des vorherigen Bildes, sodass der früheste Zeitpunkt, an dem Ihre neu berechneten Werte angezeigt werden, im nächsten Bild liegt.

Dieses Beispiel wartet bis zur Ausführung des ersten Rückrufs, um `zero` festzulegen. Wenn Ihre Animation bei deren Start zu einem neuen Wert springt, müssen Sie sie auf diese Weise strukturieren. Wenn Sie nichts externes, z.B. Audio, synchronisieren müssen, wird dieser Ansatz empfohlen, da einige Browser eine Verzögerung über mehrere Bilder zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Rückruffunktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert vor dem ersten Aufruf von `requestAnimationFrame` festzulegen. `document.timeline.currentTime` stimmt mit dem `timestamp`-Argument überein, sodass der Nullwert dem Zeitstempel des 0. Bildes entspricht.

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

Dieses Beispiel animiert mit [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des `timestamp`-Wertes des Rückrufs. Dies könnten Sie verwenden, um eine leicht erhöhte Synchronisationspräzision zu erreichen, obwohl der zusätzliche Grad an Präzision variabel ist und keine wesentliche Erhöhung darstellt. Hinweis: Dieses Beispiel ermöglicht keine zuverlässige Synchronisierung von Animationsrückrufen.

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
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](https://www.testufo.com/#test=animation-time-graph)
