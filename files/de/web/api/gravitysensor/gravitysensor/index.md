---
title: "GravitySensor: GravitySensor() Konstruktor"
short-title: GravitySensor()
slug: Web/API/GravitySensor/GravitySensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`GravitySensor()`**-Konstruktor erstellt ein neues {{domxref("GravitySensor")}}-Objekt, das bei jeder Messung die auf das Gerät wirkende Gravitation entlang aller drei Achsen bereitstellt.

## Syntax

```js-nolint
new GravitySensor()
new GravitySensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, was bedeutet, dass das {{domxref('sensor.reading_event', 'reading')}}-Ereignis so oft pro Sekunde aufgerufen wird. Eine ganze Zahl oder ein Dezimalwert kann verwendet werden, letzterer für Frequenzen von weniger als einer Sekunde. Die tatsächliche Messfrequenz hängt von der Hardware des Geräts ab und kann daher geringer als gewünscht sein. Die Standardfrequenz wird von der zugrundeliegenden Plattform definiert.
    - `referenceFrame` {{optional_inline}}
      - : Das lokale Koordinatensystem, das den Referenzrahmen darstellt. Es kann entweder `'device'` oder `'screen'` sein. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref('sensor.reading_event', 'reading')}}-Ereignis
