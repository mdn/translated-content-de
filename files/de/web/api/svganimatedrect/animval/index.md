---
title: "SVGAnimatedRect: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedRect/animVal
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`animVal`** der [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Schnittstelle stellt den aktuellen animierten Wert des `viewBox`-Attributs eines SVG-Elements als schreibgeschütztes [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt dar. Sie ermöglicht den Zugriff auf den dynamischen Zustand des Rechtecks, einschließlich der Werte für `x`, `y`, `width` und `height` während der Animation.

Wenn keine Animation angewendet wird, spiegelt die `animVal`-Eigenschaft den Wert des {{SVGAttr("viewBox")}}-Attributs des SVG-Elements wider und wird mit [`SVGAnimatedRect.baseVal`](/de/docs/Web/API/SVGAnimatedRect/baseVal) identisch sein.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt, das den animierten Wert des `viewBox`-Attributs darstellt.

## Beispiele

```html
<svg viewBox="0 0 200 100" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.getElementById("mySvg");
const animatedRect = svgElement.viewBox.animVal;

// Log the animated value (assuming an animation is applied)
console.log(animatedRect.x);
console.log(animatedRect.y);
console.log(animatedRect.width);
console.log(animatedRect.height);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("viewBox")}}
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
