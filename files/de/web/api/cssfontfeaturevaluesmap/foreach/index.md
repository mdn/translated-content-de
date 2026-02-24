---
title: "CSSFontFeatureValuesMap: forEach() Methode"
short-title: forEach()
slug: Web/API/CSSFontFeatureValuesMap/forEach
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`forEach()`** Methode von [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Instanzen führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in dieser Map in Einfügereihenfolge aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jeden Eintrag in der Map ausgeführt wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Wert jeder Iteration.
    - `key`
      - : Schlüssel jeder Iteration.
    - `map`
      - : Die Map, die durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Nutzung

Im folgenden Beispiel werden der `key` und `value` für jeden Eintrag in der `@swash` Regel protokolliert. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
// function to be used as callback
function logSwashes(value, key, map) {
  console.log(`('${key}') = ${value}`);
}
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
myRule.swash.forEach(logSwashes);
// logs:
// "('swishy') = 1"
// "('swashy') = 2"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.forEach()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
