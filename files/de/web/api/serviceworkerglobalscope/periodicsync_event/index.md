---
title: "ServiceWorkerGlobalScope: periodicsync-Ereignis"
short-title: periodicsync
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`periodicsync`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird in zeitlichen Abständen ausgelöst, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("periodicsync", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onperiodicsync = (event) => { }
```

## Ereignistyp

Ein [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PeriodicSyncEvent")}}

## Beispiele

Das folgende Beispiel zeigt, wie Sie im Service Worker auf ein periodisches Synchronisierungsereignis reagieren können.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

Sie können den Event-Handler auch über die Eigenschaft `onperiodicsync` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onperiodicsync` hinzugefügte Event-Listener ersetzt werden:

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

- [Umfangreichere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
