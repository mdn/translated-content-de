---
title: "CSSFontFeatureValuesMap: keys() Methode"
short-title: keys()
slug: Web/API/CSSFontFeatureValuesMap/keys
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`keys()`** Methode von Instanzen des [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) gibt ein neues [Karteniterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das die `[key, value]` Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügereihenfolge enthält.

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

Im folgenden Beispiel werden die Schlüssel der Variablen `swashKeys` zugewiesen und die ersten beiden Werte werden protokolliert. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wertblöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
