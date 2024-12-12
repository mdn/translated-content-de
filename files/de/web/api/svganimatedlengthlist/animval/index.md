---
title: "SVGAnimatedLengthList: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedLengthList/animVal
l10n:
  sourceCommit: 491fc99b39489d35811cfcb95912838abc33c390
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft des [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Interfaces ist eine schreibgeschützte Eigenschaft und repräsentiert den animierten Wert eines Attributs, das eine Liste von [`<length>`](/de/docs/Web/SVG/Content_type#length)-, [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage)- oder [`<number>`](/de/docs/Web/SVG/Content_type#number)-Werten akzeptiert.

Einige SVG-Attribute, wie die `x`-, `y`-, `dx`- und `dy`-Attribute der [`<tspan>`](/de/docs/Web/SVG/Element/tspan)- und [`<text>`](/de/docs/Web/SVG/Element/text)-Elemente, akzeptieren eine Liste von Längen, Prozentsätzen oder Zahlen als Wert. Diese Eigenschaft ermöglicht den Zugriff auf den aktuellen animierten Zustand des Attributs als ein lebendiges [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Objekt.

## Wert

Ein [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Objekt, das den animierten Wert des Attributs repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<length>`](/de/docs/Web/SVG/Content_type#length)
- [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage)
- [`<number>`](/de/docs/Web/SVG/Content_type#number)
- [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
