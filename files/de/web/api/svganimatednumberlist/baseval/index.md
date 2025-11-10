---
title: "SVGAnimatedNumberList: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedNumberList/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`baseVal`**-Eigenschaft der Schnittstelle [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList) repräsentiert den Basiswert (nicht animiert) eines animierbaren Attributs, das eine Liste von [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)-Werten akzeptiert.

Diese Eigenschaft spiegelt das [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut des [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)-Elements, das [`values`](/de/docs/Web/SVG/Reference/Attribute/values#fecolormatrix)-Attribut des [`feColorMatrix`](/de/docs/Web/SVG/Reference/Element/feColorMatrix)-Elements und das {{SVGAttr("points")}}-Attribut des {{SVGElement("rect")}}, {{SVGElement("polygon")}} oder {{SVGElement("polyline")}}-Elements als ein schreibgeschütztes [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), das den Zugriff auf eine statische Liste von Punkten ermöglicht, die durch das {{SVGAttr("points")}}-Attribut definiert werden.

## Wert

Ein [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Objekt, das den Basiswert des Attributs darstellt. Die Liste enthält eine oder mehrere Zahlen, die den einzelnen Zahlenwerten entsprechen, die im Attribut angegeben sind.

## Beispiele

```js
const rect = document.querySelector("rect");

// Set the animatable 'points' attribute with number values
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// Access the SVGAnimatedNumberList object
const points = rect.points;

// Modify the base value
points.baseVal = [10, 15, 25, 30];

// Verify the reflected attribute value
console.log(rect.getAttribute("points")); // Output: "10,15 25,30"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
