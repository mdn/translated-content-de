---
title: "Window: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 90c1d8efd51c2f82d26e6b79e442f9dbcfafd048
---

{{APIRef}}

Die **`window.requestAnimationFrame()`** Methode teilt dem Browser mit, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Callback-Funktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildwiederholrate des Displays. Die gängigste Bildwiederholrate ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl 75 Hz, 120 Hz und 144 Hz ebenfalls weit verbreitet sind. `requestAnimationFrame()` Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Callback-Funktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Verwenden Sie immer das erste Argument (oder eine andere Methode, um die aktuelle Zeit zu ermitteln), um zu berechnen, wie viel die Animation in einem Frame fortschreiten wird — **andernfalls läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**. Für Möglichkeiten, dies zu tun, siehe die Beispiele unten.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit der Rendering des vorherigen Frames angibt (basierend auf der Anzahl von Millisekunden seit [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Für `Window` Objekte (nicht `Workers`) entspricht er [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern, die mit dem gleichen Agenten laufen (alle gleichoriginigen Fenster und, was wichtiger ist, gleichoriginige iframes) geteilt — was das Synchronisieren von Animationen über mehrere `requestAnimationFrame` Rückrufe hinweg ermöglicht. Der Zeitstempelwert ähnelt auch dem Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion, ist jedoch niemals der gleiche Wert.

        Wenn mehrere durch `requestAnimationFrame()` eingereihten Rückrufe in einem einzigen Frame zu feuern beginnen, erhält jeder den gleichen Zeitstempel, obwohl die Zeit während der Ausführung der Arbeitslast jedes vorherigen Rückrufs vergangen ist.

### Rückgabewert

Ein `unsigned long` Integer-Wert, die Request-ID, die den Eintrag in der Callback-Liste eindeutig identifiziert. Sie sollten keine Annahmen über seinen Wert treffen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Aktualisierungs-Callback-Anforderung abzubrechen.

> [!WARNING]
> Die Request-ID wird typischerweise als ein pro Fenster inkrementierender Zähler implementiert. Daher kann sie, selbst wenn sie bei 1 zu zählen beginnt, überlaufen und 0 erreichen.
> Auch wenn dies für kurzlebige Anwendungen äußerst unwahrscheinlich Probleme verursachen wird, sollten Sie `0` als Wächter für ungültige Anforderungs-IDs vermeiden und stattdessen unerreichbare Werte wie `null` bevorzugen.
> Die Spezifikation gibt das Überlaufverhalten nicht an, sodass Browser unterschiedliche Verhaltensweisen aufweisen. Beim Überlauf würde der Wert entweder auf 0, auf einen negativen Wert zurückgesetzt oder mit einem Fehler fehlschlagen.
> Es sei jedoch darauf hingewiesen, dass es ungefähr 800 Tage dauern würde, um das Problem bei der Wiedergabe mit 60Hz mit einem einzigen Aufruf von `requestAnimationFrame()` pro Frame zu erreichen.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1 px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Funktion der seit Beginn der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die Endposition des Elements ist 200 px (`0.1 * 2000`) rechts von seiner Ausgangsposition.

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

Die folgenden drei Beispiele veranschaulichen verschiedene Ansätze zur Festlegung des Nullpunkts in der Zeit, der Basislinie für die Berechnung des Fortschritts Ihrer Animation in jedem Frame. Wenn Sie sich mit einer externen Uhr synchronisieren möchten, z.B. [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), ist die höchste verfügbare Präzision die Dauer eines einzelnen Frames, 16,67 ms @60Hz. Das Zeitstempel-Argument der Callback-Funktion stellt das Ende des vorherigen Frames dar, sodass der früheste Zeitpunkt, an dem Ihre neu berechneten Werte gerendert werden, im nächsten Frame liegt.

In diesem Beispiel wartet man, bis die erste Callback-Funktion ausgeführt wird, um `zero` festzulegen. Wenn Ihre Animation beim Start auf einen neuen Wert springt, müssen Sie sie so strukturieren. Wenn Sie nichts Externes synchronisieren müssen, wie z.B. Audio, wird dieser Ansatz empfohlen, da einige Browser eine Mehrfach-Frame-Verzögerung zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Callback-Funktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert festzulegen, bevor der erste Aufruf von `requestAnimationFrame` erfolgt. `document.timeline.currentTime` stimmt mit dem `timestamp` Argument überein, sodass der Nullwert dem Zeitstempel des 0. Frames entspricht.

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

In diesem Beispiel wird mit [`performance.now()`](/de/docs/Web/API/Performance/now) statt mit dem Zeitstempelwert der Callback-Funktion animiert. Dies könnte verwendet werden, um eine leicht höhere Synchronisationspräzision zu erreichen, obwohl die zusätzliche Präzision variabel und nicht sehr groß ist.

> [!NOTE]
> Dieses Beispiel ermöglicht keine zuverlässige Synchronisation von Animationsrückrufen.

```js
const zero = performance.now();
requestAnimationFrame(animate);
function animate() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame(animate);
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
- [TestUFO: Testen Sie Ihren Webbrowser auf Abweichungen beim requestAnimationFrame() Timing](https://testufo.com/#test=animation-time-graph)
- [Firefox switching to uint32_t for the requestAnimationFrame request ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
