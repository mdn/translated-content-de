---
title: "Gyroscope: y-Eigenschaft"
short-title: y
slug: Web/API/Gyroscope/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die schreibgeschützte **`y`**-Eigenschaft des [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Interfaces gibt eine Zahl zurück, die die Winkelgeschwindigkeit des Geräts entlang seiner y-Achse angibt.

## Wert

Ein {{jsxref('Number')}}.

## Beispiele

Das Gyroskop wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Event-Callback ausgelesen.
Im folgenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
