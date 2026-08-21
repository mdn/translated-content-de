---
title: "Window: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob das Dokument Cross-Origin isoliert ist.

Ein Cross-Origin isoliertes Dokument teilt seine {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} nur mit gleich originären Dokumenten in Popups und Navigationen sowie Ressourcen (sowohl gleich als auch Cross-Origin), für die das Dokument die Nutzung über [CORS](/de/docs/Web/HTTP/Guides/CORS) (und [COEP](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) für `<iframe>`) ausgewählt hat. Die Beziehung zwischen einem Cross-Origin-Opener des Dokuments oder beliebigen Cross-Origin-Popups, die es öffnet, wird getrennt. Das Dokument kann auch in einem separaten Betriebssystemprozess zusammen mit anderen Dokumenten gehostet werden, mit denen es durch Arbeiten im gemeinsam genutzten Speicher kommunizieren kann. Dies verringert das Risiko von Side-Channel-Angriffen und Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Cross-Origin isolierte Dokumente arbeiten mit weniger Einschränkungen bei der Verwendung der folgenden APIs:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) oder [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet eine bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Ein Dokument wird Cross-Origin isoliert, wenn es mit einer HTTP-Antwort zurückgegeben wird, die die Header enthält:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header mit der Direktive `same-origin`.
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header mit der Direktive `require-corp` oder `credentialless`.

Der Zugriff auf die APIs muss auch durch die `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}} erlaubt werden.
Andernfalls wird die `crossOriginIsolated`-Eigenschaft `false` zurückgeben, und das Dokument wird nicht in der Lage sein, die oben aufgeführten APIs mit reduzierten Einschränkungen zu verwenden.

## Wert

Ein boolescher Wert.

## Beispiele

### Cross-Origin-Isolierung eines Dokuments

Um ein Dokument Cross-Origin zu isolieren:

- Setzen Sie den {{HTTPHeader("Cross-Origin-Opener-Policy")}} HTTP-Header auf `same-origin`:

  ```http
  Cross-Origin-Opener-Policy: same-origin
  ```

- Setzen Sie den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Header auf `require-corp` oder `credentialless`:

  ```http
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Embedder-Policy: credentialless
  ```

- Die {{HTTPHeader("Permissions-Policy/cross-origin-isolated","cross-origin-isolated")}}-Direktive des {{HTTPHeader("Permissions-Policy")}}-Headers darf den Zugriff auf die Funktion nicht blockieren. Beachten Sie, dass die Standard-Erlaubnisliste der Direktive `self` ist, sodass die Berechtigung standardmäßig Cross-Origin isolierten Dokumenten erteilt wird.

### Prüfen, ob das Dokument Cross-Origin isoliert ist

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

## Siehe auch

- [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
