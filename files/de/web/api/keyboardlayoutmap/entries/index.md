---
title: "KeyboardLayoutMap: Methode entries()"
short-title: entries()
slug: Web/API/KeyboardLayoutMap/entries
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`entries()`**-Methode der {{domxref("KeyboardLayoutMap")}}-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel/Wert-Paare in der gleichen Reihenfolge enthält, wie sie durch eine {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt werden (der Unterschied besteht darin, dass eine `for-in`-Schleife auch Eigenschaften in der Prototyp-Kette aufzählt).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.entries()")}}.

## Wert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt.

## Beispiele

Das folgende Beispiel iteriert über jeden orts- oder layoutspezifischen String und dessen zugeordneten Tastaturcode auf einer englischen QWERTY-Tastatur.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  for (const [code, key] of keyboardLayoutMap.entries()) {
    console.log(`${code} keyboard code represents ${key} key`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.entries()")}}
