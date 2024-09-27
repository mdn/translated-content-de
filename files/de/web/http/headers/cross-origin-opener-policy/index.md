---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP-**`Cross-Origin-Opener-Policy`** (COOP) Antwort-Header ermöglicht es Ihnen sicherzustellen, dass ein oberstes Dokument keine Browserverbindung mit Cross-Origin-Dokumenten teilt.

COOP wird Ihr Dokument prozess-isolieren und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffnen würden, und verhindert so eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://github.com/xsleaks/xsleaks) bezeichnet werden.

Wenn ein Cross-Origin-Dokument mit COOP in einem neuen Fenster geöffnet wird, hat das öffnende Dokument keine Referenz darauf, und die [`window.opener`](/de/docs/Web/API/Window/opener) Eigenschaft des neuen Fensters wird `null` sein. Dies ermöglicht Ihnen mehr Kontrolle über die Referenzen eines Fensters als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), welches nur ausgehende Navigationsvorgänge betrifft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
```

### Direktiven

- `unsafe-none`
  - : Dies ist der Standardwert. Ermöglicht es dem Dokument, zur Browsing-Kontext-Gruppe seines Öffners hinzugefügt zu werden, es sei denn, der Öffner selbst hat eine COOP von `same-origin` oder `same-origin-allow-popups`.
- `same-origin-allow-popups`
  - : Behält Referenzen zu neu geöffneten Fenstern oder Tabs, die entweder kein COOP setzen oder die Isolation durch Setzen eines COOP von `unsafe-none` ablehnen.
- `same-origin`
  - : Isoliert den Browsing-Kontext ausschließlich auf gleiche Ursprungsdokumente. Cross-Origin-Dokumente werden nicht im gleichen Browsing-Kontext geladen.

## Beispiele

### Bestimmte Funktionen hängen von der Cross-Origin Isolation ab

Bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}} Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern sind nur verfügbar, wenn Ihr Dokument einen COOP-Header mit dem Wert `same-origin` gesetzt hat.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Siehe auch den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header, den Sie ebenfalls auf `require-corp` oder `credentialless` setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaft, die für Fenster- und Worker-Kontexte verfügbar ist, testen:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
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

- {{httpheader("Cross-Origin-Embedder-Policy")}}
