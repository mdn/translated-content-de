---
title: "KeyboardLayoutMap: values()-Methode"
short-title: values()
slug: Web/API/KeyboardLayoutMap/values
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`values()`**-Methode des [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Interfaces gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte für jeden Index im `KeyboardLayoutMap`-Objekt enthält.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.values()")}}.

## Wert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt.

## Beispiele

Das folgende Beispiel iteriert jede orts- oder layout-spezifische Zeichenfolge auf einer englischen QWERTY-Tastatur.

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
