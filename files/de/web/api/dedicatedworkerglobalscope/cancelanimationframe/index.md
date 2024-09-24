---
title: "DedicatedWorkerGlobalScope: cancelAnimationFrame()-Methode"
short-title: cancelAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`cancelAnimationFrame()`**-Methode des {{domxref("DedicatedWorkerGlobalScope")}}-Interfaces storniert eine Animationsframe-Anfrage, die zuvor durch einen Aufruf von {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} geplant wurde.

Das Aufrufen der `cancelAnimationFrame()`-Methode erfordert, dass der aktuelle Worker ein zugehöriges Eigentümer-{{domxref("Window", "window")}} hat. Das bedeutet, dass der aktuelle Worker von einem {{domxref("Window", "window")}} oder von einem dedizierten Worker erstellt werden muss, der ebenfalls ein zugehöriges Eigentümer-{{domxref("Window", "window")}} besitzt.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameter

- `handle`
  - : Der ID-Wert, der durch einen Aufruf von {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} zurückgegeben wird; der Aufruf muss im gleichen Worker erfolgt sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Im Hauptthread übertragen wir zunächst die Kontrolle über ein {{HTMLElement("canvas")}}-Element auf ein {{domxref("OffscreenCanvas")}}, indem wir {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} verwenden, und senden eine Nachricht, um die Arbeit mit dem `offscreen`-Canvas zu `"starten"`:

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

Beim Empfang der `"start"`-Nachricht beginnt der Worker mit der Animation und bewegt das Rechteck von links nach rechts. Beim Empfang einer `"stop"`-Nachricht wird die Animation gestoppt.

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

Falls erforderlich, kann der Hauptthread schließlich eine `"stop"`-Nachricht an den Worker senden, um die Animation zu beenden:

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

- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
