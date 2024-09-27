---
title: "KeyboardLayoutMap: keys() Methode"
short-title: keys()
slug: Web/API/KeyboardLayoutMap/keys
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`keys()`** Methode der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel für jeden Index im `KeyboardLayoutMap` Objekt enthält.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.keys()")}}.

## Wert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt.

## Beispiele

Das folgende Beispiel iteriert jeden Tastaturcode auf einer englischen QWERTY-Tastatur.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const code of keyboardLayoutMap.keys()) {
    console.log(`${code} keyboard code`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.keys()")}}
