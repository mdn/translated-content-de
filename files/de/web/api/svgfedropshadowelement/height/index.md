---
title: "SVGFEDropShadowElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEDropShadowElement/height
l10n:
  sourceCommit: f318ba7838c55e50366284c1df56fbcb40ea802b
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft des [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement) Interface beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}} Attribut der Filterprimitive wider. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDropShadow = document.querySelector("feDropShadow");
const verticalSize = feDropShadow.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDropShadowElement.width`](/de/docs/Web/API/SVGFEDropShadowElement/width)
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} Funktion
- CSS {{cssxref("box-shadow")}} Eigenschaft
- CSS {{cssxref("text-shadow")}} Eigenschaft
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
