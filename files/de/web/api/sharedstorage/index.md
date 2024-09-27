---
title: SharedStorage
slug: Web/API/SharedStorage
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`SharedStorage`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung und definiert Methoden zum Schreiben von Daten in den gemeinsamen Speicher.

`SharedStorage` ist die Basisklasse für:

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), zugänglich über [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage).
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage), zugänglich über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

{{InheritanceDiagram}}

## Instanzmethoden

- [`append()`](/de/docs/Web/API/SharedStorage/append) {{Experimental_Inline}}
  - : Fügt einen String zum Wert eines vorhandenen Schlüssel-Wert-Paares im gemeinsamen Speicher des aktuellen Ursprungs hinzu.
- [`clear()`](/de/docs/Web/API/SharedStorage/clear) {{Experimental_Inline}}
  - : Löscht den gemeinsamen Speicher des aktuellen Ursprungs und entfernt alle Daten daraus.
- [`delete()`](/de/docs/Web/API/SharedStorage/delete) {{Experimental_Inline}}
  - : Löscht ein vorhandenes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.
- [`set()`](/de/docs/Web/API/SharedStorage/set) {{Experimental_Inline}}
  - : Speichert ein neues Schlüssel-Wert-Paar im gemeinsamen Speicher des aktuellen Ursprungs oder aktualisiert ein bestehendes.

## Beispiele

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(console.log("Value saved to shared storage"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
