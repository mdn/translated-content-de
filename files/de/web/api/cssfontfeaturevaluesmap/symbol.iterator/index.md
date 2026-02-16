---
title: "CSSFontFeatureValuesMap: [Symbol.iterator]() Methode"
short-title: "[Symbol.iterator]()"
slug: Web/API/CSSFontFeatureValuesMap/Symbol.iterator
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`[Symbol.iterator]()`**-Methode der Schnittstelle [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) implementiert das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass eingebaute Iteratoren von den meisten Syntaxen, die Iterables erwarten, wie dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen, genutzt werden können. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welcher das Iterator-Objekt selbst ist.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welcher das Iterator-Objekt selbst ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel verwendet den eingebauten Iterator von `CSSFontFeatureValuesMap`, um die Werte mit einer `for...of` Schleife zu protokollieren. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Value-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
for (const value of myRule.swash.keys()) {
  console.log(value);
}
// Logs: "swishy", "swashy"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
- {{jsxref("Iterator")}}
