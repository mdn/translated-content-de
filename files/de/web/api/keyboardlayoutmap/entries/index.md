---
title: "KeyboardLayoutMap: entries() Methode"
short-title: entries()
slug: Web/API/KeyboardLayoutMap/entries
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`entries()`** Methode der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel/Werte-Paare in der gleichen Reihenfolge enthält wie der von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellte (der Unterschied besteht darin, dass eine `for-in` Schleife auch Eigenschaften in der Prototypkette aufzählt).

Die Methode entspricht ansonsten {{jsxref("Map.prototype.entries()")}}.

## Wert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt.

## Beispiele

Das folgende Beispiel iteriert über jeden orts- oder layoutspezifischen String und dessen zugehörigen Tastencode auf einer englischen QWERTY-Tastatur.

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
