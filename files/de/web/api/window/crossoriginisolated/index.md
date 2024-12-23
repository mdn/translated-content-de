---
title: "Window: crossOriginIsolated-Eigenschaft"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{APIRef("DOM")}}

Die **`crossOriginIsolated`** schreibgeschützte Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob das Dokument quellenübergreifend isoliert ist.

Ein quellenübergreifend isoliertes Dokument teilt seine {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} nur mit gleichoriginigen Dokumenten in Pop-ups und Navigationen sowie mit Ressourcen (sowohl gleichoriginig als auch quellenübergreifend), die das Dokument über [CORS](/de/docs/Web/HTTP/CORS) (und [COEP](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) für `<iframe>`) aktiviert hat.
Die Beziehung zwischen einem quellenübergreifenden Öffner des Dokuments oder jeglichen quellenübergreifenden Pop-ups, die es öffnet, wird getrennt.
Das Dokument kann auch in einem separaten Betriebssystemprozess gehostet werden, zusammen mit anderen Dokumenten, mit denen es durch den Betrieb auf gemeinsam genutztem Speicher kommunizieren kann.
Dies verringert das Risiko von Nebenkanalangriffen und quellenübergreifenden Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bekannt sind.

Quellenübergreifend isolierte Dokumente arbeiten mit weniger Einschränkungen, wenn die folgenden APIs verwendet werden:

- {{JSxRef("SharedArrayBuffer")}} kann erstellt und über einen [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)- oder einen [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Aufruf gesendet werden.
- [`Performance.now()`](/de/docs/Web/API/Performance/now) bietet bessere Präzision.
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) kann aufgerufen werden.

Ein Dokument wird quellenübergreifend isoliert, wenn es mit einer HTTP-Antwort zurückgegeben wird, die die Header enthält:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header mit der Direktive `same-origin`.
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header mit der Direktive `require-corp` oder `credentialless`.

Der Zugriff auf die APIs muss auch durch die `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}} erlaubt sein.
Andernfalls wird die `crossOriginIsolated`-Eigenschaft `false` zurückgeben, und das Dokument kann die oben aufgeführten APIs nicht mit reduzierten Einschränkungen verwenden.

## Wert

Ein boolescher Wert.

## Beispiele

### Ein Dokument quellenübergreifend isolieren

Um ein Dokument quellenübergreifend zu isolieren:

- Setzen Sie den {{HTTPHeader("Cross-Origin-Opener-Policy")}}-HTTP-Header auf `same-origin`:

  ```http
  Cross-Origin-Opener-Policy: same-origin
  ```

- Setzen Sie den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-HTTP-Header auf `require-corp` oder `credentialless`:

  ```http
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Embedder-Policy: credentialless
  ```

- Die {{HTTPHeader("Permissions-Policy/cross-origin-isolated","cross-origin-isolated")}}-Direktive des {{HTTPHeader("Permissions-Policy")}}-Headers darf den Zugriff auf die Funktion nicht blockieren.
  Beachten Sie, dass die Standard-Zulassungsliste der Direktive `self` ist, sodass die Berechtigung standardmäßig für quellenübergreifend isolierte Dokumente gewährt wird.

### Überprüfen, ob das Dokument quellenübergreifend isoliert ist

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
