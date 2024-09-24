---
title: "PressureRecord: time-Eigenschaft"
short-title: time
slug: Web/API/PressureRecord/time
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`time`**-Eigenschaft gibt den {{domxref("DOMHighResTimeStamp","Zeitstempel", "", "no-code")}} zurück, der für ein {{domxref("PressureRecord")}} aufgezeichnet wurde. Er entspricht dem Zeitpunkt, zu dem die Daten vom System relativ zum [Ursprung der Zeit des globalen Objekts](/de/docs/Web/API/Performance/timeOrigin) erhalten wurden, in dem der {{domxref("PressureObserver")}} die Benachrichtigung erzeugt hat.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitstempel repräsentiert, als das {{domxref("PressureRecord")}} erstellt wurde.

## Beispiele

### Verwendung der `time`-Eigenschaft

Im folgenden Beispiel protokollieren wir den Wert der `time`-Eigenschaft im Rückruf des Druckbeobachters.

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
