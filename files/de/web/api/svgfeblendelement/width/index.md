---
title: "SVGFEBlendElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEBlendElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der schreibgeschützten Schnittstelle [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) beschreibt die horizontale Größe einer SVG-Filter-Primitiven als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Element und dessen {{SVGAttr("width")}}-Filter-Primitivenattribut wider. Das Attribut ist entweder eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystem-Einheiten.

Der `<feBlend>` SVG-Filter mischt zwei Eingabebilder miteinander unter Verwendung von in gängiger Bildbearbeitungssoftware verwendeten [Mischmodi](/de/docs/Web/CSS/blend-mode).

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const horizontalSize = feBlend.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.height`](/de/docs/Web/API/SVGFEBlendElement/height)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
