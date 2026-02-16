---
title: "CSSFontFeatureValuesRule: swash-Eigenschaft"
short-title: swash
slug: Web/API/CSSFontFeatureValuesRule/swash
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **swash**-Eigenschaft der [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Schnittstelle enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das den [vom Entwickler bereitgestellten Namen](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [Feature-Index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "swash()", "#swash")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `swash`-Eigenschaft selbst schreibgeschützt ist, im Sinne davon, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie dennoch direkt der `swash`-Eigenschaft zuweisen. Sie können auch die Werte der `swash`-Eigenschaft mithilfe der [`CSSFontFeatureValuesMap` Instanzmethoden](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

## Beispiel

### Grundlegende Verwendung

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @swash {
    my-swashes: 1; /* Custom name for a particular set of swash alternate glyphs */
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (myRule instanceof CSSFontFeatureValuesRule && myRule.swash.size) {
  // do something with the swash
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxRef("@font-feature-values","@swash","#swash")}}
- {{cssxRef("font-variant-alternates","swash()","#swash")}} funktionale Notation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
