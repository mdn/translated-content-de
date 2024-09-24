---
title: "Window: Methode cancelAnimationFrame()"
short-title: cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
l10n:
  sourceCommit: 9bf78e9898a1bf51a67e33f8e82276fca575979d
---

{{APIRef}}

Die **`window.cancelAnimationFrame()`** Methode storniert einen Animationsrahmenantrag, der zuvor durch einen Aufruf von {{domxref("window.requestAnimationFrame()")}} geplant wurde.

## Syntax

```js-nolint
cancelAnimationFrame(requestID)
```

### Parameter

- `requestID`
  - : Der ID-Wert, der durch den Aufruf von {{domxref("window.requestAnimationFrame()")}} zurückgegeben wurde, der den Callback angefordert hat.

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
    // Es ist wichtig, die requestId bei jedem Aufruf von requestAnimationFrame zu aktualisieren
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// Die Stornierung verwendet die letzte requestId
cancelAnimationFrame(myReq);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
