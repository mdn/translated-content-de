---
title: "SVGFEGaussianBlurElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEGaussianBlurElement/x
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft des [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filter-Primitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, welches ein Eingabebild verwischt. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert darstellt, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul - CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
