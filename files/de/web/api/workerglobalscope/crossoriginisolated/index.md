---
title: "WorkerGlobalScope: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt einen boolean-Wert zurück, der angibt, ob das Dokument herkunftsisoliert ist.

Ein herkunftsisoliertes Dokument teilt seine {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} nur mit gleichherkunftlichen Dokumenten in Popups und Navigationen sowie mit Ressourcen (sowohl gleichherkunftlich als auch kreuzherkunftlich), für deren Nutzung das Dokument sich mittels [CORS](/de/docs/Web/HTTP/CORS) (und [COEP](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) für `<iframe>`) entschieden hat. Die Beziehung zwischen einem kreuzherkunftlichen Eröffner des Dokuments oder jeglichen kreuzherkunftlichen Popups, die es öffnet, wird getrennt. Das Dokument kann auch in einem separaten Betriebssystemprozess zusammen mit anderen Dokumenten gehostet werden, mit denen es über den gemeinsamen Speicher kommunizieren kann. Dies verringert das Risiko von Seitenkanalangriffen und kreuzherkunftlichen Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Herkunftsisolierte Dokumente arbeiten mit weniger Einschränkungen bei der Verwendung der folgenden APIs:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Aufruf von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) oder [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet eine bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Ein Dokument wird herkunftsisoliert sein, wenn es mit einer HTTP-Antwort zurückgegeben wird, die die Header enthält:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header mit der Direktive `same-origin`.
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header mit der Direktive `require-corp` oder `credentialless`.

Der Zugriff auf die APIs muss auch durch die `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}} ermöglicht werden. Andernfalls wird die `crossOriginIsolated`-Eigenschaft `false` zurückgeben, und das Dokument wird nicht in der Lage sein, die oben genannten APIs mit reduzierten Einschränkungen zu verwenden.

## Wert

Ein boolean-Wert.

## Beispiele

### Ein dokument herkunftsisolieren

Um ein Dokument herkunftsisoliert zu machen:

- Setzen Sie den {{HTTPHeader("Cross-Origin-Opener-Policy")}} HTTP-Header auf `same-origin`:

  ```http
  Cross-Origin-Opener-Policy: same-origin
  ```

- Setzen Sie den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Header auf `require-corp` oder `credentialless`:

  ```http
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Embedder-Policy: credentialless
  ```

- Die {{HTTPHeader("Permissions-Policy/cross-origin-isolated","cross-origin-isolated")}} Direktive des {{HTTPHeader("Permissions-Policy")}} Headers darf den Zugriff auf die Funktion nicht blockieren.
  Beachten Sie, dass die Standard-Zugriffsliste der Direktive `self` ist, sodass die Erlaubnis standardmäßig herkunftsisolierten Dokumenten erteilt wird.

### Überprüfen, ob das Dokument herkunftsisoliert ist

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

## Siehe auch

- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)
