---
title: "CSSFontFeatureValuesRule: styleset-Eigenschaft"
short-title: styleset
slug: Web/API/CSSFontFeatureValuesRule/styleset
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **styleset**-Eigenschaft der [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Schnittstelle enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das den [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "styleset()", "#styleset")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `styleset`-Eigenschaft selbst schreibgeschützt ist, in dem Sinne, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie weiterhin direkt der `styleset`-Eigenschaft zuweisen. Sie können auch die Werte der `styleset` mit den [Instanzmethoden der `CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

## Beispiel

### Grundlegende Verwendung

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @styleset {
    my-styleset: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (myRule instanceof CSSFontFeatureValuesRule && myRule.styleset.size) {
  // do something with the styleset
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxRef("@font-feature-values","@styleset","#styleset")}}
- {{cssxRef("font-variant-alternates","styleset()","#styleset")}} funktionale Notation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
