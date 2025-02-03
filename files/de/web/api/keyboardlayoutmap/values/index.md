---
title: "KeyboardLayoutMap: values() Methode"
short-title: values()
slug: Web/API/KeyboardLayoutMap/values
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`values()`** Methode des [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) Interfaces gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte für jeden Index im `KeyboardLayoutMap` Objekt enthält.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt.

## Beispiele

Das folgende Beispiel durchläuft jeden orts- oder layoutspezifischen String auf einer englischen QWERTY-Tastatur.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const key of keyboardLayoutMap.values()) {
    console.log(`${key} key`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.values()")}}
