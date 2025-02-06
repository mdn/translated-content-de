---
title: "SVGFETileElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFETileElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feTitle")}}-Elements wider, das ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes ausfüllt. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerskoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse angibt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Einheiten des Benutzerskoordinatensystems. Der Standardwert ist `0`.

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
