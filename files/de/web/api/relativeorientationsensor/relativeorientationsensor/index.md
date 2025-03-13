---
title: "RelativeOrientationSensor: RelativeOrientationSensor() Konstruktor"
short-title: RelativeOrientationSensor()
slug: Web/API/RelativeOrientationSensor/RelativeOrientationSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`RelativeOrientationSensor()`**-Konstruktor erstellt ein neues [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)-Objekt, das die physische Ausrichtung des Geräts beschreibt.

## Syntax

```js-nolint
new RelativeOrientationSensor()
new RelativeOrientationSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Zeiten pro Sekunde, in der eine Probe entnommen werden sollte, was bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder eine Dezimalzahl verwendet werden, letztere für Frequenzen von weniger als einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Hardware des Geräts ab und kann daher geringer sein als angefordert.
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
