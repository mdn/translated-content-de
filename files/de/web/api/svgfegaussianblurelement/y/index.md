---
title: "SVGFEGaussianBlurElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEGaussianBlurElement/y
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der Schnittstelle [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, das ein Eingabebild verwischt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerskoordinatensystem, die die gegebene Entfernung vom Ursprung des Filters entlang der y-Achse angibt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzerskoordinateneinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feGaussianBlur = document.querySelector("feGaussianBlur");
const topPosition = feGaussianBlur.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEGaussianBlurElement.x`](/de/docs/Web/API/SVGFEGaussianBlurElement/x)
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)-Modul - CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
