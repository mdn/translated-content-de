---
title: "ServiceWorkerGlobalScope: periodicsync-Ereignis"
short-title: periodicsync
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`periodicsync`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird in zeitlichen Abständen ausgelöst, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt werden.

Dieses Ereignis kann nicht abgebrochen werden und unterstützt keine Bubbling.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("periodicsync", (event) => { })

onperiodicsync = (event) => { }
```

## Ereignistyp

Ein [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PeriodicSyncEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften seines Vorfahren, [`Event`](/de/docs/Web/API/Event)_.

- [`PeriodicSyncEvent.tag`](/de/docs/Web/API/PeriodicSyncEvent/tag) {{ReadOnlyInline}}
  - : Gibt den vom Entwickler definierten Bezeichner für dieses `PeriodicSyncEvent` zurück. Mehrere Tags können von der Webanwendung verwendet werden, um unterschiedliche periodische Aufgaben mit unterschiedlichen Frequenzen auszuführen.

## Beispiele

Das folgende Beispiel zeigt, wie auf ein periodisches Synchronisierungs-Ereignis im Service Worker reagiert wird.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

Sie können den Ereignis-Handler auch über die `onperiodicsync`-Eigenschaft einrichten:

```js
self.onperiodicsync = (event) => {
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichhaltigere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Beispiel-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
