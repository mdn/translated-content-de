---
title: "CSSFontFeatureValuesMap: Methode clear()"
short-title: clear()
slug: Web/API/CSSFontFeatureValuesMap/clear
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`clear()`**-Methode der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Schnittstelle entfernt alle Deklarationen in der `CSSFontFeatureValuesMap`.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel entfernt alle Deklarationen innerhalb des [`@swash`](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash)-Feature-Blocks. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
myRule.swash.clear();
console.log(myRule.swash.size); // logs 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.clear()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)
