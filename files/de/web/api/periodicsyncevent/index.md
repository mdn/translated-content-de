---
title: PeriodicSyncEvent
slug: Web/API/PeriodicSyncEvent
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Das **`PeriodicSyncEvent`**-Interface der [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) bietet eine Möglichkeit, Aufgaben im Service Worker mit Netzwerkverbindung auszuführen.

Eine Instanz dieses Ereignisses wird an den [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Handler übergeben. Dies geschieht regelmäßig in einem Intervall, das größer oder gleich dem im [`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register)-Method festgelegten Intervall ist. Andere implementationsspezifische Faktoren wie die Interaktion des Benutzers mit der Website bestimmen das tatsächliche Intervall.

{{InheritanceDiagram}}

## Konstruktor

- [`PeriodicSyncEvent()`](/de/docs/Web/API/PeriodicSyncEvent/PeriodicSyncEvent) {{Experimental_Inline}}
  - : Erstellt ein neues `PeriodicSyncEvent`-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet. Der Browser erstellt diese Objekte selbst und stellt sie dem [`onperiodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Callback zur Verfügung.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`PeriodicSyncEvent.tag`](/de/docs/Web/API/PeriodicSyncEvent/tag) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die vom Entwickler definierte Kennung für dieses `PeriodicSyncEvent` zurück. Mehrere Tags können von der Web-App verwendet werden, um verschiedene periodische Aufgaben in unterschiedlichen Frequenzen auszuführen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

## Beispiele

Das folgende Beispiel zeigt, wie man auf ein periodisches Synchronisationsereignis im Service Worker reagiert.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

`fetchAndCacheLatestNews` ist eine vom Entwickler definierte Funktion.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichhaltigere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
