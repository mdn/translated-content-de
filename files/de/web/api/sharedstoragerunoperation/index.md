---
title: SharedStorageRunOperation
slug: Web/API/SharedStorageRunOperation
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`SharedStorageRunOperation`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert eine [Run output gate](/de/docs/Web/API/Shared_Storage_API#run) Operation.

{{InheritanceDiagram}}

## Instanzmethoden

- [`run()`](/de/docs/Web/API/SharedStorageRunOperation/run) {{Experimental_Inline}}
  - : Definiert die Struktur, der die `run()`-Methode, die innerhalb einer Run output gate Operation definiert ist, entsprechen sollte.

## Beispiele

In diesem Beispiel wird eine Klasse namens `ReachMeasurementOperation` in einem Worklet definiert und mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) unter dem Namen `reach-measurement` registriert. `SharedStorageRunOperation` definiert die Struktur, der diese Klasse entsprechen muss, und legt im Wesentlichen die Parameter fest, die für die `run()`-Methode erforderlich sind. Abgesehen von dieser Anforderung kann die Funktionalität der Klasse flexibel definiert werden.

```js
// reach-measurement-worklet.js
const SCALE_FACTOR = 65536;

function convertContentIdToBucket(contentId) {
  return BigInt(contentId);
}

class ReachMeasurementOperation {
  async run(data) {
    const { contentId } = data;

    // Read from Shared Storage
    const key = "has-reported-content";
    const hasReportedContent = (await this.sharedStorage.get(key)) === "true";

    // Do not report if a report has been sent already
    if (hasReportedContent) {
      return;
    }

    // Generate the aggregation key and the aggregatable value
    const bucket = convertContentIdToBucket(contentId);
    const value = 1 * SCALE_FACTOR;

    // Send an aggregatable report via the Private Aggregation API
    privateAggregation.sendHistogramReport({ bucket, value });

    // Set the report submission status flag
    await this.sharedStorage.set(key, true);
  }
}

// Register the operation
register("reach-measurement", ReachMeasurementOperation);
```

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren. Siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

Im Hauptbrowsing-Kontext wird die `reach-measurement`-Operation mit der [`WindowSharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) Methode aufgerufen:

```js
async function measureUniqueReach() {
  // Load the Shared Storage worklet
  await window.sharedStorage.worklet.addModule("reach-measurement-worklet.js");

  // Run the reach measurement operation
  await window.sharedStorage.run("reach-measurement", {
    data: { contentId: "1234" },
  });
}

measureUniqueReach();
```

Für weitere Details zu diesem Beispiel siehe [Unique reach measurement](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach). Weitere Beispiele finden Sie in der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
