---
title: "SVGFEDisplacementMapElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEDisplacementMapElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitivattributs {{SVGAttr("y")}} des {{SVGElement("feDisplacementMap")}}-Elements wider. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzer-Koordinatensystem, die die angegebene Entfernung vom Ursprung des Filters entlang der y-Achse angibt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Einheiten des Benutzer-Koordinatensystems. Der Standardwert ist `0`.

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
- [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) API und {{SVGElement("feImage")}}-Element
- [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) API und {{SVGElement("feTurbulence")}}-Element
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
