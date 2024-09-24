---
title: SharedStorageRunOperation
slug: Web/API/SharedStorageRunOperation
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`SharedStorageRunOperation`**-Schnittstelle der {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} stellt eine [Run-Ausgabesperre](/de/docs/Web/API/Shared_Storage_API#run) Operation dar.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("SharedStorageRunOperation.run", "run()")}} {{Experimental_Inline}}
  - : Definiert die Struktur, der die `run()`-Methode innerhalb einer Run-Ausgabesperre-Operation entsprechen sollte.

## Beispiele

In diesem Beispiel wird eine Klasse namens `ReachMeasurementOperation` in einer Worklet definiert und mit dem Namen `reach-measurement` registriert, indem {{domxref("SharedStorageWorkletGlobalScope.register()")}} verwendet wird. `SharedStorageRunOperation` definiert die Struktur, der diese Klasse entsprechen muss, im Wesentlichen die Parameter, die für die `run()`-Methode erforderlich sind. Abgesehen von dieser Anforderung kann die Funktionalität der Klasse flexibel definiert werden.

```js
// reach-measurement-worklet.js
const SCALE_FACTOR = 65536;

function convertContentIdToBucket(contentId) {
  return BigInt(contentId);
}

class ReachMeasurementOperation {
  async run(data) {
    const { contentId } = data;

    // Aus dem Shared Storage lesen
    const key = "has-reported-content";
    const hasReportedContent = (await this.sharedStorage.get(key)) === "true";

    // Nicht berichten, wenn bereits ein Bericht gesendet wurde
    if (hasReportedContent) {
      return;
    }

    // Der Aggregationsschlüssel und der aggregierbare Wert werden generiert
    const bucket = convertContentIdToBucket(contentId);
    const value = 1 * SCALE_FACTOR;

    // Einen aggregierbaren Bericht über die Private Aggregation API senden
    privateAggregation.sendHistogramReport({ bucket, value });

    // Den Berichtübermittlungsstatus setzen
    await this.sharedStorage.set(key, true);
  }
}

// Die Operation registrieren
register("reach-measurement", ReachMeasurementOperation);
```

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben geteilten Speicher-Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren. Sehen Sie sich {{domxref("SharedStorageOperation")}} für ein Beispiel an.

Im Hauptbrowser-Kontext wird die `reach-measurement`-Operation unter Verwendung der {{domxref("WindowSharedStorage.run()")}}-Methode aufgerufen:

```js
async function measureUniqueReach() {
  // Das Shared Storage Worklet laden
  await window.sharedStorage.worklet.addModule("reach-measurement-worklet.js");

  // Die Reichweitenmessungsoperation ausführen
  await window.sharedStorage.run("reach-measurement", {
    data: { contentId: "1234" },
  });
}

measureUniqueReach();
```

Weitere Details zu diesem Beispiel finden Sie unter [Einzigartige Reichweitenmessung](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach). Weitere Beispiele finden Sie in der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
