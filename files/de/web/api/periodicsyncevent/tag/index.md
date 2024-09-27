---
title: "PeriodicSyncEvent: tag-Eigenschaft"
short-title: tag
slug: Web/API/PeriodicSyncEvent/tag
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`tag`**-Eigenschaft des [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Interfaces gibt den benutzerdefinierten Bezeichner für das [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) zurück. Dieser wird festgelegt, wenn die [`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register)-Methode des [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interfaces aufgerufen wird. Mehrere Tags können von der Webanwendung verwendet werden, um verschiedene periodische Aufgaben mit unterschiedlichen Frequenzen auszuführen.

## Wert

Gibt einen {{jsxref('String')}} des definierten Bezeichners zurück.

## Beispiele

Das folgende Beispiel zeigt das Abhören eines periodischen Synchronisationsereignisses im Service Worker und den Zugriff auf die `tag`-Eigenschaft.

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
- [Eine Periodic Background Sync Demo-App](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
