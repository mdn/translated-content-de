---
title: "HTMLIFrameElement: sandbox-Eigenschaft"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
l10n:
  sourceCommit: 9a9ff6734f2ea1d27b048045a62a38acd4670baf
---

{{APIRef("HTML DOM")}}

Die **`sandbox`** Schultereigenschaft der {{domxref("HTMLIFrameElement")}} Schnittstelle gibt eine {{domxref("DOMTokenList")}} zurück, die zusätzliche Einschränkungen für das Verhalten des eingebetteten Inhalts anzeigt.

Sie spiegelt das `sandbox`-Attribut des {{HTMLElement("iframe")}} Elements wider.

## Wert

Ein {{domxref("DOMTokenList")}}. Jedes Element muss einer der Tokens sein, die im `sandbox`-Attribut des {{HTMLElement("iframe")}} Elements aufgelistet sind.

## Beispiele

```html
<iframe
  id="el"
  title="example"
  src="https://example.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // Ausgabe: ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // Ausgabe: []
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
