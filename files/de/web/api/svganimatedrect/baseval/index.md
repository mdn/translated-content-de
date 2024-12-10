---
title: "SVGAnimatedRect: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedRect/baseVal
l10n:
  sourceCommit: c6f8bee9aeb156e7d2a415007f7353487b0ccef4
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Schnittstelle, die schreibgeschützt ist, repräsentiert den aktuellen, nicht animierten Wert des `viewBox`-Attributs eines SVG-Elements.

Diese Eigenschaft spiegelt den Wert des {{SVGAttr("viewBox")}}-Attributs des SVG-Elements als schreibgeschütztes [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt wider. Sie bietet Zugriff auf das statische Rechteck, das durch das `viewBox`-Attribut definiert ist, einschließlich der `x`-, `y`-, `width`- und `height`-Werte.

## Wert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, das den aktuellen, nicht animierten Wert des `viewBox`-Attributs repräsentiert.

## Beispiele

```html
<svg viewBox="0 0 200 100" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.getElementById("mySvg");
const animatedRect = svgElement.viewBox.baseVal;

// Access the non-animated base value
console.log(animatedRect.x); // 0
console.log(animatedRect.y); // 0
console.log(animatedRect.width); // 200
console.log(animatedRect.height); // 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("viewBox")}}
- [`DOMRect`](/de/docs/Web/API/DOMRect)
