---
title: "Gyroskop: z-Eigenschaft"
short-title: z
slug: Web/API/Gyroscope/z
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die schreibgeschützte Eigenschaft **`z`** des
{{domxref("Gyroscope")}}-Interfaces gibt eine Zahl zurück, die die
Winkelgeschwindigkeit des Geräts entlang seiner z-Achse angibt.

## Wert

Eine {{jsxref('Number')}}.

## Beispiele

Das Gyroskop wird typischerweise im {{domxref('Sensor.reading_event', 'lese')}}-Ereignis-Callback gelesen.
Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

```js
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});
gyroscope.start();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
