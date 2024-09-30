---
title: "PushManager: getSubscription() Methode"
short-title: getSubscription()
slug: Web/API/PushManager/getSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`PushManager.getSubscription()`** Methode des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces ruft ein bestehendes Push-Abonnement ab.

Sie gibt ein {{jsxref("Promise")}} zurück, das zu einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt aufgelöst wird, das Details eines bestehenden Abonnements enthält. Wenn kein bestehendes Abonnement vorhanden ist, wird es zu einem `null`-Wert aufgelöst.

## Syntax

```js-nolint
getSubscription()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt oder `null` aufgelöst wird.

## Beispiele

Dieser Code-Ausschnitt stammt aus einem [Beispiel für Push-Messaging und Benachrichtigungen](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications). (Keine Live-Demo verfügbar.)

```js
// We need the service worker registration to check for a subscription
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  // Do we already have a push message subscription?
  serviceWorkerRegistration.pushManager
    .getSubscription()
    .then((subscription) => {
      // Enable any UI which subscribes / unsubscribes from
      // push messages.
      const pushButton = document.querySelector(".js-push-button");
      pushButton.disabled = false;

      if (!subscription) {
        // We aren't subscribed to push, so set UI
        // to allow the user to enable push
        return;
      }

      // Keep your server in sync with the latest subscriptionId
      sendSubscriptionToServer(subscription);

      showCurlCommand(subscription);

      // Set your UI to show they have subscribed for
      // push messages
      pushButton.textContent = "Disable Push Messages";
      isPushEnabled = true;
    })
    .catch((err) => {
      console.error(`Error during getSubscription(): ${err}`);
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
