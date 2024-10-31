---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Ihnen sicherzustellen, dass ein Dokument auf oberster Ebene keine Browsing-Kontextgruppe mit Dokumenten von anderer Herkunft teilt.

COOP wird Ihr Dokument in einem eigenen Prozess isolieren, und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es beispielsweise in einem Popup öffnen würden, wodurch eine Reihe von Angriffen über Domänengrenzen, genannt [XS-Leaks](https://github.com/xsleaks/xsleaks), verhindert wird.

Wenn ein Dokument mit COOP von einer anderen Herkunft in einem neuen Fenster geöffnet wird, hat das öffnende Dokument keine Referenz darauf, und die [`window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft des neuen Fensters wird `null` sein. Dies ermöglicht es Ihnen, mehr Kontrolle über Referenzen zu einem Fenster zu haben als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), das nur ausgehende Navigationen betrifft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
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
  - : Dies ist der Standardwert. Ermöglicht es dem Dokument, zur Browsing-Kontextgruppe seines Öffnenden hinzugefügt zu werden, es sei denn, das Öffnende selbst hat einen COOP von `same-origin` oder `same-origin-allow-popups`.
- `same-origin-allow-popups`
  - : Beibehaltung von Referenzen zu neu geöffneten Fenstern oder Tabs, die entweder keinen COOP setzen oder sich durch Setzen eines COOP von `unsafe-none` aus der Isolation ausklammern.
- `same-origin`
  - : Isoliert den Browsing-Kontext ausschließlich auf Dokumente derselben Herkunft. Dokumente von anderer Herkunft werden nicht im gleichen Browsing-Kontext geladen.

## Beispiele

### Bestimmte Funktionen erfordern eine Isolation über Domänengrenzen hinweg

Bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern sind nur verfügbar, wenn Ihr Dokument einen COOP-Header mit dem Wert `same-origin` setzt.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Siehe auch den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header, den Sie ebenfalls auf `require-corp` oder `credentialless` setzen müssen.

Um zu überprüfen, ob die Isolation über Domänengrenzen erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)-Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)-Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
