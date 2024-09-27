---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

Das **`GamepadHapticActuator`**-Interface der [Gamepad API](/de/docs/Web/API/Gamepad_API) repräsentiert Hardware im Controller, die darauf ausgelegt ist, dem Benutzer haptisches Feedback zu geben (falls verfügbar), am häufigsten Vibrationshardware.

Dieses Interface ist über die [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators)-Eigenschaft zugänglich.

## Instanzeigenschaften

- [`GamepadHapticActuator.effects`](/de/docs/Web/API/GamepadHapticActuator/effects) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von aufgezählten Werten zurück, die die verschiedenen haptischen Effekte darstellen, die der Aktuator unterstützt.
- [`GamepadHapticActuator.type`](/de/docs/Web/API/GamepadHapticActuator/type) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Gibt einen aufgezählten Wert zurück, der den Typ der haptischen Hardware darstellt. Diese Eigenschaft ist veraltet: Verwenden Sie `GamepadHapticActuator.effects`, um die Unterstützung von Effekten zu erkennen.

## Instanzmethoden

- [`GamepadHapticActuator.playEffect()`](/de/docs/Web/API/GamepadHapticActuator/playEffect) {{ReadOnlyInline}}
  - : Veranlasst die Hardware, einen bestimmten Vibrationseffekt abzuspielen.
- [`GamepadHapticActuator.pulse()`](/de/docs/Web/API/GamepadHapticActuator/pulse) {{ReadOnlyInline}}
  - : Lässt die Hardware mit einer bestimmten Intensität für eine angegebene Dauer pulsieren.
- [`GamepadHapticActuator.reset()`](/de/docs/Web/API/GamepadHapticActuator/reset) {{ReadOnlyInline}}
  - : Stoppt die Hardware beim Abspielen eines aktiven Vibrationseffekts.

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
