---
title: "Fenster: `crossOriginIsolated` Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`crossOriginIsolated`** des [`Window`](/de/docs/Web/API/Window) Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob sich die Website in einem Zustand der Cross-Origin-Isolation befindet. Dieser Zustand verringert das Risiko von Seitenkanalangriffen und ermöglicht einige Fähigkeiten:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) oder [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet eine bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann genutzt werden.

Eine Website befindet sich in einem Zustand der Cross-Origin-Isolation, wenn der Antwortheader {{HTTPHeader("Cross-Origin-Opener-Policy")}} den Wert `same-origin` und der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header den Wert `require-corp` oder `credentialless` hat.

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
