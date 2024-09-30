---
title: "GamepadButton: value-Eigenschaft"
short-title: value
slug: Web/API/GamepadButton/value
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`GamepadButton.value`**-Eigenschaft der [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Schnittstelle gibt einen double-Wert zurück, der den aktuellen Zustand von analogen Tasten auf vielen modernen Gamepads, wie z.B. den Triggern, darstellt.

Die Werte sind auf den Bereich `0.0` — `1.0` normalisiert, wobei `0.0` eine nicht gedrückte Taste und `1.0` eine vollständig gedrückte Taste repräsentiert.

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

[Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
