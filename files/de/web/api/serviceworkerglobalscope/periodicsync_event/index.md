---
title: "ServiceWorkerGlobalScope: periodicsync Ereignis"
short-title: periodicsync
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`periodicsync`** Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Interfaces wird in zeitlichen Abständen ausgelöst, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("periodicsync", (event) => {});

onperiodicsync = (event) => {};
```

## Ereignistyp

Ein [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PeriodicSyncEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Event`](/de/docs/Web/API/Event)_.

- [`PeriodicSyncEvent.tag`](/de/docs/Web/API/PeriodicSyncEvent/tag) {{ReadOnlyInline}}
  - : Gibt die vom Entwickler definierte Kennung für dieses `PeriodicSyncEvent` zurück. Mehrere Tags können von der Web-App verwendet werden, um verschiedene periodische Aufgaben mit unterschiedlichen Frequenzen auszuführen.

## Beispiele

Das folgende Beispiel zeigt, wie man auf ein periodisches Synchronisationsereignis im Service Worker reagiert.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

Sie können den Ereignishandler auch mit der `onperiodicsync` Eigenschaft einrichten:

```js
self.onperiodicsync = (event) => {
  // ...
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichhaltigere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Periodic Background Sync Demo-App](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
