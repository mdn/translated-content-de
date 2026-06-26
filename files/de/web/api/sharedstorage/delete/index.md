---
title: "SharedStorage: delete() Methode"
short-title: delete()
slug: Web/API/SharedStorage/delete
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Die **`delete()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle löscht ein bestehendes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.

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
  - Die Datenbank wurde nicht erfolgreich geleert, weil der gemeinsame Speicher nicht verfügbar ist (zum Beispiel, wenn er über eine Browsereinstellung deaktiviert wurde).
  - `key` die vom Browser definierte maximale Länge überschreitet.
  - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) einbezogen hat.
- Im Falle von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Wenn das Schlüssel-Wert-Paar im gemeinsamen Speicher nicht existiert, wird kein Fehler ausgelöst — der Vorgang wird dennoch mit `undefined` erfüllt.

> [!NOTE]
> Im Falle von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `delete()`-Vorgang nicht erfolgreich in die Datenbank geschrieben wird aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsamen Speichers, wird kein Fehler ausgelöst — der Vorgang wird dennoch mit `undefined` erfüllt.

## Beispiele

```js
window.sharedStorage
  .delete("ab-testing-group")
  .then(() => console.log("Value deleted"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
