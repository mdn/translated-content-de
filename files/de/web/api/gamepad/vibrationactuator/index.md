---
title: "Gamepad: vibrationActuator-Eigenschaft"
short-title: vibrationActuator
slug: Web/API/Gamepad/vibrationActuator
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Gamepad")}}{{SecureContext_Header}}

Die **`vibrationActuator`**-Eigenschaft der {{domxref("Gamepad")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein {{domxref("GamepadHapticActuator")}}-Objekt zurückgibt. Dieses repräsentiert die auf dem Controller verfügbare haptische Rückmeldungshardware.

> [!NOTE]
> Die Unterstützung für diese Eigenschaft kann bei verschiedenen Kombinationen von Plattformen und Controllern variieren. Selbst wenn der Controller haptisches Feedback unterstützt, könnte es sein, dass die Plattform dies nicht unterstützt.

## Wert

Ein {{domxref("GamepadHapticActuator")}}-Objekt.

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
