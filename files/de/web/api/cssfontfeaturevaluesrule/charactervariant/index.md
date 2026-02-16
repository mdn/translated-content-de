---
title: "CSSFontFeatureValuesRule: Eigenschaft characterVariant"
short-title: characterVariant
slug: Web/API/CSSFontFeatureValuesRule/characterVariant
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **characterVariant**-Eigenschaft der [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Schnittstelle enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das das [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "characterVariant()", "#characterVariant")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `characterVariant`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie dennoch direkt der `characterVariant`-Eigenschaft Werte zuweisen. Außerdem können Sie die Werte der `characterVariant` mithilfe der [`CSSFontFeatureValuesMap`-Instanzmethoden](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) modifizieren.

## Beispiele

### Grundlegende Nutzung

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @charactervariant {
    my-charactervariant: 1;
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
