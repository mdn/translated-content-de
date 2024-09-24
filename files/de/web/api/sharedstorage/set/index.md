---
title: "SharedStorage: set() Methode"
short-title: set()
slug: Web/API/SharedStorage/set
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`set()`** Methode der {{domxref("SharedStorage")}} Schnittstelle speichert entweder ein neues Schlüssel-Wert-Paar im Shared Storage des aktuellen Ursprungs oder aktualisiert ein vorhandenes Paar.

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
      - : Ein Boolean-Wert. Der Wert `true` führt dazu, dass der Set-Betrieb abgebrochen wird, wenn ein Schlüssel-Wert-Paar mit dem angegebenen `key` bereits existiert. Der Standardwert `false` bewirkt, dass der Set-Betrieb den vorherigen Wert überschreibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der erstellte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, da der Shared Storage nicht verfügbar ist (zum Beispiel, weil er über eine Browsereinstellung deaktiviert ist).
  - `key` und/oder `value` die vom Browser festgelegte maximale Länge überschreiten.
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeverfahren](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.
- Im Fall von {{domxref("WorkletSharedStorage")}} wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}} hinzugefügt wurde.

> [!NOTE]
> Im Fall von {{domxref("WindowSharedStorage")}}, wenn der `set()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des Shared Storage nicht erfolgreich in die Datenbank geschrieben wird, wird kein Fehler ausgelöst — der Vorgang wird dennoch mit `undefined` erfüllt.

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
