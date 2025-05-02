---
title: "ServiceWorkerGlobalScope: activate-Event"
short-title: activate
slug: Web/API/ServiceWorkerGlobalScope/activate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Der **`activate`**-Event der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erwirbt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("activate", (event) => { })

onactivate = (event) => { }
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Der folgende Codeausschnitt zeigt, wie Sie einen `activate`-Ereignishandler verwenden können, um einen Cache zu aktualisieren.

```js
self.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheAllowlist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
```

Sie können den Ereignishandler auch mit der `onactivate`-Eigenschaft einrichten:

```js
self.onactivate = (event) => {
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Event
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
