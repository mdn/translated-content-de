---
title: "SVGFEImageElement: Eigenschaft height"
short-title: height
slug: Web/API/SVGFEImageElement/height
l10n:
  sourceCommit: 5498d8aab210c639ba0415071ca6fd77305762b0
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Schnittstelle beschreibt die vertikale Größe eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, das Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage), welches relativ zur Höhe des Filterbereichs ist. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerskoordinatensystems.

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
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG-Filterprimitiven-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
