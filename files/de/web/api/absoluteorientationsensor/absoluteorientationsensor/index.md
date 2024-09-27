---
title: "AbsoluteOrientationSensor: AbsoluteOrientationSensor() Konstruktor"
short-title: AbsoluteOrientationSensor()
slug: Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`AbsoluteOrientationSensor()`** Konstruktor erstellt ein neues [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor) Objekt, das die physische Ausrichtung des Geräts in Bezug auf das Referenzkoordinatensystem der Erde beschreibt.

## Syntax

```js-nolint
new AbsoluteOrientationSensor()
new AbsoluteOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Proben pro Sekunde, die genommen werden sollen, was bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder eine Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
