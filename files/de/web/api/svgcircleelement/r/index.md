---
title: "SVGCircleElement: r-Eigenschaft"
short-title: r
slug: Web/API/SVGCircleElement/r
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("SVG")}}

Die **`r`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGCircleElement`](/de/docs/Web/API/SVGCircleElement) spiegelt das {{SVGAttr("r")}}-Attribut eines {{SVGElement("circle")}}-Elements wider und definiert dadurch den Radius des Kreises.

Wenn nicht angegeben, wird der Effekt so behandelt, als wäre der Wert auf `0` gesetzt.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der den Radius des Kreises darstellt.

## Beispiele

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle r="50" fill="gold" id="circle" />
</svg>
```

### JavaScript

```js
const circle = document.getElementById("circle");
console.log(circle.r);
```

{{EmbedLiveSample("Examples", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGCircleElement.cx`](/de/docs/Web/API/SVGCircleElement/cx)
- [`SVGCircleElement.cy`](/de/docs/Web/API/SVGCircleElement/cy)
