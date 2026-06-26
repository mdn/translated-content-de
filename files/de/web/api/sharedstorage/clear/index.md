---
title: "SharedStorage: clear()-Methode"
short-title: clear()
slug: Web/API/SharedStorage/clear
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Die **`clear()`**-Methode des [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Interfaces löscht den gemeinsamen Speicher des aktuellen Ursprungs und entfernt alle darin enthaltenen Daten.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Die Datenbank nicht erfolgreich gelöscht wurde, weil der gemeinsame Speicher nicht verfügbar ist (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.
- Im Falle von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Falle von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn die `clear()`-Operation nicht erfolgreich in die Datenbank schreibt, aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsamen Speichers, wird kein Fehler ausgelöst — die Operation wird dennoch mit `undefined` erfüllt.

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
