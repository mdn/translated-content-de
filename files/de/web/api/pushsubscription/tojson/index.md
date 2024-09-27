---
title: "PushSubscription: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `toJSON()`-Methode des [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Interfaces ist ein
Standard-Serializer: Sie gibt eine JSON-Darstellung der Abonnement-Eigenschaften zurück und bietet somit eine nützliche Abkürzung.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt. Es enthält den Abonnement-Endpunkt, `expirationTime` und öffentliche Schlüssel als ein
`endpoint`-Element, ein `expirationTime`-Element und ein `keys`-Element.

## Beispiele

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const mySubscription = subscription.toJSON();
    // do something with subscription details
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
