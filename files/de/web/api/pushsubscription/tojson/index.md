---
title: "PushSubscription: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `toJSON()`-Methode der {{domxref("PushSubscription")}}-Schnittstelle ist ein
standardmäßiger Serializer: Sie gibt eine JSON-Darstellung der Abonnementseigenschaften zurück und bietet eine nützliche Abkürzung.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt. Es enthält den Abonnementendpunkt, `expirationTime` und öffentliche Schlüssel als
`endpoint`-Mitglied, ein `expirationTime`-Mitglied und ein `keys`-Mitglied.

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
