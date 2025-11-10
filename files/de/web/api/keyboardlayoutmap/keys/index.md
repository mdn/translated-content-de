---
title: "KeyboardLayoutMap: keys() Methode"
short-title: keys()
slug: Web/API/KeyboardLayoutMap/keys
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`keys()`** Methode des [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel für jeden Index im `KeyboardLayoutMap`-Objekt enthält.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt.

## Beispiele

Das folgende Beispiel durchläuft jeden Keyboard-Code auf einer englischen QWERTY-Tastatur.

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
