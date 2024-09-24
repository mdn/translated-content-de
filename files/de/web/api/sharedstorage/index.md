---
title: SharedStorage
slug: Web/API/SharedStorage
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorage`**-Interface der {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung und definiert Methoden zum Schreiben von Daten in den gemeinsamen Speicher.

`SharedStorage` ist die Basisklasse für:

- {{domxref("WindowSharedStorage")}}, zugänglich über {{domxref("Window.sharedStorage")}}.
- {{domxref("WorkletSharedStorage")}}, zugänglich über {{domxref("SharedStorageWorkletGlobalScope.sharedStorage")}}.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("SharedStorage.append", "append()")}} {{Experimental_Inline}}
  - : Fügt einen String zum Wert eines bestehenden Schlüssel-Wert-Paares im gemeinsamen Speicher des aktuellen Ursprungs hinzu.
- {{domxref("SharedStorage.clear", "clear()")}} {{Experimental_Inline}}
  - : Löscht den gemeinsamen Speicher des aktuellen Ursprungs und entfernt alle Daten daraus.
- {{domxref("SharedStorage.delete", "delete()")}} {{Experimental_Inline}}
  - : Löscht ein bestehendes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.
- {{domxref("SharedStorage.set", "set()")}} {{Experimental_Inline}}
  - : Speichert ein neues Schlüssel-Wert-Paar im gemeinsamen Speicher des aktuellen Ursprungs oder aktualisiert ein bestehendes.

## Beispiele

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(console.log("Value saved to shared storage"));
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WindowSharedStorage")}}
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
