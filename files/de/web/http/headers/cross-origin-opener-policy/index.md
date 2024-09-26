---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) Antwort-Header ermöglicht es Ihnen sicherzustellen, dass ein Dokument auf oberster Ebene keine Browserkontextgruppe mit Cross-Origin-Dokumenten teilt.

COOP wird Ihr Dokument prozess-isolieren, und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffnen würden. Dadurch wird eine Reihe von Cross-Origin-Angriffen, genannt [XS-Leaks](https://github.com/xsleaks/xsleaks), verhindert.

Wenn ein Cross-Origin-Dokument mit COOP in einem neuen Fenster geöffnet wird, hat das öffnende Dokument keine Referenz darauf, und die [`window.opener`](/de/docs/Web/API/Window/opener) Eigenschaft des neuen Fensters wird `null` sein. Dies ermöglicht Ihnen mehr Kontrolle über Fensterreferenzen als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), was nur ausgehende Navigationen beeinflusst.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Dies ist der Standardwert. Erlaubt es dem Dokument, zur Browserkontextgruppe seines Öffners hinzugefügt zu werden, es sei denn, der Öffner selbst hat ein COOP von `same-origin` oder `same-origin-allow-popups`.
- `same-origin-allow-popups`
  - : Behält Referenzen auf neu geöffnete Fenster oder Tabs bei, die entweder kein COOP setzen oder durch Setzen eines COOP von `unsafe-none` auf Isolation verzichten.
- `same-origin`
  - : Isoliert den Browserkontext ausschließlich auf Dokumente gleicher Herkunft. Cross-Origin-Dokumente werden nicht im selben Browserkontext geladen.

## Beispiele

### Bestimmte Funktionen hängen von Cross-Origin-Isolation ab

Bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}} Objekte oder {{domxref("Performance.now()")}} mit ungedrosselten Timern sind nur verfügbar, wenn Ihr Dokument einen COOP-Header mit dem Wert `same-origin` gesetzt hat.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Siehe auch den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header, den Sie ebenfalls auf `require-corp` oder `credentialless` setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die {{domxref("Window.crossOriginIsolated")}} Eigenschaft oder die {{domxref("WorkerGlobalScope.crossOriginIsolated")}} Eigenschaft für Fenster- und Worker-Kontexte testen:

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Embedder-Policy")}}
