---
title: "Window: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("DOM")}}

Die schreibgeschützte **`crossOriginIsolated`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob das Dokument plattformübergreifend isoliert ist.

Ein plattformübergreifend isoliertes Dokument teilt seine {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} nur mit gleichstammigen Dokumenten in Popups und Navigationen sowie mit Ressourcen (sowohl gleichstammig als auch plattformübergreifend), die das Dokument mittels [CORS](/de/docs/Web/HTTP/Leitfaden/CORS) (und [COEP](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) für `<iframe>`) eingebunden hat. Die Beziehung zwischen einem plattformübergreifenden Opener des Dokuments oder jeglichen plattformübergreifenden Popups, die es öffnet, wird gekappt. Das Dokument kann auch in einem separaten Betriebssystemprozess neben anderen Dokumenten gehostet werden, mit denen es kommunizieren kann, indem es auf gemeinsamen Speicher zugreift. Dies mindert das Risiko von Seitenkanalangriffen und plattformübergreifenden Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bekannt sind.

Plattformübergreifend isolierte Dokumente arbeiten mit weniger Einschränkungen, wenn die folgenden APIs verwendet werden:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) oder einen [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Aufruf gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet eine höhere Genauigkeit.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Ein Dokument wird plattformübergreifend isoliert, wenn es mit einer HTTP-Antwort zurückgegeben wird, die die Header enthält:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header mit der Direktive `same-origin`.
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header mit der Direktive `require-corp` oder `credentialless`.

Der Zugriff auf die APIs muss auch durch die `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}} erlaubt sein. Andernfalls gibt die `crossOriginIsolated`-Eigenschaft `false` zurück, und das Dokument kann die oben aufgeführten APIs nicht mit eingeschränkten Zugriff nutzen.

## Wert

Ein boolescher Wert.

## Beispiele

### Dokument plattformübergreifend isolieren

Um ein Dokument plattformübergreifend zu isolieren:

- Setzen Sie den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-HTTP-Header auf `same-origin`:

  ```http
  Cross-Origin-Opener-Policy: same-origin
  ```

- Setzen Sie den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-HTTP-Header auf `require-corp` oder `credentialless`:

  ```http
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Embedder-Policy: credentialless
  ```

- Die Direktive {{HTTPHeader("Permissions-Policy/cross-origin-isolated","cross-origin-isolated")}} des {{HTTPHeader("Permissions-Policy")}}-Headers darf den Zugriff auf die Funktion nicht blockieren. Beachten Sie, dass die standardmäßige Erlaubnisliste der Direktive `self` ist, sodass die Berechtigung standardmäßig plattformübergreifend isolierten Dokumenten gewährt wird.

### Überprüfen, ob das Dokument plattformübergreifend isoliert ist

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
