---
title: SharedStorage
slug: Web/API/SharedStorage
l10n:
  sourceCommit: d71c12f2ab7cc289117e13513cb965c88a39065e
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorage`** Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung und definiert Methoden, um Daten in den gemeinsamen Speicher zu schreiben.

`SharedStorage` ist die Basisklasse für:

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), aufrufbar über [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage).
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage), aufrufbar über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

{{InheritanceDiagram}}

## Instanzmethoden

- [`append()`](/de/docs/Web/API/SharedStorage/append) {{Experimental_Inline}}
  - : Hängt einen String an den Wert eines vorhandenen Schlüssel-Wert-Paares im gemeinsamen Speicher des aktuellen Ursprungs an.
- [`clear()`](/de/docs/Web/API/SharedStorage/clear) {{Experimental_Inline}}
  - : Löscht den gemeinsamen Speicher des aktuellen Ursprungs und entfernt alle darin enthaltenen Daten.
- [`delete()`](/de/docs/Web/API/SharedStorage/delete) {{Experimental_Inline}}
  - : Löscht ein vorhandenes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.
- [`set()`](/de/docs/Web/API/SharedStorage/set) {{Experimental_Inline}}
  - : Speichert ein neues Schlüssel-Wert-Paar im gemeinsamen Speicher des aktuellen Ursprungs oder aktualisiert ein vorhandenes.

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
