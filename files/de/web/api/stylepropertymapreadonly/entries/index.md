---
title: "StylePropertyMapReadOnly: entries() Methode"
short-title: entries()
slug: Web/API/StylePropertyMapReadOnly/entries
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.entries()`** Methode gibt ein Array von `[key, value]` Paaren eines Objekts zurück, das die eigenen aufzählbaren Eigenschaften und Schlüssel des Objekts enthält. Diese stehen in der gleichen Reihenfolge wie bei einer {{jsxref("Statements/for...in", "for...in")}} Schleife (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototyp-Kette aufzählt).

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der eigenen aufzählbaren `[key, value]` Paare des `StylePropertyMapReadOnly` Objekts.

## Beispiele

### Grundlegende Verwendung

Der folgende Code zeigt ein Beispiel für die Verwendung der Methode `StylePropertyMapReadOnly.entries()` auf den berechneten Stilen eines Elements.

```js
// grab a DOM element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// entries returns an iterable of the items
const iterableStyles = allComputedStyles.entries();

// returns a two item array with align-content as the first item and CSSStyleValue as the second
console.log(iterableStyles.next().value);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
