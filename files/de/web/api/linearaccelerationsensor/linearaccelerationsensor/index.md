---
title: "LinearAccelerationSensor: LinearAccelerationSensor() Konstruktor"
short-title: LinearAccelerationSensor()
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`LinearAccelerationSensor()`**
Konstruktor erstellt ein neues [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)-Objekt, das bei jeder Messung die auf das Gerät entlang aller drei Achsen angewandte Beschleunigung ohne den Einfluss der Schwerkraft bereitstellt.

## Syntax

```js-nolint
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Abtastungen pro Sekunde, das heißt, die Anzahl von Malen pro Sekunde, bei denen das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Eine ganze Zahl oder Dezimalzahl kann verwendet werden, letztere für Frequenzen von weniger als einer Sekunde. Die tatsächliche Abtastrate hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.
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
