---
title: "SharedStorageWorkletGlobalScope: Eigenschaft sharedStorage"
short-title: sharedStorage
slug: Web/API/SharedStorageWorkletGlobalScope/sharedStorage
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{non-standard_header}}

Die **`context`** schreibgeschützte Eigenschaft der Schnittstelle [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) enthält eine [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) Objektinstanz, die den gemeinsam genutzten Speicher für einen bestimmten Ursprung darstellt, wie er einem Worklet-Kontext zugänglich gemacht wird.

## Wert

Eine [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) Objektinstanz.

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
