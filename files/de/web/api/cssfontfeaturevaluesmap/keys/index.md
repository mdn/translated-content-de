---
title: "CSSFontFeatureValuesMap: keys()-Methode"
short-title: keys()
slug: Web/API/CSSFontFeatureValuesMap/keys
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`keys()`**-Methode von [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Instanzen gibt ein neues [Map-Iterator](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)-Objekt zurück, das die `[key, value]`-Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in der eingefügten Reihenfolge enthält.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues iterierbares [Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator).

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel werden die Schlüssel der Variablen `swashKeys` zugewiesen und die ersten beiden Werte protokolliert. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
// get the keys of swash
const swashKeys = myRule.swash.keys();
console.log(swashKeys.next().value); // logs "swishy"
console.log(swashKeys.next().value); // logs "swashy"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.keys()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)
