---
title: "SharedStorage: set()-Methode"
short-title: set()
slug: Web/API/SharedStorage/set
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`set()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle speichert entweder ein neues Schlüssel-Wert-Paar im gemeinsam genutzten Speicher des aktuellen Ursprungs oder aktualisiert ein bestehendes.

## Syntax

```js-nolint
set(key, value)
set(key, value, options)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel im Schlüssel-Wert-Paar darstellt, das Sie hinzufügen oder aktualisieren möchten.
- `value`
  - : Ein String, der den Wert darstellt, den Sie hinzufügen oder aktualisieren möchten.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `ignoreIfPresent`
      - : Ein boolescher Wert. Der Wert `true` bewirkt, dass die set-Operation abgebrochen wird, wenn ein Schlüssel-Wert-Paar mit dem angegebenen `key` bereits existiert. Der Standardwert `false` bewirkt, dass die set-Operation den vorherigen Wert überschreibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der erstellte Eintrag aufgrund der Nichtverfügbarkeit des gemeinsam genutzten Speichers nicht erfolgreich in der Datenbank gespeichert wurde (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - `key` und/oder `value` die vom Browser festgelegte maximale Länge überschreiten.
  - Die aufrufende Website die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingeschlossen hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn die `set()`-Operation aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsam genutzten Speichers nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — die Operation wird trotzdem mit `undefined` erfüllt.

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
