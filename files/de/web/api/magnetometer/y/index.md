---
title: "Magnetometer: y-Eigenschaft"
short-title: y
slug: Web/API/Magnetometer/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`y`** der [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle gibt eine Zahl zurück, die das Magnetfeld um die y-Achse des Geräts angibt.

## Wert

Eine {{jsxref('Number')}}.

## Beispiele

Das Magnetometer wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback ausgelesen. Im folgenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
