---
title: "StylePropertyMapReadOnly: forEach()-Methode"
short-title: forEach()
slug: Web/API/StylePropertyMapReadOnly/forEach
l10n:
  sourceCommit: f2efc69d9d59a3306b3947963e17ba064a0c74df
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.forEach()`**-Methode führt eine gegebene Funktion für jedes Element von [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) einmal aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die auszuführende Funktion für jedes Element, mit drei Argumenten:

    - `currentValue`
      - : Der Wert des aktuellen Elements, das verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das verarbeitet wird.
    - `array` {{optional_inline}}
      - : Das StylePropertyMapReadOnly, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h., die Referenz
    `Object`) bei der Ausführung von `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
