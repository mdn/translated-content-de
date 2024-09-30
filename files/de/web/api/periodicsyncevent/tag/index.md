---
title: "PeriodicSyncEvent: tag-Eigenschaft"
short-title: tag
slug: Web/API/PeriodicSyncEvent/tag
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`tag`**-Schreibgeschützte Eigenschaft des [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Interfaces gibt den vom Entwickler definierten Bezeichner für das [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) zurück. Dieser wird beim Aufrufen der Methode [`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register) des [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interfaces angegeben. Mehrere Tags können von der Web-App verwendet werden, um verschiedene periodische Aufgaben in unterschiedlichen Frequenzen auszuführen.

## Wert

Gibt einen {{jsxref('String')}} des definierten Bezeichners zurück.

## Beispiele

Das folgende Beispiel zeigt, wie ein periodisches Synchronisationsereignis im Service Worker überwacht wird und wie auf die `tag`-Eigenschaft zugegriffen wird.

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

- [Reichhaltigere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für die Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
