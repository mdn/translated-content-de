---
title: "SVGFECompositeElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFECompositeElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feComposite")}}-Element mit dem Filterprimitiv-Attribut {{SVGAttr("width")}} wider. Das `<feComposite>` SVG-Filterprimitiv kombiniert zwei Eingabebilder unter Verwendung einer Porter-Duff-Kompositionsoperation. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheiten des Koordinatensystems.

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
