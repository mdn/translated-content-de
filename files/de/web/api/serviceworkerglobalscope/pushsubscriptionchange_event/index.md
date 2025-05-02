---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange-Ereignis"
short-title: pushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`pushsubscriptionchange`**-Ereignis wird an den [globalen Kontext](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet, um eine Änderung in der Push-Abonnement anzuzeigen, die außerhalb der Kontrolle der Anwendung ausgelöst wurde.

Dies kann passieren, wenn das Abonnement vom Browser aktualisiert wurde, es kann jedoch auch vorkommen, dass das Abonnement widerrufen oder verloren gegangen ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die Ebenen gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pushsubscriptionchange", (event) => { })

onpushsubscriptionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Anwendungshinweise

Obwohl Beispiele, die zeigen, wie Abonnement-bezogene Informationen mit dem Anwendungsserver geteilt werden können, dazu neigen [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zu verwenden, ist dies nicht unbedingt die beste Wahl für den realen Gebrauch, da es zum Beispiel nicht funktioniert, wenn die App offline ist.

Erwägen Sie, eine andere Methode zu verwenden, um Abonnementinformationen zwischen Ihrem Service Worker und dem App-Server zu synchronisieren, oder stellen Sie sicher, dass Ihr Code, der `fetch()` verwendet, robust genug ist, um Fälle zu bewältigen, in denen Versuche zum Datenaustausch fehlschlagen.

> [!NOTE]
> In früheren Entwürfen der Spezifikation wurde definiert, dass dieses Ereignis gesendet wird, wenn ein [`PushSubscription`](/de/docs/Web/API/PushSubscription) abgelaufen ist.

## Beispiele

Dieses Beispiel, das im Kontext eines Service Workers ausgeführt wird, hört auf ein `pushsubscriptionchange`-Ereignis und abonniert das abgelaufene Abonnement neu.

```js
self.addEventListener(
  "pushsubscriptionchange",
  (event) => {
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
  },
  false,
);
```

Wenn ein `pushsubscriptionchange`-Ereignis eintrifft, das anzeigt, dass das Abonnement abgelaufen ist, abonnieren wir neu, indem wir die [`subscribe()`](/de/docs/Web/API/PushManager/subscribe)-Methode des Push-Managers aufrufen. Wenn das zurückgegebene Versprechen erfüllt wird, erhalten wir das neue Abonnement. Dieses wird an den App-Server gesendet, indem ein [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufruf verwendet wird, um eine {{Glossary("JSON", "JSON")}}-formatierte Version des [`endpoint`](/de/docs/Web/API/PushSubscription/endpoint) des Abonnements an den App-Server zu senden.

Sie können auch die `onpushsubscriptionchange`-Ereignishandler-Eigenschaft verwenden, um den Ereignishandler einzurichten:

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
