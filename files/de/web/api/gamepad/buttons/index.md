---
title: "Gamepad: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/Gamepad/buttons
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Gamepad API")}}

Die schreibgeschützte Eigenschaft **`buttons`** des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten zurück, die die Tasten des Geräts repräsentieren.

Jeder Eintrag im Array ist `0`, wenn die Taste nicht gedrückt ist, und ungleich null (üblicherweise `1.0`), wenn sie gedrückt ist.

## Wert

Ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten.

## Beispiele

Je nach Tastentyp müssen wir auf die Eigenschaften [`GamepadButton.value`](/de/docs/Web/API/GamepadButton/value) oder [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed) zugreifen. Dieses Beispiel unterstützt beide:

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

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
