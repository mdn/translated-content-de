---
title: "Accelerometer: Accelerometer() Konstruktor"
short-title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Accelerometer()`** Konstruktor erstellt ein neues [`Accelerometer`](/de/docs/Web/API/Accelerometer) Objekt, das die Beschleunigung des Geräts entlang aller drei Achsen zum Zeitpunkt des Ablesens zurückgibt.

## Syntax

```js-nolint
new Accelerometer()
new Accelerometer(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Proben pro Sekunde, d.h. die Anzahl der Aufrufe des [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignisses pro Sekunde. Es kann eine ganze Zahl oder Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
