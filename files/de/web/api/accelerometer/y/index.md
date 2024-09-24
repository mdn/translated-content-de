---
title: "Beschleunigungsmesser: y Eigenschaft"
short-title: "y"
slug: Web/API/Accelerometer/y
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die **`y`** schreibgeschützte Eigenschaft der {{domxref("Accelerometer")}}-Schnittstelle gibt eine Zahl zurück, die die Beschleunigung des Geräts entlang seiner y-Achse angibt.

## Wert

Eine {{jsxref('Number')}}.

## Beispiele

Die Beschleunigung wird typischerweise im {{domxref('Sensor.reading_event', 'Lese-')}}Ereignis-Callback erfasst. Im folgenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
