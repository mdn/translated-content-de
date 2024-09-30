---
title: "GamepadHapticActuator: effects-Eigenschaft"
short-title: effects
slug: Web/API/GamepadHapticActuator/effects
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`effects`** der Schnittstelle [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator) gibt ein Array von aufgezählten Werten zurück, die die verschiedenen haptischen Effekte darstellen, die der Aktor unterstützt.

## Wert

Ein Array, das die unterstützten haptischen Effekte darstellt. Mögliche enthaltene Werte sind:

- `"dual-rumble"`
  - : Ein positionsbezogener Rummbeleffekt, der durch zwei Vibrationsmotoren in jedem Griff eines Controllers erzeugt wird und unabhängig vibrieren kann.
- `"trigger-rumble"`
  - : Lokalisierte Rummbeleffekte auf der Oberfläche der Abzugstasten eines Controllers, die durch Vibrationsmotoren in jeder Taste erzeugt werden. Diese Tasten haben meist die Form von federbelasteten Abzügen.

> [!NOTE]
> Wenn ein bekannterweise unterstützter Effekt nicht aufgelistet ist, könnte es daran liegen, dass der Browser das Abspielen von Effekten dieses Typs nicht unterstützt.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

// Logs "dual-rumble" or "trigger-rumble"
console.log(gamepad.hapticActuators[0].effects[0]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
