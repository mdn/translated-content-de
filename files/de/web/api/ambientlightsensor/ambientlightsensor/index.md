---
title: "AmbientLightSensor: AmbientLightSensor() Konstruktor"
short-title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`AmbientLightSensor()`** Konstruktor erstellt ein neues {{domxref("AmbientLightSensor")}} Objekt, das den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das hostende Gerät herum zurückgibt.

## Syntax

```js-nolint
new AmbientLightSensor()
new AmbientLightSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Derzeit wird nur eine Option unterstützt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Abtastungen pro Sekunde, was bedeutet, wie oft pro Sekunde das {{domxref('sensor.reading_event', 'reading')}}-Ereignis aufgerufen wird. Eine ganze Zahl oder Dezimalzahl kann verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer sein als gewünscht.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('sensor.reading_event', 'reading')}} Ereignis
