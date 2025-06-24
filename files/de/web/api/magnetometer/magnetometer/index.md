---
title: "Magnetometer: Magnetometer()-Konstruktor"
short-title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Magnetometer()`**-Konstruktor erstellt ein neues [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Objekt, das Informationen über das vom primären Magnetometersensor eines Geräts erfasste Magnetfeld zurückgibt.

## Syntax

```js-nolint
new Magnetometer()
new Magnetometer(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, also die Anzahl der Male pro Sekunde, die das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis ausgelöst wird. Es kann eine ganze Zahl oder eine Dezimalzahl angegeben werden, letzteres für Frequenzen unter einer Sekunde. Die tatsächliche Ablesefrequenz hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
