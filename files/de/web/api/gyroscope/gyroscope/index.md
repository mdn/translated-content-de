---
title: "Gyroscope: Gyroscope()-Konstruktor"
short-title: Gyroscope()
slug: Web/API/Gyroscope/Gyroscope
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`Gyroscope()`**-Konstruktor erstellt ein neues [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Objekt, das bei jeder Messung die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen bereitstellt.

## Syntax

```js-nolint
new Gyroscope()
new Gyroscope(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, das bedeutet, wie oft das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis pro Sekunde aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzterer für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Gerätehardware ab und kann daher geringer sein als gewünscht.
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
