---
title: "SVGAnimatedNumberList: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedNumberList/animVal
l10n:
  sourceCommit: ffe2fa2992962f5ccd47cb4566e047f14f1ea6d7
---

{{APIRef("SVG")}}

Die schreibgeschützte **`animVal`**-Eigenschaft des [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)-Interfaces repräsentiert den aktuellen animierten Wert eines animierbaren Attributs, das eine Liste von [`<number>`](/de/docs/Web/SVG/Content_type#number)-Werten akzeptiert.

Diese Eigenschaft spiegelt das [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox)-Attribut des [`<svg>`](/de/docs/Web/SVG/Element/svg)-Elements, das [`values`](/de/docs/Web/SVG/Attribute/values#fecolormatrix)-Attribut des [`feColorMatrix`](/de/docs/Web/SVG/Element/feColorMatrix)-Elements und das {{SVGAttr("points")}}-Attribut des {{SVGElement("rect")}}, {{SVGElement("polygon")}} oder {{SVGElement("polyline")}}-Elements als ein readonly [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), welches Zugang zu einer dynamisch aktualisierten Liste von Punkten bietet, die durch das {{SVGAttr("points")}}-Attribut definiert werden.

## Wert

Ein [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Objekt, das den animierten Wert des Attributs darstellt. Die Liste enthält eine oder mehrere Zahlen, die den einzelnen Zahlenwerten entsprechen, die im Attribut spezifiziert sind.

## Beispiele

```js
const rect = document.querySelector("rect");

// Set the animatable 'points' attribute with number values
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// Access the SVGAnimatedNumberList object
const points = rect.points;

console.dir(points.animVal); // the animated state
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
