---
title: "SVGFEMergeElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEMergeElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Schreibgeschützte Eigenschaft der [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feMerge")}}-Elements wider. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzersystem der Koordinaten, die den angegebenen Abstand vom Ursprung des Benutzersystems der Koordinaten entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzersystems der Koordinaten. Der Standardwert ist `0`.

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
