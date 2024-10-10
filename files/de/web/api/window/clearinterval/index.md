---
title: "Window: clearInterval()-Methode"
short-title: clearInterval()
slug: Web/API/Window/clearInterval
l10n:
  sourceCommit: 1c858224f09f1c9c85b9e3f7bd535e72137ea1a6
---

{{APIRef("HTML DOM")}}

Die **`clearInterval()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle hebt eine zeitgesteuerte, wiederholte Aktion auf, die zuvor durch einen Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval) eingerichtet wurde. Wenn der übergebene Parameter keine zuvor eingerichtete Aktion identifiziert, hat diese Methode keine Wirkung.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameter

- `intervalID`
  - : Der Bezeichner der wiederholten Aktion, die Sie aufheben möchten. Diese ID wurde durch den entsprechenden Aufruf von `setInterval()` zurückgegeben.

Es ist erwähnenswert, dass der ID-Pool, der von [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet wird, geteilt wird. Dies bedeutet, dass Sie technisch gesehen sowohl `clearInterval()` als auch [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) austauschbar verwenden können. Um Klarheit zu gewährleisten, sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sehen Sie sich [`setInterval()`](/de/docs/Web/API/Window/setInterval) für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
