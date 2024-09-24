---
title: "Window: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("DOM")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft der {{domxref("Window")}}-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob sich die Website in einem Zustand der Cross-Origin-Isolation befindet. Dieser Zustand verringert das Risiko von Seitenkanalangriffen und ermöglicht einige Funktionen:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Aufruf von {{DOMxRef("Window.postMessage()")}} oder {{DOMxRef("MessagePort.postMessage()")}} gesendet werden.
- {{DOMxRef("Performance.now()")}} bietet eine höhere Genauigkeit.
- {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}} kann aufgerufen werden.

Eine Website befindet sich in einem Cross-Origin-Isolationszustand, wenn der Antwort-Header {{HTTPHeader("Cross-Origin-Opener-Policy")}} den Wert `same-origin` hat und der {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header den Wert `require-corp` oder `credentialless`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const myWorker = new Worker("worker.js");

if (window.crossOriginIsolated) {
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
