---
title: "Window: clearInterval() Methode"
short-title: clearInterval()
slug: Web/API/Window/clearInterval
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}

Die **`clearInterval()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle hebt eine zeitgesteuerte, wiederholte Aktion auf, die zuvor durch einen Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval) eingerichtet wurde. Wenn der übergebene Parameter keine zuvor eingerichtete Aktion identifiziert, tut diese Methode nichts.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameter

- `intervalID`
  - : Der Bezeichner der wiederholten Aktion, die Sie aufheben möchten. Diese ID wurde bei dem entsprechenden Aufruf von `setInterval()` zurückgegeben.

Es sei angemerkt, dass der Pool von IDs, der von
[`setInterval()`](/de/docs/Web/API/Window/setInterval) und
[`setTimeout()`](/de/docs/Web/API/SetTimeout) verwendet wird, gemeinsam genutzt wird. Das bedeutet, dass Sie `clearInterval()` und
[`clearTimeout()`](/de/docs/Web/API/ClearTimeout) technisch gesehen austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

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
