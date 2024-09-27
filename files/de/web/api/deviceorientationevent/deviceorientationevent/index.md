---
title: "DeviceOrientationEvent: DeviceOrientationEvent()-Konstruktor"
short-title: DeviceOrientationEvent()
slug: Web/API/DeviceOrientationEvent/DeviceOrientationEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Der **`DeviceOrientationEvent()`**-Konstruktor erstellt ein neues [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)-Objekt.

## Syntax

```js-nolint
new DeviceOrientationEvent(type)
new DeviceOrientationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es auf `deviceorientation` oder `deviceorientationabsolute`.
    Im letzteren Fall ist `options.absolute` immer `true`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften, die folgenden Eigenschaften haben kann:
    - `alpha` {{optional_inline}}
      - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt,
        ausgedrückt in Grad mit Werten im Bereich von 0 bis 360.
        Standardwert ist `null`.
    - `beta` {{optional_inline}}
      - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt,
        ausgedrückt in Grad mit Werten im Bereich von -180 bis 180.
        Dies stellt eine Vorwärts- und Rückwärtsbewegung des Geräts dar.
        Standardwert ist `null`.
    - `gamma` {{optional_inline}}
      - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt,
        ausgedrückt in Grad mit Werten im Bereich von -90 bis 90.
        Dies stellt eine Links- und Rechtsbewegung des Geräts dar.
        Standardwert ist `null`.
    - `absolute`
      - : Ein boolescher Wert, der angibt, ob das Gerät die Orientierungsdaten absolut liefert oder nicht.
        Standardwert ist `false`.

### Rückgabewert

Ein neues [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
