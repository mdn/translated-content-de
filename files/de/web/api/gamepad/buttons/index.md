---
title: "Gamepad: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/Gamepad/buttons
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.buttons`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad) Interfaces gibt ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten zurück, die die auf dem Gerät vorhandenen Tasten darstellen.

Jeder Eintrag im Array ist 0, wenn die Taste nicht gedrückt ist, und ungleich null (typischerweise 1.0), wenn die Taste gedrückt ist. Jedes [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekt hat zwei Eigenschaften: `pressed` und `value`:

- Die `pressed`-Eigenschaft ist ein boolescher Wert, der angibt, ob die Taste momentan gedrückt (`true`) oder ungedrückt (`false`) ist.
- Die `value`-Eigenschaft ist ein Gleitkommawert, der verwendet wird, um analoge Tasten zu repräsentieren, wie zum Beispiel die Trigger auf vielen modernen Gamepads. Die Werte sind normalisiert im Bereich von 0.0 bis 1.0, wobei 0.0 eine Taste darstellt, die nicht gedrückt ist, und 1.0 eine Taste, die vollständig gedrückt ist.

## Wert

Ein Array aus [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten.

## Beispiele

Der folgende Code stammt aus meinem Gamepad API Button-Demo (Sie können sich das [Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/) und den [Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)). Beachten Sie den Code-Fork: In Chrome benötigt [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) ein `webkit` Präfix und die Tastenwerte werden als Array von Double-Werten gespeichert, während in Firefox [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) kein Präfix benötigt wird und die Tastenwerte als Array von [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten gespeichert werden; es sind die [`GamepadButton.value`](/de/docs/Web/API/GamepadButton/value) oder [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed) Eigenschaften dieser, auf die wir zugreifen müssen, je nachdem, welche Art von Tasten sie sind. In diesem einfachen Beispiel habe ich einfach beide zugelassen.

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
