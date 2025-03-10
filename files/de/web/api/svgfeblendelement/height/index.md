---
title: "SVGFEBlendElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEBlendElement/height
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Schnittstelle beschreibt die vertikale Größe eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Elementattribut {{SVGAttr("height")}} des Filterprimitives wider. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

Das `<feBlend>` SVG-Filter blendet zwei Eingabebilder unter Verwendung von in Bildbearbeitungssoftware häufig verwendeten [Blending-Modi](/de/docs/Web/CSS/blend-mode) zusammen.

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
