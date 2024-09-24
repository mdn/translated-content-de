---
title: "Gyroskop: y-Eigenschaft"
short-title: "y"
slug: Web/API/Gyroscope/y
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`y`** schreibgeschützte Eigenschaft des {{domxref("Gyroscope")}}-Interfaces gibt eine Zahl zurück, die die Winkelgeschwindigkeit des Geräts entlang seiner y-Achse angibt.

## Wert

Ein {{jsxref('Number')}}.

## Beispiele

Das Gyroskop wird typischerweise im {{domxref('Sensor.reading_event', 'reading')}}-Ereignis-Callback ausgelesen. Im unten stehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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

## Browser-Kompatibilität

{{Compat}}
