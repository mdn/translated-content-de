---
title: SharedStorage
slug: Web/API/SharedStorage
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{non-standard_header}}

Das **`SharedStorage`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung und definiert Methoden, um Daten in den gemeinsamen Speicher zu schreiben.

`SharedStorage` ist die Basisklasse für:

- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), zugänglich über [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage).
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage), zugänglich über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

{{InheritanceDiagram}}

## Instanzmethoden

- [`append()`](/de/docs/Web/API/SharedStorage/append) {{deprecated_inline}} {{non-standard_inline}}
  - : Hängt einen String an den Wert eines bestehenden Schlüssel-Wert-Paares im gemeinsamen Speicher des aktuellen Ursprungs an.
- [`clear()`](/de/docs/Web/API/SharedStorage/clear) {{deprecated_inline}} {{non-standard_inline}}
  - : Löscht den gemeinsamen Speicher des aktuellen Ursprungs, indem alle Daten daraus entfernt werden.
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
