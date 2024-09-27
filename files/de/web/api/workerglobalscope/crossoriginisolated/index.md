---
title: "WorkerGlobalScope: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob sich die Website in einem status der Cross-Origin-Isolation befindet. Dieser Status reduziert das Risiko von Seitenkanalangriffen und ermöglicht einige zusätzliche Fähigkeiten:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Anruf von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) oder [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet eine bessere Genauigkeit.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Eine Website befindet sich in einem Zustand der Cross-Origin-Isolation, wenn der Antwort-Header {{HTTPHeader("Cross-Origin-Opener-Policy")}} den Wert `same-origin` und der {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header den Wert `require-corp` oder `credentialless` hat.

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
