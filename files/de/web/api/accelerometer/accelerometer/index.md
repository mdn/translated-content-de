---
title: "Accelerometer: Accelerometer() Konstruktor"
short-title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Accelerometer()`** Konstruktor erstellt ein neues [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Objekt, das die Beschleunigung des Geräts entlang aller drei Achsen zum Zeitpunkt der Abfrage zurückgibt.

## Syntax

```js-nolint
new Accelerometer()
new Accelerometer(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Abtastungen pro Sekunde, was bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Hardware des Geräts ab und kann daher niedriger sein als angefordert.
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
