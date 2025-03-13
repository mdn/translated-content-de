---
title: "AmbientLightSensor: AmbientLightSensor() Konstruktor"
short-title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`AmbientLightSensor()`** Konstruktor erstellt ein neues [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Objekt, das den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät herum liefert.

## Syntax

```js-nolint
new AmbientLightSensor()
new AmbientLightSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Zurzeit wird nur eine Option unterstützt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl von Messungen pro Sekunde, was bedeutet, wie oft pro Sekunde das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder eine Dezimalstelle verwendet werden, letztere für Frequenzen von weniger als einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann daher geringer als gewünscht sein.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
