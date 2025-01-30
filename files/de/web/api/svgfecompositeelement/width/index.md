---
title: "SVGFECompositeElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFECompositeElement/width
l10n:
  sourceCommit: a5395de76cd0066aed71cf351029eb6e342b73d1
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der Schnittstelle [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement) beschreibt die horizontale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feComposite")}}-Element und dessen {{SVGAttr("width")}}-Attribut der Filterprimitive wider. Die `<feComposite>` SVG-Filterprimitive kombiniert zwei Eingabebilder mit einer Porter-Duff-Kompositionsoperation. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Wert der Eigenschaft ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComposite = document.querySelector("feComposite");
const horizontalSize = feComposite.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFECompositeElement.height`](/de/docs/Web/API/SVGFECompositeElement/height)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
