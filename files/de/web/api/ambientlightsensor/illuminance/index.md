---
title: "AmbientLightSensor: illuminance-Eigenschaft"
short-title: illuminance
slug: Web/API/AmbientLightSensor/illuminance
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die schreibgeschützte **`illuminance`**-Eigenschaft des [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Interfaces gibt das aktuelle Lichtniveau in [Lux](https://de.wikipedia.org/wiki/Lux) der Umgebungslichtstärke rund um das Hostgerät zurück.

## Wert

Eine {{jsxref('Number')}}, die das aktuelle Lichtniveau in Lux angibt.

## Beispiele

```js
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    console.log("Current light level:", sensor.illuminance);
  });
  sensor.addEventListener("error", (event) => {
    console.log(event.error.name, event.error.message);
  });
  sensor.start();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
