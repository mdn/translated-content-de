---
title: "SVGFEDiffuseLightingElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEDiffuseLightingElement/x
l10n:
  sourceCommit: 6f958c59155cfa5142076187384690a679f346ec
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der Schnittstelle [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement) beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feDiffuseLighting")}}-Elements des {{SVGAttr("x")}}-Filterprimitive-Attributs wider. Der Filter beleuchtet ein Bild unter Verwendung des Alpha-Kanals als Bump-Map. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite der Filterregion in Benutzereinheitensystem-Einheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDiffuseLighting = document.querySelector("feDiffuseLighting");
const leftPosition = feDiffuseLighting.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDiffuseLightingElement.y`](/de/docs/Web/API/SVGFEDiffuseLightingElement/y)
- [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
