---
title: "ServiceWorker: statechange-Ereignis"
short-title: statechange
slug: Web/API/ServiceWorker/statechange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `statechange`-Ereignis wird jedes Mal ausgelöst, wenn sich [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieser Codeausschnitt stammt aus dem [Beispiel für Service-Worker-Registrierungsereignisse](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code überwacht Änderungen an [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) und gibt dessen Wert zurück.

```js
let serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector("#kind").textContent = "installing";
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector("#kind").textContent = "waiting";
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector("#kind").textContent = "active";
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", (e) => {
    logState(e.target.state);
  });
}
```

Beachten Sie, dass sich die Referenzen auf den Service Worker geändert haben können, wenn `statechange` ausgelöst wird. Zum Beispiel:

```js
navigator.serviceWorker.register("/sw.js").then((swr) => {
  swr.installing.state = "installing";
  swr.installing.onstatechange = () => {
    swr.installing = null;
    // At this point, swr.waiting OR swr.active might be true. This is because the statechange
    // event gets queued, meanwhile the underlying worker may have gone into the waiting
    // state and will be immediately activated if possible.
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
