---
title: "DedicatedWorkerGlobalScope: cancelAnimationFrame() Methode"
short-title: cancelAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame
l10n:
  sourceCommit: 3eb0169d65709102b1599f5a86fd4a508b5f3798
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`cancelAnimationFrame()`** Methode des [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Interfaces storniert eine zuvor über einen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) geplante Animationsframe-Anforderung.

Der Aufruf der `cancelAnimationFrame()` Methode erfordert, dass der aktuelle Worker ein zugeordnetes Eigentümer-[`window`](/de/docs/Web/API/Window) hat. Das bedeutet, dass der aktuelle Worker von einem [`window`](/de/docs/Web/API/Window) oder von einem dedizierten Worker, der ebenfalls ein zugeordnetes Eigentümer-[`window`](/de/docs/Web/API/Window) hat, erstellt werden muss.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameter

- `handle`
  - : Die von einem Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) zurückgegebene ID; der Aufruf muss im selben Worker erfolgt sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Hier ist ein vollständiges Beispiel, das zeigt, wie `requestAnimationFrame()` in einem dedizierten Worker mit einem `OffscreenCanvas` verwendet wird.

Das HTML sollte enthalten:

```html
<canvas width="100" height="100"></canvas>
```

Es sollte mit folgendem JavaScript verknüpft sein:

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

Im Haupt-Thread beginnen wir damit, die Kontrolle über ein {{HTMLElement("canvas")}}-Element an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) zu übergeben, indem wir [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) verwenden und eine Nachricht senden, um die Arbeit mit dem Offscreen-Canvas zu `"starten"`.

In der Worker-Datei (`worker.js`) behandeln wir die Animationslogik. Beim Empfang der `"start"`-Nachricht beginnt der Worker mit der Animation und bewegt das Rechteck von links nach rechts. Beim Empfang einer `"stop"`-Nachricht wird die Animation gestoppt.

Schließlich kann der Haupt-Thread eine `"stop"`-Nachricht an den Worker senden, um die Animation nach einer Verzögerung zu stoppen, damit die Animation sichtbar ist, bevor sie endet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
