---
title: "SVGFilterElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFilterElement/x
l10n:
  sourceCommit: ed8d1fc9149b9b5987d1019b1a6e1c7216a5333b
---

{{APIRef("SVG")}}

Die **`x`**-Schreibgeschützte Eigenschaft der [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Schnittstelle beschreibt die horizontale Koordinate der Position einer SVG-Filterprimitiven als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("filter")}}-Elements wider. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzersystem in der gegebenen Entfernung vom Ursprung des Benutzersystems entlang der x-Achse. Wenn das `x`-Attribut einen Prozentwert darstellt, ist der Eigenschaftswert relativ zur Breite der Filterregion in Einheiten des Benutzersystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const filter = document.querySelector("filter");
const leftPosition = filter.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG Filterprimitiven-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
