---
title: SharedStorageWorkletGlobalScope
slug: Web/API/SharedStorageWorkletGlobalScope
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Das **`SharedStorageWorkletGlobalScope`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den globalen Gültigkeitsbereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) {{deprecated_inline}}
  - : Enthält eine Instanz des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objekts, das den freigegebenen Speicher für einen bestimmten Ursprung darstellt, wie er in einem Worklet-Kontext zur Verfügung steht.

## Instanz-Methoden

- [`register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) {{deprecated_inline}}
  - : Registriert eine [Operation](/de/docs/Web/API/SharedStorageOperation), die im aktuellen Worklet-Modul definiert ist.

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Startseite für eine Anleitung zu diesem Beispiel und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
