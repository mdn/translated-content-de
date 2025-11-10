---
title: "PeriodicSyncEvent: tag-Eigenschaft"
short-title: tag
slug: Web/API/PeriodicSyncEvent/tag
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`tag`**-Schreibgeschützte Eigenschaft des
[`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Interfaces gibt den vom Entwickler definierten Bezeichner für das
[`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) zurück. Dieser wird angegeben, wenn die Methode
[`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register) des
[`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interfaces aufgerufen wird. Mehrere Tags können von der Web-App verwendet werden, um unterschiedliche periodische Aufgaben in unterschiedlichen Frequenzen auszuführen.

## Wert

Gibt einen {{jsxref('String')}} mit dem definierten Bezeichner zurück.

## Beispiele

Das folgende Beispiel demonstriert das Anhören eines periodischen Synchronisationsereignisses im Service Worker und den Zugriff auf die `tag`-Eigenschaft.

```js
self.addEventListener("periodicsync", (event) => {
  console.log(event.tag); // logs the events tag
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
