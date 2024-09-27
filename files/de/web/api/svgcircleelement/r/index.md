---
title: "SVGCircleElement: r Eigenschaft"
short-title: r
slug: Web/API/SVGCircleElement/r
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`r`** des [`SVGCircleElement`](/de/docs/Web/API/SVGCircleElement)-Interfaces spiegelt das {{SVGAttr("r")}}-Attribut eines {{SVGElement("circle")}}-Elements wider und definiert damit den Radius des Kreises.

Falls nicht angegeben, wirkt es sich so aus, als ob der Wert auf `0` gesetzt ist.

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

- [`SVGCircleElement.cx`](/de/docs/Web/API/SVGCircleElement/cx)
- [`SVGCircleElement.cy`](/de/docs/Web/API/SVGCircleElement/cy)
