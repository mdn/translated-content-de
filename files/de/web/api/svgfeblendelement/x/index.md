---
title: "SVGFEBlendElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEBlendElement/x
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitiv-Attributs {{SVGAttr("x")}} des Elements {{SVGElement("feBlend")}} wider. Das `<feBlend>` SVG-Filterelement mischt zwei Eingabebilder mit den in Bildbearbeitungssoftware gängigen [Verrechnungsmodi](/de/docs/Web/CSS/Reference/Values/blend-mode).

Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzersystem, die den gegebenen Abstand vom Ursprung des Benutzersystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzersystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const leftPosition = feBlend.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.y`](/de/docs/Web/API/SVGFEBlendElement/y)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
