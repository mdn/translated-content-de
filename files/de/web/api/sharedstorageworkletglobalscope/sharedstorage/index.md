---
title: "SharedStorageWorkletGlobalScope: sharedStorage-Eigenschaft"
short-title: sharedStorage
slug: Web/API/SharedStorageWorkletGlobalScope/sharedStorage
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`context`** schreibgeschützte Eigenschaft der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) Schnittstelle enthält eine [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objektinstanz, die den gemeinsam genutzten Speicher für einen bestimmten Ursprung darstellt, wie er einem Worklet-Kontext zur Verfügung gestellt wird.

## Wert

Eine [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objektinstanz.

## Beispiele

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Read the user's experiment group from shared storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Return the group number
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
