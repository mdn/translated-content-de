---
title: "SVGFEDiffuseLightingElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEDiffuseLightingElement/y
l10n:
  sourceCommit: 6f958c59155cfa5142076187384690a679f346ec
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft der Schnittstelle [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement) beschreibt die vertikale Koordinate der Position eines SVG-Filter-Primitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filter-Primitivattributs {{SVGAttr("y")}} des Elements {{SVGElement("feDiffuseLighting")}} wider. Der Filter beleuchtet ein Bild, wobei der Alphakanal als Höhenkarte verwendet wird. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Nutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Filters entlang der y-Achse angibt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Einheiten des Nutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDiffuseLighting = document.querySelector("feDiffuseLighting");
const topPosition = feDiffuseLighting.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDiffuseLightingElement.x`](/de/docs/Web/API/SVGFEDiffuseLightingElement/x)
- [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
