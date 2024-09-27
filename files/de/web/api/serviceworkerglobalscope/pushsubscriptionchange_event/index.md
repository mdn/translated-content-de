---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange Ereignis"
short-title: pushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`pushsubscriptionchange`** Ereignis wird an den [Globalen Scope](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet, um eine Änderung der Push-Benachrichtigung zu signalisieren, die außerhalb der Kontrolle der Anwendung ausgelöst wurde.

Dies kann auftreten, wenn das Abonnement vom Browser aktualisiert wurde, es kann aber auch passieren, dass das Abonnement widerrufen oder verloren gegangen ist.

Dieses Ereignis kann nicht abgebrochen werden und löst kein Blubbern aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pushsubscriptionchange", (event) => {});

onpushsubscriptionchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Obwohl Beispiele, die zeigen, wie abonnementbezogene Informationen mit dem Anwendungsserver geteilt werden können, dazu tendieren, [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zu verwenden, ist dies möglicherweise nicht die beste Wahl für den praktischen Einsatz, da es zum Beispiel nicht funktioniert, wenn die App offline ist.

Ziehen Sie in Betracht, eine andere Methode zu verwenden, um Abonnementinformationen zwischen Ihrem Service Worker und dem App-Server zu synchronisieren, oder stellen Sie sicher, dass Ihr Code, der `fetch()` verwendet, robust genug ist, um Fälle zu bewältigen, in denen Versuche, Daten auszutauschen, fehlschlagen.

> [!NOTE]
> In früheren Entwürfen der Spezifikation wurde dieses Ereignis definiert, um gesendet zu werden, wenn ein [`PushSubscription`](/de/docs/Web/API/PushSubscription) abgelaufen ist.

## Beispiele

Dieses Beispiel, das im Kontext eines Service Workers ausgeführt wird, hört auf ein `pushsubscriptionchange` Ereignis und abonniert erneut das abgelaufene Abonnement.

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

Wenn ein `pushsubscriptionchange` Ereignis eintrifft, das anzeigt, dass das Abonnement abgelaufen ist, abonnieren wir erneut, indem wir die [`subscribe()`](/de/docs/Web/API/PushManager/subscribe) Methode des Push-Managers aufrufen. Wenn das zurückgegebene Versprechen aufgelöst wird, erhalten wir das neue Abonnement. Dieses wird mit einem [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) Aufruf an den App-Server gesendet, um eine [JSON](/de/docs/Glossary/JSON) formatierte Darstellung des Abonnement-`endpoints` an den App-Server zu übermitteln.

Sie können auch die `onpushsubscriptionchange` Ereignis-Handler-Eigenschaft verwenden, um den Ereignis-Handler einzurichten:

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
