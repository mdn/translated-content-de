---
title: "SVGFEImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEImageElement/x
l10n:
  sourceCommit: 5498d8aab210c639ba0415071ca6fd77305762b0
---

{{APIRef("SVG")}}

Die **`x`** Schreibgeschützte Eigenschaft des [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filter-Primitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, das Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzersystemkoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzersystemkoordinatensystems entlang der x-Achse ist. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzersystemkoordinateneinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feImage = document.querySelector("feImage");
const leftPosition = feImage.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEImageElement.y`](/de/docs/Web/API/SVGFEImageElement/y)
- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG Filter-Primitiv-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
