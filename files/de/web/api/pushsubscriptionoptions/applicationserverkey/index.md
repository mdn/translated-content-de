---
title: "PushSubscriptionOptions: applicationServerKey-Eigenschaft"
short-title: applicationServerKey
slug: Web/API/PushSubscriptionOptions/applicationServerKey
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`applicationServerKey`** der {{domxref("PushSubscriptionOptions")}}-Schnittstelle enthält den öffentlichen Schlüssel, der vom Push-Server verwendet wird.

## Wert

Ein öffentlicher Schlüssel, den Ihr Push-Server verwendet, um Nachrichten über einen Push-Server an Client-Apps zu senden. Dieser Wert ist Teil eines Signaturschlüsselpaares, das von Ihrem Anwendungsserver generiert wird und mit der elliptischen Kurven-Digitale-Signatur-Algorithmus (ECDSA) über die P-256 Kurve verwendbar ist. Wenn beim Initialisieren kein `applicationServerKey`-Mitglied übergeben wird, wird es auf `null` gesetzt.

## Beispiele

Im folgenden Beispiel wird der Wert von `applicationServerKey` in die Konsole ausgegeben.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options.applicationServerKey); // der öffentliche Schlüssel
  });
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
