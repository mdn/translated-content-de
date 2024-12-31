---
title: "SVGFEImageElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEImageElement/y
l10n:
  sourceCommit: 5498d8aab210c639ba0415071ca6fd77305762b0
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft der [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die vertikale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, das Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe zur Verfügung stellt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzereinheitensystem-Einheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feImage = document.querySelector("feImage");
const topPosition = feImage.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEImageElement.x`](/de/docs/Web/API/SVGFEImageElement/x)
- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG-Filterprimitivattribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
