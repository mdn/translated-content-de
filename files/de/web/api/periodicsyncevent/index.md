---
title: PeriodicSyncEvent
slug: Web/API/PeriodicSyncEvent
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`PeriodicSyncEvent`**-Schnittstelle der [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) bietet eine Möglichkeit, Aufgaben im Service Worker mit Netzwerkverbindung auszuführen.

Eine Instanz dieses Ereignisses wird an den [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Handler übergeben. Dies geschieht periodisch in einem Intervall, das größer oder gleich dem in der Methode [`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register) festgelegten ist. Andere implementierungsspezifische Faktoren wie das Engagement des Nutzers mit der Website bestimmen das tatsächliche Intervall.

{{InheritanceDiagram}}

## Konstruktor

- [`PeriodicSyncEvent()`](/de/docs/Web/API/PeriodicSyncEvent/PeriodicSyncEvent) {{Experimental_Inline}}
  - : Erstellt ein neues `PeriodicSyncEvent`-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet. Der Browser erstellt diese Objekte selbst und stellt sie dem [`onperiodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Callback zur Verfügung.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`PeriodicSyncEvent.tag`](/de/docs/Web/API/PeriodicSyncEvent/tag) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vom Entwickler definierten Bezeichner für dieses `PeriodicSyncEvent` zurück. Mehrere Tags können von der Webanwendung verwendet werden, um verschiedene periodische Aufgaben in unterschiedlichen Frequenzen auszuführen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

## Beispiele

Das folgende Beispiel zeigt, wie in einem Service Worker auf ein Periodic Sync-Ereignis reagiert werden kann.

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

- [Umfangreichere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
