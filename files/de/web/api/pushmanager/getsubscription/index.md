---
title: "PushManager: Methode getSubscription()"
short-title: getSubscription()
slug: Web/API/PushManager/getSubscription
l10n:
  sourceCommit: 306ea44240e8d3019883cca081ac13752edb721a
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`PushManager.getSubscription()`** der Schnittstelle [`PushManager`](/de/docs/Web/API/PushManager) ruft ein bestehendes Push-Abonnement ab.

Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt erfüllt wird, das Details zu einem bestehenden Abonnement enthält. Wenn kein Abonnement besteht, wird das Promise mit `null` erfüllt.

## Syntax

```js-nolint
getSubscription()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt oder `null` erfüllt wird.

## Beispiele

Dieser Codeausschnitt stammt aus einem [Beispiel für Push-Nachrichten und Benachrichtigungen](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications). (Eine Live-Demo ist nicht verfügbar.)

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

      // Keep your server in sync with the latest subscription
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
