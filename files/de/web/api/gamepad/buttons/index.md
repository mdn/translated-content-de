---
title: "Gamepad: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/Gamepad/buttons
l10n:
  sourceCommit: 96684b51c8dec7978ac959e82a6b6e512936c30d
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`buttons`**-Eigenschaft der [`Gamepad`](/de/docs/Web/API/Gamepad)-Schnittstelle gibt ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten zurück, die die auf dem Gerät vorhandenen Tasten repräsentieren.

Jeder Eintrag im Array ist `0`, wenn die Taste nicht gedrückt ist, und ungleich null (typischerweise `1.0`), wenn die Taste gedrückt ist.

## Wert

Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten.

## Beispiele

Je nach Art der Taste müssen wir auf die Eigenschaften [`GamepadButton.value`](/de/docs/Web/API/GamepadButton/value) oder [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed) zugreifen. Dieses
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

[Die Gamepad-API verwenden](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
