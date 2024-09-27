---
title: "SVGCircleElement: cy-Eigenschaft"
short-title: cy
slug: Web/API/SVGCircleElement/cy
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`cy`**-Schreibgeschützte Eigenschaft des [`SVGCircleElement`](/de/docs/Web/API/SVGCircleElement) Interfaces spiegelt das {{SVGAttr("cy")}} Attribut eines {{SVGElement("circle")}} Elements wider und definiert damit die y-Koordinate des Mittelpunkts des Kreises.

Wenn nicht angegeben, wird dies so behandelt, als ob der Wert auf `0` gesetzt ist.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der die y-Koordinate des Mittelpunkts des Kreises darstellt.

## Beispiele

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cy="50" cy="50" r="50" fill="gold" id="circle" />
</svg>
```

### JavaScript

```js
const circle = document.getElementById("circle");
console.log(circle.cy);
```

{{EmbedLiveSample("Examples", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGCircleElement.cx`](/de/docs/Web/API/SVGCircleElement/cx)
- [`SVGCircleElement.r`](/de/docs/Web/API/SVGCircleElement/r)
