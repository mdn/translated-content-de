---
title: "ServiceWorkerGlobalScope: sync-Ereignis"
short-title: sync
slug: Web/API/ServiceWorkerGlobalScope/sync_event
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`sync`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, wenn die Seite (oder der Worker), die das Ereignis mit dem [`SyncManager`](/de/docs/Web/API/SyncManager) registriert hat, läuft und sobald die Netzwerkverbindung verfügbar ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("sync", (event) => {});

onsync = (event) => {};
```

## Ereignistyp

Ein [`SyncEvent`](/de/docs/Web/API/SyncEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SyncEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

- [`SyncEvent.tag`](/de/docs/Web/API/SyncEvent/tag) {{ReadOnlyInline}}
  - : Gibt den vom Entwickler festgelegten Bezeichner für dieses `SyncEvent` zurück.
- [`SyncEvent.lastChance`](/de/docs/Web/API/SyncEvent/lastChance) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisationsversuche unternimmt.

## Beispiele

Das folgende Beispiel zeigt, wie auf ein sync-Ereignis im Service Worker reagiert werden kann.

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

Sie können den Ereignishandler auch mithilfe der `onsync`-Eigenschaft einrichten:

```js
self.onsync = (event) => {
  // ...
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichhaltigere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
