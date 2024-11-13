---
title: "Window: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 070ea0f4ceb3264e21253f63647e12a09bbdfd60
---

{{APIRef("DOM")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das Dokument cross-origin isoliert ist.

Ein cross-origin isoliertes Dokument teilt seine {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} nur mit gleich-origin Dokumenten in Pop-ups und Navigationen sowie mit Ressourcen (sowohl gleich-origin als auch cross-origin), auf die das Dokument über [CORS](/de/docs/Web/HTTP/CORS) (und [COEP](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) für `<iframe>`) zuzugreifen gewählt hat. Die Beziehung zwischen einem cross-origin Öffner des Dokuments oder jeglichen cross-origin Pop-ups, die es öffnet, wird getrennt. Das Dokument kann auch in einem separaten OS-Prozess neben anderen Dokumenten gehostet werden, mit denen es kommunizieren kann, indem es auf gemeinsamen Speicher zugreift. Dies mindert das Risiko von Seitenkanalangriffen und Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Cross-origin isolierte Dokumente arbeiten mit weniger Einschränkungen bei der Verwendung der folgenden APIs:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) oder einen [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Aufruf gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet eine bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Ein Dokument wird cross-origin isoliert sein, wenn es mit einer HTTP-Antwort zurückgegeben wird, die die folgenden Header beinhaltet:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header mit der Direktive `same-origin`.
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header mit der Direktive `require-corp` oder `credentialless`.

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
