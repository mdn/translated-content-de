---
title: "StylePropertyMapReadOnly: entries()-Methode"
short-title: entries()
slug: Web/API/StylePropertyMapReadOnly/entries
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.entries()`**-Methode gibt ein Array von eigenen aufzählbaren `[key, value]` Paaren eines gegebenen Objekts zurück, in der gleichen Reihenfolge, wie sie von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine for-in Schleife auch Eigenschaften in der Prototypenkette aufzählt).

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von eigenen aufzählbaren `[key, value]` Paaren des gegebenen `StylePropertyMapReadOnly`-Objekts.

## Beispiele

Hier ist ein Beispiel für die Verwendung der `StylePropertyMapReadOnly.entries()`-Methode auf den berechneten Stilen eines Elements.

```js
// ein DOM-Element abrufen
const buttonEl = document.querySelector("button");

// wir können alle berechneten Stile mit `computedStyleMap` abrufen
const allComputedStyles = buttonEl.computedStyleMap();

// entries gibt ein iterierbares Objekt der Einträge zurück
const iterableStyles = allComputedStyles.entries();

// gibt ein Zweielemente-Array mit align-content als erstem Element und CSSStyleValue als zweitem zurück
console.log(iterableStyles.next().value);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
