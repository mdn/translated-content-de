---
title: "SVGFEDisplacementMapElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEDisplacementMapElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feDisplacementMap")}}-Element-Attributs {{SVGAttr("y")}} der Filterprimitive wider. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDisplacementMap = document.querySelector("feDisplacementMap");
const topPosition = feDisplacementMap.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDisplacementMapElement.x`](/de/docs/Web/API/SVGFEDisplacementMapElement/x)
- [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-API und {{SVGElement("feImage")}}-Element
- [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-API und {{SVGElement("feTurbulence")}}-Element
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
