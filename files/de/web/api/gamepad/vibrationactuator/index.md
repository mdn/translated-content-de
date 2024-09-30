---
title: "Gamepad: vibrationActuator-Eigenschaft"
short-title: vibrationActuator
slug: Web/API/Gamepad/vibrationActuator
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Gamepad")}}{{SecureContext_Header}}

Die schreibgeschützte **`vibrationActuator`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekt zurück, das die für den Controller verfügbare haptische Feedback-Hardware repräsentiert.

> [!NOTE]
> Die Unterstützung dieser Eigenschaft kann je nach Kombination von Plattformen und Controllern variieren. Selbst wenn der Controller haptisches Feedback unterstützt, kann es sein, dass die Plattform es nicht unterstützt.

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

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
