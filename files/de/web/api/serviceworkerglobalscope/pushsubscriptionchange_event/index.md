---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange-Ereignis"
short-title: pushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`pushsubscriptionchange`**-Ereignis wird an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines {{domxref("ServiceWorker")}} gesendet, um eine Änderung in der Push-Abonnement anzuzeigen, die außerhalb der Kontrolle der Anwendung ausgelöst wurde.

Dies kann auftreten, wenn das Abonnement vom Browser aktualisiert wurde, es kann aber auch passieren, dass das Abonnement widerrufen oder verloren wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("pushsubscriptionchange", (event) => {});

onpushsubscriptionchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Nutzungshinweise

Obwohl Beispiele, die zeigen, wie abonnementbezogene Informationen mit dem Anwendungsserver geteilt werden können, dazu tendieren, {{domxref("WorkerGlobalScope/fetch", "fetch()")}} zu verwenden, ist dies nicht unbedingt die beste Wahl für den praktischen Gebrauch, da es beispielsweise nicht funktioniert, wenn die App offline ist.

Erwägen Sie die Verwendung einer anderen Methode, um Abonnementinformationen zwischen Ihrem Service-Worker und dem App-Server zu synchronisieren, oder stellen Sie sicher, dass Ihr Code, der `fetch()` verwendet, robust genug ist, um Fälle zu handhaben, in denen Versuche, Daten auszutauschen, fehlschlagen.

> [!NOTE]
> In früheren Entwürfen der Spezifikation wurde definiert, dass dieses Ereignis gesendet wird, wenn ein {{domxref("PushSubscription")}} abgelaufen ist.

## Beispiele

Dieses Beispiel, ausgeführt im Kontext eines Service-Workers, hört auf ein `pushsubscriptionchange`-Ereignis und meldet sich erneut für das abgelaufene Abonnement an.

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

Wenn ein `pushsubscriptionchange`-Ereignis eintrifft, das anzeigt, dass das Abonnement abgelaufen ist, melden wir uns erneut an, indem wir die Methode {{domxref("PushManager.subscribe", "subscribe()")}} des Push-Managers aufrufen. Wenn das zurückgegebene Versprechen aufgelöst wird, erhalten wir das neue Abonnement. Dies wird an den App-Server über eine {{domxref("WorkerGlobalScope.fetch", "fetch()")}}-Anfrage gesendet, um eine in {{Glossary("JSON")}} formatierte Darstellung des Abonnement-{{domxref("PushSubscription.endpoint", "endpoints")}} an den App-Server zu senden.

Sie können auch die Ereignis-Handler-Eigenschaft `onpushsubscriptionchange` verwenden, um den Ereignis-Handler einzurichten:

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

- [Verwendung der Push-API](/de/docs/Web/API/Push_API)
