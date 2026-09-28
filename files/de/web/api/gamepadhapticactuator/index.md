---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{APIRef("Gamepad API")}}

Die Schnittstelle **`GamepadHapticActuator`** der [Gamepad API](/de/docs/Web/API/Gamepad_API) repräsentiert Hardware im Controller, die dem Benutzer haptisches Feedback gibt (sofern vorhanden). Meist handelt es sich dabei um Vibrationshardware.

Auf diese Schnittstelle kann über die Eigenschaft [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) zugegriffen werden.

## Instanzeigenschaften

- [`GamepadHapticActuator.effects`](/de/docs/Web/API/GamepadHapticActuator/effects) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von Aufzählungswerten zurück, die die verschiedenen vom Aktuator unterstützten haptischen Effekte repräsentieren.
- [`GamepadHapticActuator.type`](/de/docs/Web/API/GamepadHapticActuator/type) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Gibt einen Aufzählungswert zurück, der den Typ der haptischen Hardware repräsentiert. Diese Eigenschaft ist veraltet: Verwenden Sie `GamepadHapticActuator.effects`, um die Unterstützung für Effekte zu ermitteln.

## Instanzmethoden

- [`GamepadHapticActuator.playEffect()`](/de/docs/Web/API/GamepadHapticActuator/playEffect)
  - : Veranlasst die Hardware, einen bestimmten Vibrationseffekt abzuspielen.
- [`GamepadHapticActuator.pulse()`](/de/docs/Web/API/GamepadHapticActuator/pulse)
  - : Lässt die Hardware für eine festgelegte Dauer mit einer bestimmten Intensität vibrieren.
- [`GamepadHapticActuator.reset()`](/de/docs/Web/API/GamepadHapticActuator/reset)
  - : Beendet die Wiedergabe eines aktiven Vibrationseffekts durch die Hardware.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);

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
