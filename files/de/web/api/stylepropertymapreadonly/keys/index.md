---
title: "StylePropertyMapReadOnly: keys()-Methode"
short-title: keys()
slug: Web/API/StylePropertyMapReadOnly/keys
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.keys()`**-Methode gibt einen neuen _Array-Iterator_ zurück, der die Schlüssel für jedes Element in `StylePropertyMapReadOnly` enthält.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Array")}}.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die `keys()`-Methode, um auf die Eigenschaften innerhalb von [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zuzugreifen.

```js
// get a button element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// keys returns an iterable list of properties
const props = allComputedStyles.keys();
console.log(props.next().value); // returns align-content
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
