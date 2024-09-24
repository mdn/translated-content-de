---
title: PressureRecord
slug: Web/API/PressureRecord
l10n:
  sourceCommit: 55a1f6939679773b8f8178eb0dbee20bc8bfdeca
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Das **`PressureRecord`**-Interface ist Teil der [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) und beschreibt den Druckverlauf einer Quelle zu einem bestimmten Übergangszeitpunkt.

## Instanzeigenschaften

- {{domxref("PressureRecord.source")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die Ursprungsquelle angibt, von der der Eintrag stammt.
- {{domxref("PressureRecord.state")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der den aufgezeichneten Druckzustand angibt.
- {{domxref("PressureRecord.time")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitstempel des Eintrags angibt.

## Instanzmethoden

- {{domxref("PressureRecord.toJSON()")}} {{experimental_inline}}
  - : Gibt eine JSON-Darstellung des `PressureRecord`-Objekts zurück.

## Beispiele

### Verwendung des `PressureRecord`-Objekts

Im folgenden Beispiel protokollieren wir die Eigenschaften des `PressureRecord`-Objekts im Rückruf des Druckbeobachters.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure is ${lastRecord.state}`);
  console.log(`Current pressure observed at ${lastRecord.time}`);
  console.log(`Current pressure source: ${lastRecord.source}`);
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
