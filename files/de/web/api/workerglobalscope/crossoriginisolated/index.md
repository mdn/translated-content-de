---
title: "WorkerGlobalScope: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
l10n:
  sourceCommit: 070ea0f4ceb3264e21253f63647e12a09bbdfd60
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die nur lesbare **`crossOriginIsolated`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Dokument isoliert von anderen Ursprüngen ist.

Ein dokument, das isoliert von anderen Ursprüngen ist, teilt seine {{Glossary("Browsing_context", "browsing context group")}} nur mit gleichartigen Ursprungs-Dokumenten in Popups und Navigationen sowie Ressourcen (sowohl gleicher als auch unterschiedlicher Ursprünge), für die das Dokument die Nutzung über [CORS](/de/docs/Web/HTTP/CORS) (und [COEP](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) für `<iframe>`) festgelegt hat.
Die Beziehung zwischen einem Dokument und einem öffnenden Dokument eines anderen Ursprungs oder zu einem beliebigen Popup, das es öffnet, wird getrennt.
Das Dokument kann auch in einem separaten Betriebssystemprozess neben anderen Dokumenten gehostet werden, mit denen es kommunizieren kann, indem es auf gemeinsamen Speicher zugreift.
Dies mindert das Risiko von Seitenkanal- und Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Dokumente, die von anderen Ursprüngen isoliert sind, operieren mit weniger Einschränkungen, wenn folgende APIs verwendet werden:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Aufruf von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) oder [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet eine bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Ein Dokument wird isoliert von anderen Ursprüngen sein, wenn es mit einer HTTP-Antwort zurückgegeben wird, die die Header enthält:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header mit der Direktive `same-origin`
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header mit der Direktive `require-corp` oder `credentialless`

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
