---
title: "SVGFEBlendElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEBlendElement/width
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Elementattribut {{SVGAttr("width")}} des Filterprimitives wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), das relativ zur Breite der Filterregion ist. Der Standardwert ist `100%`. Der Wert der Eigenschaft ist eine Länge in Einheiten des Benutzerkoordinatensystems.

Der `<feBlend>`-SVG-Filter vermischt zwei Eingabebilder miteinander, indem er häufig verwendete [Blend-Modi](/de/docs/Web/CSS/Reference/Values/blend-mode) aus Bildbearbeitungssoftware verwendet.

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
