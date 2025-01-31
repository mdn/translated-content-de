---
title: "SVGFEOffsetElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEOffsetElement/x
l10n:
  sourceCommit: e9fd7a0d2640c9878e6187dc69213814828a05f5
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft der Schnittstelle [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement) beschreibt die horizontale Koordinate der Position einer SVG-Filterprimitiv als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feOffset")}}-Elements wider, das das Eingabebild relativ zu seiner aktuellen Position versetzt. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

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
