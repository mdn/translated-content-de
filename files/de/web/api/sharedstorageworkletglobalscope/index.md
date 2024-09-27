---
title: SharedStorageWorkletGlobalScope
slug: Web/API/SharedStorageWorkletGlobalScope
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorageWorkletGlobalScope`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den globalen Geltungsbereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) {{Experimental_Inline}}
  - : Enthält eine Instanz des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objekts, das den gemeinsamen Speicher für einen bestimmten Ursprung im Kontext eines Worklets darstellt.

## Instanzmethoden

- [`register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) {{Experimental_Inline}}
  - : Registriert eine [Operation](/de/docs/Web/API/SharedStorageOperation), die innerhalb des aktuellen Worklet-Moduls definiert ist.

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Hauptseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu anderen Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
