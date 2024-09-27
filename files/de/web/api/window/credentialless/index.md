---
title: "Window: credentialless-Eigenschaft"
short-title: credentialless
slug: Web/API/Window/credentialless
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{APIRef}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`window.credentialless`** gibt einen Boolean zurück, der angibt, ob das aktuelle Dokument in einem credentialless {{htmlelement("iframe")}} geladen wurde, was bedeutet, dass es in einem neuen, flüchtigen Kontext geladen ist.

Dieser Kontext hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Er verwendet einen neuen Kontext, der lokal an die Lebensdauer des obersten Dokuments gebunden ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) gelockert werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun.

Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine ausführlichere Erklärung.

## Wert

Ein Boolean. Ein Wert von `true` zeigt an, dass das Dokument innerhalb eines credentialless `<iframe>` geladen wurde; `false` gibt an, dass dies nicht der Fall war.

## Beispiele

Sie können ein credentialless `<iframe>` folgendermaßen angeben:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

In unterstützenden Browsern würde bei einem im `<iframe>` geladenen Dokument die folgende Zeile `true` zurückgeben:

```js
console.log(window.credentialless);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
