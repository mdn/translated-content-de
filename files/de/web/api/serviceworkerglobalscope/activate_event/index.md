---
title: "ServiceWorkerGlobalScope: activate Ereignis"
short-title: activate
slug: Web/API/ServiceWorkerGlobalScope/activate_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`activate`** Ereignis der Schnittstelle {{domxref("ServiceWorkerGlobalScope")}} wird ausgelöst, wenn eine {{domxref("ServiceWorkerRegistration")}} einen neuen {{domxref("ServiceWorkerRegistration.active")}} Worker erwirbt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## Ereignistyp

Ein {{domxref("ExtendableEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, aber erbt Eigenschaften von seinem Elternteil, {{domxref("Event")}}._

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen `activate` Ereignishandler verwenden könnten, um einen Cache zu aktualisieren.

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

Sie können den Ereignishandler auch über die `onactivate` Eigenschaft einrichten:

```js
self.onactivate = (event) => {
  // ...
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} Ereignis
- {{domxref("ServiceWorkerGlobalScope")}}
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
