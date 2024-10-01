---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange-Ereignis"
short-title: pushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`pushsubscriptionchange`**-Ereignis wird an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet, um eine Änderung in der Push-Abonnements zu signalisieren, die außerhalb der Kontrolle der Anwendung ausgelöst wurde.

Dies kann passieren, wenn das Abonnement vom Browser aktualisiert wurde, aber es kann auch vorkommen, wenn das Abonnement widerrufen oder verloren wurde.

Dieses Ereignis kann weder abgebrochen werden noch blubbert es.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("pushsubscriptionchange", (event) => {});

onpushsubscriptionchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Obwohl Beispiele, die zeigen, wie Abonnement-bezogene Informationen mit dem Anwendungsserver ausgetauscht werden können, in der Regel [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) verwenden, ist dies möglicherweise nicht die beste Wahl für den praktischen Einsatz, da es beispielsweise nicht funktioniert, wenn die App offline ist.

Erwägen Sie die Verwendung einer anderen Methode, um Abonnementinformationen zwischen Ihrem Service Worker und dem Anwendungsserver zu synchronisieren, oder stellen Sie sicher, dass Ihr Code, der `fetch()` verwendet, robust genug ist, um mit Fällen umzugehen, in denen der Versuch des Datenaustauschs fehlschlägt.

> [!NOTE]
> In früheren Entwürfen der Spezifikation wurde definiert, dass dieses Ereignis gesendet wird, wenn ein [`PushSubscription`](/de/docs/Web/API/PushSubscription) abgelaufen ist.

## Beispiele

Dieses Beispiel, ausgeführt im Kontext eines Service Workers, hört auf ein `pushsubscriptionchange`-Ereignis und meldet das abgelaufene Abonnement erneut an.

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

Wenn ein `pushsubscriptionchange`-Ereignis eintrifft, das anzeigt, dass das Abonnement abgelaufen ist, melden wir uns erneut an, indem wir die [`subscribe()`](/de/docs/Web/API/PushManager/subscribe)-Methode des Push-Managers aufrufen. Wenn das zurückgegebene Versprechen aufgelöst wird, erhalten wir das neue Abonnement. Dieses wird über einen [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufruf, um eine im {{Glossary("JSON", "JSON")}}-Formatierte Version des Abonnement-`endpoint`s an den Anwendungsserver zu senden, übermittelt.

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
