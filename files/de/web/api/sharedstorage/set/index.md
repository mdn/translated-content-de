---
title: "SharedStorage: set()-Methode"
short-title: set()
slug: Web/API/SharedStorage/set
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Die **`set()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle speichert entweder ein neues Schlüssel-Wert-Paar im Shared Storage des aktuellen Ursprungs oder aktualisiert ein bestehendes.

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
      - : Ein Boolean. Der Wert `true` bewirkt, dass der `set`-Vorgang abgebrochen wird, wenn ein Schlüssel-Wert-Paar mit dem angegebenen `key` bereits existiert. Der Standardwert `false` bewirkt, dass der `set`-Vorgang den vorherigen Wert überschreibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der erstellte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, weil Shared Storage nicht verfügbar ist (zum Beispiel ist es durch eine Browsereinstellung deaktiviert).
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die aufrufende Seite nicht die Shared Storage API in einem erfolgreichen [Einschreibungsprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `set()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit von Shared Storage nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst – der Vorgang wird dennoch mit `undefined` erfüllt.

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
