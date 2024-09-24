---
title: "SharedStorageWorkletGlobalScope: sharedStorage-Eigenschaft"
short-title: sharedStorage
slug: Web/API/SharedStorageWorkletGlobalScope/sharedStorage
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`context`** schreibgeschützte Eigenschaft der {{domxref("SharedStorageWorkletGlobalScope")}} Schnittstelle enthält eine Instanz des {{domxref("WorkletSharedStorage")}} Objekts, die den gemeinsamen Speicher für einen bestimmten Ursprung darstellt, wie er einem Worklet-Kontext zur Verfügung steht.

## Wert

Eine Instanz des {{domxref("WorkletSharedStorage")}} Objekts.

## Beispiele

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Lesen Sie die Experimentgruppe des Benutzers aus dem gemeinsamen Speicher
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Geben Sie die Gruppennummer zurück
    return experimentGroup;
  }
}

register("ab-testing", SelectURLOperation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
