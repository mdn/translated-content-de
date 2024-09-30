---
title: "ServiceWorkerGlobalScope: install Ereignis"
short-title: install
slug: Web/API/ServiceWorkerGlobalScope/install_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`install`** Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Interfaces wird ausgelöst, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Worker erhält.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("install", (event) => {});

oninstall = (event) => {};
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel zeigt, wie ein `install` Ereignis-Handler verwendet werden kann, um einen Cache mit einer Reihe von Antworten zu füllen, den der Service Worker dann nutzen kann, um Assets offline bereitzustellen:

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

Sie können den Ereignis-Handler auch mit der `oninstall` Eigenschaft einrichten:

```js
self.oninstall = (event) => {
  // ...
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
