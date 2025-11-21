---
title: "Window: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 12b296d2b3937c45b2363f34ed8afadcf00ed166
---

{{APIRef}}

Die **`window.requestAnimationFrame()`** Methode teilt dem
Browser mit, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Callback-Funktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildwiederholfrequenz des Displays. Die gängigste Bildwiederholrate ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()` Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um Leistung und Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Callback-Funktion muss `requestAnimationFrame()` erneut aufrufen, wenn
> Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode
> zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in
> einem Frame fortschreiten wird — **ansonsten läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**.
> Siehe die Beispiele unten für Möglichkeiten, dies zu tun.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen werden soll, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit des Renderings des vorherigen Frames angibt (basierend auf der Anzahl von Millisekunden seit dem [Time-Origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Präzision von 1 Millisekunde. Für `Window` Objekte (nicht `Workers`) ist er gleich [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf demselben Agent ausgeführt werden (alle gleich-origin Fenster und, noch wichtiger, gleich-origin Iframes) — was es ermöglicht, Animationen über mehrere `requestAnimationFrame` Callbacks hinweg zu synchronisieren. Der Wert des Zeitstempels ist auch ähnlich wie ein Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) am Anfang der Callback-Funktion, aber er ist niemals derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` geplante Callbacks in einem einzigen Frame ausgelöst werden, erhält jeder denselben Zeitstempel, obwohl während der Berechnung der Arbeitslast jedes vorhergehenden Callbacks Zeit vergangen ist.

### Rückgabewert

Ein `unsigned long` Integer-Wert, die Anfragen-ID, die den Eintrag in der Callback-Liste eindeutig identifiziert. Sie sollten keine Annahmen über dessen Wert treffen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Aktualisierungs-Callback-Anfrage zu stornieren.

> [!WARNING]
> Die Anfragen-ID wird typischerweise als per-Fenster-Inkrementzähler implementiert. Deshalb kann sie, selbst wenn sie bei 1 zu zählen beginnt, überlaufen und am Ende 0 erreichen.
> Obwohl es für kurzlebige Anwendungen unwahrscheinlich ist, Probleme zu verursachen, sollten Sie `0` als Sentinel-Wert für ungültige Anfragen-IDs vermeiden und stattdessen unerreichbare Werte wie `null` bevorzugen.
> Die Spezifikation gibt das Überlaufverhalten nicht vor, sodass Browser unterschiedliche Verhaltensweisen haben. Bei einem Überlauf würde der Wert entweder auf 0 zurückgesetzt, einen negativen Wert annehmen oder mit einem Fehler ausfallen.
> Sofern der Überlauf nicht wirft, sind Anfragen-IDs auch nicht wirklich einzigartig, da es nur endlich viele 32-Bit-Ganzzahlen für möglicherweise unendliche viele Callbacks gibt.
> Beachten Sie jedoch, dass es ~500 Tage dauern würde, bis das Problem bei einer Renderrate von 60Hz mit 100 Aufrufen von `requestAnimationFrame()` pro Frame auftritt.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit dem Start der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die endgültige Position des Elements befindet sich 200px (`0.1 * 2000`) rechts von seiner anfänglichen Position.

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

Die folgenden drei Beispiele veranschaulichen verschiedene Ansätze zum Setzen des Nullpunkts in der Zeit, der Basislinie zur Berechnung des Fortschritts Ihrer Animation in jedem Frame. Wenn Sie sich an eine externe Uhr, wie [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), synchronisieren möchten, beträgt die höchste verfügbare Präzision die Dauer eines einzelnen Frames, 16,67 ms @60Hz. Das Zeitstempel-Argument des Callbacks stellt das Ende des vorhergehenden Frames dar, sodass der früheste Zeitpunkt, zu dem Ihr neu berechneter Wert gerendert wird, der nächste Frame ist.

Dieses Beispiel wartet, bis das erste Callback ausgeführt wird, um `zero` zu setzen. Wenn Ihre Animation beim Starten auf einen neuen Wert springt, müssen Sie es in dieser Weise strukturieren. Wenn Sie nichts Externes wie Audio synchronisieren müssen, wird dieser Ansatz empfohlen, da einige Browser eine Mehrfach-Frame-Verzögerung zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Callback-Funktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert vor dem ersten Aufruf von `requestAnimationFrame` zu setzen. `document.timeline.currentTime` stimmt mit dem `timestamp`-Argument überein, sodass der Nullwert gleich dem Zeitstempel des 0ten Frames ist.

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

Dieses Beispiel verwendet zum Animieren [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des Zeitstempelwerts des Callbacks. Sie könnten dies verwenden, um eine leicht höhere Synchronisationspräzision zu erreichen, obwohl der zusätzliche Präzisionsgrad variabel ist und keinen großen Anstieg darstellt.

> [!NOTE]
> Dieses Beispiel ermöglicht es Ihnen nicht, Animations-Callbacks zuverlässig zu synchronisieren.

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
- [Animieren mit JavaScript: von setInterval zu requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blogartikel
- [TestUFO: Testen Sie Ihren Webbrowser auf requestAnimationFrame()-Timingabweichungen](https://testufo.com/#test=animation-time-graph)
- [Firefox wechselt zu uint32_t für die requestAnimationFrame-Anfragen-ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
