---
title: "Gyroscope: Gyroscope() Konstruktor"
short-title: Gyroscope()
slug: Web/API/Gyroscope/Gyroscope
l10n:
  sourceCommit: 9505c8d1370343fb65affa01657f27751ab59103
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`Gyroscope()`** Konstruktor
erstellt ein neues [`Gyroscope`](/de/docs/Web/API/Gyroscope) Objekt, das bei jeder Messung die
Winkelgeschwindigkeit des Geräts entlang aller drei Achsen bereitstellt.

## Syntax

```js-nolint
new Gyroscope()
new Gyroscope(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Die Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Malen pro Sekunde, die eine Probe
        genommen werden soll, d.h. die Anzahl von Malen pro Sekunde, dass das
        [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert
        verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz
        hängt von der Gerätehardware ab und kann daher geringer als gewünscht sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder
        `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
