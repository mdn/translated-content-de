---
title: "KeyboardLayoutMap: entries() Methode"
short-title: entries()
slug: Web/API/KeyboardLayoutMap/entries
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`entries()`** Methode des [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) Interface gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel/Wert-Paare im gleichen Reihenfolge enthält, die von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine `for-in` Schleife auch Eigenschaften in der Prototypkette auflistet).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt.

## Beispiele

Das folgende Beispiel durchläuft jeden orts- oder layout-spezifischen String und den zugehörigen Tastaturcode auf einer englischen QWERTY-Tastatur.

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
