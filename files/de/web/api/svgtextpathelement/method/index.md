---
title: "SVGTextPathElement: method-Eigenschaft"
short-title: method
slug: Web/API/SVGTextPathElement/method
l10n:
  sourceCommit: cb6a3d63ca47ea6efeb1d9f8f60e47375a59d541
---

{{APIRef("SVG")}}

Die **`method`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement) spiegelt das Attribut {{SVGAttr("method")}} des gegebenen {{SVGElement("textPath")}}-Elements wider. Sie nimmt einen der auf dieser Schnittstelle definierten [`TEXTPATH_METHODTYPE_*` Konstanten](/de/docs/Web/API/SVGTextPathElement#method_types) an.

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
- [`SVGTextPathElement` method types](/de/docs/Web/API/SVGTextPathElement#method_types)
