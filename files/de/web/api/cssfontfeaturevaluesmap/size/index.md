---
title: "CSSFontFeatureValuesMap: size-Eigenschaft"
short-title: size
slug: Web/API/CSSFontFeatureValuesMap/size
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`size`**-Eigenschaft des [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Interfaces gibt eine positive ganze Zahl zurück, die die Größe des `CSSFontFeatureValuesMap`-Objekts enthält.

## Wert

Eine positive ganze Zahl.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel gibt eine Ganzzahl der Anzahl der Deklarationen innerhalb des [`@swash`](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash)-Feature-Blocks aus. Dieses Beispiel verwendet `@swash`, funktioniert jedoch auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @swash {
    swishy: 1;
    swashy: 2;
  }
}
```

#### JavaScript

```js
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
console.log(myRule.swash.size); // logs 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
