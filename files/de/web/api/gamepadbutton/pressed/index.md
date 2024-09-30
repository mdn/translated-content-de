---
title: "GamepadButton: pressed-Eigenschaft"
short-title: pressed
slug: Web/API/GamepadButton/pressed
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`GamepadButton.pressed`**-Eigenschaft des [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Interfaces gibt einen `boolean` zurück, der anzeigt, ob der Knopf derzeit gedrückt (`true`) oder nicht gedrückt (`false`) ist.

## Beispiele

```js
let gp = navigator.getGamepads()[0]; // Get the first gamepad object

if (gp.buttons[0].pressed) {
  // respond to button being pressed
}
```

## Wert

Ein boolean-Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
