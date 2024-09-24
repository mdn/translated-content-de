---
title: "KeyboardLayoutMap: Eigenschaft size"
short-title: size
slug: Web/API/KeyboardLayoutMap/size
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`size`**-Eigenschaft der {{domxref("KeyboardLayoutMap")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Anzahl der Elemente in der Map zurückgibt.

Die Eigenschaft entspricht ansonsten {{jsxref("Map.prototype.size")}}.

## Wert

Eine Zahl.

## Beispiele

Im folgenden Beispiel wird die Anzahl des orts- oder layoutspezifischen Strings und dessen zugehörigem Tastaturcode auf einer englischen QWERTY-Tastatur ermittelt.

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
