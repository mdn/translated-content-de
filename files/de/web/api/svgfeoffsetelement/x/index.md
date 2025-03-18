---
title: "SVGFEOffsetElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEOffsetElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feOffset")}}-Elements wider, welches das Eingabebild relativ zu seiner aktuellen Position verschiebt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert darstellt, ist der Eigenschaftswert relativ zur Breite der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feOffset = document.querySelector("feOffset");
const leftPosition = feOffset.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEOffsetElement.y`](/de/docs/Web/API/SVGFEOffsetElement/y)
