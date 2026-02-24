---
title: "CSSFontFeatureValuesRule: swash-Eigenschaft"
short-title: swash
slug: Web/API/CSSFontFeatureValuesRule/swash
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **swash**-Eigenschaft des [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Interfaces enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das den [vom Entwickler bereitgestellten Namen](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [Feature-Index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart repräsentiert, die {{CSSXRef("font-variant-alternates", "swash()", "#swash")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `swash`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie dennoch direkt einen Wert der `swash`-Eigenschaft zuweisen. Sie können auch die Werte von `swash` mit den [Instanzmethoden der `CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) modifizieren.

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
