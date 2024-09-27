---
title: PressureRecord
slug: Web/API/PressureRecord
l10n:
  sourceCommit: 55a1f6939679773b8f8178eb0dbee20bc8bfdeca
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`PressureRecord`**-Schnittstelle ist Teil der [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) und beschreibt den Drucktrend einer Quelle zu einem bestimmten Übergangszeitpunkt.

## Instanz-Eigenschaften

- [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die Ursprungsquelle angibt, von der der Datensatz stammt.
- [`PressureRecord.state`](/de/docs/Web/API/PressureRecord/state) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der den aufgezeichneten Druckzustand angibt.
- [`PressureRecord.time`](/de/docs/Web/API/PressureRecord/time) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel des Datensatzes angibt.

## Instanz-Methoden

- [`PressureRecord.toJSON()`](/de/docs/Web/API/PressureRecord/toJSON) {{experimental_inline}}
  - : Gibt eine JSON-Darstellung des `PressureRecord`-Objekts zurück.

## Beispiele

### Verwendung des `PressureRecord`-Objekts

Im folgenden Beispiel protokollieren wir die Eigenschaften des `PressureRecord`-Objekts im Rückruf des Druck-Beobachters.

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
