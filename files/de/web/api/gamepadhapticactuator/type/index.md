---
title: "GamepadHapticActuator: type-Eigenschaft"
short-title: type
slug: Web/API/GamepadHapticActuator/type
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Gamepad API")}}{{deprecated_header}}{{non-standard_header}}

Die schreibgeschützte **`type`**-Eigenschaft der [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Schnittstelle gibt einen enumerierten Wert zurück, der den Typ der haptischen Hardware darstellt.

Diese Eigenschaft ist veraltet: Verwenden Sie [`GamepadHapticActuator.effects`](/de/docs/Web/API/GamepadHapticActuator/effects), um die Unterstützung der Effekte zu erkennen.

## Wert

Ein enumerierter Wert, der den Typ der haptischen Hardware darstellt. Derzeit verfügbare Typen sind:

- `"vibration"`
  - : Einfache Vibrationshardware, die einen Rumble-Effekt erzeugt.
- `"dual-rumble"`
  - : Ein Controller mit einem Vibrationsmotor in jedem Griff. Jeder Motor kann unabhängig voneinander vibrieren, um positionale Rumble-Effekte zu erzeugen.

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
