---
title: "KeyboardLayoutMap: forEach()-Methode"
short-title: forEach()
slug: Web/API/KeyboardLayoutMap/forEach
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`forEach()`**-Methode des
[`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Interfaces führt eine bereitgestellte Funktion einmal für jedes Element der Karte aus.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Die Funktion, die für jedes Element ausgeführt werden soll, mit drei Argumenten:

    - `currentValue`
      - : Der Wert des aktuell verarbeiteten Elements.
    - `index` {{optional_inline}}
      - : Der Index des aktuell verarbeiteten Elements.
    - `array` {{optional_inline}}
      - : Das KeyboardLayoutMap, auf dem `forEach()` aufgerufen wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als **`this`** (d. h. die Referenz
    `Object`) beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel iteriert über jeden standort- oder layout-spezifischen String und seinen zugehörigen Tastaturcode auf einer englischen QWERTY-Tastatur.

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
