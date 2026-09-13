---
title: "Window: cancelAnimationFrame() Methode"
short-title: cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`window.cancelAnimationFrame()`** Methode storniert eine Animations-Frame-Anfrage, die zuvor durch einen Aufruf von [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) geplant wurde.

## Syntax

```js-nolint
cancelAnimationFrame(requestID)
```

### Parameter

- `requestID`
  - : Der ID-Wert, der durch den Aufruf von [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zurückgegeben wurde und die Callback-Anforderung angefordert hat.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const start = document.timeline.currentTime;

let myReq;

function step(timestamp) {
  const progress = timestamp - start;
  d.style.left = `${Math.min(progress / 10, 200)}px`;
  if (progress < 2000) {
    // it's important to update the requestId each time you're calling requestAnimationFrame
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// the cancellation uses the last requestId
cancelAnimationFrame(myReq);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
