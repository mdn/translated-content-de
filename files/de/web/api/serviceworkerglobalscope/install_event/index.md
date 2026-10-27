---
title: "ServiceWorkerGlobalScope: install-Ereignis"
short-title: install
slug: Web/API/ServiceWorkerGlobalScope/install_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`install`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Worker erhält.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("install", (event) => { })
```

Alternativ können Sie der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
oninstall = (event) => { }
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Beispiele

Der folgende Ausschnitt zeigt, wie sich mit einem `install`-Ereignis-Handler ein Cache mit mehreren Antworten befüllen lässt, die der Service Worker anschließend verwenden kann, um Ressourcen offline bereitzustellen:

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

Sie können den Ereignis-Handler auch über die Eigenschaft `oninstall` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `oninstall` hinzugefügte Ereignis-Listener ersetzt werden:

```js
self.oninstall = (event) => {
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
