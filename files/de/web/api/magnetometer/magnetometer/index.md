---
title: "Magnetometer: Magnetometer() Konstruktor"
short-title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Magnetometer()`** Konstruktor
erstellt ein neues [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Objekt, das Informationen über das
Magnetfeld liefert, wie es vom primären Magnetometersensor eines Geräts erfasst wird.

## Syntax

```js-nolint
new Magnetometer()
new Magnetometer(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Abtastungen pro Sekunde, bedeutet die Anzahl der Male pro Sekunde, dass das
        [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Eine ganze Zahl oder Dezimalzahl kann
        verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz
        hängt von der Gerätehardware ab und kann folglich geringer als gewünscht sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder
        `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
