---
title: "SharedStorageWorkletGlobalScope: register()-Methode"
short-title: register()
slug: Web/API/SharedStorageWorkletGlobalScope/register
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`register()`**-Methode der Schnittstelle [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) registriert eine [Operation](/de/docs/Web/API/SharedStorageOperation), die im aktuellen Worklet-Modul definiert ist.

## Syntax

```js-nolint
register(name, operationCtor)
```

### Parameter

- `name`
  - : Ein String, der den Namen darstellt, mit dem Sie die Operation registrieren möchten. Wenn die Operation aufgerufen wird (z. B. über [`WindowSharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) oder [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)), wird dieser Name verwendet, um die Operation zu identifizieren, die Sie ausführen möchten.
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

Sehen Sie die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Startseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und für Links zu weiteren Beispielen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet Modul-Skript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
