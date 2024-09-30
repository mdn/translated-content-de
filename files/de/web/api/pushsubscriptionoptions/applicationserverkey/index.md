---
title: "PushSubscriptionOptions: applicationServerKey-Eigenschaft"
short-title: applicationServerKey
slug: Web/API/PushSubscriptionOptions/applicationServerKey
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`applicationServerKey`**-Eigenschaft der [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)-Schnittstelle enthält den öffentlichen Schlüssel, der vom Push-Server verwendet wird.

## Wert

Ein öffentlicher Schlüssel, den Ihr Push-Server verwendet, um Nachrichten über einen Push-Server an Client-Apps zu senden. Dieser Wert ist Teil eines vom Anwendungsserver generierten Signierschlüsselpaares und kann mit der elliptischen Kurve für digitale Signaturen (ECDSA) über die P-256-Kurve verwendet werden. Wenn beim Initialisieren kein `applicationServerKey`-Mitglied übergeben wird, wird es auf `null` gesetzt.

## Beispiele

Im untenstehenden Beispiel wird der Wert von `applicationServerKey` in die Konsole ausgegeben.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options.applicationServerKey); // the public key
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
