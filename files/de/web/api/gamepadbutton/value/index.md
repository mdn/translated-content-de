---
title: "GamepadButton: value-Eigenschaft"
short-title: value
slug: Web/API/GamepadButton/value
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`GamepadButton.value`**-Eigenschaft des [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Interfaces gibt einen double-Wert zurück, der den aktuellen Zustand der analogen Tasten auf vielen modernen Gamepads, wie z.B. den Triggern, repräsentiert.

Die Werte sind auf den Bereich `0.0` — `1.0` normalisiert, wobei `0.0` eine Taste darstellt, die nicht gedrückt ist, und `1.0` eine Taste, die vollständig gedrückt ist.

## Beispiele

```js
let gp = navigator.getGamepads()[0];

if (gp.buttons[0].value > 0) {
  // respond to analog button being pressed in
}
```

## Wert

Ein double.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
