---
title: "SVGFETileElement: x Eigenschaft"
short-title: x
slug: Web/API/SVGFETileElement/x
l10n:
  sourceCommit: f7c2436db777de600a4f999169ea8a4d88255f1d
---

{{APIRef("SVG")}}

Die **`x`** Leseeigenschaft des [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feTitle")}}-Elements wider, welches ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzerkoordinatensystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feTile = document.querySelector("feTile");
const leftPosition = feTile.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETileElement.y`](/de/docs/Web/API/SVGFETileElement/y)
