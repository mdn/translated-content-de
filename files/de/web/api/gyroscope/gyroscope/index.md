---
title: "Gyroscope: Gyroscope() Konstruktor"
short-title: Gyroscope()
slug: Web/API/Gyroscope/Gyroscope
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`Gyroscope()`** Konstruktor erstellt ein neues {{domxref("Gyroscope")}}-Objekt, das bei jeder Messung die Winkelschwindigkeit des Geräts entlang aller drei Achsen liefert.

## Syntax

```js-nolint
new Gyroscope()
new Gyroscope(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Messungen pro Sekunde, d.h. die Anzahl der Male pro Sekunde, dass das {{domxref('sensor.reading_event', 'reading')}}-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Lesefrequenz hängt von der Hardware des Geräts ab und kann daher geringer als angefordert sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref('sensor.reading_event', 'reading')}} Ereignis
