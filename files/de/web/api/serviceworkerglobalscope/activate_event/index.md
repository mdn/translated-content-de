---
title: "ServiceWorkerGlobalScope: activate-Ereignis"
short-title: activate
slug: Web/API/ServiceWorkerGlobalScope/activate_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`activate`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen aktiven Worker unter [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) erhält.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("activate", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onactivate = (event) => { }
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Beispiele

Der folgende Ausschnitt zeigt, wie Sie mit einem `activate`-Event-Handler einen Cache aktualisieren können.

```js
self.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheAllowlist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
          return undefined;
        }),
      ),
    ),
  );
});
```

Sie können den Event-Handler auch über die Eigenschaft `onactivate` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onactivate` hinzugefügte Event-Listener ersetzt werden:

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

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
