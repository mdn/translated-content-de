---
title: "CSSFontFeatureValuesRule: stylistic-Eigenschaft"
short-title: stylistic
slug: Web/API/CSSFontFeatureValuesRule/stylistic
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **stylistic**-Eigenschaft der [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Schnittstelle enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das den [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine Variable Font darstellt, die {{CSSXRef("font-variant-alternates", "stylistic()", "#stylistic")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `stylistic`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie dennoch direkt der `stylistic`-Eigenschaft einen Wert zuweisen. Sie können auch die Werte der `stylistic`-Eigenschaft mit den [`CSSFontFeatureValuesMap`-Instanzmethoden](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

## Beispiel

### Grundlegende Verwendung

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @stylistic {
    my-stylistics: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (myRule instanceof CSSFontFeatureValuesRule && myRule.stylistic.size) {
  // do something with the stylistic
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxRef("@font-feature-values","@stylistic","#stylistic")}}
- {{cssxRef("font-variant-alternates","stylistic()","#stylistic")}} Funktionsnotation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
