---
title: "Gamepad: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/Gamepad/buttons
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.buttons`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten zurück, die die auf dem Gerät vorhandenen Tasten darstellen.

Jeder Eintrag im Array ist 0, wenn die Taste nicht gedrückt ist, und ungleich null (typischerweise 1.0), wenn die Taste gedrückt ist. Jedes [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekt verfügt über zwei Eigenschaften: `pressed` und `value`:

- Die `pressed`-Eigenschaft ist ein boolescher Wert, der angibt, ob die Taste derzeit gedrückt (`true`) oder ungedrückt (`false`) ist.
- Die `value`-Eigenschaft ist ein Gleitkommawert, der verwendet wird, um analoge Tasten darzustellen, wie z. B. die Trigger vieler moderner Gamepads. Die Werte sind auf den Bereich 0.0 – 1.0 normiert, wobei 0.0 eine Taste darstellt, die nicht gedrückt ist, und 1.0 eine Taste, die vollständig gedrückt ist.

## Wert

Ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten.

## Beispiele

Der folgende Code stammt aus meinem Gamepad-API-Tasten-Demo (Sie können [das Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und [den Quellcode finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master) auf GitHub.) Beachten Sie den Fork im Code — in Chrome benötigt [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) ein `webkit`-Präfix und die Tastendrücke werden als ein Array von Doppelwerten gespeichert, während in Firefox [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) kein Präfix benötigt wird und die Tastendrücke als ein Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten gespeichert werden; wir müssen auf die [`GamepadButton.value`](/de/docs/Web/API/GamepadButton/value) oder [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed) Eigenschaften dieser Objekte zugreifen, abhängig davon, was für Tasten es sind. In diesem einfachen Beispiel habe ich einfach beide Optionen zugelassen.

```js
function gameLoop() {
  let a = 0;
  let b = 0;
  if (navigator.webkitGetGamepads) {
    const gp = navigator.webkitGetGamepads()[0];

    if (gp.buttons[0] === 1) {
      b--;
    } else if (gp.buttons[1] === 1) {
      a++;
    } else if (gp.buttons[2] === 1) {
      b++;
    } else if (gp.buttons[3] === 1) {
      a--;
    }
  } else {
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
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  const start = rAF(gameLoop);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
