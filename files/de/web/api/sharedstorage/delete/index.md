---
title: "SharedStorage: delete()-Methode"
short-title: delete()
slug: Web/API/SharedStorage/delete
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`delete()`**-Methode des {{domxref("SharedStorage")}}-Interfaces löscht ein bestehendes Schlüssel-Wert-Paar aus dem gemeinsamen Speicher des aktuellen Ursprungs.

## Syntax

```js-nolint
delete(key)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, das Sie löschen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich mit `undefined` erfüllt.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Die Datenbank nicht erfolgreich geleert wurde, da der gemeinsame Speicher nicht verfügbar ist (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - `key` die vom Browser definierte maximale Länge überschreitet.
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.
- Im Fall von {{domxref("WorkletSharedStorage")}} wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Das Worklet-Modul nicht mit {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}} hinzugefügt wurde.

> [!NOTE]
> Wenn das Schlüssel-Wert-Paar nicht im gemeinsamen Speicher existiert, wird kein Fehler geworfen — die Operation erfüllt sich dennoch mit `undefined`.

> [!NOTE]
> Im Fall von {{domxref("WindowSharedStorage")}}, wenn die `delete()`-Operation aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsamen Speichers nicht erfolgreich in die Datenbank geschrieben wird, wird kein Fehler geworfen — die Operation erfüllt sich dennoch mit `undefined`.

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
