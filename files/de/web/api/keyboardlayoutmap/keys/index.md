---
title: "KeyboardLayoutMap: keys() Methode"
short-title: keys()
slug: Web/API/KeyboardLayoutMap/keys
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`keys()`** Methode der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel für jeden Index im `KeyboardLayoutMap` Objekt enthält.

Ansonsten ist die Methode identisch mit {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Rückgabewert

Ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt.

## Beispiele

Das folgende Beispiel iteriert über jeden Tastaturcode auf einer englischen QWERTY-Tastatur.

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
