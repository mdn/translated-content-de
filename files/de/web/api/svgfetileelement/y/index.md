---
title: "SVGFETileElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFETileElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft des [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feTitle")}}-Elements wider, das ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert darstellt, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feTile = document.querySelector("feTile");
const topPosition = feTile.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETileElement.x`](/de/docs/Web/API/SVGFETileElement/x)
- [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)
