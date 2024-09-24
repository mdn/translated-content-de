---
title: "LinearAccelerationSensor: LinearAccelerationSensor() Konstruktor"
short-title: LinearAccelerationSensor()
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`LinearAccelerationSensor()`** Konstruktor erstellt ein neues {{domxref("LinearAccelerationSensor")}}-Objekt, das bei jeder Messung die auf das Gerät wirkende Beschleunigung entlang aller drei Achsen bereitstellt, jedoch ohne den Einfluss der Schwerkraft.

## Syntax

```js-nolint
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Abtastungen pro Sekunde, das heißt, die Anzahl der Male pro Sekunde, dass das {{domxref('sensor.reading_event', 'reading')}}-Ereignis aufgerufen wird. Eine ganze Zahl oder Dezimalzahl kann verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer sein als gewünscht.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standard ist `'device'`.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Verwendung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('sensor.reading_event', 'reading')}}-Ereignis
