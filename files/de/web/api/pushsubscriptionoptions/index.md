---
title: PushSubscriptionOptions
slug: Web/API/PushSubscriptionOptions
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`PushSubscriptionOptions`**-Interface der [Push-API](/de/docs/Web/API/Push_API) repräsentiert die Optionen, die mit einem Push-Abonnement verbunden sind.

Das schreibgeschützte `PushSubscriptionOptions`-Objekt wird durch den Aufruf von [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) auf einem [`PushSubscription`](/de/docs/Web/API/PushSubscription) zurückgegeben. Dieses Interface besitzt keinen eigenen Konstruktor.

## Instanzeigenschaften

- [`PushSubscriptionOptions.userVisibleOnly`](/de/docs/Web/API/PushSubscriptionOptions/userVisibleOnly) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt für den Benutzer sichtbar gemacht wird.
- [`PushSubscriptionOptions.applicationServerKey`](/de/docs/Web/API/PushSubscriptionOptions/applicationServerKey) {{ReadOnlyInline}}
  - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Apps zu senden.

## Beispiele

Der Aufruf von [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) auf einem [`PushSubscription`](/de/docs/Web/API/PushSubscription) gibt ein `PushSubscriptionOptions`-Objekt zurück. Im untenstehenden Beispiel wird dieses in der Konsole ausgegeben.

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
