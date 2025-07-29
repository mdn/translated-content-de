---
title: "SharedStorage: clear()-Methode"
short-title: clear()
slug: Web/API/SharedStorage/clear
l10n:
  sourceCommit: d71c12f2ab7cc289117e13513cb965c88a39065e
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

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

- Das `Promise` schlägt mit einem {{jsxref("TypeError")}} fehl, wenn:
  - Die Datenbank nicht erfolgreich gelöscht wurde, weil der gemeinsame Speicher nicht verfügbar ist (zum Beispiel, wenn er über eine Browsereinstellung deaktiviert ist).
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy-Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) schlägt das `Promise` mit einem {{jsxref("TypeError")}} fehl, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn die `clear()`-Operation aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsamen Speichers nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — die Operation wird dennoch mit `undefined` erfüllt.

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
