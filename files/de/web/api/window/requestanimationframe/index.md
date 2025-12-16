---
title: "Window: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: d11345bdb2e4995b55444873c7ae02a6ffc9ded1
---

{{APIRef}}

Die **`window.requestAnimationFrame()`** Methode teilt dem Browser mit, dass Sie eine Animation ausführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Callback-Funktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildschirmwiederholrate. Die gängigste Wiederholrate beträgt 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Callback-Funktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, um wie viel die Animation in einem Bild fortschreiten wird — **ansonsten läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**.
> Weitere Informationen dazu finden Sie in den folgenden Beispielen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit der Darstellung des vorherigen Bildes anzeigt (basierend auf der Anzahl der Millisekunden seit dem [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Für `Window`-Objekte (nicht `Workers`) ist er gleich [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf demselben Agenten laufen (alle gleichartigen Ursprungsfenster und insbesondere gleichartige iframes) — was es ermöglicht, Animationen über mehrere `requestAnimationFrame`-Callbacks hinweg zu synchronisieren. Der Zeitstempel-Wert ist auch ähnlich wie ein Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) am Anfang der Callback-Funktion, jedoch niemals derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` geplante Callbacks in einem einzigen Bild beginnen auszulösen, erhält jeder denselben Zeitstempel, auch wenn während der Berechnung der Arbeitsaufgaben jedes vorherigen Callbacks Zeit vergangen ist.

### Rückgabewert

Ein `unsigned long` Integer-Wert, die Anforderungs-ID, die den Eintrag in der Callback-Liste eindeutig identifiziert. Sie sollten keine Annahmen über dessen Wert machen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Anforderung des Neuzeichnungs-Callbacks zu stornieren.

> [!WARNING]
> Die Anforderungs-ID wird typischerweise als ein von Fenster zu Fenster inkrementierender Zähler implementiert. Daher kann sie selbst dann, wenn sie bei 1 beginnt zu zählen, überlaufen und letztlich 0 erreichen.
> Obwohl dies bei kurzlebigen Anwendungen wahrscheinlich keine Probleme verursacht, sollten Sie `0` als Platzhalterwert für ungültige Anforderungs-IDs vermeiden und stattdessen unerreichbare Werte wie `null` bevorzugen.
> Die Spezifikation gibt das Überlaufverhalten nicht an, daher haben Browser unterschiedliche Verhaltensweisen. Bei Überlauf kann der Wert entweder auf 0 zurücksetzen, einen negativen Wert annehmen oder mit einem Fehler abgleiten.
> Sofern der Überlauf keinen Fehler auslöst, sind Anforderungs-IDs auch nicht wirklich einzigartig, da es nur begrenzt viele 32-Bit-Integer für möglicherweise unendlich viele Callbacks gibt.
> Beachten Sie jedoch, dass es etwa 800 Tage dauern würde, um das Problem zu erreichen, wenn bei 60Hz gerendert wird mit einem einzigen Aufruf von requestAnimationFrame() pro Bild.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit dem Start der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die Endposition des Elements ist 200px (`0.1 * 2000`) rechts von seiner Startposition.

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

Die folgenden drei Beispiele veranschaulichen unterschiedliche Ansätze zur Festlegung des Nullpunkts in der Zeit, der Grundlage für die Berechnung des Fortschritts Ihrer Animation in jedem Bild. Wenn Sie sich mit einer externen Uhr synchronisieren möchten, wie z.B. [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), ist die höchste verfügbare Präzision die Dauer eines einzelnen Bildes, 16,67ms @60Hz. Das Zeitstempel-Argument des Callbacks stellt das Ende des vorherigen Bildes dar, sodass Ihre neu berechneten Werte frühestens im nächsten Bild gerendert werden.

In diesem Beispiel wird gewartet, bis das erste Callback ausgeführt wird, um `zero` festzulegen. Wenn Ihre Animation beim Start auf einen neuen Wert springt, müssen Sie sie auf diese Weise strukturieren. Wenn Sie nicht mit etwas Externem synchronisieren müssen, wie Audio, wird dieser Ansatz empfohlen, da einige Browser eine Verzögerung über mehrere Bilder zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Callback-Funktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert festzulegen vor dem ersten Aufruf von `requestAnimationFrame`. `document.timeline.currentTime` stimmt mit dem `timestamp`-Argument überein, sodass der Nullwert dem Zeitstempel des 0ten Bildes entspricht.

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

Dieses Beispiel animiert mithilfe von [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des Zeitstempel-Werts des Callbacks. Sie könnten dies verwenden, um eine geringfügig höhere Synchronisationspräzision zu erreichen, obwohl der zusätzliche Grad an Präzision variabel ist und nicht wesentlich erhöht wird.

> [!NOTE]
> Dieses Beispiel ermöglicht es Ihnen nicht, Animation-Callbacks zuverlässig zu synchronisieren.

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
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blogpost
- [TestUFO: Testen Sie Ihren Webbrowser auf requestAnimationFrame() Timing-Abweichungen](https://testufo.com/#test=animation-time-graph)
- [Firefox wechselt zu uint32_t für die requestAnimationFrame Anfrage-ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
