---
title: "ServiceWorkerGlobalScope: periodicsync event"
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

---
title: "ServiceWorkerGlobalScope: periodicsync-Ereignis"
short-title: periodicsync
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
page-type: web-api-event
status:

- experimental
browser-compat: api.ServiceWorkerGlobalScope.periodicsync_event

---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`periodicsync`**-Ereignis des {{domxref("ServiceWorkerGlobalScope")}}-Interfaces wird in festgelegten Zeitintervallen ausgelöst, die bei der Registrierung eines {{domxref('PeriodicSyncManager')}} angegeben werden.

Dieses Ereignis ist nicht stornierbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js
addEventListener("periodicsync", (event) => {});

onperiodicsync = (event) => {};
```

## Ereignistyp

Ein {{domxref("PeriodicSyncEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PeriodicSyncEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Vorfahren, {{domxref("Event")}}_.

- {{domxref('PeriodicSyncEvent.tag')}} {{ReadOnlyInline}}
  - : Gibt den vom Entwickler definierten Bezeichner für dieses `PeriodicSyncEvent` zurück. Mehrere Tags können von der Web-App verwendet werden, um unterschiedliche periodische Aufgaben mit verschiedenen Frequenzen auszuführen.

## Beispiele

Das folgende Beispiel zeigt, wie auf ein periodisches Synchronisierungsereignis im Service Worker reagiert werden kann.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

Sie können den Ereignisbehandler auch mit der `onperiodicsync`-Eigenschaft einrichten:

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

- [Reichere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Periodic Background Sync Demo-App](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
