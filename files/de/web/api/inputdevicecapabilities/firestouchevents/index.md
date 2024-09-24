---
title: "InputDeviceCapabilities: firesTouchEvents-Eigenschaft"
short-title: firesTouchEvents
slug: Web/API/InputDeviceCapabilities/firesTouchEvents
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`firesTouchEvents`** des {{domxref("InputDeviceCapabilities")}}-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Gerät Touch-Events auslöst.

Sie können diese Eigenschaft verwenden, um Mausereignisse zu erkennen, die eine Aktion darstellen können, die möglicherweise bereits von Touch-Event-Handlern behandelt wurde. Dies bedeutet nicht unbedingt, dass das Gerät ein Touchscreen ist. Beispielsweise erzeugen Stylus- und Mausgeräte typischerweise Touch-Events in mobilen Browsern.

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
