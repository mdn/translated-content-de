---
title: "SVGFETileElement: y Eigenschaft"
short-title: "y"
slug: Web/API/SVGFETileElement/y
l10n:
  sourceCommit: f7c2436db777de600a4f999169ea8a4d88255f1d
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement) Schnittstelle beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}} Attribut des {{SVGElement("feTitle")}} Elements wider, das ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzersystem der Koordinaten, die die angegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y` Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Einheiten des Benutzersystems der Koordinaten. Der Standardwert ist `0`.

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
