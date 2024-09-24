---
title: "CSSTransformValue: forEach()-Methode"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformValue.forEach()`**-Methode führt eine angegebene Funktion einmal für jedes Element von `CSSTransformValue` aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die Funktion, die für jedes Element auszuführen ist, mit drei Argumenten:

    - `currentValue`
      - : Der Wert des aktuellen Elements, das verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das verarbeitet wird.
    - `array` {{optional_inline}}
      - : Der `CSSTransformValue`, auf den `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das Referenz-`Object`) beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In Arbeit

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
