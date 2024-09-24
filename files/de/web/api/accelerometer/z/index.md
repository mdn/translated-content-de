---
title: "Acelerometer: z-Eigenschaft"
short-title: z
slug: Web/API/Accelerometer/z
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`z`** der Schnittstelle {{domxref("Accelerometer")}} gibt eine Zahl zurück, die die Beschleunigung des Geräts entlang seiner z-Achse angibt.

## Wert

Eine {{jsxref('Number')}}.

## Beispiele

Die Beschleunigung wird typischerweise im {{domxref('Sensor.reading_event', 'reading')}}-Ereignis-Callback ausgelesen. Im folgenden Beispiel geschieht dies sechzig Mal pro Sekunde.

```js
const accelerometer = new Accelerometer({ frequency: 60 });

accelerometer.addEventListener("reading", (e) => {
  console.log(`Acceleration along the X-axis ${accelerometer.x}`);
  console.log(`Acceleration along the Y-axis ${accelerometer.y}`);
  console.log(`Acceleration along the Z-axis ${accelerometer.z}`);
});
accelerometer.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
