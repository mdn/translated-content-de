---
title: "GamepadButton: value-Eigenschaft"
short-title: value
slug: Web/API/GamepadButton/value
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die Eigenschaft **`GamepadButton.value`** der Schnittstelle [`GamepadButton`](/de/docs/Web/API/GamepadButton) gibt einen Double-Wert zurück, der den aktuellen Zustand analoger Tasten vieler moderner Gamepads darstellt, beispielsweise der Trigger.

Die Werte sind auf den Bereich von `0.0` bis `1.0` normiert. Dabei steht `0.0` für eine nicht gedrückte Taste und `1.0` für eine vollständig gedrückte Taste.

## Wert

Ein Double-Wert.

## Beispiele

```js
let gp = navigator.getGamepads()[0];

if (gp.buttons[0].value > 0) {
  // respond to analog button being pressed in
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
