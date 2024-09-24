---
title: SharedStorageWorkletGlobalScope
slug: Web/API/SharedStorageWorkletGlobalScope
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorageWorkletGlobalScope`**-Interface der {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} repräsentiert den globalen Gültigkeitsbereich eines {{domxref("SharedStorageWorklet")}}-Moduls.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("SharedStorageWorkletGlobalScope.sharedStorage", "sharedStorage")}} {{Experimental_Inline}}
  - : Enthält eine Instanz des {{domxref("WorkletSharedStorage")}}-Objekts, das den gemeinsamen Speicher für einen bestimmten Ursprung darstellt, wie er in einem Worklet-Kontext bereitgestellt wird.

## Instanzmethoden

- {{domxref("SharedStorageWorkletGlobalScope.register", "register()")}} {{Experimental_Inline}}
  - : Registriert eine innerhalb des aktuellen Worklet-Moduls definierte {{domxref("SharedStorageOperation", "operation", "", "nocode")}}.

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine Anleitung zu diesem Beispiel und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
