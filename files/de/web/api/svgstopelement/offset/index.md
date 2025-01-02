---
title: "SVGStopElement: offset-Eigenschaft"
short-title: offset
slug: Web/API/SVGStopElement/offset
l10n:
  sourceCommit: 045ca96d9e166aa44e0f22ad76a270ca8cdae209
---

{{APIRef("SVG")}}

Die **`offset`**-Eigenschaft der [`SVGStopElement`](/de/docs/Web/API/SVGStopElement)-Schnittstelle gibt das {{SVGAttr("offset")}}-Attribut des angegebenen {{SVGElement("stop")}}-Elements wieder. Diese Eigenschaft ist nur lesbar.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `offset`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)" />
</svg>
```

```js
const stopElement = document.querySelector("stop");

// Access the offset property
console.log(stopElement.offset.baseVal); // Output: 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
