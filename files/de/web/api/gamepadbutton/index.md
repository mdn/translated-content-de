---
title: GamepadButton
slug: Web/API/GamepadButton
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

Die **`GamepadButton`**-Schnittstelle definiert eine einzelne Taste eines Gamepads oder eines anderen Controllers und ermöglicht den Zugriff auf den aktuellen Zustand verschiedener Tastenarten, die auf dem Steuergerät verfügbar sind.

Ein `GamepadButton`-Objekt wird zurückgegeben, indem ein beliebiger Wert des Arrays abgefragt wird, das durch die `buttons`-Eigenschaft der [`Gamepad`](/de/docs/Web/API/Gamepad)-Schnittstelle zurückgegeben wird.

## Instanzeigenschaften

- [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Taste derzeit gedrückt (`true`) oder nicht gedrückt (`false`) ist.
- [`GamepadButton.touched`](/de/docs/Web/API/GamepadButton/touched) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Taste derzeit berührt (`true`) oder nicht berührt (`false`) ist.
- [`GamepadButton.value`](/de/docs/Web/API/GamepadButton/value) {{ReadOnlyInline}}
  - : Ein Doppelwert, der verwendet wird, um den aktuellen Zustand von analogen Tasten darzustellen, wie z.B. die Trigger vieler moderner Gamepads. Die Werte sind normalisiert auf den Bereich von 0,0 bis 1,0, wobei 0,0 eine Taste repräsentiert, die nicht gedrückt ist, und 1,0 eine vollständig gedrückte Taste.

## Beispiel

Die Tastenwerte im folgenden Beispiel werden als Array von `GamepadButton`-Objekten gespeichert. Dieses einfache Beispiel überprüft, ob der [`GamepadButton.value`](/de/docs/Web/API/GamepadButton/value) einer Taste größer als `0` ist oder ob die [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed)-Eigenschaft angibt, dass die Taste gedrückt wurde.

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
