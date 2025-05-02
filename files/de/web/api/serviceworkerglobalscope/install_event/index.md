---
title: "ServiceWorkerGlobalScope: install-Ereignis"
short-title: install
slug: Web/API/ServiceWorkerGlobalScope/install_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`install`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) eine neue [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Worker erhält.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("install", (event) => { })

oninstall = (event) => { }
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel zeigt, wie ein `install`-Ereignishandler verwendet werden kann, um einen Cache mit mehreren Antworten zu füllen, die der Service Worker dann verwenden kann, um Assets offline zu liefern:

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

Sie können den Ereignishandler auch über die `oninstall`-Eigenschaft einrichten:

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

- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
