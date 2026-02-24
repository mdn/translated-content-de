---
title: "CSSFontFeatureValuesMap: entries()-Methode"
short-title: entries()
slug: Web/API/CSSFontFeatureValuesMap/entries
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`entries()`**-Methode von Instanzen der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) gibt ein neues [Karteniterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das die `[key, value]`-Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in der Einfügereihenfolge enthält.

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

Das folgende Beispiel weist die Einträge der Variable `swashes` zu und protokolliert dann die ersten beiden Werte. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
