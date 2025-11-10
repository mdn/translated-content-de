---
title: "SVGFEImageElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEImageElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft der [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, das Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feImage = document.querySelector("feImage");
const verticalSize = feImage.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEImageElement.width`](/de/docs/Web/API/SVGFEImageElement/width)
- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
