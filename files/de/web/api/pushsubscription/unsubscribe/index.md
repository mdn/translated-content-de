---
title: "PushSubscription: unsubscribe() Methode"
short-title: unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `unsubscribe()`-Methode des [`PushSubscription`](/de/docs/Web/API/PushSubscription) Interfaces
gibt ein {{jsxref("Promise")}} zurück, das auf einen booleschen Wert aufgelöst wird, wenn das
aktuelle Abonnement erfolgreich abgemeldet wird.

## Syntax

```js-nolint
unsubscribe()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen booleschen Wert aufgelöst wird, wenn das aktuelle
Abonnement erfolgreich abgemeldet wird.

## Beispiele

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // You've successfully unsubscribed
      })
      .catch((e) => {
        // Unsubscribing failed
      });
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PushManager.getSubscription`](/de/docs/Web/API/PushManager/getSubscription)
