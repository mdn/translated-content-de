---
title: "ServiceWorkerGlobalScope: sync-Ereignis"
short-title: sync
slug: Web/API/ServiceWorkerGlobalScope/sync_event
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`sync`**-Ereignis der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle wird ausgelöst, wenn die Seite (oder der Worker), die das Ereignis mit dem {{domxref('SyncManager')}} registriert hat, läuft und sobald die Netzwerkverbindung verfügbar ist.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("sync", (event) => {});

onsync = (event) => {};
```

## Ereignistyp

Ein {{domxref("SyncEvent")}}, das von {{domxref("ExtendableEvent")}} und {{domxref("Event")}} erbt.

{{InheritanceDiagram("SyncEvent")}}

## Ereigniseigenschaften

_Übernimmt Eigenschaften von seinem Vorfahren, {{domxref("ExtendableEvent")}} und {{domxref("Event")}}_.

- {{domxref("SyncEvent.tag")}} {{ReadOnlyInline}}
  - : Gibt den vom Entwickler definierten Bezeichner für dieses `SyncEvent` zurück.
- {{domxref("SyncEvent.lastChance")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisierungsversuche unternehmen wird.

## Beispiele

Das folgende Beispiel zeigt, wie man auf ein sync-Ereignis im Service Worker reagiert.

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
  // ...
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
