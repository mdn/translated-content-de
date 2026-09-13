---
title: "GamepadHapticActuator: Eigenschaft type"
short-title: type
slug: Web/API/GamepadHapticActuator/type
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Gamepad API")}}{{non-standard_header}}

Die schreibgeschützte **`type`**-Eigenschaft der [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Schnittstelle gibt einen aufgezählten Wert zurück, der den Typ der haptischen Hardware darstellt.

Diese Eigenschaft ist veraltet: Verwenden Sie [`GamepadHapticActuator.effects`](/de/docs/Web/API/GamepadHapticActuator/effects), um die Unterstützung von Effekten zu erkennen.

## Wert

Ein aufgezählter Wert, der den Typ der haptischen Hardware darstellt. Derzeit verfügbare Typen sind:

- `"vibration"`
  - : Einfache Vibrationshardware, die einen Rumpel-Effekt erzeugt.
- `"dual-rumble"`
  - : Ein Controller mit einem Vibrationsmotor in jedem Griff. Jeder Motor kann unabhängig voneinander vibrieren, um positionsabhängige Rumpel-Effekte zu erzeugen.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

// Logs "vibration" or "dual-rumble"
console.log(gamepad.hapticActuators[0].type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
