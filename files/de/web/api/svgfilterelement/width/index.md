---
title: "SVGFilterElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFilterElement/width
l10n:
  sourceCommit: ed8d1fc9149b9b5987d1019b1a6e1c7216a5333b
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Schnittstelle beschreibt die horizontale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("filter")}}-Elements wider. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzersystemkoordinateneinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const filter = document.querySelector("filter");
const horizontalSize = filter.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
