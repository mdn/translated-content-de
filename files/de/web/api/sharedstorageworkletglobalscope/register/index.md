---
title: "SharedStorageWorkletGlobalScope: register()-Methode"
short-title: register()
slug: Web/API/SharedStorageWorkletGlobalScope/register
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Die **`register()`**-Methode des [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)-Interfaces registriert eine innerhalb des aktuellen Worklet-Moduls definierte [Operation](/de/docs/Web/API/SharedStorageOperation).

## Syntax

```js-nolint
register(name, operationCtor)
```

### Parameter

- `name`
  - : Ein String, der den Namen darstellt, mit dem Sie die Operation registrieren möchten. Wenn die Operation aufgerufen wird (z.B. über [`WindowSharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) oder [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)), wird dieser Name verwendet, um die gewünschte Operation zu identifizieren.
- `operationCtor`
  - : Ein String, der den Klassennamen der zu registrierenden Operation darstellt. Dies ist der Klassenkonstruktor, der aufgerufen wird, wenn die Operation ausgeführt wird.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Eine Operation bereits mit dem angegebenen Namen registriert wurde.
    - Der `operationCtor` kein gültiger Konstruktor ist.
    - Die Klasse keine gültige `run()`-Methode enthält.
    - Das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Einstiegsseite für einen detallierten Überblick über dieses Beispiel und Links zu weiteren Beispielen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
