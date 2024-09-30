---
title: "Window: credentialless Eigenschaft"
short-title: credentialless
slug: Web/API/Window/credentialless
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{APIRef}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`window.credentialless`** gibt einen booleschen Wert zurück, der anzeigt, ob das aktuelle Dokument innerhalb eines 'credentialless' {{htmlelement("iframe")}} geladen wurde, was bedeutet, dass es in einem neuen, temporären Kontext geladen ist.

Dieser Kontext hat keinen Zugriff auf das Netzwerk, Cookies und gespeicherte Daten, die mit seinem Ursprung verbunden sind. Er verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit festgelegtem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine tiefere Erklärung.

## Wert

Ein boolescher Wert. Ein Wert von `true` zeigt an, dass das Dokument innerhalb eines 'credentialless' `<iframe>` geladen wurde; `false` zeigt an, dass es nicht so geladen wurde.

## Beispiele

Sie können ein 'credentialless' `<iframe>` wie folgt angeben:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

In unterstützten Browsern würde, wenn das im `<iframe>` geladene Dokument die folgende Zeile ausführt, `true` zurückgegeben:

```js
console.log(window.credentialless);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
