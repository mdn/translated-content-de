---
title: "ServiceWorker: statechange-Ereignis"
short-title: statechange
slug: Web/API/ServiceWorker/statechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `statechange`-Ereignis wird ausgelöst, sobald sich der [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Codebeispiel stammt aus dem [Beispiel für service worker-Registrierungsereignisse](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code lauscht auf Änderungen im [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) und gibt dessen Wert zurück.

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

Beachten Sie, dass beim Auslösen von `statechange` die Referenzen des Service Workers möglicherweise geändert wurden. Zum Beispiel:

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
