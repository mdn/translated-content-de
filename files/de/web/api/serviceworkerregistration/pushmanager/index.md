---
title: "ServiceWorkerRegistration: pushManager-Eigenschaft"
short-title: pushManager
slug: Web/API/ServiceWorkerRegistration/pushManager
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`pushManager`** der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt eine Referenz auf die [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle zum Verwalten von Push-Abonnements zurück; dies umfasst die Unterstützung für das Abonnieren, das Abrufen eines aktiven Abonnements und den Zugriff auf den Push-Berechtigungsstatus.

## Wert

Ein [`PushManager`](/de/docs/Web/API/PushManager)-Objekt.

## Beispiele

```js
this.onpush = (event) => {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, the fetch() API.
      },
      (error) => {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.error(error);
      },
    );
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Push API](/de/docs/Web/API/Push_API)
