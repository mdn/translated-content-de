---
title: "Gyroscope: Gyroscope() Konstruktor"
short-title: Gyroscope()
slug: Web/API/Gyroscope/Gyroscope
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`Gyroscope()`** Konstruktor
erstellt ein neues [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Objekt, das bei jeder Ablesung die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen liefert.

## Syntax

```js-nolint
new Gyroscope()
new Gyroscope(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Abtastungen pro Sekunde, was bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzterer für Frequenzen von weniger als einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
