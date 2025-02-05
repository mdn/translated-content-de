---
title: "Accelerometer: y-Eigenschaft"
short-title: "y"
slug: Web/API/Accelerometer/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die schreibgeschützte **`y`**-Eigenschaft der [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle gibt eine Zahl zurück, die die Beschleunigung des Geräts entlang seiner y-Achse angibt.

## Wert

Ein {{jsxref('Number')}}.

## Beispiele

Die Beschleunigung wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback ausgelesen. Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
