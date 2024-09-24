---
title: "ServiceWorker: statechange-Ereignis"
short-title: statechange
slug: Web/API/ServiceWorker/statechange_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `statechange`-Ereignis wird ausgelöst, wenn sich der {{domxref("ServiceWorker.state")}} ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Service-Worker-Registration-Events-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code lauscht auf Änderungen im {{domxref("ServiceWorker.state")}}
und gibt dessen Wert zurück.

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

Beachten Sie, dass, wenn `statechange` ausgelöst wird, sich die Referenzen des Service Workers geändert haben können. Zum Beispiel:

```js
navigator.serviceWorker.register("/sw.js").then((swr) => {
  swr.installing.state = "installing";
  swr.installing.onstatechange = () => {
    swr.installing = null;
    // An diesem Punkt könnte swr.waiting ODER swr.active wahr sein. Dies liegt daran,
    // dass das statechange-Ereignis in die Warteschlange gestellt wird, während der zugrunde liegende
    // Worker möglicherweise in den Wartestatus wechselt und sofort aktiviert wird, wenn dies möglich ist.
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
