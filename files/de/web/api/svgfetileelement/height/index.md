---
title: "SVGFETileElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFETileElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft des [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Interfaces beschreibt die vertikale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feTitle")}}-Elements wider, das ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feTile = document.querySelector("feTile");
const verticalSize = feTile.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETileElement.width`](/de/docs/Web/API/SVGFETileElement/width)
- [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)
