---
title: "SVGCircleElement: cx-Eigenschaft"
short-title: cx
slug: Web/API/SVGCircleElement/cx
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`cx`**-Eigenschaft der schnittstellenmäßigen [`SVGCircleElement`](/de/docs/Web/API/SVGCircleElement) ist schreibgeschützt und spiegelt das {{SVGAttr("cx")}}-Attribut eines {{SVGElement("circle")}}-Elements wider. Dadurch definiert sie die x-Koordinate des Kreiszentrums.

Falls nicht angegeben, wirkt es sich so aus, als ob der Wert auf `0` gesetzt wäre.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der die x-Koordinate des Kreiszentrums repräsentiert.

## Beispiele

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="50" fill="gold" id="circle" />
</svg>
```

### JavaScript

```js
const circle = document.getElementById("circle");
console.log(circle.cx);
```

{{EmbedLiveSample("Examples", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGCircleElement.cy`](/de/docs/Web/API/SVGCircleElement/cy)
- [`SVGCircleElement.r`](/de/docs/Web/API/SVGCircleElement/r)
