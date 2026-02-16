---
title: "CSSFontFeatureValuesMap: delete()-Methode"
short-title: delete()
slug: Web/API/CSSFontFeatureValuesMap/delete
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`delete()`**-Methode der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Schnittstelle entfernt die CSS-Deklaration mit der angegebenen Eigenschaft im `CSSFontFeatureValuesMap`.

## Syntax

```js-nolint
delete(property)
```

### Parameter

- `property`
  - : Ein Bezeichner, der die zu entfernende Deklaration angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel wird die erste Deklaration innerhalb des [`@swash`](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash)-Feature-Blocks gelöscht. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
myRule.swash.delete("swishy");
console.log(myRule.swash.has("swishy")); // logs false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.delete()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
