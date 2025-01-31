---
title: "SVGFETileElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFETileElement/width
l10n:
  sourceCommit: f7c2436db777de600a4f999169ea8a4d88255f1d
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Schnittstelle, die nur gelesen werden kann, beschreibt die horizontale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feTitle")}}-Elements wider, das ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
