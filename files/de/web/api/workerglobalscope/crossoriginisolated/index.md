---
title: "WorkerGlobalScope: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob sich die Website in einem Cross-Origin-Isolationszustand befindet. Dieser Zustand mindert das Risiko von Seitenkanalangriffen und schaltet einige Fähigkeiten frei:

- Ein {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Aufruf von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) oder [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Eine Website befindet sich in einem Cross-Origin-Isolationszustand, wenn der Antwort-Header {{HTTPHeader("Cross-Origin-Opener-Policy")}} den Wert `same-origin` hat und der {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header den Wert `require-corp` oder `credentialless` hat.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const myWorker = new Worker("worker.js");

if (self.crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
