---
title: "Window: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: c087bbbf57a5ce29533672e3168e85cef51dd48c
---

{{APIRef}}

Die **`window.requestAnimationFrame()`**-Methode teilt dem Browser mit, dass Sie eine Animation durchführen möchten. Sie fordert den Browser auf, eine benutzerdefinierte Callback-Funktion vor dem nächsten Neuzeichnen aufzurufen.

Die Frequenz der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildwiederholrate des Displays. Die häufigste Bildwiederholrate beträgt 60hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75hz, 120hz und 144hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{ HTMLElement("iframe") }}s ausgeführt werden, um die Leistung und die Akku-Laufzeit zu verbessern.

> [!NOTE]
> Ihre Callback-Funktion muss `requestAnimationFrame()` erneut aufrufen, wenn Sie ein weiteres Bild animieren möchten. `requestAnimationFrame()` ist einmalig.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zum Abrufen der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Bild fortschreitet — **ansonsten läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**. Um zu erfahren, wie das funktioniert, siehe die Beispiele unten.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen wird, wenn es an der Zeit ist, Ihre Animation für den nächsten Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit des Renderns des vorherigen Bildes anzeigt (basierend auf der Anzahl der Millisekunden seit dem [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Präzision von 1 Millisekunde. Für `Window`-Objekte (nicht `Workers`) ist es gleich [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime). Dieser Zeitstempel wird zwischen allen Fenstern, die auf demselben Agenten laufen (alle gleich-origin-Fenster und vor allem gleich-origin iframes), geteilt — was das Synchronisieren von Animationen über mehrere `requestAnimationFrame`-Callbacks ermöglicht. Der Zeitstempelwert ist auch vergleichbar mit dem Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion, ist jedoch niemals derselbe Wert.

        Wenn mehrere Callbacks, die durch `requestAnimationFrame()` in einer einzigen Bildschleife bereitgestellt werden, beginnen zu feuern, erhält jeder denselben Zeitstempel, obwohl während der Berechnung der Arbeitslast jedes vorherigen Callbacks Zeit vergangen ist.

### Rückgabewert

Ein `unsigned long` integer Wert, die Request-ID, die den Eintrag in der Callback-Erfassungsliste eindeutig identifiziert. Sie sollten keine Annahmen über ihren Wert machen. Sie können diesen Wert an [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben, um die Neuzeichen-Callback-Anfrage abzubrechen.

> [!WARNING]
> Die Request-ID wird typischerweise als ein pro-Fenster inkrementierender Zähler implementiert. Selbst wenn er bei 1 zu zählen beginnt, kann er überlaufen und schließlich 0 erreichen.
> Es ist unwahrscheinlich, dass dies für kurzlebige Anwendungen Probleme verursacht, aber Sie sollten `0` als ungültigen Sentinel-Wert für Anfrage-IDs vermeiden und stattdessen unerreichbare Werte wie `null` bevorzugen.
> Die Spezifikation gibt nicht das Überlaufverhalten an, so dass Browser unterschiedliche Verhaltensweisen haben. Beim Überlaufen würde der Wert entweder zu 0 zurückspringen, zu einem negativen Wert werden oder mit einem Fehler fehlschlagen.
> Es sei jedoch darauf hingewiesen, dass es ungefähr 800 Tage dauern würde, um das Problem zu erreichen, wenn mit 60Hz und einem einzelnen Aufruf von `requestAnimationFrame()` pro Bild gerendert wird.

## Beispiele

In diesem Beispiel wird ein Element für 2 Sekunden (2000 Millisekunden) animiert. Das Element bewegt sich mit einer Geschwindigkeit von 0,1px/ms nach rechts, so dass seine relative Position (in CSS-Pixeln) in Abhängigkeit von der seit dem Start der Animation verstrichenen Zeit (in Millisekunden) mit `0.1 * elapsed` berechnet werden kann. Die Endposition des Elements ist 200px (`0.1 * 2000`) rechts von seiner Anfangsposition.

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

Die folgenden drei Beispiele veranschaulichen unterschiedliche Ansätze, um den Nullpunkt in der Zeit festzulegen, die Basislinie zur Berechnung des Fortschritts Ihrer Animation in jedem Bild. Wenn Sie sich mit einer externen Uhr synchronisieren möchten, wie z.B. [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), ist die höchstpräzise verfügbare Dauer die eines einzelnen Bildes, 16,67 ms @60Hz. Das Zeitstempelargument des Callbacks stellt das Ende des vorherigen Bildes dar, so dass der früheste Zeitpunkt, zu dem Ihr neu berechneter Wert renderbar ist, im nächsten Bild liegt.

In diesem Beispiel wird gewartet, bis der erste Callback ausgeführt wird, um `zero` zu setzen. Wenn Ihre Animation beim Starten auf einen neuen Wert springt, müssen Sie sie in dieser Weise strukturieren. Wenn Sie nicht mit etwas Externem, wie Audio, synchronisieren müssen, wird dieser Ansatz empfohlen, da einige Browser eine mehrfache Bildverzögerung zwischen dem anfänglichen Aufruf von `requestAnimationFrame()` und dem ersten Aufruf der Callback-Funktion haben.

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

Dieses Beispiel verwendet [`document.timeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), um den Nullwert vor dem ersten Aufruf von `requestAnimationFrame` festzulegen. `document.timeline.currentTime` ist mit dem `timestamp`-Argument ausgerichtet, sodass der Nullwert dem Zeitstempel des 0ten Bildes entspricht.

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

Dieses Beispiel animiert unter Verwendung von [`performance.now()`](/de/docs/Web/API/Performance/now), anstatt des Zeitstempelwertes des Callbacks. Sie könnten dies verwenden, um eine etwas höhere Synchronisierungspräzision zu erreichen, obwohl der zusätzliche Präzisionsgrad variabel und nicht wesentlich erhöht ist.

> [!NOTE]
> Dieses Beispiel ermöglicht es nicht, Animation-Callbacks zuverlässig zu synchronisieren.

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
- [Animate mit JavaScript: von setInterval zu requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog-Post
- [TestUFO: Testen Sie Ihren Webbrowser auf requestAnimationFrame() Timing-Abweichungen](https://testufo.com/#test=animation-time-graph)
- [Firefox wechselt zu uint32_t für die requestAnimationFrame-Anfrage-ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
