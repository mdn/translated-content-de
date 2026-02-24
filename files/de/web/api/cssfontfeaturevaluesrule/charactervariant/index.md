---
title: "CSSFontFeatureValuesRule: characterVariant Eigenschaft"
short-title: characterVariant
slug: Web/API/CSSFontFeatureValuesRule/characterVariant
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **characterVariant**-Eigenschaft der [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Schnittstelle enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das den [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "character-variant()", "#character-variant")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `characterVariant`-Eigenschaft selbst schreibgeschützt ist, im Sinne dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie dennoch direkt der `characterVariant`-Eigenschaft zuweisen. Sie können auch die Werte von `characterVariant` mit den [`CSSFontFeatureValuesMap`-Instanzmethoden](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

## Beispiele

### Grundlegende Nutzung

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @character-variant {
    my-character-variant: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (
  myRule instanceof CSSFontFeatureValuesRule &&
  myRule.characterVariant.size
) {
  // do something with the characterVariant
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxRef("@font-feature-values","@character-variant","#character-variant")}}
- {{cssxRef("font-variant-alternates","character-variant()","#character-variant")}} funktionale Notation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
