---
title: "SharedStorageWorkletGlobalScope: register()-Methode"
short-title: register()
slug: Web/API/SharedStorageWorkletGlobalScope/register
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`register()`**-Methode der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)-Schnittstelle registriert eine im aktuellen Worklet-Modul definierte [Operation](/de/docs/Web/API/SharedStorageOperation).

## Syntax

```js-nolint
register(name, operationCtor)
```

### Parameter

- `name`
  - : Ein String, der den Namen darstellt, mit dem Sie die Operation registrieren möchten. Wenn die Operation aufgerufen wird (zum Beispiel über [`WindowSharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) oder [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)), wird dieser Name verwendet, um die gewünschte Operation zu identifizieren.
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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Landingpage für einen detaillierten Überblick über dieses Beispiel und Links zu weiteren Beispielen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
