---
title: "ServiceWorkerGlobalScope: periodicsync-Ereignis"
short-title: periodicsync
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`periodicsync`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird in festgelegten Intervallen ausgelöst, die beim Registrieren eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) angegeben werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("periodicsync", (event) => { })

onperiodicsync = (event) => { }
```

## Ereignistyp

Ein [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PeriodicSyncEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Event`](/de/docs/Web/API/Event)_.

- [`PeriodicSyncEvent.tag`](/de/docs/Web/API/PeriodicSyncEvent/tag) {{ReadOnlyInline}}
  - : Gibt die vom Entwickler definierte Kennung für dieses `PeriodicSyncEvent` zurück. Mehrere Tags können von der Web-App verwendet werden, um verschiedene periodische Aufgaben in unterschiedlichen Frequenzen auszuführen.

## Beispiele

Das folgende Beispiel zeigt, wie auf ein periodisches Sync-Ereignis im Service Worker reagiert wird.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

Sie können den Ereignishandler auch mit der `onperiodicsync`-Eigenschaft einrichten:

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

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
