---
title: "SVGFEDropShadowElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEDropShadowElement/width
l10n:
  sourceCommit: f318ba7838c55e50366284c1df56fbcb40ea802b
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filter-Primitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des Filter-Primitivs wider. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDropShadow = document.querySelector("feDropShadow");
const horizontalSize = feDropShadow.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDropShadowElement.height`](/de/docs/Web/API/SVGFEDropShadowElement/height)
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} Funktion
- CSS {{cssxref("box-shadow")}} Eigenschaft
- CSS {{cssxref("text-shadow")}} Eigenschaft
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
