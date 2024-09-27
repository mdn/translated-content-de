---
title: "CSSTransformValue: forEach()-Methode"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformValue.forEach()`**-Methode führt eine bereitgestellte Funktion einmal für jedes Element von `CSSTransformValue` aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die Funktion, die für jedes Element ausgeführt wird, mit drei Argumenten:

    - `currentValue`
      - : Der Wert des aktuellen, verarbeiteten Elements.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen, verarbeiteten Elements.
    - `array` {{optional_inline}}
      - : Der `CSSTransformValue`, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (also das referenzierte `Object`) beim Ausführen des `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

To Do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
