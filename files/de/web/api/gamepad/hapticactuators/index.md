---
title: "Gamepad: hapticActuators-Eigenschaft"
short-title: hapticActuators
slug: Web/API/Gamepad/hapticActuators
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`hapticActuators`** schreibgeschützte Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein Array zurück, das [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekte enthält. Jedes dieser Objekte repräsentiert die auf dem Controller verfügbare Hardware für haptisches Feedback.

## Wert

Ein Array, das [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekte enthält.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
