---
title: "CSSFontFeatureValuesRule: stylistische Eigenschaft"
short-title: stylistic
slug: Web/API/CSSFontFeatureValuesRule/stylistic
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **stylistic**-Eigenschaft des [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Interfaces enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das das [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "stylistic()", "#stylistic")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `stylistic`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie der `stylistic`-Eigenschaft direkt Werte zuweisen. Sie können auch die Werte der `stylistic` mithilfe der [`CSSFontFeatureValuesMap`-Instanzmethoden](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

## Beispiel

### Grundlegende Nutzung

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
- {{cssxRef("font-variant-alternates","stylistic()","#stylistic")}} funktionale Notation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
