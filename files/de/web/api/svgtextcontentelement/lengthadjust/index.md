---
title: "SVGTextContentElement: lengthAdjust-Eigenschaft"
short-title: lengthAdjust
slug: Web/API/SVGTextContentElement/lengthAdjust
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die **`lengthAdjust`** schreibgeschützte Eigenschaft des [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Interfaces spiegelt das {{SVGAttr("lengthAdjust")}}-Attribut des gegebenen Elements wider. Sie nimmt einen der in diesem Interface definierten `LENGTHADJUST_*` Konstanten an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration).

## Beispiele

### Zugriff auf die `lengthAdjust`-Eigenschaft

```html
<svg width="200" height="100">
  <text id="myText" x="10" y="50" textLength="100" lengthAdjust="spacing">
    Hello, SVG!
  </text>
</svg>
```

```js
const textElement = document.getElementById("myText");

// Access the `lengthAdjust` property
const lengthAdjust = textElement.lengthAdjust;

// Log the base value of the `lengthAdjust` attribute
console.log(lengthAdjust.baseVal); // Output: 1 (e.g. LENGTHADJUST_SPACING)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("lengthAdjust")}}
- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
