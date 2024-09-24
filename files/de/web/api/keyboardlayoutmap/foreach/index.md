---
title: "KeyboardLayoutMap: forEach()-Methode"
short-title: forEach()
slug: Web/API/KeyboardLayoutMap/forEach
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`forEach()`**-Methode der
{{domxref('KeyboardLayoutMap')}}-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes Element der Map aus.

Die Methode entspricht ansonsten der {{jsxref("Map.prototype.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die Funktion, die für jedes Element ausgeführt wird, nimmt drei Argumente entgegen:

    - `currentValue`
      - : Der Wert des aktuell verarbeiteten Elements.
    - `index` {{optional_inline}}
      - : Der Index des aktuell verarbeiteten Elements.
    - `array` {{optional_inline}}
      - : Die KeyboardLayoutMap, auf die `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das Referenz-`Objekt`) beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keinen ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel iteriert über jeden positions- oder layoutspezifischen String und den dazugehörigen Tastaturcode auf einer englischen QWERTY-Tastatur.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  keyboardLayoutMap.forEach((key, code) => {
    console.log(`${code} keyboard code represents ${key} key`);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.forEach()")}}
