---
title: "AbsoluteOrientationSensor: AbsoluteOrientationSensor() Konstruktor"
short-title: AbsoluteOrientationSensor()
slug: Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`AbsoluteOrientationSensor()`** Konstruktor erstellt ein neues [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor) Objekt, das die physische Ausrichtung des Geräts in Bezug auf das Erdreferenzkoordinatensystem beschreibt.

## Syntax

```js-nolint
new AbsoluteOrientationSensor()
new AbsoluteOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Abtastungen pro Sekunde, d.h. die Anzahl der Male pro Sekunde, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder Dezimalzahl verwendet werden, letzteres für Frequenzen unter einer Sekunde. Die tatsächliche Lesefrequenz hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
