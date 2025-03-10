---
title: "SVGFEBlendElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEBlendElement/width
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft (nur lesbar) der Schnittstelle [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) beschreibt die horizontale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Element und dessen {{SVGAttr("width")}}-Filterprimitive-Attribut wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage), relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Wert dieser Eigenschaft ist eine Länge in Einheiten des Benutzerkoordinatensystems.

Der `<feBlend>`-SVG-Filter blendet zwei Eingabebilder unter Verwendung von häufig verwendeten Bildverarbeitungssoftware-[Blendmodi](/de/docs/Web/CSS/blend-mode) zusammen.

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
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
