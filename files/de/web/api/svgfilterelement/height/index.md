---
title: "SVGFilterElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFilterElement/height
l10n:
  sourceCommit: ed8d1fc9149b9b5987d1019b1a6e1c7216a5333b
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der Schnittstelle [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement), die nur lesbar ist, beschreibt die vertikale Größe einer SVG-Filter-Primitiven als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("filter")}}-Elements wider. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage), relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzers-Koordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const filter = document.querySelector("filter");
const verticalSize = filter.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
