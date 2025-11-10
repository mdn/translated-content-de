---
title: "SVGFEComponentTransferElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEComponentTransferElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft des [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie spiegelt den Wert des {{SVGElement("feComponentTransfer")}}-Elements, genauer gesagt den Wert des {{SVGAttr("x")}}-Filterprimitive-Attributs wider. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse angibt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzereinheiten im Koordinatensystem. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComponentTransfer = document.querySelector("feComponentTransfer");
const leftPosition = feComponentTransfer.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEComponentTransferElement.y`](/de/docs/Web/API/SVGFEComponentTransferElement/y)
- {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}
