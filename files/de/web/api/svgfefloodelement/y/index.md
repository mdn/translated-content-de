---
title: "SVGFEFloodElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEFloodElement/y
l10n:
  sourceCommit: 446fc3bbd82b46e4e3ae500332d807c843ebb7d7
---

{{APIRef("SVG")}}

Die **`y`**-Schreibgeschützte Eigenschaft des [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, welches eine SVG-Filter-Unterregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft füllt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerskoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzerskoordinatensystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feFlood = document.querySelector("feFlood");
const topPosition = feFlood.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFloodElement.x`](/de/docs/Web/API/SVGFEFloodElement/x)
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}}-Datentyp
- CSS {{cssxref("mix-blend-mode")}}-Eigenschaft
