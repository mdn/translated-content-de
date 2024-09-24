---
title: "Magnetometer: Magnetometer() Konstruktor"
short-title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`Magnetometer()`**-Konstruktor erstellt ein neues {{domxref("Magnetometer")}}-Objekt, das Informationen über das Magnetfeld liefert, wie es vom primären Magnetometersensor eines Geräts erkannt wird.

## Syntax

```js-nolint
new Magnetometer()
new Magnetometer(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Messungen pro Sekunde, das heißt die Anzahl der Male pro Sekunde, dass das {{domxref('sensor.reading_event', 'reading')}}-Ereignis ausgelöst wird. Es kann eine ganze Zahl oder eine Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Hardware des Geräts ab und kann folglich geringer als gewünscht sein.
    - `referenceFrame` {{optional_inline}}
      - : Entweder `'device'` oder `'screen'`. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieses Features wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('sensor.reading_event', 'reading')}}-Ereignis
