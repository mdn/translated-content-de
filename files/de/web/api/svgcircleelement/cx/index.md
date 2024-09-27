---
title: "SVGCircleElement: cx-Eigenschaft"
short-title: cx
slug: Web/API/SVGCircleElement/cx
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`cx`**-Eigenschaft der [`SVGCircleElement`](/de/docs/Web/API/SVGCircleElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("cx")}}-Attribut eines {{SVGElement("circle")}}-Elements widerspiegelt und dadurch die x-Koordinate des Kreismittelpunktes definiert.

Falls nicht angegeben, wird der Effekt erzielt, als ob der Wert auf `0` gesetzt ist.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der die x-Koordinate des Kreismittelpunktes darstellt.

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
