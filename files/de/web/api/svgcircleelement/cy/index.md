---
title: "SVGCircleElement: cy-Eigenschaft"
short-title: cy
slug: Web/API/SVGCircleElement/cy
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("SVG")}}

Die **`cy`**-Eigenschaft, die nur gelesen werden kann, des [`SVGCircleElement`](/de/docs/Web/API/SVGCircleElement)-Interfaces spiegelt das {{SVGAttr("cy")}}-Attribut eines {{SVGElement("circle")}}-Elements wider und definiert dadurch die y-Koordinate des Kreismittelpunkts.

Wenn nicht angegeben, ist die Wirkung so, als ob der Wert auf `0` gesetzt wäre.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der die y-Koordinate des Kreismittelpunkts darstellt.

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
