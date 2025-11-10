---
title: "Window: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 67da7a675ed556b89179318dec20a2910f5f4649
---

{{APIRef}}

Die **`window.requestAnimationFrame()`** Methode informiert den Browser, dass Sie eine Animation ausführen möchten. Sie fordert den Browser auf, eine vom Nutzer bereitgestellte Callback-Funktion vor dem nächsten Neuzeichnen aufzurufen.

Die Häufigkeit der Aufrufe der Callback-Funktion stimmt im Allgemeinen mit der Aktualisierungsrate des Displays überein. Die häufigste Aktualisierungsrate beträgt 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()` Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

> [!NOTE]
> Ihre Callback-Funktion muss `requestAnimationFrame()` erneut aufrufen, wenn
> Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode, um die aktuelle Zeit zu erhalten) verwenden, um zu berechnen, wie weit die Animation in einem Bild voranschreiten wird — **ansonsten wird die Animation auf Bildschirmen mit hoher Bildwiederholfrequenz schneller laufen**.
> Für Möglichkeiten, dies zu tun, siehe die Beispiele unten.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion wird mit einem einzigen Argument übergeben:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit des Renderings des vorherigen Bildes angibt (basierend auf der Anzahl der Millisekunden seit dem [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl, in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Für `Window` Objekte (nicht `Workers`) entspricht er [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern geteilt, die auf demselben Agenten laufen (alle gleich-origin Fenster und, wichtiger, gleich-origin iframes) — was es ermöglicht, Animationen über mehrere `requestAnimationFrame` Rückrufe hinweg zu synchronisieren. Der Zeitstempelwert ist auch ähnlich wie der Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion, aber es ist nie derselbe Wert.

        Wenn mehrere Rückrufe, die durch `requestAnimationFrame()` in einer einzelnen Bildfrequenz eingereiht wurden, beginnen auszuführen, erhält jeder denselben Zeitstempel, obwohl während der Berechnung der Arbeitslast jedes vorherigen Rückrufs Zeit vergangen ist.

### Rückgabewert

Ein `unsigned long` Integerwert, die Anforderungs-ID, die den Eintrag in der Callback-Liste eindeutig identifiziert. Sie sollten keine Annahmen über seinen Wert machen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Aktualisierungs-Callback-Anforderung zu stornieren.

> [!WARNING]
> Die Anforderungs-ID wird typischerweise als ein pro-Fenster inkrementierender Zähler implementiert. Auch wenn er bei 1 zu zählen beginnt, kann er daher überlaufen und 0 erreichen.
> Während dies für kurzlebige Anwendungen wahrscheinlich kein Problem darstellt, sollten Sie vermeiden, `0` als Sentinel-Wert für ungültige Anforderungs-IDs zu verwenden und stattdessen unerreichbare Werte wie `null` bevorzugen.
> Die Spezifikation legt das Überlaufverhalten nicht fest, daher haben Browser unterschiedliche Verhaltensweisen. Bei einem Überlauf würde der Wert entweder auf 0 zurückspringen, einen negativen Wert annehmen oder mit einem Fehler fehlschlagen.
> Außer wenn Überlauf einen Fehler verursacht, sind Anforderungs-IDs nicht wirklich eindeutig, da es nur endlich viele 32-Bit-Integer für möglicherweise unendlich viele Rückrufe gibt.
> Beachten Sie jedoch, dass es ~500 Tage dauern würde, bis das Problem auftritt, wenn mit 60Hz bei 100 Aufrufen von `requestAnimationFrame()` pro Bild gerendert wird.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, sodass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit dem Start der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die endgültige Position des Elements ist 200px (`0.1 * 2000`) rechts von seiner Ausgangsposition.

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

Die folgenden drei Beispiele veranschaulichen verschiedene Ansätze zur Festlegung des Nullpunkts in der Zeit, der Grundlage zur Berechnung des Fortschritts Ihrer Animation in jedem Bild. Wenn Sie zu einer externen Uhr synchronisieren möchten, wie zum Beispiel [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime),
ist die höchste verfügbare Präzision die Dauer eines einzelnen Bildes, 16,67ms @60Hz. Das Zeitstempel-Argument des Rückrufs repräsentiert das Ende des vorherigen Bildes, sodass der frühestmögliche Zeitpunkt, zu dem Ihr neu berechneter Wert angezeigt wird, im nächsten Bild ist.

Dieses Beispiel wartet bis zur Ausführung des ersten Rückrufs, um `zero` zu setzen. Wenn Ihre Animation zu einem neuen Wert springt, wenn sie startet, müssen Sie sie auf diese Weise strukturieren. Wenn Sie nicht zu etwas Externem synchronisieren müssen, wie zum Beispiel Audio, wird dieser Ansatz empfohlen, da einige Browser eine Verzögerung von mehreren Bildern zwischen dem ersten Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Callback-Funktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um einen Nullwert vor dem ersten Aufruf von `requestAnimationFrame` festzulegen. `document.timeline.currentTime` stimmt mit dem `timestamp` Argument überein, sodass der Nullwert gleichwertig zum Zeitstempel des 0. Bildes ist.

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

Dieses Beispiel animiert mithilfe von [`performance.now()`](/de/docs/Web/API/Performance/now) anstelle des Zeitwertes des Rückrufs. Sie könnten dies verwenden, um eine etwas höhere Synchronisationspräzision zu erreichen, obwohl der zusätzliche Präzisionsgrad variabel ist und nicht viel von einer Steigerung darstellt.

> [!NOTE]
> Dieses Beispiel erlaubt es Ihnen nicht, Animationsrückrufe zuverlässig zu synchronisieren.

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
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog Beitrag
- [TestUFO: Testen Sie Ihren Webbrowser auf requestAnimationFrame() Timing-Abweichungen](https://www.testufo.com/#test=animation-time-graph)
- [Firefox wechselt zu uint32_t für die requestAnimationFrame Anforderungs-ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
