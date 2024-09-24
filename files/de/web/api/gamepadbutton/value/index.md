---
title: "GamepadButton: Wert-Eigenschaft"
short-title: Wert
slug: Web/API/GamepadButton/value
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`GamepadButton.value`**-Eigenschaft der
{{domxref("GamepadButton")}}-Schnittstelle gibt einen double-Wert zurück, der verwendet wird, um den aktuellen Zustand von analogen Tasten auf vielen modernen Gamepads darzustellen, wie z.B. den Triggern.

Die Werte sind im Bereich von `0.0` bis `1.0` normalisiert, wobei
`0.0` eine Taste darstellt, die nicht gedrückt ist, und `1.0` eine
Taste, die vollständig gedrückt ist.

## Beispiele

```js
let gp = navigator.getGamepads()[0];

if (gp.buttons[0].value > 0) {
  // reagieren, wenn die analoge Taste gedrückt wird
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
