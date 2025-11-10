---
title: "RelativeOrientationSensor: RelativeOrientationSensor() Konstruktor"
short-title: RelativeOrientationSensor()
slug: Web/API/RelativeOrientationSensor/RelativeOrientationSensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`RelativeOrientationSensor()`**
Konstruktor erstellt ein neues [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)-Objekt, welches
die physische Ausrichtung des Geräts beschreibt.

## Syntax

```js-nolint
new RelativeOrientationSensor()
new RelativeOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Proben pro Sekunde,
        bedeutet die Anzahl der Male pro Sekunde, dass das
        [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder eine Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Lesehäufigkeit hängt von der Gerätehardware ab und kann folglich geringer als
        angefordert sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder
        `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
