---
title: "AmbientLightSensor: AmbientLightSensor() Konstruktor"
short-title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Der **`AmbientLightSensor()`**-Konstruktor erstellt ein neues [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Objekt, das die aktuelle Lichtstärke oder Beleuchtungsstärke des Umgebungslichts um das hostende Gerät zurückgibt.

## Syntax

```js-nolint
new AmbientLightSensor()
new AmbientLightSensor(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Derzeit wird nur eine Option unterstützt:

    - `frequency` {{optional_inline}}
      - : Die gewünschte Anzahl der Male pro Sekunde, die eine Probe genommen werden soll, was bedeutet, wie oft das [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis pro Sekunde aufgerufen wird. Es kann eine ganze Zahl oder Dezimalzahl verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Lesefrequenz hängt von der Hardware des Geräts ab und kann daher niedriger sein als angefordert.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
