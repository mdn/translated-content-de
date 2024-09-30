---
title: "SharedStorageWorkletGlobalScope: `register()`-Methode"
short-title: register()
slug: Web/API/SharedStorageWorkletGlobalScope/register
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`register()`**-Methode des [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)-Interfaces registriert eine [Operation](/de/docs/Web/API/SharedStorageOperation), die innerhalb des aktuellen Worklet-Moduls definiert ist.

## Syntax

```js-nolint
register(name, operationCtor)
```

### Parameter

- `name`
  - : Ein String, der den Namen repräsentiert, unter dem Sie die Operation registrieren möchten. Wenn die Operation aufgerufen wird (z. B. über [`WindowSharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) oder [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)), wird dieser Name verwendet, um die auszuführende Operation zu identifizieren.
- `operationCtor`
  - : Ein String, der den Klassennamen der zu registrierenden Operation repräsentiert. Dies ist der Klassenkonstruktor, der aufgerufen wird, wenn die Operation ausgeführt wird.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn:
    - Eine Operation bereits mit dem angegebenen Namen registriert wurde.
    - `operationCtor` kein gültiger Konstruktor ist.
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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine detaillierte Anleitung zu diesem Beispiel und für Links zu weiteren Beispielen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit verschiedenen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
