---
title: "SVGFEComponentTransferElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEComponentTransferElement/y
l10n:
  sourceCommit: 555feb3f59cfdea83d769ce9f38baebc679f0681
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft der Schnittstelle [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement) beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feComponentTransfer")}}-Elements und des {{SVGAttr("y")}}-Filterprimitiveattributs wider. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Benutzerkoordinatensystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComponentTransfer = document.querySelector("feComponentTransfer");
const topPosition = feComponentTransfer.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEComponentTransferElement.x`](/de/docs/Web/API/SVGFEComponentTransferElement/x)
- {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}
