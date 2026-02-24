---
title: "CSSFontFeatureValuesMap: [Symbol.iterator]() Methode"
short-title: "[Symbol.iterator]()"
slug: Web/API/CSSFontFeatureValuesMap/Symbol.iterator
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`[Symbol.iterator]()`** Methode der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) Schnittstelle implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es eingebauten Iteratoren, von den meisten Syntaxen, die Iterables erwarten, konsumiert zu werden, wie dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welcher das Iterator-Objekt selbst ist.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welches das Iterator-Objekt selbst ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel verwendet den eingebauten Iterator von `CSSFontFeatureValuesMap`, um die Werte mit einer `for...of` Schleife zu protokollieren. Dieses Beispiel nutzt `@swash`, funktioniert aber auch mit anderen [Feature-Wert-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
