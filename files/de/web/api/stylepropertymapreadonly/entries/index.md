---
title: "StylePropertyMapReadOnly: entries() Methode"
short-title: entries()
slug: Web/API/StylePropertyMapReadOnly/entries
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.entries()`** Methode gibt ein
Array der eigenen aufzählbaren Eigenschaften `[key, value]` eines Objekts zurück, in
derselben Reihenfolge wie bei einer {{jsxref("Statements/for...in", "for...in")}} Schleife
(die Differenz besteht darin, dass eine for-in Schleife auch die Eigenschaften in der Prototyp-Kette aufzählt).

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der eigenen aufzählbaren Eigenschaften `[key, value]` des gegebenen `StylePropertyMapReadOnly` Objekts.

## Beispiele

Hier zeigt sich ein Beispiel der Verwendung der `StylePropertyMapReadOnly.entries()` Methode
auf die berechneten Stile eines Elements.

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
