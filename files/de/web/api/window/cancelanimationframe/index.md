---
title: "Window: Methode cancelAnimationFrame()"
short-title: cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
l10n:
  sourceCommit: 9bf78e9898a1bf51a67e33f8e82276fca575979d
---

{{APIRef}}

Die Methode **`window.cancelAnimationFrame()`** storniert eine Animationsrahmenanfrage, die zuvor durch einen Aufruf von [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) geplant wurde.

## Syntax

```js-nolint
cancelAnimationFrame(requestID)
```

### Parameter

- `requestID`
  - : Der ID-Wert, der durch den Aufruf von [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zurückgegeben wurde, der den Rückruf angefordert hat.

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
