---
title: "PushSubscriptionOptions: userVisibleOnly-Eigenschaft"
short-title: userVisibleOnly
slug: Web/API/PushSubscriptionOptions/userVisibleOnly
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`userVisibleOnly`**-Eigenschaft des {{domxref("PushSubscriptionOptions")}}-Interfaces gibt an, ob das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt für den Benutzer sichtbar gemacht wird.

## Wert

Ein boolescher Wert, der angibt, ob das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt für den Benutzer sichtbar gemacht wird.

## Beispiele

Im folgenden Beispiel wird der Wert von `userVisibleOnly` in die Konsole ausgegeben.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options.userVisibleOnly); // true, wenn dies ein benutzersichtbares Abonnement ist
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
