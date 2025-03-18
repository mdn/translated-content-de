---
title: "SVGFEBlendElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEBlendElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der Schnittstelle [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Element und dessen {{SVGAttr("height")}} Filterprimitive-Attribut wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

Das `<feBlend>` SVG-Filterelement blendet zwei Eingabebilder mit häufig verwendeten Bildbearbeitungs-[Mischmodi](/de/docs/Web/CSS/blend-mode) zusammen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const verticalSize = feBlend.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.width`](/de/docs/Web/API/SVGFEBlendElement/width)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
