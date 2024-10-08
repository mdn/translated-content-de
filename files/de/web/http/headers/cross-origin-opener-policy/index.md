---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) Antwort-Header ermöglicht es Ihnen sicherzustellen, dass ein Top-Level-Dokument keine Browsing-Kontextgruppe mit Cross-Origin-Dokumenten teilt.

COOP wird Ihr Dokument prozessisolieren und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffnen, wodurch eine Reihe von Cross-Origin-Angriffen namens [XS-Leaks](https://github.com/xsleaks/xsleaks) verhindert wird.

Wenn ein Cross-Origin-Dokument mit COOP in einem neuen Fenster geöffnet wird, hat das öffnende Dokument keinen Verweis darauf, und die [`window.opener`](/de/docs/Web/API/Window/opener) Eigenschaft des neuen Fensters wird `null` sein. Dies ermöglicht Ihnen, mehr Kontrolle über Verweise auf ein Fenster zu haben als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), das nur ausgehende Navigierungen betrifft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Dies ist der Standardwert. Erlaubt es, das Dokument in die Browsing-Kontextgruppe seines Öffners hinzuzufügen, es sei denn, der Öffner selbst hat ein COOP von `same-origin` oder `same-origin-allow-popups`.
- `same-origin-allow-popups`
  - : Behält Verweise auf neu geöffnete Fenster oder Tabs bei, die entweder kein COOP setzen oder sich durch Setzen eines COOP von `unsafe-none` aus der Isolation zurückziehen.
- `same-origin`
  - : Isoliert den Browsing-Kontext ausschließlich auf gleichherkunftliche Dokumente. Cross-Origin-Dokumente werden nicht im selben Browsing-Kontext geladen.

## Beispiele

### Bestimmte Funktionen hängen von Cross-Origin Isolation ab

Bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}} Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern sind nur verfügbar, wenn Ihr Dokument einen COOP-Header mit dem Wert `same-origin` gesetzt hat.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Siehe auch den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header, den Sie ebenfalls auf `require-corp` oder `credentialless` setzen müssen.

Um zu überprüfen, ob die Cross-Origin Isolation erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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
