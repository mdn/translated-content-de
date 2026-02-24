---
title: "CSSFontFeatureValuesMap: delete()-Methode"
short-title: delete()
slug: Web/API/CSSFontFeatureValuesMap/delete
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`delete()`**-Methode der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Schnittstelle entfernt die CSS-Deklaration mit der angegebenen Eigenschaft in der `CSSFontFeatureValuesMap`.

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

Das folgende Beispiel löscht die erste Deklaration innerhalb des [`@swash`](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash)-Feature-Blocks. Dieses Beispiel verwendet `@swash`, funktioniert jedoch auch mit anderen [Feature-Werte-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
