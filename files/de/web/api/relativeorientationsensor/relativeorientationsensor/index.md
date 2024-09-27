---
title: "RelativeOrientationSensor: RelativeOrientationSensor() Konstruktor"
short-title: RelativeOrientationSensor()
slug: Web/API/RelativeOrientationSensor/RelativeOrientationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`RelativeOrientationSensor()`**
Konstruktor erstellt ein neues [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)-Objekt, das die physische Orientierung des Geräts beschreibt.

## Syntax

```js-nolint
new RelativeOrientationSensor()
new RelativeOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl an Proben pro Sekunde, die genommen werden soll, was bedeutet, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis so oft pro Sekunde aufgerufen wird. Eine Ganzzahl oder Dezimalzahl kann verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Lesefrequenz hängt von der Hardware des Geräts ab und kann daher geringer als gewünscht sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
