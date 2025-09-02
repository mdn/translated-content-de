---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
l10n:
  sourceCommit: 3eb0169d65709102b1599f5a86fd4a508b5f3798
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`requestAnimationFrame()`**-Methode der [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle teilt dem Browser mit, dass Sie einen Animationsframe anfordern und eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen aufrufen möchten.

Die Frequenz der Aufrufe der Rückruffunktion entspricht im Allgemeinen der Bildwiederholfrequenz des Displays. Die häufigste Bildwiederholfrequenz ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{HTMLElement("iframe")}}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

Ein Aufruf der `requestAnimationFrame()`-Methode plant nur einen einzigen Aufruf der Rückruffunktion. Wenn Sie ein weiteres Bild animieren möchten, muss Ihre Rückruffunktion erneut `requestAnimationFrame()` aufrufen.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie viel die Animation in einem Frame fortschreiten wird — **ansonsten läuft die Animation auf Bildschirmen mit hoher Bildwiederholfrequenz schneller**. Wie das geht, finden Sie in den unten stehenden Beispielen.

Der Aufruf der `requestAnimationFrame()`-Methode erfordert, dass der aktuelle Worker ein zugeordnetes Besitzer-[`window`](/de/docs/Web/API/Window) hat. Das bedeutet, dass der aktuelle Worker von einem [`window`](/de/docs/Web/API/Window) oder von einem dedizierten Worker erstellt worden sein muss, der ebenfalls ein zugeordnetes Besitzer-[`window`](/de/docs/Web/API/Window) hat.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Dieser Rückruffunktion wird ein einziges Argument übergeben:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit der Rendering des vorherigen Bildes angibt (basierend auf der Anzahl der Millisekunden seit dem [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Der Zeitstempelwert ähnelt auch dem Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Rückruffunktion, aber es ist nie derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` eingereihten Rückrufe in einem einzigen Frame ausgelöst werden, erhalten alle denselben Zeitstempel, obwohl während der Berechnung der Arbeitslast jedes vorherigen Rückrufs Zeit vergangen ist.

### Rückgabewert

Ein `long`-Integer-Wert, der die eindeutige Anforderungs-ID im Rückruflisten-Eintrag identifiziert. Dies ist ein Nicht-Null-Wert, aber Sie sollten keine weiteren Annahmen darüber treffen. Sie können diesen Wert an [`cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) übergeben, um die Aktualisierungs-Rückrufanforderung abzubrechen. Die Stornierung muss im selben Worker vorgenommen worden sein.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Hier ein vollständiges Beispiel, das zeigt, wie `requestAnimationFrame()` in einem dedizierten Worker mit einem `OffscreenCanvas` verwendet wird.

Das HTML sollte enthalten:

```html
<canvas width="100" height="100"></canvas>
```

Es sollte mit folgendem JavaScript verlinkt sein:

```js
const worker = new Worker("worker.js");

// Transfer canvas control to the worker
const offscreenCanvas = document
  .querySelector("canvas")
  .transferControlToOffscreen();

// Start the animation
worker.postMessage(
  {
    type: "start",
    canvas: offscreenCanvas,
  },
  [offscreenCanvas],
);

// Stop the animation after 5 seconds
setTimeout(() => {
  worker.postMessage({
    type: "stop",
  });
}, 5000);
```

**worker.js:**

```js
let ctx;
let pos = 0;
let animationId;
let isRunning = false;
let lastTime = 0;

function draw(currentTime) {
  if (!isRunning) return;

  // Calculate delta time for smooth animation
  if (lastTime === 0) lastTime = currentTime;
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // Clear and draw the moving rectangle
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 50 * deltaTime; // Move 50 pixels per second

  // Loop the animation
  if (pos > 100) pos = -10;

  animationId = self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    isRunning = true;
    lastTime = 0;
    animationId = self.requestAnimationFrame(draw);
  }
  if (e.data.type === "stop") {
    isRunning = false;
    if (animationId) {
      self.cancelAnimationFrame(animationId);
    }
  }
});
```

Im Hauptthread beginnen wir damit, die Kontrolle über ein {{HTMLElement("canvas")}}-Element auf ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) zu übertragen, indem wir [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) verwenden und eine Nachricht senden, um seine Arbeit mit dem Offscreen-Canvas zu "starten".

In der Worker-Datei (`worker.js`) handeln wir die Animationslogik. Beim Empfang der "start"-Nachricht beginnt der Worker mit der Animation, indem er das Rechteck von links nach rechts bewegt. Beim Empfang einer "stop"-Nachricht wird die Animation gestoppt.

Schließlich kann der Hauptthread nach einer gewissen Verzögerung eine "stop"-Nachricht an den Worker senden, um die Animation zu stoppen, damit die Animation sichtbar ist, bevor sie gestoppt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
