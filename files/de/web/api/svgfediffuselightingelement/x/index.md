---
title: "SVGFEDiffuseLightingElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEDiffuseLightingElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die horizontale Koordinate der Position eines SVG-Filter-Primitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie spiegelt den Wert des Filter-Primitiv-Attributs {{SVGAttr("x")}} vom {{SVGElement("feDiffuseLighting")}}-Element wider. Der Filter beleuchtet ein Bild unter Verwendung des Alphakanals als Bump-Map. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzereinheiten. Der Standardwert ist `0`.

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
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
