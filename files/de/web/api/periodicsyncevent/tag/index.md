---
title: "PeriodicSyncEvent: tag-Eigenschaft"
short-title: tag
slug: Web/API/PeriodicSyncEvent/tag
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`tag`**-Eigenschaft, eine schreibgeschützte Eigenschaft der
{{domxref("PeriodicSyncEvent")}}-Schnittstelle, gibt den vom Entwickler definierten Bezeichner für
das {{domxref('PeriodicSyncEvent')}} zurück. Dieser wird angegeben, wenn die
{{domxref('PeriodicSyncManager.register()')}}-Methode der
{{domxref('PeriodicSyncManager')}}-Schnittstelle aufgerufen wird. Mehrere Tags können von der Web-App
verwendet werden, um verschiedene periodische Aufgaben mit unterschiedlichen Frequenzen auszuführen.

## Wert

Gibt einen {{jsxref('String')}} des definierten Bezeichners zurück.

## Beispiele

Das folgende Beispiel zeigt das Abhören eines periodischen Synchronisierungsereignisses im Service
Worker und den Zugriff auf die `tag`-Eigenschaft.

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
- [Eine Demo-App für die Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
