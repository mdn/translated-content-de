---
title: "SVGTextPathElement: method-Eigenschaft"
short-title: method
slug: Web/API/SVGTextPathElement/method
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`method`** schreibgeschützte Eigenschaft des [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)-Interfaces spiegelt das {{SVGAttr("method")}}-Attribut des angegebenen {{SVGElement("textPath")}}-Elements wider. Es nimmt einen der auf diesem Interface definierten [`TEXTPATH_METHODTYPE_*` Konstanten](/de/docs/Web/API/SVGTextPathElement#static_properties) an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf die `method`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" method="align">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the method property
console.log(textPath.method.baseVal); // Output: 1 (TEXTPATH_METHODTYPE_ALIGN)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.spacing`](/de/docs/Web/API/SVGTextPathElement/spacing)
- [`SVGTextPathElement` method types](/de/docs/Web/API/SVGTextPathElement#static_properties)
