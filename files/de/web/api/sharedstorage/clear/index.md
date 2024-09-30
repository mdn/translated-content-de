---
title: "SharedStorage: clear()-Methode"
short-title: clear()
slug: Web/API/SharedStorage/clear
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`clear()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle löscht den gemeinsamen Speicher des aktuellen Ursprungs und entfernt alle darin gespeicherten Daten.

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
  - Die Datenbank nicht erfolgreich gelöscht wurde, da gemeinsamer Speicher nicht verfügbar ist (zum Beispiel, wenn es durch eine Browsereinstellung deaktiviert ist).
  - Die aufrufende Seite den Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `clear()`-Vorgang aus einem anderen Grund als der fehlenden Verfügbarkeit des gemeinsamen Speichers nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — der Vorgang wird trotzdem mit `undefined` erfüllt.

## Beispiele

```js
window.sharedStorage.clear().then(console.log("Shared storage cleared"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
