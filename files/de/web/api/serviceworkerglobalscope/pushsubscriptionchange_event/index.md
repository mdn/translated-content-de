---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange-Ereignis"
short-title: pushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`pushsubscriptionchange`**-Ereignis wird an den [globalen Gültigkeitsbereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet, um anzuzeigen, dass sich eine Push-Subscription außerhalb der Kontrolle der Anwendung geändert hat.

Dies kann geschehen, wenn der Browser die Subscription erneuert. Es kann aber auch vorkommen, wenn die Subscription widerrufen wurde oder verloren gegangen ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pushsubscriptionchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpushsubscriptionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Beispiele dafür, wie Informationen zu einer Subscription an den Anwendungsserver übermittelt werden können, verwenden häufig [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch). Für den praktischen Einsatz ist dies jedoch nicht unbedingt die beste Wahl, da es beispielsweise nicht funktioniert, wenn die Anwendung offline ist.

Erwägen Sie eine andere Methode, um Subscription-Informationen zwischen Ihrem Service Worker und dem Anwendungsserver zu synchronisieren, oder stellen Sie sicher, dass Ihr Code mit `fetch()` robust genug ist, um fehlgeschlagene Versuche der Datenübertragung zu behandeln.

> [!NOTE]
> In früheren Entwürfen der Spezifikation war festgelegt, dass dieses Ereignis gesendet wird, wenn eine [`PushSubscription`](/de/docs/Web/API/PushSubscription) abgelaufen ist.

## Beispiele

Dieses Beispiel wird im Kontext eines Service Workers ausgeführt. Es wartet auf ein `pushsubscriptionchange`-Ereignis und erneuert die abgelaufene Subscription.

```js
self.addEventListener("pushsubscriptionchange", (event) => {
  const conv = (val) =>
    self.btoa(String.fromCharCode.apply(null, new Uint8Array(val)));
  const getPayload = (subscription) => ({
    endpoint: subscription.endpoint,
    publicKey: conv(subscription.getKey("p256dh")),
    authToken: conv(subscription.getKey("auth")),
  });

  const subscription = self.registration.pushManager
    .subscribe(event.oldSubscription.options)
    .then((subscription) =>
      fetch("register", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          old: getPayload(event.oldSubscription),
          new: getPayload(subscription),
        }),
      }),
    );
  event.waitUntil(subscription);
});
```

Wenn ein `pushsubscriptionchange`-Ereignis eintrifft und damit anzeigt, dass die Subscription abgelaufen ist, wird durch Aufruf der Methode [`subscribe()`](/de/docs/Web/API/PushManager/subscribe) des Push Managers eine neue Subscription angelegt. Sobald das zurückgegebene Promise erfüllt ist, erhalten wir die neue Subscription. Sie wird mit einem [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufruf an den Anwendungsserver übermittelt, der eine als {{Glossary("JSON", "JSON")}} formatierte Darstellung des [`endpoint`](/de/docs/Web/API/PushSubscription/endpoint) der Subscription sendet.

Sie können auch die Event-Handler-Eigenschaft `onpushsubscriptionchange` verwenden, um den Event-Handler einzurichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Event-Handler ersetzt werden, die über `onpushsubscriptionchange` hinzugefügt wurden:

```js
self.onpushsubscriptionchange = (event) => {
  event.waitUntil(
    self.registration.pushManager
      .subscribe(event.oldSubscription.options)
      .then((subscription) => {
        /* ... */
      }),
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Push API](/de/docs/Web/API/Push_API)
