---
title: "SharedStorage: delete() Methode"
short-title: delete()
slug: Web/API/SharedStorage/delete
l10n:
  sourceCommit: d71c12f2ab7cc289117e13513cb965c88a39065e
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`delete()`** Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle löscht ein bestehendes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.

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
  - Die Datenbank nicht erfolgreich gelöscht wurde, da der gemeinsame Speicher nicht verfügbar ist (zum Beispiel, weil er über eine Browsereinstellung deaktiviert wurde).
  - `key` die vom Browser definierte maximale Länge überschreitet.
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Wenn das Schlüssel-Wert-Paar nicht im gemeinsamen Speicher vorhanden ist, wird kein Fehler ausgelöst — der Vorgang wird dennoch mit `undefined` erfüllt.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `delete()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsamen Speichers nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — der Vorgang wird dennoch mit `undefined` erfüllt.

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
