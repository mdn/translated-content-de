---
title: "SVGCircleElement: cy-Eigenschaft"
short-title: cy
slug: Web/API/SVGCircleElement/cy
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`cy`** des {{domxref("SVGCircleElement")}}-Interfaces spiegelt das {{SVGAttr("cy")}}-Attribut eines {{SVGElement("circle")}}-Elements wider und definiert damit die y-Koordinate des Kreismittelpunkts.

Wenn nicht angegeben, wird der Effekt so behandelt, als wäre der Wert auf `0` gesetzt.

## Wert

Ein {{domxref("SVGAnimatedLength")}}, der die y-Koordinate des Kreismittelpunkts darstellt.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("SVGCircleElement.cx")}}
- {{domxref("SVGCircleElement.r")}}
