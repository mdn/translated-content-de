---
title: "SharedStorage: clear()-Methode"
short-title: clear()
slug: Web/API/SharedStorage/clear
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`clear()`**-Methode des {{domxref("SharedStorage")}}-Interfaces löscht den gemeinsam genutzten Speicher des aktuellen Ursprungs und entfernt alle Daten daraus.

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
  - Die Datenbank nicht erfolgreich gelöscht wurde, weil der gemeinsam genutzte Speicher nicht verfügbar ist (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - Die aufrufende Site nicht am erfolgreichen [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) teilgenommen hat.
- Im Fall von {{domxref("WorkletSharedStorage")}} wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}} hinzugefügt wurde.

> [!NOTE]
> Im Fall von {{domxref("WindowSharedStorage")}}, wenn die `clear()`-Operation nicht erfolgreich in die Datenbank schreibt aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsam genutzten Speichers, wird kein Fehler ausgelöst — die Operation wird immer noch mit `undefined` erfüllt.

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
