---
title: "Window: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`window.requestAnimationFrame()`** Methode teilt dem Browser mit, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine vom Benutzer bereitgestellte Callback-Funktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildwiederholrate des Displays. Die häufigste Bildwiederholrate beträgt 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()` Aufrufe werden in den meisten Browsern angehalten, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Callback-Funktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Bild fortschreiten wird — **andernfalls läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller ab**. Möglichkeiten, dies zu tun, finden Sie in den unten stehenden Beispielen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion wird mit einem einzigen Argument übergeben:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der das Endzeitpunkt des Renderings des vorherigen Bildes angibt (basierend auf der Anzahl von Millisekunden seit [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Für `Window` Objekte (nicht `Workers`) entspricht er [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf demselben Agenten laufen (alle gleichherkömmlichen Fenster und, noch wichtiger, gleichherkömmliche iframes) — was die Synchronisierung von Animationen über mehrere `requestAnimationFrame` Rückrufe hinweg ermöglicht. Der Zeitstempelwert ist auch ähnlich wie der Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion, jedoch niemals derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` eingereihte Rückrufe in einem einzigen Bild zu feuern beginnen, erhält jeder den gleichen Zeitstempel, obwohl die Zeit während der Berechnung jeder vorherigen Callback-Auslastung vergangen ist.

### Rückgabewert

Ein `unsigned long` Integerwert, die Anforderungs-ID, die den Eintrag in der Callback-Liste eindeutig identifiziert. Sie sollten keine Annahmen über seinen Wert machen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Aktualisierungsanforderung des Callbacks zu stornieren.

> [!WARNING]
> Die Anforderungs-ID wird typischerweise als ein pro-Fenster inkrementierender Zähler implementiert. Daher kann sie, selbst wenn sie bei 1 zu zählen beginnt, überlaufen und bei 0 enden.
> Obwohl es unwahrscheinlich ist, dass dies Probleme für kurzlebige Anwendungen verursacht, sollten Sie `0` als Wächterwert für ungültige Anforderungs-IDs vermeiden und stattdessen unerreichbare Werte wie `null` bevorzugen.
> Die Spezifikation gibt das Überlaufverhalten nicht an, daher haben Browser unterschiedliche Verhaltensweisen. Beim Überlaufen würde der Wert entweder auf 0, einen negativen Wert zurückgesetzt werden oder mit einem Fehler fehlschlagen.
> Wenn der Überlauf keinen Fehler auslöst, sind Anforderungs-IDs auch nicht wirklich einzigartig, da es nur endlich viele 32-Bit-Integer für möglicherweise unendlich viele Rückrufe gibt.
> Beachten Sie jedoch, dass es etwa 800 Tage dauern würde, bis das Problem bei einer Wiedergabe mit 60 Hz mit einem einzigen Aufruf von `requestAnimationFrame()` pro Frame erreicht wird.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixel) in Abhängigkeit von der seit Beginn der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die endgültige Position des Elements ist 200px (`0.1 * 2000`) rechts von seiner ursprünglichen Position.

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

Die folgenden drei Beispiele veranschaulichen verschiedene Ansätze, um den Nullpunkt in der Zeit festzulegen, die Grundlage zur Berechnung des Fortschritts Ihrer Animation in jedem Bild. Wenn Sie sich an eine externe Uhr, wie [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), synchronisieren möchten, ist die höchste verfügbare Präzision die Dauer eines einzelnen Bildes, 16,67 ms @60Hz. Das `timestamp`-Argument des Callbacks repräsentiert das Ende des vorherigen Bildes, sodass der früheste Zeitpunkt, zu dem Ihre neu berechneten Werte gerendert werden, im nächsten Bild liegt.

Dieses Beispiel wartet, bis der erste Rückruf ausgeführt wird, um `zero` festzulegen. Wenn Ihre Animation beim Starten zu einem neuen Wert springt, müssen Sie sie auf diese Weise strukturieren. Wenn Sie sich nicht mit etwas Externem wie Audio synchronisieren müssen, wird dieser Ansatz empfohlen, da einige Browser eine Multi-Frame-Verzögerung zwischen dem anfänglichen Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Callback-Funktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert vor dem ersten Aufruf von `requestAnimationFrame` festzulegen. `document.timeline.currentTime` stimmt mit dem `timestamp`-Argument überein, sodass der Nullwert mit dem Zeitstempel des 0. Bildes gleichwertig ist.

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

Dieses Beispiel animiert mit [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des `timestamp`-Werts des Callbacks. Sie könnten dies verwenden, um eine etwas höhere Synchronisationsgenauigkeit zu erreichen, obwohl der zusätzliche Grad an Präzision variabel ist und nicht viel ansteigt.

> [!NOTE]
> Dieses Beispiel erlaubt es Ihnen nicht, Animation-Callbacks zuverlässig zu synchronisieren.

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
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog-Beitrag
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](https://testufo.com/#test=animation-time-graph)
- [Firefox switching to uint32_t for the requestAnimationFrame request ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
