---
title: "SVGAnimatedLengthList: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedLengthList/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft der [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Schnittstelle ist eine schreibgeschützte Eigenschaft und repräsentiert den animierten Wert eines Attributs, das eine Liste von [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-, [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)- oder [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)-Werten akzeptiert.

Einige SVG-Attribute, wie die `x`-, `y`-, `dx`- und `dy`-Attribute der [`<tspan>`](/de/docs/Web/SVG/Reference/Element/tspan)- und [`<text>`](/de/docs/Web/SVG/Reference/Element/text)-Elemente, akzeptieren eine Liste von Längen, Prozentsätzen oder Zahlen als Wert. Diese Eigenschaft bietet Zugriff auf den aktuellen animierten Zustand des Attributs in Form eines Live-Objekts vom Typ [`SVGLengthList`](/de/docs/Web/API/SVGLengthList).

## Wert

Ein [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Objekt, das den animierten Wert des Attributs darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)
- [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)
- [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)
- [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
