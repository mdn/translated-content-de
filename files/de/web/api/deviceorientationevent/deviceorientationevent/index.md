---
title: "DeviceOrientationEvent: DeviceOrientationEvent()-Konstruktor"
short-title: DeviceOrientationEvent()
slug: Web/API/DeviceOrientationEvent/DeviceOrientationEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Der **`DeviceOrientationEvent()`**-Konstruktor erstellt ein neues {{domxref("DeviceOrientationEvent")}}-Objekt.

## Syntax

```js-nolint
new DeviceOrientationEvent(type)
new DeviceOrientationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `deviceorientation` oder `deviceorientationabsolute`.
    Im letzteren Fall ist `options.absolute` immer `true`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `alpha` {{optional_inline}}
      - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt,
        ausgedrückt in Grad mit Werten von 0 bis 360.
        Standardmäßig ist sie `null`.
    - `beta` {{optional_inline}}
      - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt,
        ausgedrückt in Grad mit Werten von -180 bis 180.
        Dies repräsentiert eine Vorwärts- und Rückwärtsbewegung des Geräts.
        Standardmäßig ist sie `null`.
    - `gamma` {{optional_inline}}
      - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt,
        ausgedrückt in Grad mit Werten von -90 bis 90.
        Dies repräsentiert eine Links-Rechts-Bewegung des Geräts.
        Standardmäßig ist sie `null`.
    - `absolute`
      - : Ein boolescher Wert, der angibt, ob das Gerät Orientierungsdaten absolut bereitstellt oder nicht.
        Standardmäßig ist er `false`.

### Rückgabewert

Ein neues {{domxref("DeviceOrientationEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
