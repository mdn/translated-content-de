---
title: "SharedStorage: clear()-Methode"
short-title: clear()
slug: Web/API/SharedStorage/clear
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`clear()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle löscht den gemeinsamen Speicher des aktuellen Ursprungs und entfernt alle Daten daraus.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Die Datenbank nicht erfolgreich gelöscht wurde, da der gemeinsame Speicher nicht verfügbar ist (zum Beispiel, wenn er mit einer Browsereinstellung deaktiviert ist).
  - Die aufrufende Seite die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox Enrollment-Prozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingebunden hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `clear()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsamen Speichers nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — der Vorgang wird dennoch mit `undefined` erfüllt.

## Beispiele

```js
window.sharedStorage.clear().then(() => console.log("Shared storage cleared"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
