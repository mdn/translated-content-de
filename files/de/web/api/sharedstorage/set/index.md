---
title: "SharedStorage: Methode set()"
short-title: set()
slug: Web/API/SharedStorage/set
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`set()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle speichert entweder ein neues Schlüssel-Wert-Paar im Shared Storage des aktuellen Ursprungs oder aktualisiert ein bestehendes Paar.

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
      - : Ein boolescher Wert. Der Wert `true` führt dazu, dass der Setzvorgang abgebrochen wird, wenn bereits ein Schlüssel-Wert-Paar mit dem angegebenen `key` existiert. Der Standardwert `false` führt dazu, dass der bestehende Wert überschrieben wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der erstellte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, weil der Shared Storage nicht verfügbar ist (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - `key` und/oder `value` die vom Browser festgelegte maximale Länge überschreiten.
  - Die aufrufende Site die Shared Storage API nicht in einem erfolgreichen [Anmeldeprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) integriert hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage) wird, wenn der `set()`-Vorgang aus einem anderen Grund als nicht verfügbarem Shared Storage nicht erfolgreich in die Datenbank schreibt, kein Fehler ausgelöst — der Vorgang wird trotzdem mit `undefined` erfüllt.

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
