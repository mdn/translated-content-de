---
title: "PushManager: subscribe()-Methode"
short-title: subscribe()
slug: Web/API/PushManager/subscribe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`subscribe()`**-Methode des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces abonniert einen Push-Dienst.

Sie gibt ein {{jsxref("Promise")}} zurück, das zu einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt aufgelöst wird, welches Details eines Push-Abonnements enthält. Ein neues Push-Abonnement wird erstellt, wenn der aktuelle Service Worker noch kein bestehendes Abonnement hat.

## Syntax

```js-nolint
subscribe(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das optionale Konfigurationsparameter enthält. Es kann die folgenden Eigenschaften haben:

    - `userVisibleOnly`
      - : Ein Boolean, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Wirkung dem Benutzer sichtbar gemacht wird.
    - `applicationServerKey`
      - : Ein Base64-codierter String oder ein
        {{jsxref("ArrayBuffer")}}, der einen [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)
        P-256-öffentlichen Schlüssel enthält, den der Push-Server zur Authentifizierung Ihres Anwendungsservers verwendet. Falls angegeben, müssen alle Nachrichten von Ihrem Anwendungsserver das [VAPID](https://datatracker.ietf.org/doc/html/rfc8292)-Authentifizierungsschema verwenden und ein JWT enthalten, das mit dem entsprechenden privaten Schlüssel signiert ist. Dieser Schlüssel **_IST NICHT_** der gleiche ECDH-Schlüssel, den Sie zur Verschlüsselung der Daten verwenden. Für weitere Informationen, siehe "[Using VAPID with WebPush](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)".

    > [!NOTE]
    > Dieser Parameter ist in einigen Browsern wie Chrome und Edge erforderlich. Sie werden das Promise zurückweisen, wenn `userVisibleOnly` nicht auf `true` gesetzt ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt aufgelöst wird.

## Beispiele

```js
this.onpush = (event) => {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
};

navigator.serviceWorker.register("serviceworker.js");

// Use serviceWorker.ready to ensure that you can subscribe for push
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  const options = {
    userVisibleOnly: true,
    applicationServerKey,
  };
  serviceWorkerRegistration.pushManager.subscribe(options).then(
    (pushSubscription) => {
      console.log(pushSubscription.endpoint);
      // The push subscription details needed by the application
      // server are now available, and can be sent to it using,
      // for example, the fetch() API.
    },
    (error) => {
      // During development it often helps to log errors to the
      // console. In a production environment it might make sense to
      // also report information about errors back to the
      // application server.
      console.error(error);
    },
  );
});
```

### Reagieren auf Benutzeraktionen

`subscribe()`-Aufrufe sollten als Reaktion auf eine Benutzeraktion erfolgen, wie z.B. das Klicken auf einen Button:

```js
btn.addEventListener("click", () => {
  serviceWorkerRegistration.pushManager
    .subscribe(options)
    .then((pushSubscription) => {
      // handle subscription
    });
});
```

Dies ist nicht nur Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben — sondern zukünftig werden Browser ausdrücklich Benachrichtigungen verbieten, die nicht als Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox macht das bereits ab Version 72.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
