---
title: "SVGFEOffsetElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEOffsetElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Schnittstelle beschreibt die horizontale Größe einer SVG-Filter-Primitiven als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feOffset")}}-Elements wider, welches das Eingabebild relativ zu seiner aktuellen Position verschiebt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
