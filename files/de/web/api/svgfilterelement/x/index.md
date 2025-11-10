---
title: "SVGFilterElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFilterElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft des [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filter-Primitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("filter")}}-Elements wider. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const filter = document.querySelector("filter");
const leftPosition = filter.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Tutorial: Filter-Effekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
