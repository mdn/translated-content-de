---
title: "PushManager: getSubscription()-Methode"
short-title: getSubscription()
slug: Web/API/PushManager/getSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`PushManager.getSubscription()`**-Methode der {{domxref("PushManager")}}-Schnittstelle ruft ein bestehendes Push-Abonnement ab.

Sie gibt ein {{jsxref("Promise")}} zurück, das zu einem {{domxref("PushSubscription")}}-Objekt aufgelöst wird, das Details eines bestehenden Abonnements enthält. Falls kein bestehendes Abonnement existiert, wird es zu einem `null`-Wert aufgelöst.

## Syntax

```js-nolint
getSubscription()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{domxref("PushSubscription")}}-Objekt oder `null` aufgelöst wird.

## Beispiele

Dieser Codeausschnitt stammt aus einem [Beispiel für Push-Messaging und Benachrichtigungen](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications). (Es ist keine Live-Demo verfügbar.)

```js
// Wir benötigen die Service Worker-Registrierung, um ein Abonnement zu überprüfen
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  // Haben wir bereits ein Push-Nachrichten-Abonnement?
  serviceWorkerRegistration.pushManager
    .getSubscription()
    .then((subscription) => {
      // Aktivieren Sie jede UI, die das Abonnieren/Abbestellen von
      // Push-Nachrichten ermöglicht.
      const pushButton = document.querySelector(".js-push-button");
      pushButton.disabled = false;

      if (!subscription) {
        // Wir sind nicht für Push abonniert, daher die UI
        // einstellen, um dem Nutzer das Aktivieren von Push zu ermöglichen
        return;
      }

      // Halten Sie Ihren Server mit der neuesten subscriptionId synchron
      sendSubscriptionToServer(subscription);

      showCurlCommand(subscription);

      // Setzen Sie Ihre UI, um anzuzeigen, dass sie für
      // Push-Nachrichten abonniert sind
      pushButton.textContent = "Push-Nachrichten deaktivieren";
      isPushEnabled = true;
    })
    .catch((err) => {
      console.error(`Fehler bei getSubscription(): ${err}`);
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
