---
title: "LinearAccelerationSensor: LinearAccelerationSensor() Konstruktor"
short-title: LinearAccelerationSensor()
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`LinearAccelerationSensor()`**
Konstruktor erstellt ein neues [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor) Objekt, das bei jeder Ablesung die an das Gerät angelegte Beschleunigung entlang aller drei Achsen bereitstellt, jedoch ohne den Beitrag der Schwerkraft.

## Syntax

```js-nolint
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Abtastungen pro Sekunde, was die Anzahl der Male pro Sekunde bedeutet, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis aufgerufen wird. Es kann eine ganze Zahl oder eine Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann folglich geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
