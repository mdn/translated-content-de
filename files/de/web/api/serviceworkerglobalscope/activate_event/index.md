---
title: "ServiceWorkerGlobalScope: activate Event"
short-title: activate
slug: Web/API/ServiceWorkerGlobalScope/activate_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`activate`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erlangt.

Dieses Ereignis ist nicht stornierbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen `activate`-Ereignishandler verwenden könnten, um einen Cache zu aktualisieren.

```js
self.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.forEach((cache, cacheName) => {
      if (!cacheAllowlist.includes(cacheName)) {
        return caches.delete(cacheName);
      }
    }),
  );
});
```

Sie können auch den Ereignishandler über die `onactivate`-Eigenschaft einrichten:

```js
self.onactivate = (event) => {
  // ...
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
