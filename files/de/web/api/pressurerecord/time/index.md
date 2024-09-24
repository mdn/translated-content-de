---
title: "PressureRecord: time-Eigenschaft"
short-title: time
slug: Web/API/PressureRecord/time
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die schreibgeschützte **`time`**-Eigenschaft gibt den [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der für ein [`PressureRecord`](/de/docs/Web/API/PressureRecord) aufgezeichnet wurde. Sie entspricht der Zeit, zu der die Daten vom System im Verhältnis zum [Zeitursprung des globalen Objekts](/de/docs/Web/API/Performance/timeOrigin) erfasst wurden, in dem der [`PressureObserver`](/de/docs/Web/API/PressureObserver) die Benachrichtigung erzeugte.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel darstellt, zu dem das [`PressureRecord`](/de/docs/Web/API/PressureRecord) erstellt wurde.

## Beispiele

### Verwendung der `time`-Eigenschaft

Im folgenden Beispiel protokollieren wir den Wert der `time`-Eigenschaft im Rückruf des Pressure-Observers.

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
