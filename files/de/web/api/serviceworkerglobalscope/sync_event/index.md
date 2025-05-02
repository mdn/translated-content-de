---
title: "ServiceWorkerGlobalScope: sync-Ereignis"
short-title: sync
slug: Web/API/ServiceWorkerGlobalScope/sync_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Background Sync")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`sync`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, wenn die Seite (oder der Worker), die das Ereignis mit dem [`SyncManager`](/de/docs/Web/API/SyncManager) registriert hat, ausgeführt wird, und sobald Netzwerkverbindung verfügbar ist.

Dieses Ereignis ist nicht stornierbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("sync", (event) => { })

onsync = (event) => { }
```

## Ereignistyp

Ein [`SyncEvent`](/de/docs/Web/API/SyncEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SyncEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

- [`SyncEvent.tag`](/de/docs/Web/API/SyncEvent/tag) {{ReadOnlyInline}}
  - : Gibt die vom Entwickler definierte Kennung für dieses `SyncEvent` zurück.
- [`SyncEvent.lastChance`](/de/docs/Web/API/SyncEvent/lastChance) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der User-Agent keine weiteren Synchronisierungsversuche nach dem aktuellen Versuch unternehmen wird.

## Beispiele

Das folgende Beispiel zeigt, wie man im Service Worker auf ein Sync-Ereignis reagiert.

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

Sie können den Ereignishandler auch mit der `onsync`-Eigenschaft einrichten:

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

- [Reichhaltigere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
