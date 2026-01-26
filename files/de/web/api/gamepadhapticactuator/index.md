---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Das **`GamepadHapticActuator`** Interface der [Gamepad API](/de/docs/Web/API/Gamepad_API) repräsentiert die Hardware im Controller, die dafür ausgelegt ist, dem Benutzer haptisches Feedback zu geben (falls verfügbar), am häufigsten in Form von Vibrationshardware.

Dieses Interface ist über die [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) Eigenschaft zugänglich.

## Instanz-Eigenschaften

- [`GamepadHapticActuator.effects`](/de/docs/Web/API/GamepadHapticActuator/effects) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von aufgezählten Werten zurück, die die verschiedenen haptischen Effekte darstellen, die der Aktuator unterstützt.
- [`GamepadHapticActuator.type`](/de/docs/Web/API/GamepadHapticActuator/type) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Gibt einen aufgezählten Wert zurück, der den Typ der haptischen Hardware darstellt. Diese Eigenschaft ist veraltet: Verwenden Sie `GamepadHapticActuator.effects`, um die Unterstützung von Effekten zu erkennen.

## Instanz-Methoden

- [`GamepadHapticActuator.playEffect()`](/de/docs/Web/API/GamepadHapticActuator/playEffect) {{ReadOnlyInline}}
  - : Veranlasst die Hardware, einen spezifischen Vibrationseffekt abzuspielen.
- [`GamepadHapticActuator.pulse()`](/de/docs/Web/API/GamepadHapticActuator/pulse) {{ReadOnlyInline}}
  - : Lässt die Hardware mit einer bestimmten Intensität für eine festgelegte Dauer pulsieren.
- [`GamepadHapticActuator.reset()`](/de/docs/Web/API/GamepadHapticActuator/reset) {{ReadOnlyInline}}
  - : Stoppt die Hardware daran, einen aktiven Vibrationseffekt abzuspielen.

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
