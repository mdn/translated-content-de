---
title: "StylePropertyMapReadOnly: forEach()-Methode"
short-title: forEach()
slug: Web/API/StylePropertyMapReadOnly/forEach
l10n:
  sourceCommit: f2efc69d9d59a3306b3947963e17ba064a0c74df
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.forEach()`**-Methode führt eine bereitgestellte Funktion einmal für jedes Element von {{domxref('StylePropertyMapReadOnly')}} aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die Funktion, die für jedes Element ausgeführt wird, sie nimmt drei Argumente:

    - `currentValue`
      - : Der Wert des aktuell verarbeiteten Elements.
    - `index` {{optional_inline}}
      - : Der Index des aktuell verarbeiteten Elements.
    - `array` {{optional_inline}}
      - : Das StylePropertyMapReadOnly, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das Referenz-`Object`) beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Hier ist ein Beispiel für die Verwendung von `forEach()` auf einer abgerufenen
{{domxref('Element.computedStyleMap()')}}.

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

## Browserkompatibilität

{{Compat}}
