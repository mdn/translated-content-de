---
title: "SVGAnimatedRect: animVal Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedRect/animVal
l10n:
  sourceCommit: c6f8bee9aeb156e7d2a415007f7353487b0ccef4
---

{{APIRef("SVG")}}

Die **`animVal`** schreibgeschützte Eigenschaft der [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Schnittstelle repräsentiert den aktuellen animierten Wert des `viewBox`-Attributs eines SVG-Elements als schreibgeschütztes [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt. Sie bietet Zugriff auf den dynamischen Zustand des Rechtecks, einschließlich der `x`, `y`, `width` und `height` Werte während der Animation.

Falls keine Animation angewendet wird, spiegelt die `animVal`-Eigenschaft den Wert des {{SVGAttr("viewBox")}}-Attributs des SVG-Elements wider und wird identisch mit [`SVGAnimatedRect.baseVal`](/de/docs/Web/API/SVGAnimatedRect/baseVal) sein.

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
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("viewBox")}}
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
