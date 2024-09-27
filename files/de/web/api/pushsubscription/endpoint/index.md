---
title: "PushSubscription: Endpunkt-Eigenschaft"
short-title: endpoint
slug: Web/API/PushSubscription/endpoint
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`endpoint`**-Eigenschaft der [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Schnittstelle gibt einen String zurück, der den mit dem Push-Abonnement verknüpften Endpunkt enthält.

Der Endpunkt hat die Form einer benutzerdefinierten URL, die zu einem Push-Server zeigt und verwendet werden kann, um eine Push-Nachricht an die spezielle Service-Worker-Instanz zu senden, die den Push-Dienst abonniert hat. Aus diesem Grund ist es ratsam, Ihren Endpunkt geheim zu halten, damit andere ihn nicht hijacken und die Push-Funktionalität missbrauchen.

## Wert

Ein String.

## Beispiele

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.subscribe({ userVisibleOnly: true }).then((subscription) => {
    console.log(subscription.endpoint);

    // At this point you would most likely send the subscription
    // endpoint to your server, save it, then use it to send a
    // push message at a later date
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
