---
title: "InputDeviceCapabilities: firesTouchEvents Eigenschaft"
short-title: firesTouchEvents
slug: Web/API/InputDeviceCapabilities/firesTouchEvents
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die **`firesTouchEvents`** schreibgeschützte Eigenschaft der [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das Gerät Touch-Events auslöst.

Sie können diese Eigenschaft verwenden, um Mausereignisse zu erkennen, die eine Aktion darstellen könnten, die möglicherweise bereits von Touch-Event-Handlern behandelt wurde. Dies bedeutet nicht unbedingt, dass das Gerät ein Touchscreen ist. Zum Beispiel erzeugen Stift- und Mausgeräte in mobilen Browsern typischerweise Touch-Events.

## Wert

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
