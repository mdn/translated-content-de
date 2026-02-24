---
title: "CSSFontFeatureValuesRule: ornaments-Eigenschaft"
short-title: ornaments
slug: Web/API/CSSFontFeatureValuesRule/ornaments
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **ornaments**-Eigenschaft der [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Schnittstelle enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das die [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine Variable Font darstellt, die {{CSSXRef("font-variant-alternates", "ornaments()", "#ornaments")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `ornaments`-Eigenschaft in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie dennoch direkt der `ornaments`-Eigenschaft Werte zuweisen. Zudem können Sie die Werte von `ornaments` mithilfe der [Instanzmethoden von `CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

## Beispiel

### Grundlegende Verwendung

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @ornaments {
    my-ornaments: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (myRule instanceof CSSFontFeatureValuesRule && myRule.ornaments.size) {
  // do something with the ornaments
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxRef("@font-feature-values","@ornaments","#ornaments")}}
- {{cssxRef("font-variant-alternates","ornaments()","#ornaments")}} Funktionsnotation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
