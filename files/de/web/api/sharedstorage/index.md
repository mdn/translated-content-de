---
title: SharedStorage
slug: Web/API/SharedStorage
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Das **`SharedStorage`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung und definiert Methoden zum Schreiben von Daten in den gemeinsamen Speicher.

`SharedStorage` ist die Basisklasse für:

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), zugänglich über [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage).
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage), zugänglich über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

{{InheritanceDiagram}}

## Instanzmethoden

- [`append()`](/de/docs/Web/API/SharedStorage/append) {{deprecated_inline}} {{non-standard_inline}}
  - : Fügt einen String zum Wert eines bestehenden Schlüssel-Wert-Paares im gemeinsamen Speicher des aktuellen Ursprungs hinzu.
- [`clear()`](/de/docs/Web/API/SharedStorage/clear) {{deprecated_inline}} {{non-standard_inline}}
  - : Löscht den gemeinsamen Speicher des aktuellen Ursprungs und entfernt alle Daten daraus.
- [`delete()`](/de/docs/Web/API/SharedStorage/delete) {{deprecated_inline}} {{non-standard_inline}}
  - : Löscht ein bestehendes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.
- [`set()`](/de/docs/Web/API/SharedStorage/set) {{deprecated_inline}} {{non-standard_inline}}
  - : Speichert ein neues Schlüssel-Wert-Paar im gemeinsamen Speicher des aktuellen Ursprungs oder aktualisiert ein bestehendes.

## Beispiele

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(() => console.log("Value saved to shared storage"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
