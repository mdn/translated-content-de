---
title: "SVGFEImageElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEImageElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft des [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Interfaces beschreibt die horizontale Größe eines SVG-Filter-Primitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}} Attribut des {{SVGElement("feImage")}} Elements wider, welches Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feImage = document.querySelector("feImage");
const horizontalSize = feImage.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEImageElement.height`](/de/docs/Web/API/SVGFEImageElement/height)
- [SVG Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
