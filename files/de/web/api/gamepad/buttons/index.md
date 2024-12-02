---
title: "Gamepad: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/Gamepad/buttons
l10n:
  sourceCommit: a19115a6b43db8d00fe78df9da34e0f89326ef9e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`buttons`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten zurück, welche die auf dem Gerät vorhandenen Tasten repräsentieren.

Jeder Eintrag im Array ist `0`, wenn die Taste nicht gedrückt ist, und ungleich null (typischerweise `1.0`), wenn die Taste gedrückt ist.

Jedes [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekt hat zwei Eigenschaften:

- `pressed`

  - : Ein boolescher Wert, der angibt, ob die Taste derzeit gedrückt (`true`) oder nicht gedrückt (`false`) ist.

- `value`

  - : Ein Gleitkommawert, der zur Darstellung analoger Tasten verwendet wird, wie zum Beispiel den Triggern auf vielen modernen Gamepads. Die Werte sind normalisiert auf den Bereich von 0,0 bis 1,0, wobei 0,0 eine nicht gedrückte Taste und 1,0 eine vollständig gedrückte Taste repräsentiert.

## Wert

Ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten.

## Beispiele

Abhängig vom Typ der Taste müssen wir auf die Eigenschaften [`GamepadButton.value`](/de/docs/Web/API/GamepadButton/value) oder [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed) zugreifen. Dieses
Beispiel unterstützt beide:

```js
function gameLoop() {
  const gp = navigator.getGamepads()[0];

  if (gp.buttons[0].value > 0 || gp.buttons[0].pressed) {
    b--;
  } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
    a++;
  } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
    b++;
  } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
    a--;
  }

  ball.style.left = `${a * 2}px`; // ball is a UI widget
  ball.style.top = `${b * 2}px`;

  requestAnimationFrame(gameLoop);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
