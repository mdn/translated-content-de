---
title: "CSSFontFeatureValuesMap: clear() Methode"
short-title: clear()
slug: Web/API/CSSFontFeatureValuesMap/clear
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`clear()`**-Methode der Schnittstelle [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) entfernt alle Deklarationen in der `CSSFontFeatureValuesMap`.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel entfernt alle Deklarationen innerhalb des [`@swash`](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash)-Funktionsblocks. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Funktionswertblöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
