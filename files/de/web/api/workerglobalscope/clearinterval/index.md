---
title: "WorkerGlobalScope: clearInterval()-Methode"
short-title: clearInterval()
slug: Web/API/WorkerGlobalScope/clearInterval
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`clearInterval()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle hebt eine zuvor durch einen Aufruf von [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) festgelegte zeitgesteuerte, wiederholende Aktion auf. Wenn der übergebene Parameter keine zuvor festgelegte Aktion identifiziert, tut diese Methode nichts.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameter

- `intervalID`
  - : Der Bezeichner der wiederholten Aktion, die Sie aufheben möchten. Diese ID wurde durch den entsprechenden Aufruf von `setInterval()` zurückgegeben.

Es ist erwähnenswert, dass der ID-Pool, der von [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verwendet wird, geteilt wird, was bedeutet, dass Sie technisch `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout) austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe [`setInterval()`](/de/docs/Web/API/Window/setInterval) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
