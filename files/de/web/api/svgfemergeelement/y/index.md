---
title: "SVGFEMergeElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEMergeElement/y
l10n:
  sourceCommit: 2b0c47e02bba6be47057507f217f8267a6916ec8
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der Schnittstelle [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement) beschreibt die vertikale Koordinate der Position eines SVG-Filter-Primitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feMerge")}}-Elements wider. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feMerge = document.querySelector("feMerge");
const topPosition = feMerge.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMergeElement.x`](/de/docs/Web/API/SVGFEMergeElement/x)
