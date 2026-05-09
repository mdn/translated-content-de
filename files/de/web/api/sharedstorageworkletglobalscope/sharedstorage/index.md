---
title: "SharedStorageWorkletGlobalScope: sharedStorage-Eigenschaft"
short-title: sharedStorage
slug: Web/API/SharedStorageWorkletGlobalScope/sharedStorage
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Die schreibgeschützte **`context`**-Eigenschaft des [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)-Interfaces enthält eine [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objektinstanz, die den gemeinsamen Speicher für einen bestimmten Ursprung darstellt, wie er einem Worklet-Kontext zur Verfügung steht.

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
