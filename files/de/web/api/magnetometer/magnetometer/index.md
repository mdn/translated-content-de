---
title: "Magnetometer: Magnetometer()-Konstruktor"
short-title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Magnetometer()`**-Konstruktor erstellt ein neues [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Objekt, das Informationen über das Magnetfeld liefert, wie es vom Hauptmagnetometersensor eines Geräts erkannt wird.

## Syntax

```js-nolint
new Magnetometer()
new Magnetometer(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, was bedeutet, wie oft das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis pro Sekunde aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzterer für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Hardware des Geräts ab und kann daher geringer als angefordert sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
