---
title: "SVGAnimatedNumberList: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedNumberList/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`animVal`** Eigenschaft der [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den aktuellen animierten Wert eines animierbaren Attributs darstellt, das eine Liste von [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)-Werten akzeptiert.

Diese Eigenschaft spiegelt das [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut des [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)-Elements, das [`values`](/de/docs/Web/SVG/Reference/Attribute/values#fecolormatrix)-Attribut des [`feColorMatrix`](/de/docs/Web/SVG/Reference/Element/feColorMatrix)-Elements sowie das {{SVGAttr("points")}}-Attribut des {{SVGElement("rect")}}, {{SVGElement("polygon")}} oder {{SVGElement("polyline")}}-Elements als Read-only-Objekt vom Typ [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) wider. Es bietet Zugriff auf eine dynamisch aktualisierte Liste von Punkten, die durch das {{SVGAttr("points")}}-Attribut definiert sind.

## Wert

Ein [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Objekt, das den animierten Wert des Attributs darstellt. Die Liste enthält eine oder mehrere Zahlen, die den einzelnen Zahlenwerten entsprechen, die im Attribut angegeben sind.

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
