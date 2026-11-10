---
title: "GamepadButton: pressed-Eigenschaft"
short-title: pressed
slug: Web/API/GamepadButton/pressed
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die Eigenschaft **`GamepadButton.pressed`** der Schnittstelle [`GamepadButton`](/de/docs/Web/API/GamepadButton) gibt einen `boolean`-Wert zurück, der angibt, ob die Taste derzeit gedrückt (`true`) oder nicht gedrückt (`false`) ist.

## Wert

Ein boolescher Wert.

## Beispiele

```js
let gp = navigator.getGamepads()[0]; // Get the first gamepad object

if (gp.buttons[0].pressed) {
  // respond to button being pressed
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
