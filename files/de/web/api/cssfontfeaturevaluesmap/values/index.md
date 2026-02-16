---
title: "CSSFontFeatureValuesMap: values() Methode"
short-title: values()
slug: Web/API/CSSFontFeatureValuesMap/values
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`values()`** Methode von [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Instanzen gibt ein neues [Map-Iterator](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)-Objekt zurück, das die `[key, value]`-Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in der Eingabereihenfolge enthält.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues iterierbares [Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator).

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel werden die Werte der Variablen `swashValues` zugewiesen und anschließend die ersten beiden Werte protokolliert. Dieses Beispiel verwendet `@swash`, funktioniert jedoch auch mit anderen [Feature-Wertblöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
// get the values of swash
const swashValues = myRule.swash.values();
console.log(swashValues.next().value); // logs [1]
console.log(swashValues.next().value); // logs [2]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.values()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/values)
