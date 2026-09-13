---
title: "SharedStorageWorkletGlobalScope: register()-Methode"
short-title: register()
slug: Web/API/SharedStorageWorkletGlobalScope/register
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{non-standard_header}}

Die **`register()`**-Methode der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)-Schnittstelle registriert eine [Operation](/de/docs/Web/API/SharedStorageOperation), die innerhalb des aktuellen Worklet-Moduls definiert ist.

## Syntax

```js-nolint
register(name, operationCtor)
```

### Parameter

- `name`
  - : Ein String, der den Namen darstellt, unter dem die Operation registriert werden soll. Wenn die Operation aufgerufen wird (zum Beispiel über [`WindowSharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) oder [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)), wird dieser Name verwendet, um die Operation zu identifizieren, die ausgeführt werden soll.
- `operationCtor`
  - : Ein String, der den Klassennamen der zu registrierenden Operation darstellt. Dies ist der Klassenkonstruktor, der aufgerufen wird, wenn die Operation ausgeführt wird.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Eine Operation mit dem angegebenen Namen bereits registriert wurde.
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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Hauptseite für eine ausführliche Erklärung dieses Beispiels und Links zu weiteren Beispielen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
