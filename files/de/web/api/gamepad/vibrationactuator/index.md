---
title: "Gamepad: vibrationActuator-Eigenschaft"
short-title: vibrationActuator
slug: Web/API/Gamepad/vibrationActuator
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad")}}

Die schreibgeschützte **`vibrationActuator`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekt zurück, das die auf dem Controller verfügbare haptische Rückmeldungshardware darstellt.

> [!NOTE]
> Die Unterstützung für diese Eigenschaft kann bei verschiedenen Kombinationen von Plattformen und Controllern variieren. Selbst wenn der Controller haptisches Feedback unterstützt, könnte es sein, dass die Plattform dies nicht unterstützt.

## Wert

Ein [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekt.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

gamepad.vibrationActuator.playEffect("dual-rumble", {
  startDelay: 0,
  duration: 200,
  weakMagnitude: 1.0,
  strongMagnitude: 1.0,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad-API](/de/docs/Web/API/Gamepad_API)
