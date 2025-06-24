---
title: "Window: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die **`window.requestAnimationFrame()`**-Methode teilt dem Browser mit, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Rückruffunktion entspricht im Allgemeinen der Bildwiederholfrequenz des Displays. Die gängigste Bildwiederholrate ist 60Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75Hz, 120Hz und 144Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Rückruffunktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie einen weiteren Frame animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode, um die aktuelle Zeit zu erhalten) verwenden, um zu berechnen, wie viel die Animation in einem Frame fortschreitet — **ansonsten läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**. Weitere Möglichkeiten dazu finden Sie in den unten stehenden Beispielen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Dieser Rückruf wird mit einem einzigen Argument übergeben:

    - `timestamp`

      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit der Rendering des vorherigen Frames angibt (basierend auf der Anzahl der Millisekunden seit [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, aber mit einer minimalen Präzision von 1 Millisekunde. Für `Window`-Objekte (nicht `Workers`) ist er gleich [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf demselben Agenten laufen (alle gleichartigen Fenster und, was noch wichtiger ist, gleichartige iframes) — was es ermöglicht, Animationen über mehrere `requestAnimationFrame`-Rückrufe hinweg zu synchronisieren. Der Zeitstempelwert ist auch ähnlich wie der Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Rückruffunktion, hat jedoch nie denselben Wert.

        Wenn mehrere durch `requestAnimationFrame()` eingereihten Rückrufe in einem einzigen Frame beginnen zu feuern, erhält jeder den gleichen Zeitstempel, obwohl während der Berechnung der Arbeitslast jedes vorherigen Rückrufs Zeit vergangen ist.

### Rückgabewert

Ein `unsigned long` Integer-Wert, die Anforderungs-ID, die den Eintrag in der Rückrufliste eindeutig identifiziert. Sie sollten keine Annahmen über seinen Wert machen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Neuzeichnungsanforderung zu stornieren.

> [!WARNING]
> Die Anforderungs-ID wird typischerweise als pro Fenster inkrementierender Zähler implementiert. Daher kann sie, auch wenn sie bei 1 zu zählen beginnt, überlaufen und bei 0 enden.
> Obwohl es unwahrscheinlich ist, dass dies bei kurzlebigen Anwendungen Probleme verursacht, sollten Sie `0` als Scheinwert für ungültige Anforderungs-IDs vermeiden und stattdessen unerreichbare Werte wie `null` bevorzugen.
> Die Spezifikation spezifiziert das Überlaufverhalten nicht, sodass Browser unterschiedliche Verhaltensweisen aufweisen. Beim Überlauf würde der Wert entweder auf 0, auf einen negativen Wert zurückspringen oder mit einem Fehler fehlschlagen.
> Sofern Überläufe keine Auslösung verursachen, sind Anforderungs-IDs auch nicht wirklich einzigartig, da es nur endlich viele 32-Bit-Integers für möglicherweise unendlich viele Rückrufe gibt.
> Beachten Sie, dass es jedoch ~500 Tage dauern würde, das Problem zu erreichen, wenn Sie bei 60Hz mit 100 Aufrufen zu `requestAnimationFrame()` pro Frame rendern.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit Beginn der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die Endposition des Elements ist 200px (`0.1 * 2000`) rechts von seiner Ausgangsposition.

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

Die folgenden drei Beispiele veranschaulichen verschiedene Ansätze zur Festlegung des Nullpunkts in der Zeit, der Basislinie zur Berechnung des Fortschritts Ihrer Animation in jedem Frame. Wenn Sie sich mit einer externen Uhr wie [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) synchronisieren möchten, ist die höchste verfügbare Präzision die Dauer eines einzelnen Frames, 16,67ms @60Hz. Das Zeitstempelargument des Rückrufs repräsentiert das Ende des vorherigen Frames, sodass der frühestmögliche Zeitpunkt, zu dem Ihr neu berechneter Wert/die Werte gerendert wird, im nächsten Frame ist.

In diesem Beispiel wird gewartet, bis der erste Rückruf ausgeführt wird, um `zero` festzulegen. Wenn Ihre Animation beim Start einen neuen Wert annimmt, müssen Sie sie auf diese Weise strukturieren. Wenn Sie nichts Externes synchronisieren müssen, wie Audio, wird dieser Ansatz empfohlen, da einige Browser zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Rückruffunktion eine Verzögerung über mehrere Frames aufweisen.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert festzulegen, bevor der erste Aufruf zu `requestAnimationFrame` erfolgt. `document.timeline.currentTime` stimmt mit dem `timestamp`-Argument überein, sodass der Nullwert dem Zeitstempel des 0ten Frames entspricht.

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

Dieses Beispiel animiert mit [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des Zeitstempelwerts des Rückrufs. Sie könnten dies verwenden, um eine etwas höhere Synchronisationspräzision zu erreichen, obwohl der zusätzliche Grad an Präzision variabel ist und nicht viel zunimmt. Hinweis: Dieses Beispiel ermöglicht es nicht, Animationsrückrufe zuverlässig zu synchronisieren.

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
- [Animieren mit JavaScript: von setInterval zu requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blogbeitrag
- [TestUFO: Testen Sie Ihren Webbrowser auf requestAnimationFrame()-Timing-Abweichungen](https://www.testufo.com/#test=animation-time-graph)
- [Firefox wechselt zu uint32_t für die requestAnimationFrame-Anforderungs-ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
