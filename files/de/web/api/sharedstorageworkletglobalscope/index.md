---
title: SharedStorageWorkletGlobalScope
slug: Web/API/SharedStorageWorkletGlobalScope
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Das **`SharedStorageWorkletGlobalScope`** Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den globalen Scope eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) Moduls.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) {{deprecated_inline}} {{non-standard_inline}}
  - : Enthält eine Instanz des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) Objekts, das den gemeinsamen Speicher für einen bestimmten Ursprung im Kontext eines Worklets darstellt.

## Instanzmethoden

- [`register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) {{deprecated_inline}} {{non-standard_inline}}
  - : Registriert eine im aktuellen Worklet-Modul definierte [Operation](/de/docs/Web/API/SharedStorageOperation).

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

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Hauptseite für eine Anleitung zu diesem Beispiel und Links zu anderen Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
