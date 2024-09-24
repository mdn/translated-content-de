---
title: "Magnetometer: y-Eigenschaft"
short-title: "y"
slug: Web/API/Magnetometer/y
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die **`y`** schreibgeschützte Eigenschaft der {{domxref("Magnetometer")}}-Schnittstelle gibt eine Zahl zurück, die das Magnetfeld um die y-Achse des Geräts angibt.

## Wert

Ein {{jsxref('Number')}}.

## Beispiele

Der Magnetometer wird typischerweise im Rückrufereignis {{domxref('Sensor.reading_event', 'reading')}} gelesen. Im untenstehenden Beispiel erfolgt dies sechzig Mal pro Sekunde.

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log(`Magnetic field along the X-axis ${magSensor.x}`);
  console.log(`Magnetic field along the Y-axis ${magSensor.y}`);
  console.log(`Magnetic field along the Z-axis ${magSensor.z}`);
});
magSensor.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
