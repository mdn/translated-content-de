---
title: "SVGFETileElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFETileElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Schreibgeschützte Eigenschaft der [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feTile")}}-Elements wider, welches ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Das Attribut ist entweder eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feTile = document.querySelector("feTile");
const horizontalSize = feTile.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETileElement.height`](/de/docs/Web/API/SVGFETileElement/height)
- [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)
