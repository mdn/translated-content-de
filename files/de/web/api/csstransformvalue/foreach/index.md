---
title: "CSSTransformValue: forEach() Methode"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSTransformValue.forEach()`**-Methode führt eine bereitgestellte Funktion einmal für jedes Element des `CSSTransformValue` aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Die Funktion, die für jedes Element ausgeführt wird und drei Argumente erhält:
    - `currentValue`
      - : Der Wert des aktuellen Elements, das verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das verarbeitet wird.
    - `array` {{optional_inline}}
      - : Der `CSSTransformValue`, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das referenzierte `Object`) beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Noch zu erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
