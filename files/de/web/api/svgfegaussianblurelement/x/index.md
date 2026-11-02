---
title: "SVGFEGaussianBlurElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEGaussianBlurElement/x
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`x`** des Interfaces [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) beschreibt die horizontale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("x")}} des Elements {{SVGElement("feGaussianBlur")}} wider, das ein Eingabebild weichzeichnet. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)- oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)-Wert. `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse angibt. Wenn das Attribut `x` einen Prozentwert hat, bezieht sich der Eigenschaftswert auf die Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feGaussianBlur = document.querySelector("feGaussianBlur");
const leftPosition = feGaussianBlur.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEGaussianBlurElement.y`](/de/docs/Web/API/SVGFEGaussianBlurElement/y)
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
