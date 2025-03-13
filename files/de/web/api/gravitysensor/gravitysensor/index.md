---
title: "GravitySensor: GravitySensor() Konstruktor"
short-title: GravitySensor()
slug: Web/API/GravitySensor/GravitySensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`GravitySensor()`**
Konstruktor erstellt ein neues [`GravitySensor`](/de/docs/Web/API/GravitySensor) Objekt, das bei jedem Lesevorgang die auf das Gerät wirkende Schwerkraft entlang aller drei Achsen bereitstellt.

## Syntax

```js-nolint
new GravitySensor()
new GravitySensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, was bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzterer für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Gerätehardware ab und kann folglich geringer als angefordert sein. Die Standardfrequenz ist diejenige, die durch die zugrunde liegende Plattform definiert ist.
    - `referenceFrame` {{optional_inline}}
      - : Das lokale Koordinatensystem, das den Referenzrahmen darstellt. Es kann entweder `'device'` oder `'screen'` sein. Der Standardwert ist `'device'`.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
