---
title: "Gamepad: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/Gamepad/buttons
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.buttons`**-Eigenschaft des {{domxref("Gamepad")}}-Interfaces gibt ein Array von {{domxref("gamepadButton")}}-Objekten zurück, die die auf dem Gerät vorhandenen Tasten repräsentieren.

Jeder Eintrag im Array ist 0, wenn die Taste nicht gedrückt ist, und ungleich null (typischerweise 1.0), wenn die Taste gedrückt ist. Jedes {{domxref("gamepadButton")}}-Objekt hat zwei Eigenschaften: `pressed` und `value`:

- Die `pressed`-Eigenschaft ist ein Boolean, der angibt, ob die Taste momentan gedrückt (`true`) oder nicht gedrückt (`false`) ist.
- Die `value`-Eigenschaft ist ein Gleitkommawert, der zur Darstellung von analogen Tasten verwendet wird, wie z. B. die Trigger bei vielen modernen Gamepads. Die Werte sind auf den Bereich 0.0 – 1.0 normiert, wobei 0.0 für eine nicht gedrückte Taste und 1.0 für eine vollständig gedrückte Taste steht.

## Wert

Ein Array von {{domxref("gamepadButton")}}-Objekten.

## Beispiele

Der folgende Code ist aus meinem Gamepad-API-Button-Demo entnommen (Sie können sich das [Demo live ansehen](https://chrisdavidmills.github.io/gamepad-buttons/), und den [Quellcode auf GitHub finden](https://github.com/chrisdavidmills/gamepad-buttons/tree/master). Beachten Sie den Code-Fork — in Chrome benötigt {{domxref("Navigator.getGamepads")}} ein `webkit`-Präfix und die Tastenwerte werden als Array von Doppelwerten gespeichert, während in Firefox {{domxref("Navigator.getGamepads")}} kein Präfix benötigt wird und die Tastenwerte als Array von {{domxref("GamepadButton")}}-Objekten gespeichert werden; es sind die {{domxref("GamepadButton.value")}} oder {{domxref("GamepadButton.pressed")}} Eigenschaften, auf die wir zugreifen müssen, abhängig davon, welche Art von Tasten sie sind. In diesem einfachen Beispiel habe ich beide Optionen erlaubt.

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
