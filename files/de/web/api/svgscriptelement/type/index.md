---
title: "SVGScriptElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGScriptElement/type
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("SVG")}}

Die schreibgeschützte **`type`**-Eigenschaft der [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Schnittstelle spiegelt das {{SVGAttr("type")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements wider.

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
