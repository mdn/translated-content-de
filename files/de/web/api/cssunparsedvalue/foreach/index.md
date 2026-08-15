---
title: "CSSUnparsedValue: forEach()-Methode"
short-title: forEach()
slug: Web/API/CSSUnparsedValue/forEach
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`forEach()`**-Methode der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes Element im Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Die Funktion, die für jedes Element ausgeführt wird, mit drei Argumenten:
    - `currentValue`
      - : Das Element, das gerade verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das verarbeitet wird.
    - `array` {{optional_inline}}
      - : Das `CSSUnparsedValue`, auf das `forEach()` aufgerufen wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet werden soll, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Iteration mit forEach()

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

value.forEach((fragment, index) => {
  console.log(index, fragment);
});
// 0 "1em"
// 1 "#445566"
// 2 "-45px"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
