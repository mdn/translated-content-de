---
title: "GravitySensor: GravitySensor()-Konstruktor"
short-title: GravitySensor()
slug: Web/API/GravitySensor/GravitySensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`GravitySensor()`**
Konstruktor erstellt ein neues [`GravitySensor`](/de/docs/Web/API/GravitySensor)-Objekt, das bei jeder Messung die auf das Gerät einwirkende Schwerkraft entlang aller drei Achsen bereitstellt.

## Syntax

```js-nolint
new GravitySensor()
new GravitySensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Abtastungen pro Sekunde, d.h. die Anzahl der Male pro Sekunde, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis ausgelöst wird. Eine Ganzzahl oder Dezimalzahl kann verwendet werden, Letzteres für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer als gewünscht sein. Die Standardfrequenz ist die durch die zugrunde liegende Plattform definierte.
    - `referenceFrame` {{optional_inline}}
      - : Das lokale Koordinatensystem, das den Referenzrahmen darstellt. Es kann entweder `'device'` oder `'screen'` sein. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
