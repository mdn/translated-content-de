---
title: PushSubscriptionOptions
slug: Web/API/PushSubscriptionOptions
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`PushSubscriptionOptions`**-Schnittstelle der [Push-API](/de/docs/Web/API/Push_API) repräsentiert die mit einem Push-Abonnement verbundenen Optionen.

Das schreibgeschützte `PushSubscriptionOptions`-Objekt wird zurückgegeben, indem [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) auf einem [`PushSubscription`](/de/docs/Web/API/PushSubscription) aufgerufen wird. Diese Schnittstelle hat keinen eigenen Konstruktor.

## Instanzeigenschaften

- [`PushSubscriptionOptions.userVisibleOnly`](/de/docs/Web/API/PushSubscriptionOptions/userVisibleOnly) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt für den Benutzer sichtbar gemacht wird.
- [`PushSubscriptionOptions.applicationServerKey`](/de/docs/Web/API/PushSubscriptionOptions/applicationServerKey) {{ReadOnlyInline}}
  - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Apps zu senden.

## Beispiele

Der Aufruf von [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) auf einem [`PushSubscription`](/de/docs/Web/API/PushSubscription) gibt ein `PushSubscriptionOptions`-Objekt zurück. Im untenstehenden Beispiel wird dieses in die Konsole geschrieben.

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
