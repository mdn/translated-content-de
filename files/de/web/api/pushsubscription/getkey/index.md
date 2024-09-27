---
title: "PushSubscription: getKey()-Methode"
short-title: getKey()
slug: Web/API/PushSubscription/getKey
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `getKey()`-Methode der [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Schnittstelle gibt einen {{jsxref("ArrayBuffer")}} zurück, der einen öffentlichen Clientschlüssel darstellt, der anschließend an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden kann.

## Syntax

```js-nolint
getKey(name)
```

### Parameter

- `name`

  - : Ein String, der die Verschlüsselungsmethode repräsentiert, die zur Generierung eines Clientschlüssels verwendet wird. Der Wert kann sein:

    - `p256dh`
      - : Ein [Elliptic curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman)-öffentlicher Schlüssel auf der P-256-Kurve (das heißt, der NIST secp256r1-elliptische Kurve). Der resultierende Schlüssel ist ein unkomprimierter Punkt im ANSI X9.62-Format.
    - `auth`
      - : Ein Authentifizierungsgeheimnis, wie in [Message Encryption for Web Push](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-encryption-08) beschrieben.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} oder `null`, wenn kein öffentlicher Schlüssel gefunden werden kann.

## Beispiele

```js
reg.pushManager.getSubscription().then((subscription) => {
  // Enable any UI which subscribes / unsubscribes from
  // push messages.

  subBtn.disabled = false;

  if (!subscription) {
    console.log("Not yet subscribed to Push");
    // We aren't subscribed to push, so set UI
    // to allow the user to enable push
    return;
  }

  // Set your UI to show they have subscribed for
  // push messages
  subBtn.textContent = "Unsubscribe from Push Messaging";
  isPushEnabled = true;

  // initialize status, which includes setting UI elements for subscribed status
  // and updating Subscribers list via push
  const endpoint = subscription.endpoint;
  const key = subscription.getKey("p256dh");
  const auth = subscription.getKey("auth");

  // ...
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
