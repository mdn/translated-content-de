---
title: "KeyboardLayoutMap: entries() Methode"
short-title: entries()
slug: Web/API/KeyboardLayoutMap/entries
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`entries()`** Methode der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel/Wert-Paare enthält, in der gleichen Reihenfolge, wie sie durch eine {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine `for-in` Schleife Eigenschaften in der Prototypkette aufzählt).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.entries()")}}.

## Wert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt.

## Beispiele

Das folgende Beispiel durchläuft jeden positions- oder layout-spezifischen String und seinen zugehörigen Tastaturcode auf einer englischen QWERTY-Tastatur.

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
