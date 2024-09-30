---
title: "SharedStorage: delete()-Methode"
short-title: delete()
slug: Web/API/SharedStorage/delete
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`delete()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage) Schnittstelle löscht ein bestehendes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.

## Syntax

```js-nolint
delete(key)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, das Sie löschen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Die Datenbank nicht erfolgreich gelöscht wurde, da der gemeinsame Speicher nicht verfügbar ist (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - `key` die vom Browser definierte maximale Länge überschreitet.
  - Die aufrufende Site die Shared Storage API nicht in einem erfolgreichen [Anmeldeprozess für das Datenschutz-Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Wenn das Schlüssel-Wert-Paar nicht im gemeinsamen Speicher existiert, wird kein Fehler ausgelöst — der Vorgang wird trotzdem mit `undefined` erfüllt.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `delete()`-Vorgang nicht erfolgreich in die Datenbank schreibt aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsamen Speichers, wird kein Fehler ausgelöst — der Vorgang wird trotzdem mit `undefined` erfüllt.

## Beispiele

```js
window.sharedStorage
  .delete("ab-testing-group")
  .then(console.log("Value deleted"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
