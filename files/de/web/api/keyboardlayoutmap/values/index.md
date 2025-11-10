---
title: "KeyboardLayoutMap: `values()`-Methode"
short-title: values()
slug: Web/API/KeyboardLayoutMap/values
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`values()`**-Methode der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte für jeden Index im `KeyboardLayoutMap`-Objekt enthält.

Ansonsten ist die Methode identisch mit {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt.

## Beispiele

Das folgende Beispiel iteriert über jeden orts- oder layoutspezifischen String auf einer englischen QWERTY-Tastatur.

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
