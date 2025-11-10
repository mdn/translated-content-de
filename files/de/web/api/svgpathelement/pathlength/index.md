---
title: "SVGPathElement: pathLength-Eigenschaft"
short-title: pathLength
slug: Web/API/SVGPathElement/pathLength
l10n:
  sourceCommit: ea24a70e5c5e3b474d683e9b0dcb8807aaba82f3
---

{{APIRef("SVG")}}

Die **`pathLength`**-Schreibgeschützte Eigenschaft des [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Interfaces spiegelt das {{SVGAttr("pathLength")}}-Attribut des gegebenen {{SVGelement("path")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

## Beispiele

### Zugriff auf die `pathLength`-Eigenschaft

```html
<svg width="200" height="100">
  <path id="myPath" d="M 0,30 h100" pathLength="50" />
</svg>
```

```js
const pathElement = document.getElementById("myPath");

// Access the pathLength property
const animatedNumber = pathElement.pathLength;

// The base value of the pathLength attribute
console.log(animatedNumber.baseVal); // Output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGGeometryElement.pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength)
- {{SVGAttr("pathLength")}}
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
