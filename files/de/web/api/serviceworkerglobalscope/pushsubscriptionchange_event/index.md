---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange-Event"
short-title: pushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`pushsubscriptionchange`**-Event wird an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet, um eine Änderung in der Push-Abonnement, die außerhalb der Kontrolle der Anwendung ausgelöst wurde, anzuzeigen.

Dies kann geschehen, wenn das Abonnement vom Browser aktualisiert wurde, es kann aber auch passieren, wenn das Abonnement widerrufen oder verloren wurde.

Dieses Ereignis ist nicht stornierbar und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("pushsubscriptionchange", (event) => { })

onpushsubscriptionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Obwohl Beispiele, die zeigen, wie abonnementbezogene Informationen mit dem Anwendungsserver geteilt werden, dazu neigen, [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zu verwenden, ist dies nicht unbedingt die beste Wahl für den realen Einsatz, da es nicht funktioniert, wenn die App offline ist, zum Beispiel.

Erwägen Sie, eine andere Methode zu verwenden, um Abonnementinformationen zwischen Ihrem Service Worker und dem App-Server zu synchronisieren, oder stellen Sie sicher, dass Ihr Code, der `fetch()` verwendet, robust genug ist, um Fälle zu bewältigen, in denen Versuche zum Datenaustausch scheitern.

> [!NOTE]
> In früheren Entwürfen der Spezifikation wurde dieses Ereignis definiert, um gesendet zu werden, wenn ein [`PushSubscription`](/de/docs/Web/API/PushSubscription) abgelaufen ist.

## Beispiele

Dieses Beispiel, das im Kontext eines Service Workers ausgeführt wird, horcht auf ein `pushsubscriptionchange`-Event und abonniert das abgelaufene Abonnement erneut.

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

Wenn ein `pushsubscriptionchange`-Event eintrifft, das anzeigt, dass das Abonnement abgelaufen ist, abonnieren wir erneut, indem wir die `subscribe()`-Methode des Push-Managers aufrufen. Wenn das zurückgegebene Versprechen erfüllt wird, erhalten wir das neue Abonnement. Dies wird an den App-Server gesendet, indem ein `fetch()`-Aufruf verwendet wird, um eine {{Glossary("JSON", "JSON")}}-formatierte Darstellung des Abonnement-`endpoints` an den App-Server zu posten.

Sie können auch die `onpushsubscriptionchange`-Ereignis-Handler-Eigenschaft verwenden, um den Ereignis-Handler einzurichten:

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
