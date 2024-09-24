---
title: GamepadButton
slug: Web/API/GamepadButton
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

Die **`GamepadButton`**-Schnittstelle definiert eine einzelne Taste eines Gamepads oder eines anderen Controllers und ermöglicht den Zugriff auf den aktuellen Zustand verschiedener Tastentypen, die auf dem Steuergerät verfügbar sind.

Ein `GamepadButton`-Objekt wird zurückgegeben, wenn Sie einen beliebigen Wert des Arrays abfragen, das von der `buttons`-Eigenschaft der {{domxref("Gamepad")}}-Schnittstelle zurückgegeben wird.

## Instanzeigenschaften

- {{domxref("GamepadButton.pressed")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Taste derzeit gedrückt (`true`) oder ungedrückt (`false`) ist.
- {{domxref("GamepadButton.touched")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Taste derzeit berührt (`true`) oder nicht berührt (`false`) ist.
- {{domxref("GamepadButton.value")}} {{ReadOnlyInline}}
  - : Ein Double-Wert, der verwendet wird, um den aktuellen Zustand von analogen Tasten zu repräsentieren, wie z.B. die Trigger-Tasten auf vielen modernen Gamepads. Die Werte sind im Bereich 0,0–1,0 normalisiert, wobei 0,0 eine Taste repräsentiert, die nicht gedrückt ist, und 1,0 eine Taste, die vollständig gedrückt ist.

## Beispiel

Die Tastenwerte im folgenden Beispiel werden als ein Array von `GamepadButton`-Objekten gespeichert. Dieses einfache Beispiel prüft, ob der {{domxref("GamepadButton.value")}} einer Taste größer als `0` ist oder ob die {{domxref("GamepadButton.pressed")}}-Eigenschaft angibt, dass die Taste gedrückt wurde.

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
