---
title: "SVGFEFloodElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEFloodElement/x
l10n:
  sourceCommit: 446fc3bbd82b46e4e3ae500332d807c843ebb7d7
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft des [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filter-Primitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, das eine SVG-Filter-Unterregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft füllt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Der `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feFlood = document.querySelector("feFlood");
const leftPosition = feFlood.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFloodElement.y`](/de/docs/Web/API/SVGFEFloodElement/y) - [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
