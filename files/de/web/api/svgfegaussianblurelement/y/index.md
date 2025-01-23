---
title: "SVGFEGaussianBlurElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEGaussianBlurElement/y
l10n:
  sourceCommit: 94b32d908c0f13c1c2555996806454f7a0a48588
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filter-Primitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, welches ein Eingabebild verwischt. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzers Koordinatensystem, die die gegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzers Koordinatensystemeinheiten. Der Standardwert ist `0`.

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
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("filter-function/blur", "blur()")}} Funktion
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
