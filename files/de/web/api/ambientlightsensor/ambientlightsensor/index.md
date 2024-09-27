---
title: "AmbientLightSensor: AmbientLightSensor()-Konstruktor"
short-title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`AmbientLightSensor()`**-Konstruktor erstellt ein neues [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Objekt, das den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät herum zurückgibt.

## Syntax

```js-nolint
new AmbientLightSensor()
new AmbientLightSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Derzeit wird nur eine Option unterstützt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Proben pro Sekunde, d.h. die Anzahl der Male pro Sekunde, dass das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis aufgerufen wird. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, Letzteres für Frequenzen von weniger als einer Sekunde. Die tatsächliche Abtastfrequenz hängt von der Gerätehardware ab und kann folglich geringer sein als angefordert.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
