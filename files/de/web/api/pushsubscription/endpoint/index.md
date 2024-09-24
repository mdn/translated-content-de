---
title: "PushSubscription: endpoint-Eigenschaft"
short-title: endpoint
slug: Web/API/PushSubscription/endpoint
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`endpoint`**-Eigenschaft der
{{domxref("PushSubscription")}}-Schnittstelle gibt einen String zurück, der
den mit dem Push-Abonnement verknüpften Endpunkt enthält.

Der Endpunkt hat die Form einer benutzerdefinierten URL, die auf einen Push-Server verweist und mit der eine Push-Nachricht an die spezielle Service-Worker-Instanz gesendet werden kann, die den Push-Dienst abonniert hat. Aus diesem Grund ist es ratsam, Ihren Endpunkt geheim zu halten, damit andere ihn nicht kapern und die Push-Funktionalität missbrauchen können.

## Wert

Ein String.

## Beispiele

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.subscribe({ userVisibleOnly: true }).then((subscription) => {
    console.log(subscription.endpoint);

    // An diesem Punkt würden Sie höchstwahrscheinlich den Abonnement-Endpunkt
    // an Ihren Server senden, speichern und dann verwenden, um
    // zu einem späteren Zeitpunkt eine Push-Nachricht zu senden
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
