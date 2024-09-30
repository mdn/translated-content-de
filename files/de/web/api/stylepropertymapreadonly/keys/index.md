---
title: "StylePropertyMapReadOnly: Methode keys()"
short-title: keys()
slug: Web/API/StylePropertyMapReadOnly/keys
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.keys()`**-Methode gibt einen neuen
_Array-Iterator_ zurück, der die Schlüssel für jedes Element in `StylePropertyMapReadOnly` enthält.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Array")}}.

## Beispiele

In diesem Beispiel verwenden wir die `keys()`-Methode, um auf die
Eigenschaften innerhalb unseres [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zugreifen zu können.

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
