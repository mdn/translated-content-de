---
title: "Gamepad: hapticActuators-Eigenschaft"
short-title: hapticActuators
slug: Web/API/Gamepad/hapticActuators
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}

Die **`hapticActuators`** schreibgeschützte Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein Array zurück, das [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekte enthält. Jedes dieser Objekte repräsentiert eine verfügbare haptische Feedback-Hardware des Controllers.

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
