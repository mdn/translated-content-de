---
title: "RelativeOrientationSensor: RelativeOrientationSensor() Konstruktor"
short-title: RelativeOrientationSensor()
slug: Web/API/RelativeOrientationSensor/RelativeOrientationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`RelativeOrientationSensor()`** Konstruktor erstellt ein neues [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)-Objekt, das die physische Orientierung des Geräts beschreibt.

## Syntax

```js-nolint
new RelativeOrientationSensor()
new RelativeOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Abtastungen pro Sekunde, was die Anzahl der Male bedeutet, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder eine Dezimalzahl verwendet werden, wobei Letzteres für Frequenzen unter einer Sekunde gilt. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
