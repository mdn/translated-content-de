---
title: "GamepadButton: touched-Eigenschaft"
short-title: touched
slug: Web/API/GamepadButton/touched
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`touched`**-Eigenschaft des
{{domxref("GamepadButton")}}-Interfaces gibt einen `boolean` zurück, der anzeigt, ob ein Knopf, der Berührung erkennen kann, derzeit berührt wird (`true`) oder nicht berührt wird (`false`).

Wenn der Knopf nicht in der Lage ist, Berührung zu erkennen, aber einen analogen Wert zurückgeben kann, ist die Eigenschaft `true`, wenn der Wert größer als `0` ist, andernfalls `false`. Wenn der Knopf nicht in der Lage ist, Berührung zu erkennen und nur einen digitalen Wert melden kann, sollte er die {{domxref("GamepadButton.pressed")}}-Eigenschaft widerspiegeln.

## Wert

Ein {{jsxref("Boolean")}}. True, wenn berührt.

## Beispiele

```js
let gp = navigator.getGamepads()[0]; // Holt das erste Gamepad-Objekt

if (gp.buttons[0].touched) {
  // Reaktion darauf, dass der Knopf berührt wird
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
