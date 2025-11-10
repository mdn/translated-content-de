---
title: "AmbientLightSensor: AmbientLightSensor() Konstruktor"
short-title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`AmbientLightSensor()`** Konstruktor erzeugt ein neues [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Objekt, das den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät herum zurückgibt.

## Syntax

```js-nolint
new AmbientLightSensor()
new AmbientLightSensor(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Derzeit wird nur eine Option unterstützt:
    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Abtastungen pro Sekunde, was bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis aufgerufen wird. Es kann eine ganze Zahl oder eine Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Lesefrequenz hängt von der Hardware des Geräts ab und kann folglich geringer als angefordert sein.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
