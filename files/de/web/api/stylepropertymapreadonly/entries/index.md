---
title: "StylePropertyMapReadOnly: entries() Methode"
short-title: entries()
slug: Web/API/StylePropertyMapReadOnly/entries
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`StylePropertyMapReadOnly.entries()`**-Methode gibt ein Array der eigenen aufzählbaren `[key, value]`-Paare eines gegebenen Objekts zurück, in der gleichen Reihenfolge, wie sie durch eine {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der eigenen aufzählbaren `[key, value]`-Paare des gegebenen `StylePropertyMapReadOnly` Objekts.

## Beispiele

### Grundlegende Nutzung

Der folgende Code zeigt ein Beispiel für die Verwendung der `StylePropertyMapReadOnly.entries()`-Methode auf den berechneten Stilen eines Elements.

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
