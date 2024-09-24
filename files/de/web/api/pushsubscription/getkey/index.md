---
title: "PushSubscription: getKey()-Methode"
short-title: getKey()
slug: Web/API/PushSubscription/getKey
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `getKey()`-Methode des {{domxref("PushSubscription")}}-Interfaces
gibt einen {{jsxref("ArrayBuffer")}} zurück, der einen öffentlichen Schlüssel eines Clients darstellt, welcher dann an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden kann.

## Syntax

```js-nolint
getKey(name)
```

### Parameter

- `name`

  - : Ein String, der die Verschlüsselungsmethode darstellt, die zur Erzeugung eines
    Clientschlüssels verwendet wird. Der Wert kann sein:

    - `p256dh`
      - : Ein [Elliptic curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman)-öffentlicher Schlüssel auf der P-256-Kurve (d. h. die NIST
        secp256r1 elliptische Kurve). Der resultierende Schlüssel ist ein unkomprimierter Punkt im ANSI
        X9.62-Format.
    - `auth`
      - : Ein Authentifizierungs-Secret, wie in [Message Encryption for Web Push](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-encryption-08) beschrieben.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} oder `null`, wenn kein öffentlicher Schlüssel gefunden werden kann.

## Beispiele

```js
reg.pushManager.getSubscription().then((subscription) => {
  // Aktivieren Sie jedes UI, das das Abonnieren / Abbestellen von
  // Push-Nachrichten ermöglicht.

  subBtn.disabled = false;

  if (!subscription) {
    console.log("Noch nicht für Push abonniert");
    // Wir sind nicht für Push abonniert, also setzen Sie die UI
    // so, dass der Benutzer Push aktivieren kann
    return;
  }

  // Stellen Sie Ihre UI so ein, dass angezeigt wird, dass sie für
  // Push-Nachrichten abonniert sind
  subBtn.textContent = "Vom Push-Messaging abmelden";
  isPushEnabled = true;

  // Initialisieren Sie den Status, der das Setzen der UI-Elemente für den abonnierten Status beinhaltet
  // und die Aktualisierung der Abonnentenliste über Push
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
