---
title: "SVGFESpecularLightingElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFESpecularLightingElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y`**-Schreibgeschützte Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feSpecularLighting")}}-Elements wider, welches ein Quellgrafik mithilfe des Alphakanals als Bump Map beleuchtet. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Filters entlang der y-Achse angibt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzereinheitensystemen. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const topPosition = feSpecularLighting.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpecularLightingElement.x`](/de/docs/Web/API/SVGFESpecularLightingElement/x)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
