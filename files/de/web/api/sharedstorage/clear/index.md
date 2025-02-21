---
title: "SharedStorage: clear()-Methode"
short-title: clear()
slug: Web/API/SharedStorage/clear
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`clear()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle löscht den shared storage der aktuellen Herkunft und entfernt alle darin enthaltenen Daten.

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
  - Die Datenbank nicht erfolgreich gelöscht wurde, weil der shared storage nicht verfügbar ist (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Anmeldungsprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthält.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `clear()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des shared storage nicht erfolgreich in die Datenbank geschrieben wird, wird kein Fehler geworfen – der Vorgang wird dennoch mit `undefined` erfüllt.

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
