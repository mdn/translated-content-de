---
title: "SVGTextContentElement: textLength-Eigenschaft"
short-title: textLength
slug: Web/API/SVGTextContentElement/textLength
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die **`textLength`**-Eigenschaft der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("textLength")}}-Attribut des gegebenen Elements widerspiegelt.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiele

### Zugriff auf die `textLength`-Eigenschaft

```html
<svg width="200" height="100">
  <text id="myText" x="10" y="50" textLength="100" lengthAdjust="spacing">
    Hello, SVG!
  </text>
</svg>
```

```js
const textElement = document.getElementById("myText");

// Access the textLength property
const animatedLength = textElement.textLength;

// The base value of the textLength attribute
console.log(animatedLength.baseVal.value); // Output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("textLength")}}
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
