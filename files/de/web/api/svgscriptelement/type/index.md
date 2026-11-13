---
title: "SVGScriptElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGScriptElement/type
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("SVG")}}

Die **`type`**-Eigenschaft der Schnittstelle [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) spiegelt das Attribut {{SVGAttr("type")}} des jeweiligen {{SVGElement("script")}}-Elements wider.

## Wert

Ein String.

## Beispiele

### Auf die `type`-Eigenschaft zugreifen

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" type="text/javascript"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the type property
console.log(scriptElement.type); // Output: "text/javascript"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
