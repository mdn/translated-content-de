---
title: "ServiceWorkerGlobalScope: install-Ereignis"
short-title: install
slug: Web/API/ServiceWorkerGlobalScope/install_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`install`**-Ereignis der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle wird ausgelöst, wenn eine {{domxref("ServiceWorkerRegistration")}} einen neuen {{domxref("ServiceWorkerRegistration.installing")}} Worker erhält.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("install", (event) => {});

oninstall = (event) => {};
```

## Ereignistyp

Ein {{domxref("ExtendableEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil {{domxref("Event")}}._

## Beispiele

Der folgende Ausschnitt zeigt, wie ein `install`-Ereignishandler verwendet werden kann, um einen Cache mit einer Anzahl von Antworten zu füllen, die der Service Worker dann verwenden kann, um Assets offline bereitzustellen:

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

Sie können den Ereignishandler auch über die Eigenschaft `oninstall` einrichten:

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

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}-Ereignis
- {{domxref("ServiceWorkerGlobalScope")}}
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
