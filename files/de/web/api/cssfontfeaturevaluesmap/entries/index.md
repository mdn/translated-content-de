---
title: "CSSFontFeatureValuesMap: entries() Methode"
short-title: entries()
slug: Web/API/CSSFontFeatureValuesMap/entries
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`entries()`** Methode der Instanzen von [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das die `[key, value]` Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in der Einfügereihenfolge enthält.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues iterierbares [Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel weist die Einträge der Variablen `swashes` zu und gibt dann die ersten beiden Werte aus. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
// get the entries of swash
const swashes = myRule.swash.entries();
console.log(swashes.next().value); // logs ["swishy", [1]]
console.log(swashes.next().value); // logs ["swashy", [2]]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.entries()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)
