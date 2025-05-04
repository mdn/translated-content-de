---
title: "SVGTextPathElement: spacing-Eigenschaft"
short-title: spacing
slug: Web/API/SVGTextPathElement/spacing
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die schreibgeschützte **`spacing`**-Eigenschaft des [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)-Interfaces spiegelt das {{SVGAttr("spacing")}}-Attribut des gegebenen {{SVGElement("textPath")}}-Elements wider. Sie nimmt einen der auf diesem Interface definierten [`TEXTPATH_SPACINGTYPE_*` Konstanten](/de/docs/Web/API/SVGTextPathElement#static_properties) an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf die `spacing`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" spacing="auto">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the spacing property
console.log(textPath.spacing.baseVal); // Output: 1 (TEXTPATH_SPACINGTYPE_AUTO)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method)
- [`SVGTextPathElement` spacing types](/de/docs/Web/API/SVGTextPathElement#static_properties)
