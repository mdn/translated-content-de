---
title: "PushSubscription: endpoint-Eigenschaft"
short-title: endpoint
slug: Web/API/PushSubscription/endpoint
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`endpoint`**-Eigenschaft des [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Interfaces gibt einen String zurück, der den mit dem Push-Abonnement verbundenen Endpunkt enthält.

Der Endpunkt hat die Form einer benutzerdefinierten URL, die auf einen Push-Server zeigt. Diese kann verwendet werden, um eine Push-Nachricht an die bestimmte Service-Worker-Instanz zu senden, die den Push-Dienst abonniert hat. Aus diesem Grund ist es ratsam, Ihren Endpunkt geheim zu halten, damit andere ihn nicht kapern und die Push-Funktionalität missbrauchen.

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
