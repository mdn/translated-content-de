---
title: "SVGFilterElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFilterElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft des [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Interfaces beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie entspricht dem {{SVGAttr("height")}}-Attribut des {{SVGElement("filter")}}-Elements. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemeinheiten.

## Wert

Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const filter = document.querySelector("filter");
const verticalSize = filter.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
