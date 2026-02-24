---
title: "CSSFontFeatureValuesMap: has() Methode"
short-title: has()
slug: Web/API/CSSFontFeatureValuesMap/has
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`has()`** Methode der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) Schnittstelle gibt einen Boolean zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `CSSFontFeatureValuesMap` existiert oder nicht.

## Syntax

```js-nolint
has(property)
```

### Parameter

- `key`
  - : Der Schlüssel des Wertes, der aus dem `CSSFontFeatureValuesMap` Objekt zurückgegeben werden soll.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `CSSFontFeatureValuesMap` Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zurückgegeben.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel gibt `true` oder `false` zurück, wenn die `@swash` Regel den `key` enthält. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
console.log(myRule.swash.has("swishy")); // logs true
console.log(myRule.swash.has("swooshy")); // logs false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.has()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
