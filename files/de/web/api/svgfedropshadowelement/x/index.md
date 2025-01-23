---
title: "SVGFEDropShadowElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEDropShadowElement/x
l10n:
  sourceCommit: f318ba7838c55e50366284c1df56fbcb40ea802b
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der Schnittstelle [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement) beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Diese Eigenschaft ist nur lesbar.

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feDropShadow")}}-Elements wider, das einen Schlagschatten eines Eingabebildes erzeugt. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDropShadow = document.querySelector("feDropShadow");
const leftPosition = feDropShadow.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDropShadowElement.y`](/de/docs/Web/API/SVGFEDropShadowElement/y)
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}-Funktion
- CSS-{{cssxref("box-shadow")}}-Eigenschaft
- CSS-{{cssxref("text-shadow")}}-Eigenschaft
- CSS-{{cssxref("blend-mode")}}-Datentyp
- CSS-{{cssxref("mix-blend-mode")}}-Eigenschaft
