---
title: "SVGScriptElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGScriptElement/type
l10n:
  sourceCommit: be430d534758bb92cfebc261ed733aba3cbee864
---

{{APIRef("SVG")}}

Die schreibgeschützte **`type`**-Eigenschaft der [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Schnittstelle spiegelt das {{SVGAttr("type")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements wider.

## Wert

Ein String.

## Beispiele

### Zugriff auf die `type`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" type="application/javascript"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the type property
console.log(scriptElement.type); // Output: "application/javascript"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
