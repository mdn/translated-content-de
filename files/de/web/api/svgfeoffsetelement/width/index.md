---
title: "SVGFEOffsetElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEOffsetElement/width
l10n:
  sourceCommit: e9fd7a0d2640c9878e6187dc69213814828a05f5
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft des [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement) Schnittstelle beschreibt die horizontale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}} Attribut des {{SVGElement("feOffset")}} Elements wider, das das Eingangsbild relativ zu seiner aktuellen Position verschiebt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerskoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feOffset = document.querySelector("feOffset");
const horizontalSize = feOffset.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEOffsetElement.height`](/de/docs/Web/API/SVGFEOffsetElement/height)
