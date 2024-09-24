---
title: "RelativeOrientationSensor: RelativeOrientationSensor() Konstruktor"
short-title: RelativeOrientationSensor()
slug: Web/API/RelativeOrientationSensor/RelativeOrientationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`RelativeOrientationSensor()`**
Konstruktor erstellt ein neues {{domxref("RelativeOrientationSensor")}}-Objekt, welches
die physische Ausrichtung des Geräts beschreibt.

## Syntax

```js-nolint
new RelativeOrientationSensor()
new RelativeOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Proben pro Sekunde,
        was bedeutet, wie oft pro Sekunde das
        {{domxref('sensor.reading_event', 'reading')}}-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzterer für Frequenzen unter einer Sekunde. Die tatsächliche Abtastrate hängt von der Gerätehardware ab und kann daher niedriger als gewünscht sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder
        `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('sensor.reading_event', 'reading')}}-Ereignis
