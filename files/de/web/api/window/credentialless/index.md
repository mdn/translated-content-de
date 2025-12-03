---
title: "Window: credentialless-Eigenschaft"
short-title: credentialless
slug: Web/API/Window/credentialless
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{APIRef}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`window.credentialless`** gibt ein boolean Wert zurück, der anzeigt, ob das aktuelle Dokument in einem credentialless {{htmlelement("iframe")}} geladen wurde, was bedeutet, dass es in einem neuen, temporären Kontext geladen wird.

Dieser Kontext hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Er verwendet einen neuen Kontext, der lokal zur obersten Dokumentenlebensdauer ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für eine ausführlichere Erklärung.

## Wert

Ein boolean. Ein Wert von `true` gibt an, dass das Dokument in einem credentialless `<iframe>` geladen wurde; `false` zeigt an, dass es nicht war.

## Beispiele

Sie können ein credentialless `<iframe>` folgendermaßen spezifizieren:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

In unterstützenden Browsern würde das Dokument, wenn es im `<iframe>` geladen ist und die folgende Zeile ausgeführt wird, `true` zurückgeben:

```js
console.log(window.credentialless);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
