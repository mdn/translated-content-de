---
title: "SVGFEMergeElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEMergeElement/x
l10n:
  sourceCommit: 2b0c47e02bba6be47057507f217f8267a6916ec8
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der Schnittstelle [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement) beschreibt die horizontale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Diese spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feMerge")}}-Elements wider. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzekoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzekoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzereinheitensystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feMerge = document.querySelector("feMerge");
const leftPosition = feMerge.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMergeElement.y`](/de/docs/Web/API/SVGFEMergeElement/y)
