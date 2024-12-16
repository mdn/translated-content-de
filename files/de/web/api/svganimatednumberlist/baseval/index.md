---
title: "SVGAnimatedNumberList: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedNumberList/baseVal
l10n:
  sourceCommit: ffe2fa2992962f5ccd47cb4566e047f14f1ea6d7
---

{{APIRef("SVG")}}

Die schreibgeschützte **`baseVal`**-Eigenschaft der [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)-Schnittstelle repräsentiert den Basiswert (nicht animiert) eines animierbaren Attributs, das eine Liste von [`<number>`](/de/docs/Web/SVG/Content_type#number)-Werten akzeptiert.

Diese Eigenschaft spiegelt das [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox)-Attribut des [`<svg>`](/de/docs/Web/SVG/Element/svg)-Elements, das [`values`](/de/docs/Web/SVG/Attribute/values#fecolormatrix)-Attribut des [`feColorMatrix`](/de/docs/Web/SVG/Element/feColorMatrix)-Elements sowie das {{SVGAttr("points")}}-Attribut der {{SVGElement("rect")}}, {{SVGElement("polygon")}} oder {{SVGElement("polyline")}}-Elemente als ein schreibgeschützte [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) wider, die Zugriff auf eine statische Liste von durch das {{SVGAttr("points")}}-Attribut definierten Punkten bietet.

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
