---
title: "HTMLIFrameElement: sandbox-Eigenschaft"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
l10n:
  sourceCommit: 9a9ff6734f2ea1d27b048045a62a38acd4670baf
---

{{APIRef("HTML DOM")}}

Die **`sandbox`**-Eigenschaft der schreibgeschützten [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die zusätzliche Einschränkungen für das Verhalten des verschachtelten Inhalts angibt.

Sie spiegelt das `sandbox`-Attribut des {{HTMLElement("iframe")}}-Elements wider.

## Wert

Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList). Jedes Element muss einer der Token sein, die im `sandbox`-Attribut des {{HTMLElement("iframe")}}-Elements aufgeführt sind.

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
