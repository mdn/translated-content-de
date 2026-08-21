---
title: SharedStorageWorkletGlobalScope
slug: Web/API/SharedStorageWorkletGlobalScope
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{non-standard_header}}

Die **`SharedStorageWorkletGlobalScope`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den globalen Geltungsbereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) {{deprecated_inline}} {{non-standard_inline}}
  - : Enthält eine Instanz des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objekts, das den gemeinsam genutzten Speicher für einen bestimmten Ursprung darstellt, wie er in einem Worklet-Kontext bereitgestellt wird.

## Instanz-Methoden

- [`register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) {{deprecated_inline}} {{non-standard_inline}}
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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Übersichtsseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
