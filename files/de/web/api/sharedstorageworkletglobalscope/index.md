---
title: SharedStorageWorkletGlobalScope
slug: Web/API/SharedStorageWorkletGlobalScope
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Shared Storage API")}}{{non-standard_header}}

Das **`SharedStorageWorkletGlobalScope`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den globalen Gültigkeitsbereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Enthält eine Instanz des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Objekts. Sie repräsentiert den gemeinsamen Speicher für eine bestimmte Origin, wie er in einem Worklet-Kontext verfügbar ist.

## Instanzmethoden

- [`register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) {{deprecated_inline}} {{non-standard_inline}}
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

Auf der Übersichtsseite zur [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) finden Sie eine Erläuterung dieses Beispiels und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
