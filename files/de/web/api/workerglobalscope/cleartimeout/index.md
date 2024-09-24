---
title: "WorkerGlobalScope: clearTimeout()-Methode"
short-title: clearTimeout()
slug: Web/API/WorkerGlobalScope/clearTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`clearTimeout()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle hebt einen zuvor durch Aufruf von [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) festgelegten Timeout auf.

Wenn der übergebene Parameter keine zuvor festgelegte Aktion identifiziert, bewirkt diese Methode nichts.

## Syntax

```js-nolint
clearTimeout(timeoutID)
```

### Parameter

- `timeoutID`
  - : Die Kennung des Timeouts, das Sie abbrechen möchten. Diese ID wurde durch den entsprechenden Aufruf von `setTimeout()` zurückgegeben.

Es ist erwähnenswert, dass der Pool von IDs, der von [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) verwendet wird, geteilt wird, was bedeutet, dass Sie theoretisch `clearTimeout()` und [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) für Beispiele.

## Anmerkungen

Das Übergeben einer ungültigen ID an `clearTimeout()` bewirkt stillschweigend nichts; es wird keine Ausnahme ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
