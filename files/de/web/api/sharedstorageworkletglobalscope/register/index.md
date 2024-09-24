---
title: "SharedStorageWorkletGlobalScope: register() Methode"
short-title: register()
slug: Web/API/SharedStorageWorkletGlobalScope/register
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`register()`** Methode der {{domxref("SharedStorageWorkletGlobalScope")}} Schnittstelle registriert eine im aktuellen Worklet-Modul definierte {{domxref("SharedStorageOperation", "Operation", "", "nocode")}}.

## Syntax

```js-nolint
register(name, operationCtor)
```

### Parameter

- `name`
  - : Ein String, der den Namen repräsentiert, mit dem Sie die Operation registrieren möchten. Wenn die Operation aufgerufen wird (z. B. über {{domxref("WindowSharedStorage.run()")}} oder {{domxref("WindowSharedStorage.selectURL()")}}), wird dieser Name verwendet, um die auszuführende Operation zu identifizieren.
- `operationCtor`
  - : Ein String, der den Klassennamen der zu registrierenden Operation repräsentiert. Dies ist der Klassenkonstruktor, der aufgerufen wird, wenn die Operation ausgeführt wird.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn:
    - Eine Operation bereits mit dem angegebenen Namen registriert wurde.
    - Der `operationCtor` kein gültiger Konstruktor ist.
    - Die Klasse keine gültige `run()` Methode enthält.
    - Das Worklet-Modul nicht mit {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}} hinzugefügt wurde.

## Beispiele

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Lesen Sie die Experimentgruppe des Nutzers aus dem shared storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Gibt die Gruppennummer zurück
    return experimentGroup;
  }
}

register("ab-testing", SelectURLOperation);
```

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Hauptseite für eine ausführliche Beschreibung dieses Beispiels und Links zu weiteren Beispielen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe {{domxref("SharedStorageOperation")}} für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
