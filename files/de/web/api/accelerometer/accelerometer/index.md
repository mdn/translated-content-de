---
title: "Accelerometer: Accelerometer()-Konstruktor"
short-title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Accelerometer()`**-Konstruktor erstellt ein neues [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Objekt, das die Beschleunigung des Geräts entlang aller drei Achsen zu dem Zeitpunkt zurückgibt, zu dem es gelesen wird.

## Syntax

```js-nolint
new Accelerometer()
new Accelerometer(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, das bedeutet die Anzahl der Male pro Sekunde, die das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Eine ganze Zahl oder ein Dezimalwert kann verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Lese-Frequenz hängt von der Gerätehardware ab und kann daher geringer als angefordert sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
