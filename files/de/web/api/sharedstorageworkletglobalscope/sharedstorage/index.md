---
title: "SharedStorageWorkletGlobalScope: sharedStorage-Eigenschaft"
short-title: sharedStorage
slug: Web/API/SharedStorageWorkletGlobalScope/sharedStorage
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`context`** schreibgeschützte Eigenschaft der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)-Schnittstelle enthält eine [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objektinstanz, die den gemeinsamen Speicher für einen bestimmten Ursprung darstellt, wie er einem Worklet-Kontext zur Verfügung gestellt wird.

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
