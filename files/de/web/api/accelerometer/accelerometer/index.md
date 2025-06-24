---
title: "Accelerometer: Accelerometer() Konstruktor"
short-title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Accelerometer()`** Konstruktor erzeugt ein neues [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Objekt, das die Beschleunigung des Geräts entlang aller drei Achsen zum Zeitpunkt des Auslesens zurückgibt.

## Syntax

```js-nolint
new Accelerometer()
new Accelerometer(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Die Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, d.h. die Anzahl der Male pro Sekunde, die das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzteres für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Hardware des Geräts ab und kann daher geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
