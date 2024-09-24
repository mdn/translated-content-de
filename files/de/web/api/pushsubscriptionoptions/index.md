---
title: PushSubscriptionOptions
slug: Web/API/PushSubscriptionOptions
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`PushSubscriptionOptions`**-Schnittstelle der {{domxref('Push API','','',' ')}} repräsentiert die Optionen, die mit einem Push-Abonnement verbunden sind.

Das schreibgeschützte `PushSubscriptionOptions`-Objekt wird zurückgegeben, indem {{domxref("PushSubscription.options")}} auf einem {{domxref("PushSubscription")}} aufgerufen wird. Diese Schnittstelle hat keinen eigenen Konstruktor.

## Instanzeigenschaften

- {{domxref("PushSubscriptionOptions.userVisibleOnly")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Auswirkung für den Benutzer sichtbar gemacht wird.
- {{domxref("PushSubscriptionOptions.applicationServerKey")}} {{ReadOnlyInline}}
  - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Apps zu senden.

## Beispiele

Durch Aufrufen von {{domxref("PushSubscription.options")}} auf einem {{domxref("PushSubscription")}} wird ein `PushSubscriptionOptions`-Objekt zurückgegeben. Im untenstehenden Beispiel wird dieses in die Konsole ausgegeben.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options); // a PushSubscriptionOptions object
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
