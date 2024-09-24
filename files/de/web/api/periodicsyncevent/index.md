---
title: PeriodicSyncEvent
slug: Web/API/PeriodicSyncEvent
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`PeriodicSyncEvent`**-Schnittstelle der {{domxref('Web Periodic Background Synchronization API', '', '', 'nocode')}} ermöglicht das Ausführen von Aufgaben im Service Worker mit Netzwerkverbindung.

Eine Instanz dieses Ereignisses wird dem {{domxref('ServiceWorkerGlobalScope.periodicsync_event', 'periodicsync')}}-Handler übergeben. Dies geschieht periodisch, in einem Intervall, das größer oder gleich dem in der {{domxref('PeriodicSyncManager.register()')}}-Methode festgelegten ist. Andere implementierungsspezifische Faktoren wie das Engagement des Nutzers mit der Website bestimmen das tatsächliche Intervall.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PeriodicSyncEvent.PeriodicSyncEvent", "PeriodicSyncEvent()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `PeriodicSyncEvent`-Objekt. Dieser Konstruktor wird normalerweise nicht genutzt. Der Browser erstellt diese Objekte selbst und stellt sie der {{domxref('ServiceWorkerGlobalScope.periodicsync_event', 'onperiodicsync')}}-Rückruffunktion zur Verfügung.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref('ExtendableEvent')}}._

- {{domxref('PeriodicSyncEvent.tag')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vom Entwickler definierten Bezeichner für dieses `PeriodicSyncEvent` zurück. Mehrere Tags können von der Web-App verwendet werden, um verschiedene periodische Aufgaben in unterschiedlichen Frequenzen auszuführen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref('ExtendableEvent')}}._

## Beispiele

Das folgende Beispiel zeigt, wie auf ein periodisches Synchronisierungsereignis im Service Worker reagiert wird.

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

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
