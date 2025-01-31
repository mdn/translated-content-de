---
title: "SVGFEOffsetElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEOffsetElement/height
l10n:
  sourceCommit: e9fd7a0d2640c9878e6187dc69213814828a05f5
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft des [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Interfaces beschreibt die vertikale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feOffset")}}-Elements wider, welches das Eingabebild relativ zu seiner aktuellen Position versetzt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feOffset = document.querySelector("feOffset");
const verticalSize = feOffset.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEOffsetElement.width`](/de/docs/Web/API/SVGFEOffsetElement/width)
