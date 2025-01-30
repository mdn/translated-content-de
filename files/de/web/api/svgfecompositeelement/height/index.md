---
title: "SVGFECompositeElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFECompositeElement/height
l10n:
  sourceCommit: a5395de76cd0066aed71cf351029eb6e342b73d1
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle beschreibt die vertikale Größe eines SVG-Filter-Primitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie reflektiert das {{SVGElement("feComposite")}}-Element und dessen {{SVGAttr("height")}}-Filter-Primitivattribut. Das `<feComposite>` SVG-Filter-Primitiv kombiniert zwei Eingabebilder mittels einer Porter-Duff-Kompositionsoperation. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComposite = document.querySelector("feComposite");
const verticalSize = feComposite.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFECompositeElement.width`](/de/docs/Web/API/SVGFECompositeElement/width)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
