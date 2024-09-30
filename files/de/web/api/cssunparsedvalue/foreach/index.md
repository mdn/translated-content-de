---
title: "CSSUnparsedValue: forEach()-Methode"
short-title: forEach()
slug: Web/API/CSSUnparsedValue/forEach
l10n:
  sourceCommit: f2efc69d9d59a3306b3947963e17ba064a0c74df
---

{{APIRef("CSS Typed OM")}}

Die **`CSSUnparsedValue.forEach()`**-Methode
führt eine bereitgestellte Funktion einmal für jedes Element der
[`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die Funktion, die für jedes Element ausgeführt werden soll und drei Argumente entgegennimmt:

    - `currentValue`
      - : Der Wert des aktuellen Elements, das verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das verarbeitet wird.
    - `array` {{optional_inline}}
      - : Die `CSSUnparsedValue`, auf der `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das Referenz
    `Object`) beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.entries`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.keys`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
