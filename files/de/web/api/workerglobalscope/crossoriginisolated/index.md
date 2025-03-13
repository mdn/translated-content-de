---
title: "WorkerGlobalScope: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob das Dokument cross-origin isoliert ist.

Ein cross-origin isoliertes Dokument teilt seine {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} nur mit gleichherkunftlichen Dokumenten in Popups und Navigations sowie Ressourcen (sowohl gleichherkunftliche als auch cross-origin), in deren Nutzung das Dokument via [CORS](/de/docs/Web/HTTP/Guides/CORS) (und [COEP](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) für `<iframe>`) eingewilligt hat.
Die Beziehung zwischen einem cross-origin Öffner des Dokuments oder jeglichen cross-origin Popups, die es öffnet, wird aufgehoben.
Das Dokument kann auch in einem separaten OS-Prozess zusammen mit anderen Dokumenten, mit denen es durch den Betrieb auf gemeinsamem Speicher kommunizieren kann, gehostet werden.
Dies mindert das Risiko von Seitenkanalangriffen und cross-origin Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bekannt sind.

Cross-origin isolierte Dokumente arbeiten mit weniger Einschränkungen bei der Nutzung folgender APIs:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Aufruf von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) oder [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Ein Dokument wird cross-origin isoliert sein, wenn es mit einer HTTP-Antwort geliefert wird, die die folgenden Header enthält:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} Header mit der Direktive `same-origin`.
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header mit der Direktive `require-corp` oder `credentialless`.

Zugriff auf die APIs muss auch durch die `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}} erlaubt werden.
Andernfalls wird die `crossOriginIsolated`-Eigenschaft `false` zurückgeben, und das Dokument wird nicht in der Lage sein, die oben aufgeführten APIs mit reduzierten Einschränkungen zu nutzen.

## Wert

Ein boolescher Wert.

## Beispiele

### Cross-origin Isolierung eines Dokuments

Um ein Dokument cross-origin zu isolieren:

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
  Beachten Sie, dass die Standard-Zulassungsliste der Direktive `self` ist, sodass die Erlaubnis standardmäßig für cross-origin isolierte Dokumente erteilt wird.

### Überprüfen, ob das Dokument cross-origin isoliert ist

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
