---
title: "SVGScriptElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGScriptElement/type
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

{{APIRef("SVG")}}

Die schreibgeschützte **`type`**-Eigenschaft des [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Interfaces spiegelt das {{SVGAttr("type")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements wider.

## Wert

Ein String.

## Beispiele

### Zugriff auf die `type`-Eigenschaft

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
