---
title: "LinearAccelerationSensor: LinearAccelerationSensor() Konstruktor"
short-title: LinearAccelerationSensor()
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`LinearAccelerationSensor()`** Konstruktor erstellt ein neues [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)-Objekt, das bei jeder Messung die auf das Gerät entlang aller drei Achsen ausgeübte Beschleunigung bereitstellt, jedoch ohne den Beitrag der Gravitation.

## Syntax

```js-nolint
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Die Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Abtastungen pro Sekunde, das heißt die Anzahl der Male pro Sekunde, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Eine ganze Zahl oder ein Dezimalwert kann verwendet werden, letzterer für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer als gewünscht sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
