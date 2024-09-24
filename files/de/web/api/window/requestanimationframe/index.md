---
title: "Fenster: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 85d2ef85f395053ce12f3e2067b784a12eb77ae9
---

{{APIRef}}

Die **`window.requestAnimationFrame()`**-Methode teilt dem Browser mit, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Rückruffunktion entspricht im Allgemeinen der Bildschirmwiederholrate. Die gängigste Wiederholrate beträgt 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder ausgeblendeten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Batterielaufzeit zu verbessern.

> [!NOTE]
> Ihre Rückruffunktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie einen weiteren Frame animieren möchten. `requestAnimationFrame()` ist ein einmaliger Aufruf.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Frame fortschreiten wird — **ansonsten wird die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller ausgeführt**. Möglichkeiten dazu finden Sie in den untenstehenden Beispielen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen werden soll, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Rückruffunktion erhält ein einzelnes Argument:

    - `timestamp`

      - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Endzeit des Renderings des vorherigen Frames anzeigt (basierend auf der Anzahl der Millisekunden seit dem [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Für `Window`-Objekte (nicht `Workers`) entspricht er {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}}. Dieser Zeitstempel wird zwischen allen Fenstern, die im selben Agenten laufen (alle gleichherkunftenden Fenster und, wichtiger noch, gleichherkunftende iframes), geteilt — was die Synchronisierung von Animationen über mehrere `requestAnimationFrame`-Rückrufe hinweg ermöglicht. Der Wert des Zeitstempels ist auch ähnlich wie der Aufruf von {{domxref('performance.now()')}} zu Beginn der Rückruffunktion, jedoch nie derselbe Wert.

        Wenn mehrere Rückrufe, die durch `requestAnimationFrame()` in einer einzigen Frame-Schlange eingereiht wurden, beginnen, wird jedem der gleiche Zeitstempel zugewiesen, obwohl die Zeit während der Berechnung der Vorlasten jedes vorherigen Rückrufs vergangen ist.

### Rückgabewert

Ein `long`-Integer-Wert, die Anforderungs-ID, die den Eintrag in der Rückrufliste eindeutig identifiziert. Dies ist ein nicht-null Wert, aber Sie können keine anderen Annahmen über seinen Wert treffen. Sie können diesen Wert an {{domxref("window.cancelAnimationFrame()")}} übergeben, um die Anforderung des Aktualisierungsrückrufs zu stornieren.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit dem Start der Animation vergangenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die endgültige Position des Elements ist 200px (`0.1 * 2000`) rechts von seiner ursprünglichen Position.

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  // Math.min() wird hier verwendet, um sicherzustellen, dass das Element genau bei 200px stoppt
  const shift = Math.min(0.1 * elapsed, 200);
  element.style.transform = `translateX(${shift}px)`;
  if (shift < 200) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
```

Die folgenden drei Beispiele verdeutlichen unterschiedliche Ansätze, um den Nullpunkt in der Zeit festzulegen, die Basislinie für die Berechnung des Fortschritts Ihrer Animation in jedem Frame. Wenn Sie sich an einer externen Uhr, wie {{domxref("BaseAudioContext.currentTime")}}, synchronisieren möchten, ist die höchste verfügbare Genauigkeit die Dauer eines einzelnen Frames, 16,67 ms @60hz. Das Zeitstempel-Argument des Rückrufs stellt das Ende des vorherigen Frames dar, sodass der früheste Zeitpunkt, an dem Ihre neu berechneten Werte gerendert werden, im nächsten Frame liegt.

Dieses Beispiel wartet, bis der erste Rückruf ausgeführt wird, um `zero` zu setzen. Wenn Ihre Animation beim Start zu einem neuen Wert springt, müssen Sie sie auf diese Weise strukturieren. Wenn Sie nichts Externes synchronisieren müssen, wie zum Beispiel Audio, wird dieser Ansatz empfohlen, da einige Browser eine Verzögerung von mehreren Frames zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Rückruffunktion haben.

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

Dieses Beispiel verwendet {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}}, um einen Nullwert zu setzen, bevor der erste Aufruf zu `requestAnimationFrame` erfolgt. `document.timeline.currentTime` stimmt mit dem `timestamp`-Argument überein, sodass der Nullwert dem Zeitstempel des 0ten Frames entspricht.

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

Dieses Beispiel animiert unter Verwendung von {{domxref("performance.now()")}} anstelle des Zeitstempelwerts des Rückrufs. Möglicherweise nutzen Sie dies, um eine etwas höhere Synchronisationspräzision zu erreichen, obwohl der Zugewinn an Präzision variabel und nicht wesentlich ist. Hinweis: Dieses Beispiel ermöglicht es Ihnen nicht, Animationsrückrufe zuverlässig zu synchronisieren.

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

- {{domxref("Window.cancelAnimationFrame()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- [Animieren mit JavaScript: von setInterval zu requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blogbeitrag
- [TestUFO: Testen Sie Ihren Webbrowser auf requestAnimationFrame()-Zeitabweichungen](https://www.testufo.com/#test=animation-time-graph)
