---
title: "CSSFontFeatureValuesRule: styleset-Eigenschaft"
short-title: styleset
slug: Web/API/CSSFontFeatureValuesRule/styleset
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **styleset**-Eigenschaft der [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Schnittstelle enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das die [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "styleset()", "#styleset")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) Objekt.

Obwohl die `styleset`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie der `styleset`-Eigenschaft direkt Werte zuweisen. Sie können auch die Werte des `styleset` mit den [Instanzmethoden des CSSFontFeatureValuesMap-Objekts](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

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
