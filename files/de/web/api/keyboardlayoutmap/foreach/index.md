---
title: "KeyboardLayoutMap: forEach() Methode"
short-title: forEach()
slug: Web/API/KeyboardLayoutMap/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`forEach()`** Methode des
[`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Interfaces führt eine bereitgestellte Funktion einmal für jedes Element der Map aus.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Die Funktion, die für jedes Element ausgeführt wird, nimmt drei Argumente:
    - `currentValue`
      - : Der Wert des aktuell verarbeiteten Elements.
    - `index` {{optional_inline}}
      - : Der Index des aktuell verarbeiteten Elements.
    - `array` {{optional_inline}}
      - : Das KeyboardLayoutMap, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d.h. das Referenzobjekt `Object`) verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel iteriert über jeden orts- oder layout-spezifischen String und dessen zugehörigen Tastaturcode auf einer englischen QWERTY-Tastatur.

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
