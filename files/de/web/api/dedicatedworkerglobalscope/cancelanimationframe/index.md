---
title: "DedicatedWorkerGlobalScope: cancelAnimationFrame() Methode"
short-title: cancelAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`cancelAnimationFrame()`** Methode des [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) Interfaces storniert eine über einen Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) zuvor geplante Animationsrahmenanforderung.

Das Aufrufen der `cancelAnimationFrame()` Methode erfordert, dass der aktuelle Worker ein zugehöriges Eigentümer-[`window`](/de/docs/Web/API/Window) hat. Das bedeutet, dass der aktuelle Worker durch ein [`window`](/de/docs/Web/API/Window) oder durch einen dedizierten Worker erstellt werden muss, der ebenfalls ein zugehöriges Eigentümer-[`window`](/de/docs/Web/API/Window) besitzt.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameter

- `handle`
  - : Der ID-Wert, der von einem Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) zurückgegeben wird; der Aufruf muss im selben Worker erfolgt sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode im aktuellen Worker nicht unterstützt wird.

## Beispiele

Im Hauptthread beginnen wir mit der Übertragung der Steuerung eines {{HTMLElement("canvas")}} Elements an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), mit Hilfe von [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) und senden eine Nachricht zum `"start"` der Arbeit an den Worker, mit dem Offscreen-Canvas:

```js
const offscreenCanvas = document
  .querySelector("canvas")
  .transferControlToOffscreen();

worker.postMessage(
  {
    type: "start",
    canvas: offscreenCanvas,
  },
  [offscreenCanvas],
);
```

Beim Empfang der `"start"` Nachricht beginnt der Worker die Animation und bewegt das Rechteck von links nach rechts. Bei Empfang einer `"stop"` Nachricht wird er die Animation stoppen.

```js
let ctx;
let pos = 0;

function draw(dt) {
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 10 * dt;
  self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    self.requestAnimationFrame(draw);
  }
  if (e.data.type === "stop") {
    self.cancelAnimationFrame(handle);
  }
});
```

Schließlich kann bei Bedarf der Hauptthread eine `"stop"` Nachricht an den Worker senden, um die Animation zu stoppen:

```js
worker.postMessage({
  type: "stop",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
