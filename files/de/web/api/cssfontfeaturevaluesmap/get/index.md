---
title: "CSSFontFeatureValuesMap: get()-Methode"
short-title: get()
slug: Web/API/CSSFontFeatureValuesMap/get
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`get()`**-Methode der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Schnittstelle gibt den Wert zurück, der dem Schlüssel in dieser `CSSFontFeatureValuesMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.

## Syntax

```js-nolint
get(property)
```

### Parameter

- `key`
  - : Der Schlüssel des Wertes, der aus dem `CSSFontFeatureValuesMap`-Objekt zurückgegeben werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein Eintrag mit dem angegebenen Schlüssel im `CSSFontFeatureValuesMap`-Objekt existiert; andernfalls `false`.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel ruft die Werte ab, die den `key`s in der `@swash`-Regel entsprechen. Dieses Beispiel verwendet `@swash`, funktioniert jedoch auch mit anderen [Feature-Wertblöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
console.log(myRule.swash.get("swishy")); // logs [1]
console.log(myRule.swash.get("swashy")); // logs [2]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.get()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/get)
