---
title: "GravitySensor: GravitySensor() Konstruktor"
short-title: GravitySensor()
slug: Web/API/GravitySensor/GravitySensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`GravitySensor()`**
Konstruktor erstellt ein neues [`GravitySensor`](/de/docs/Web/API/GravitySensor)-Objekt, das bei jedem Ablesen die auf das Gerät angewendete Schwerkraft entlang aller drei Achsen liefert.

## Syntax

```js-nolint
new GravitySensor()
new GravitySensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl an Proben pro Sekunde, die genommen werden soll, was bedeutet, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis so oft pro Sekunde aufgerufen wird. Eine ganze Zahl oder ein Dezimalwert kann verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Ablesefrequenz hängt von der Gerätetechnik ab und kann folglich geringer als die angeforderte sein. Die Standardfrequenz ist die, die von der zugrunde liegenden Plattform definiert wird.
    - `referenceFrame` {{optional_inline}}
      - : Das lokale Koordinatensystem, das das Bezugssystem darstellt. Es kann entweder `'device'` oder `'screen'` sein. Der Standard ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
