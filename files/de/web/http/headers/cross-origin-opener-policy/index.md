---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP)-Antwort-Header ermöglicht es Ihnen sicherzustellen, dass ein oberstes Dokument keine Browsing-Kontextgruppe mit Dokumenten aus anderen Ursprüngen teilt.

COOP isoliert Ihr Dokument pro Prozess, und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup-Fenster öffnen, was eine Reihe von Ursprungsübergreifenden Angriffen namens [XS-Leaks](https://github.com/xsleaks/xsleaks) verhindert.

Wenn ein Dokument aus einem anderen Ursprung mit COOP in einem neuen Fenster geöffnet wird, wird das öffnende Dokument keine Referenz darauf haben, und die [`window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft des neuen Fensters wird `null` sein. Dies ermöglicht Ihnen mehr Kontrolle über Fensterreferenzen als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), das nur ausgehende Navigationsvorgänge betrifft.

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
  - : Dies ist der Standardwert. Erlaubt es dem Dokument, der Browsing-Kontextgruppe seines Öffnenden hinzuzufügen, es sei denn, der Öffner selbst hat einen COOP von `same-origin` oder `same-origin-allow-popups`.
- `same-origin-allow-popups`
  - : Behält Referenzen zu neu geöffneten Fenstern oder Tabs bei, die entweder kein COOP setzen oder durch Setzen eines COOP von `unsafe-none` die Isolation ablehnen.
- `same-origin`
  - : Isoliert den Browsing-Kontext exklusiv auf Dokumente desselben Ursprungs. Dokumente aus anderen Ursprüngen werden nicht im selben Browsing-Kontext geladen.

## Beispiele

### Bestimmte Funktionen hängen von der Isolation über Ursprung hinweg ab

Bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte oder {{domxref("Performance.now()")}} mit ungedrosselten Timern sind nur verfügbar, wenn Ihr Dokument einen COOP-Header mit dem Wert `same-origin` gesetzt hat.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Siehe auch den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header, den Sie ebenfalls auf `require-corp` oder `credentialless` setzen müssen.

Um zu überprüfen, ob die Isolation über Ursprünge hinweg erfolgreich war, können Sie gegen die {{domxref("Window.crossOriginIsolated")}}-Eigenschaft oder die {{domxref("WorkerGlobalScope.crossOriginIsolated")}}-Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar sind:

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
