---
title: "SVGFEGaussianBlurElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEGaussianBlurElement/x
l10n:
  sourceCommit: 94b32d908c0f13c1c2555996806454f7a0a48588
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, das ein Eingabebild verwischt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzersystemkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzersystemkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzersystemkoordinateneinheiten. Der Standardwert ist `0`.

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
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("filter-function/blur", "blur()")}} Funktion
- [CSS Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul - CSS {{cssxref("mix-blend-mode")}} Eigenschaft
