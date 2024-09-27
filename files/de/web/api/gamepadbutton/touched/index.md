---
title: "GamepadButton: touched-Eigenschaft"
short-title: touched
slug: Web/API/GamepadButton/touched
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`touched`**-Eigenschaft der [`GamepadButton`](/de/docs/Web/API/GamepadButton)-Schnittstelle gibt einen `boolean` zurück, der anzeigt, ob eine Taste, die Berührungen erkennen kann, derzeit berührt (`true`) oder nicht berührt (`false`) ist.

Wenn die Taste nicht in der Lage ist, Berührungen zu erkennen, aber einen analogen Wert zurückgeben kann, wird die Eigenschaft `true` sein, wenn der Wert größer als `0` ist, und `false` sonst. Wenn die Taste nicht in der Lage ist, Berührungen zu erkennen und nur einen digitalen Wert melden kann, sollte sie die [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed)-Eigenschaft spiegeln.

## Wert

Ein {{jsxref("Boolean")}}. `True`, wenn berührt.

## Beispiele

```js
let gp = navigator.getGamepads()[0]; // Get the first gamepad object

if (gp.buttons[0].touched) {
  // respond to button being touched
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
