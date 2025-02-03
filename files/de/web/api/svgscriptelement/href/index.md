---
title: "SVGScriptElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGScriptElement/href
l10n:
  sourceCommit: be430d534758bb92cfebc261ed733aba3cbee864
---

{{APIRef("SVG")}}

Die schreibgeschützte **`href`**-Eigenschaft des [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Interfaces spiegelt das {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}}-{{deprecated_inline}}-Attribut des gegebenen {{SVGElement("script")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the href property
console.log(scriptElement.href.baseVal); // Output: "script.js"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
