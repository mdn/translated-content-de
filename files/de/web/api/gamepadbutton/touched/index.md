---
title: "GamepadButton: Touched-Eigenschaft"
short-title: touched
slug: Web/API/GamepadButton/touched
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`touched`**-Eigenschaft des
[`GamepadButton`](/de/docs/Web/API/GamepadButton)-Interfaces gibt einen `boolean`-Wert zurück, der anzeigt, ob eine Taste, die Berührung erkennen kann, derzeit berührt (`true`) oder nicht berührt (`false`) ist.

Wenn die Taste nicht in der Lage ist, Berührung zu erkennen, aber einen analogen Wert zurückgeben kann, ist die Eigenschaft `true`, wenn der Wert größer als `0` ist, und `false` andernfalls. Wenn die Taste nicht in der Lage ist, Berührung zu erkennen und nur einen digitalen Wert berichten kann, sollte sie die [`GamepadButton.pressed`](/de/docs/Web/API/GamepadButton/pressed)-Eigenschaft widerspiegeln.

## Wert

Ein {{jsxref("Boolean")}}. `true`, wenn berührt.

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
