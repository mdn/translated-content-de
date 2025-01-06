---
title: "SVGFilterElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFilterElement/y
l10n:
  sourceCommit: ed8d1fc9149b9b5987d1019b1a6e1c7216a5333b
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft der Schnittstelle [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement) beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("filter")}}-Elements wider. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzereinheitssystemen. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const filter = document.querySelector("filter");
const topPosition = filter.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG-Filter-Primitiv-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
