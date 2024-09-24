---
title: "AbsoluteOrientationSensor: AbsoluteOrientationSensor() Konstruktor"
short-title: AbsoluteOrientationSensor()
slug: Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`AbsoluteOrientationSensor()`** Konstruktor erstellt ein neues {{domxref("AbsoluteOrientationSensor")}} Objekt, das die physische Ausrichtung des Geräts in Bezug auf das Erdkoordinatensystem beschreibt.

## Syntax

```js-nolint
new AbsoluteOrientationSensor()
new AbsoluteOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, also die Anzahl der Male pro Sekunde, dass das {{domxref('sensor.reading_event', 'reading')}}-Ereignis aufgerufen wird. Eine Ganzzahl oder Dezimalzahl kann verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Gerätetechnik ab und kann daher geringer sein als die angeforderte.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('sensor.reading_event', 'reading')}}-Ereignis
