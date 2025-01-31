---
title: "SVGFETileElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFETileElement/height
l10n:
  sourceCommit: f7c2436db777de600a4f999169ea8a4d88255f1d
---

{{APIRef("SVG")}}

Die **`height`**-Schreibgeschützte Eigenschaft der [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feTile")}}-Elements wider, das ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemeinheiten.

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
