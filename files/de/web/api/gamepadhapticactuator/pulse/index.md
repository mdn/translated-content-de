---
title: "GamepadHapticActuator: pulse() Methode"
short-title: pulse()
slug: Web/API/GamepadHapticActuator/pulse
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Gamepad API")}}

Die **`pulse()`** Methode der [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Schnittstelle lässt die Hardware mit einer bestimmten Intensität für eine angegebene Dauer pulsieren.

## Syntax

```js-nolint
pulse(value, duration)
```

### Parameter

- `value`
  - : Ein Gleitkommawert, der die Intensität des Pulses darstellt. Dieser Wert kann je nach Hardwaretyp variieren, liegt aber im Allgemeinen zwischen 0.0 (keine Intensität) und 1.0 (volle Intensität).
- `duration`
  - : Ein Gleitkommawert, der die Dauer des Pulses in Millisekunden angibt.

> [!NOTE]
> Wiederholte Aufrufe von `pulse()` überschreiben vorherige, wenn sie noch andauern.

### Rückgabewert

Ein Promise, das mit dem Wert `true` aufgelöst wird, wenn der Puls erfolgreich abgeschlossen wurde.

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
