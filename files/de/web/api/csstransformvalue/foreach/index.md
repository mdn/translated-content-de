---
title: "CSSTransformValue: forEach()-Methode"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{APIRef("CSS Typed OM")}}

Die **`CSSTransformValue.forEach()`**-Methode führt eine bereitgestellte Funktion einmal für jedes Element des `CSSTransformValue` aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die Funktion, die für jedes Element ausgeführt werden soll, nimmt drei Argumente:

    - `currentValue`
      - : Der Wert des aktuellen Elements, das verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das verarbeitet wird.
    - `array` {{optional_inline}}
      - : Das `CSSTransformValue`, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das Referenz-`Object`) beim Ausführen des `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Noch erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
