---
title: "Magnetometer: Magnetometer() Konstruktor"
short-title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Magnetometer()`** Konstruktor
erstellt ein neues [`Magnetometer`](/de/docs/Web/API/Magnetometer) Objekt, das Informationen über das
vom primären Magnetometersensor eines Geräts erfasste Magnetfeld liefert.

## Syntax

```js-nolint
new Magnetometer()
new Magnetometer(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Proben pro Sekunde, d.h. die Anzahl der Male pro Sekunde, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis ausgelöst wird. Es kann eine ganze Zahl oder Dezimalzahl verwendet werden, letztere für Frequenzen von weniger als einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Hardware des Geräts ab und kann daher geringer als angefordert sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder
        `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
