---
title: "SVGFEImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEImageElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft des [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, das Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
- [SVG Filterprimitiv-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
