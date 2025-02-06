---
title: "SVGFEComponentTransferElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEComponentTransferElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`**-schreibgeschützte Eigenschaft der [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Schnittstelle beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitive-Attributs {{SVGAttr("y")}} des {{SVGElement("feComponentTransfer")}}-Elements wider. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert enthält, ist der Eigenschaftswert relativ zur Höhe der Filterregion in den Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
