---
title: "SVGFEBlendElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEBlendElement/height
l10n:
  sourceCommit: ebf665a2679f308eb8e4dc7330864b4661bcdb9c
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) beschreibt die vertikale Größe einer SVG-Filter-Primitiven als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Element Attribut {{SVGAttr("height")}} der Filter-Primitiven wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

Das `<feBlend>` SVG-Filterelement vermischt zwei Eingabebilder unter Verwendung von allgemein gebräuchlichen Bildbearbeitungs-Software-{{cssxref("blend-mode", "Blending-Modi")}}.

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
