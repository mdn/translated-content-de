---
title: "GamepadButton: Eigenschaft pressed"
short-title: pressed
slug: Web/API/GamepadButton/pressed
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`GamepadButton.pressed`** Eigenschaft des
{{domxref("GamepadButton")}} Interfaces gibt einen `boolean` zurück, der angibt, ob der Button derzeit gedrückt (`true`) oder nicht gedrückt (`false`) ist.

## Beispiele

```js
let gp = navigator.getGamepads()[0]; // Das erste Gamepad-Objekt abrufen

if (gp.buttons[0].pressed) {
  // auf den Druck des Buttons reagieren
}
```

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
