---
title: "AmbientLightSensor: illuminance-Eigenschaft"
short-title: illuminance
slug: Web/API/AmbientLightSensor/illuminance
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die schreibgeschützte **`illuminance`**-Eigenschaft der {{domxref("AmbientLightSensor")}}-Schnittstelle gibt den aktuellen Lichtpegel in [Lux](https://en.wikipedia.org/wiki/Lux) der Umgebungsbeleuchtung um das Hostgerät zurück.

## Wert

Ein {{jsxref('Number')}} der den aktuellen Lichtpegel in Lux angibt.

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
