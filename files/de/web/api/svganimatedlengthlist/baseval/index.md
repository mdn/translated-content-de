---
title: "SVGAnimatedLengthList: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedLengthList/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`baseVal`** schreibgeschützte Eigenschaft des [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Interfaces repräsentiert den Basiswert (nicht animiert) eines animierbaren Attributs, das eine Liste von [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-, [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)- oder [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)-Werten akzeptiert.

Einige SVG-Attribute, wie die `x`-, `y`-, `dx`- und `dy`-Attribute der [`<tspan>`](/de/docs/Web/SVG/Reference/Element/tspan)- und [`<text>`](/de/docs/Web/SVG/Reference/Element/text)-Elemente, akzeptieren eine Liste von Längen, Prozentsätzen oder Zahlen als Wert. Diese Eigenschaft spiegelt den Attributwert im nicht animierten Zustand als ein Live-[`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Objekt wider.

## Wert

Ein [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Objekt, das den Basiswert des Attributs darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)
- [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)
- [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)
- [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
