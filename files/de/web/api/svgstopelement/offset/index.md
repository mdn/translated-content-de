---
title: "SVGStopElement: offset-Eigenschaft"
short-title: offset
slug: Web/API/SVGStopElement/offset
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("SVG")}}

Die **`offset`** schreibgeschützte Eigenschaft der [`SVGStopElement`](/de/docs/Web/API/SVGStopElement)-Schnittstelle spiegelt das {{SVGAttr("offset")}}-Attribut des angegebenen {{SVGElement("stop")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `offset`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="yellow" stop-opacity="1" />
      <stop offset="100%" stop-color="red" stop-opacity="1" />
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
