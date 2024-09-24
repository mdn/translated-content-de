---
title: "PushSubscription: Methode unsubscribe()"
short-title: unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode `unsubscribe()` des {{domxref("PushSubscription")}}-Interfaces
gibt ein {{jsxref("Promise")}} zurück, das sich auf einen booleschen Wert auflöst, wenn das aktuelle Abonnement erfolgreich abgemeldet ist.

## Syntax

```js-nolint
unsubscribe()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf einen booleschen Wert auflöst, wenn das aktuelle
Abonnement erfolgreich abgemeldet ist.

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

- {{domxref("PushManager.getSubscription")}}
