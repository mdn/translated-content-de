---
title: "ServiceWorkerGlobalScope: sync-Ereignis"
short-title: sync
slug: Web/API/ServiceWorkerGlobalScope/sync_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Background Sync")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`sync`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn die Seite (oder der Worker), die das Ereignis beim [`SyncManager`](/de/docs/Web/API/SyncManager) registriert hat, ausgeführt wird und eine Netzwerkverbindung verfügbar ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("sync", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onsync = (event) => { }
```

## Ereignistyp

Ein [`SyncEvent`](/de/docs/Web/API/SyncEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SyncEvent")}}

## Beispiele

Das folgende Beispiel zeigt, wie Sie in einem Service Worker auf ein sync-Ereignis reagieren.

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

Sie können den Event-Handler auch über die Eigenschaft `onsync` einrichten. Beachten Sie jedoch, dass dadurch andere Event-Listener ersetzt werden, die gegebenenfalls über `onsync` hinzugefügt wurden:

```js
self.onsync = (event) => {
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Umfangreichere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
