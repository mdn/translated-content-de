---
title: "SVGAnimatedLengthList: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedLengthList/baseVal
l10n:
  sourceCommit: 491fc99b39489d35811cfcb95912838abc33c390
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft des [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Interfaces ist eine schreibgeschützte Eigenschaft, die den Basiswert (nicht animiert) eines animierbaren Attributs darstellt, das eine Liste von [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number)-Werten akzeptiert.

Einige SVG-Attribute, wie die `x`, `y`, `dx` und `dy` Attribute der [`<tspan>`](/de/docs/Web/SVG/Element/tspan) und [`<text>`](/de/docs/Web/SVG/Element/text)-Elemente, akzeptieren eine Liste von Längen, Prozentwerten oder Nummern als Wert. Diese Eigenschaft spiegelt den Attributwert im nicht animierten Zustand als ein aktives [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Objekt wider.

## Wert

Ein [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Objekt, das den Basiswert des Attributs darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<length>`](/de/docs/Web/SVG/Content_type#length)
- [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage)
- [`<number>`](/de/docs/Web/SVG/Content_type#number)
- [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
