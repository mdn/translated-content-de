---
title: "PressureRecord: time-Eigenschaft"
short-title: time
slug: Web/API/PressureRecord/time
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`time`**-Eigenschaft gibt den [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der für ein [`PressureRecord`](/de/docs/Web/API/PressureRecord) aufgezeichnet wurde. Er entspricht der Zeit, zu der die Daten vom System bezogen wurden, relativ zum [Zeitursprung des globalen Objekts](/de/docs/Web/API/Performance/timeOrigin), in dem der [`PressureObserver`](/de/docs/Web/API/PressureObserver) die Benachrichtigung generierte.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel darstellt, als das [`PressureRecord`](/de/docs/Web/API/PressureRecord) erstellt wurde.

## Beispiele

### Verwendung der `time`-Eigenschaft

Im folgenden Beispiel protokollieren wir den Wert der `time`-Eigenschaft in der Callback-Funktion des Pressure Observers.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  console.log(`Current pressure observed at ${lastRecord.time}`);
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
