---
title: "GamepadHapticActuator: Methode pulse()"
short-title: pulse()
slug: Web/API/GamepadHapticActuator/pulse
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Gamepad API")}}

Die **`pulse()`**-Methode der {{domxref("GamepadHapticActuator")}}-Schnittstelle lässt die Hardware mit einer bestimmten Intensität für eine angegebene Dauer pulsieren.

## Syntax

```js-nolint
pulse(value, duration)
```

### Parameter

- `value`
  - : Ein Double, das die Intensität des Pulses darstellt. Dies kann je nach Hardwaretyp variieren, nimmt jedoch im Allgemeinen einen Wert zwischen 0.0 (keine Intensität) und 1.0 (volle Intensität) an.
- `duration`
  - : Ein Double, das die Dauer des Pulses in Millisekunden darstellt.

> [!NOTE]
> Wiederholte Aufrufe von `pulse()` überschreiben die vorherigen Aufrufe, wenn sie noch andauern.

### Rückgabewert

Ein Versprechen, das mit einem Wert von `true` aufgelöst wird, wenn der Puls erfolgreich abgeschlossen wurde.

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
