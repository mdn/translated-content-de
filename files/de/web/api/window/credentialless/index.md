---
title: "Fenster: credentialless-Eigenschaft"
short-title: credentialless
slug: Web/API/Window/credentialless
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{APIRef}}{{SeeCompatTable}}

Die **`window.credentialless`** Schreibgeschützt-Eigenschaft gibt einen Boolean zurück, der anzeigt, ob das aktuelle Dokument innerhalb eines credentialless {{htmlelement("iframe")}} geladen wurde, was bedeutet, dass es in einem neuen, flüchtigen Kontext geladen ist.

Dieser Kontext hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Er verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun.

Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine tiefere Erklärung.

## Wert

Ein Boolean. Ein Wert von `true` zeigt an, dass das Dokument innerhalb eines credentialless `<iframe>` geladen wurde; `false` zeigt an, dass es nicht der Fall war.

## Beispiele

Sie können ein credentialless `<iframe>` folgendermaßen spezifizieren:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Wikipedia-Seite zu Spectre-Sicherheitslücke"
  width="960"
  height="600"
  credentialless></iframe>
```

In unterstützenden Browsern würde die folgende Zeile, die im `<iframe>` geladene Dokument läuft, `true` zurückgeben:

```js
console.log(window.credentialless);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
