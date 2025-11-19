---
title: "StylePropertyMapReadOnly: forEach() Methode"
short-title: forEach()
slug: Web/API/StylePropertyMapReadOnly/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.forEach()`** Methode führt eine bereitgestellte Funktion einmal für jedes Element von [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Die Funktion, die für jedes Element ausgeführt wird und drei Argumente annimmt:
    - `currentValue`
      - : Der Wert des aktuellen Elements, das verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das verarbeitet wird.
    - `array` {{optional_inline}}
      - : Das StylePropertyMapReadOnly, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das Referenz`Object`) verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Hier ist ein Beispiel für die Verwendung von `forEach()` auf einem abgerufenen [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap).

```js
// get a button element
const buttonEl = document.querySelector(".example");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// forEach will allow us to run code over each prop/val pair
allComputedStyles.forEach((elem, index, arr) => {
  // code to run for each pair
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
