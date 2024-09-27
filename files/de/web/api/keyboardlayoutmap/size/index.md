---
title: "KeyboardLayoutMap: size-Eigenschaft"
short-title: size
slug: Web/API/KeyboardLayoutMap/size
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die schreibgeschützte **`size`**-Eigenschaft der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle gibt die Anzahl der Elemente in der Map zurück.

Die Eigenschaft ist ansonsten identisch mit {{jsxref("Map.prototype.size")}}.

## Wert

Eine Zahl.

## Beispiele

Das folgende Beispiel ermittelt die Anzahl der orts- oder layoutspezifischen Zeichenfolgen und den zugehörigen Tastaturcode auf einer englischen QWERTY-Tastatur.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  console.log(keyboardLayoutMap.size);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.size")}}
