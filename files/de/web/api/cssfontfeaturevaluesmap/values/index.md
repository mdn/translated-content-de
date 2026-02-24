---
title: "CSSFontFeatureValuesMap: values() Methode"
short-title: values()
slug: Web/API/CSSFontFeatureValuesMap/values
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`values()`** Methode von [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Instanzen gibt ein neues [Map-Iterator](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)-Objekt zurück, das die `[key, value]`-Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügereihenfolge enthält.

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

Das folgende Beispiel weist die Werte der Variablen `swashValues` zu und gibt die ersten beiden Werte aus. Dieses Beispiel verwendet `@swash`, funktioniert jedoch auch mit anderen [Feature-Value-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
