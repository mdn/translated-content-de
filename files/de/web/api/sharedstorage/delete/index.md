---
title: "SharedStorage: delete()-Methode"
short-title: delete()
slug: Web/API/SharedStorage/delete
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`delete()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle löscht ein bestehendes Schlüssel-Wert-Paar aus dem Shared Storage des aktuellen Ursprungs.

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
  - Die Datenbank nicht erfolgreich gelöscht wurde, da der Shared Storage nicht verfügbar ist (zum Beispiel deaktiviert durch eine Browsereinstellung).
  - `key` die vom Browser festgelegte maximale Länge überschreitet.
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Datenschutz-Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Wenn das Schlüssel-Wert-Paar nicht im Shared Storage existiert, wird kein Fehler ausgelöst — die Operation wird dennoch mit `undefined` erfüllt.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage): Wenn die `delete()`-Operation aus einem anderen Grund als der Nichtverfügbarkeit des Shared Storage nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — die Operation wird dennoch mit `undefined` erfüllt.

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
