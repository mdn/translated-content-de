---
title: "SharedStorage: set()-Methode"
short-title: set()
slug: Web/API/SharedStorage/set
l10n:
  sourceCommit: d71c12f2ab7cc289117e13513cb965c88a39065e
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`set()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle speichert entweder ein neues Schlüssel-Wert-Paar im geteilten Speicher des aktuellen Ursprungs oder aktualisiert ein bestehendes.

## Syntax

```js-nolint
set(key, value)
set(key, value, options)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel im Schlüssel-Wert-Paar darstellt, den Sie hinzufügen oder aktualisieren möchten.
- `value`
  - : Ein String, der den Wert darstellt, den Sie hinzufügen oder aktualisieren möchten.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `ignoreIfPresent`
      - : Ein boolescher Wert. Der Wert `true` bewirkt, dass der Setzvorgang abgebrochen wird, wenn ein Schlüssel-Wert-Paar mit dem angegebenen `key` bereits existiert. Der Standardwert `false` führt dazu, dass der Setzvorgang den vorherigen Wert überschreibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der erstellte Eintrag aufgrund einer nicht verfügbaren geteilten Speicherung nicht erfolgreich in der Datenbank gespeichert wurde (zum Beispiel, wenn diese durch eine Browsereinstellung deaktiviert ist).
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die aufrufende Website die Shared Storage API nicht in einem erfolgreichen [Anmeldeprozess für die Datenschutzeinstellungen](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) aufgenommen hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage) wird, wenn der `set()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des geteilten Speichers nicht erfolgreich in die Datenbank geschrieben wird, kein Fehler ausgelöst — der Vorgang wird trotzdem mit `undefined` erfüllt.

## Beispiele

```js
window.sharedStorage
  .set("ab-testing-group", "0", {
    ignoreIfPresent: true,
  })
  .then(() => console.log("Set operation completed"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
