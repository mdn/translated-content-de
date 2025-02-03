---
title: "KeyboardLayoutMap: Methode entries()"
short-title: entries()
slug: Web/API/KeyboardLayoutMap/entries
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`entries()`**-Methode der Schnittstelle [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel/Wert-Paare enthält, in derselben Reihenfolge wie sie von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird (mit dem Unterschied, dass eine `for-in`-Schleife auch Eigenschaften in der Prototyp-Kette aufzählt).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Rückgabewert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt.

## Beispiele

Das folgende Beispiel iteriert über jeden standort- oder layoutspezifischen String und seinen zugehörigen Tastaturcode auf einer englischen QWERTY-Tastatur.

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
