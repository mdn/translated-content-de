---
title: "Gyroscope: Gyroscope()-Konstruktor"
short-title: Gyroscope()
slug: Web/API/Gyroscope/Gyroscope
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`Gyroscope()`**-Konstruktor
erstellt ein neues [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Objekt, das bei jeder Messung die
Winkelgeschwindigkeit des Geräts entlang aller drei Achsen bereitstellt.

## Syntax

```js-nolint
new Gyroscope()
new Gyroscope(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Probenentnahmen pro Sekunde,
        d. h. die Anzahl der Male pro Sekunde, dass das
        [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Eine ganze Zahl oder Dezimalzahl kann
        verwendet werden, letztere für Frequenzen von weniger als einer Sekunde. Die tatsächliche Messfrequenz
        hängt von der Gerätehardware ab und kann daher weniger als die angeforderte betragen.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder
        `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
