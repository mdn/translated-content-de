---
title: "GravitySensor: GravitySensor()-Konstruktor"
short-title: GravitySensor()
slug: Web/API/GravitySensor/GravitySensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Der **`GravitySensor()`**-Konstruktor erstellt ein neues [`GravitySensor`](/de/docs/Web/API/GravitySensor)-Objekt, das bei jedem Abruf die auf das Gerät wirkende Schwerkraft entlang aller drei Achsen bereitstellt.

## Syntax

```js-nolint
new GravitySensor()
new GravitySensor(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Die Optionen sind wie folgt:
    - `frequency` {{optional_inline}}
      - : Gibt die gewünschte Anzahl an Abtastungen pro Sekunde an, d.h. die Anzahl der Aufrufe des [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignisses pro Sekunde. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letztere für Frequenzen von weniger als einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann somit geringer sein als die angeforderte Frequenz. Die Standardfrequenz ist die, die von der zugrunde liegenden Plattform definiert wird.
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

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
