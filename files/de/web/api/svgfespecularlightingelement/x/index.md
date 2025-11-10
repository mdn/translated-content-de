---
title: "SVGFESpecularLightingElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFESpecularLightingElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feSpecularLighting")}}-Elements wider, das eine Quellgrafik beleuchtet, indem der Alphakanal als Bump-Map verwendet wird. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzersystem, die den angegebenen Abstand vom Ursprung des Benutzersystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzersystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const leftPosition = feSpecularLighting.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpecularLightingElement.y`](/de/docs/Web/API/SVGFESpecularLightingElement/y)
- [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)
- CSS {{cssxref("lighting-color")}}-Eigenschaft
