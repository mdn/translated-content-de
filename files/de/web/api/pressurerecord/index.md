---
title: PressureRecord
slug: Web/API/PressureRecord
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Das Interface **`PressureRecord`** ist Teil der [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) und beschreibt den Belastungszustand einer Quelle zu einem bestimmten Zeitpunkt eines Zustandswechsels.

## Instanzeigenschaften

- [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der angibt, von welcher Quelle der Eintrag stammt.
- [`PressureRecord.state`](/de/docs/Web/API/PressureRecord/state) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der den erfassten Belastungszustand angibt.
- [`PressureRecord.time`](/de/docs/Web/API/PressureRecord/time) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel des Eintrags angibt.

## Instanzmethoden

- [`PressureRecord.toJSON()`](/de/docs/Web/API/PressureRecord/toJSON) {{experimental_inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PressureRecord`-Objekt repräsentiert. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

### Das `PressureRecord`-Objekt verwenden

Im folgenden Beispiel werden die Eigenschaften des `PressureRecord`-Objekts im Callback des Pressure Observers protokolliert.

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
