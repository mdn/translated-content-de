---
title: "LinearAccelerationSensor: LinearAccelerationSensor()-Konstruktor"
short-title: LinearAccelerationSensor()
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`LinearAccelerationSensor()`** Konstruktor erstellt ein neues [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)-Objekt, das bei jeder Messung die auf das Gerät angewendete Beschleunigung entlang aller drei Achsen bereitstellt, jedoch ohne den Beitrag der Schwerkraft.

## Syntax

```js-nolint
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Messungen pro Sekunde, das bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Hardware des Geräts ab und kann daher geringer als gewünscht sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
