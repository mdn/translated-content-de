---
title: "InputDeviceCapabilities: firesTouchEvents-Eigenschaft"
short-title: firesTouchEvents
slug: Web/API/InputDeviceCapabilities/firesTouchEvents
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`firesTouchEvents`** des [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Gerät `touch events` auslöst.

Diese Eigenschaft kann verwendet werden, um `mouse events` zu erkennen, die eine Aktion repräsentieren, die möglicherweise bereits von `touch event handlers` behandelt wurde. Dies bedeutet nicht unbedingt, dass das Gerät ein Touchscreen ist. Beispielsweise erzeugen Stift- und Mausgeräte typischerweise `touch events` auf mobilen Browsern.

## Syntax

```js-nolint
const boolean = InputDeviceCapabilities.firesTouchEvents
```

### Rückgabewert

Ein {{jsxref('Boolean')}}

## Beispiel

```js
myButton.addEventListener("mousedown", (e) => {
  if (!e.sourceCapabilities.firesTouchEvents) myButton.classList.add("pressed");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
