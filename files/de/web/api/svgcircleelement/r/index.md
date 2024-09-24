---
title: "SVGCircleElement: r Eigenschaft"
short-title: r
slug: Web/API/SVGCircleElement/r
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`r`** schreibgeschützte Eigenschaft der {{domxref("SVGCircleElement")}}-Schnittstelle spiegelt das {{SVGAttr("r")}} Attribut eines {{SVGElement("circle")}} Elements wider und definiert dadurch den Radius des Kreises.

Falls nicht angegeben, ist die Wirkung so, als ob der Wert auf `0` gesetzt wäre.

## Wert

Ein {{domxref("SVGAnimatedLength")}}, der den Radius des Kreises darstellt.

## Beispiele

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle r="50" r="50" r="50" fill="gold" id="circle" />
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

- {{domxref("SVGCircleElement.cx")}}
- {{domxref("SVGCircleElement.cy")}}
