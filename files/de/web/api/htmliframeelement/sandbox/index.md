---
title: "HTMLIFrameElement: sandbox-Eigenschaft"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
l10n:
  sourceCommit: 9a9ff6734f2ea1d27b048045a62a38acd4670baf
---

{{APIRef("HTML DOM")}}

Die **`sandbox`**-Eigenschaft (nur lesbar) des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Interface gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die zusätzliche Einschränkungen für das Verhalten des verschachtelten Inhalts angibt.

Sie spiegelt das `sandbox`-Attribut des {{HTMLElement("iframe")}}-Elements wider.

## Wert

Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList). Jedes Element muss einer der im `sandbox`-Attribut des {{HTMLElement("iframe")}}-Elements aufgeführten Token sein.

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
console.log(Array.from(el.sandbox)); // Output: ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // Output: []
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
