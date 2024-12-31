---
title: "SVGFEImageElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEImageElement/width
l10n:
  sourceCommit: 5498d8aab210c639ba0415071ca6fd77305762b0
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der Schnittstelle [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) beschreibt die horizontale Größe eines SVG-Filter-Primitivelements als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, das Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerskoordinatensystems.

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
- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG-Filter-Primitiv-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
