---
title: "SharedStorage: set()-Methode"
short-title: set()
slug: Web/API/SharedStorage/set
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`set()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle speichert entweder ein neues Schlüssel-Wert-Paar im freigegebenen Speicher des aktuellen Ursprungs oder aktualisiert ein bestehendes.

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
      - : Ein boolescher Wert. Der Wert `true` bewirkt, dass der Setzvorgang abgebrochen wird, wenn ein Schlüssel-Wert-Paar mit dem angegebenen `key` bereits vorhanden ist. Der Standardwert `false` bewirkt, dass der Setzvorgang den vorherigen Wert überschreibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der erstellte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, da der freigegebene Speicher nicht verfügbar ist (zum Beispiel, weil er durch eine Browsereinstellung deaktiviert ist).
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `set()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des freigegebenen Speichers nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — der Vorgang erfüllt sich dennoch mit `undefined`.

## Beispiele

```js
window.sharedStorage
  .set("ab-testing-group", "0", {
    ignoreIfPresent: true,
  })
  .then(console.log("Set operation completed"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
