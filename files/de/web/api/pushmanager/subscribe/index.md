---
title: "PushManager: subscribe()-Methode"
short-title: subscribe()
slug: Web/API/PushManager/subscribe
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`subscribe()`**-Methode des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces abonniert einen Push-Dienst.

Sie gibt ein {{jsxref("Promise")}} zurück, das auf ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt auflöst, das Details eines Push-Abonnements enthält. Ein neues Push-Abonnement wird erstellt, wenn der aktuelle Service Worker kein bestehendes Abonnement hat.

## Syntax

```js-nolint
subscribe(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das optionale Konfigurationsparameter enthält. Es kann folgende Eigenschaften haben:

    - `userVisibleOnly`
      - : Ein boolean-Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Auswirkung für den Nutzer sichtbar gemacht wird.
    - `applicationServerKey`
      - : Ein Base64-kodierter String oder ein {{jsxref("ArrayBuffer")}}, der einen [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) P-256-Public-Key enthält, den der Push-Server verwenden wird, um Ihren Anwendungssserver zu authentifizieren. Wenn angegeben, müssen alle Nachrichten von Ihrem Anwendungssserver das [VAPID](https://datatracker.ietf.org/doc/html/rfc8292)-Authentifizierungsschema verwenden und einen JWT enthalten, der mit dem entsprechenden privaten Schlüssel signiert wurde. Dieser Schlüssel **_IST NICHT_** derselbe ECDH-Schlüssel, den Sie zur Verschlüsselung der Daten verwenden. Weitere Informationen finden Sie unter "[Using VAPID with WebPush](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)".

    > [!NOTE]
    > Dieser Parameter ist in einigen Browsern wie Chrome und Edge erforderlich. Sie werden das Promise ablehnen, wenn `userVisibleOnly` nicht auf `true` gesetzt ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt auflöst.

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

`subscribe()`-Aufrufe sollten als Reaktion auf eine Benutzeraktion, wie z.B. das Klicken auf einen Button, durchgeführt werden:

```js
btn.addEventListener("click", () => {
  serviceWorkerRegistration.pushManager
    .subscribe(options)
    .then((pushSubscription) => {
      // handle subscription
    });
});
```

Dies ist nicht nur Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen spammen, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser Benachrichtigungen explizit verbieten, die nicht als Reaktion auf eine Benutzeraktion ausgelöst wurden. Firefox tut dies bereits seit Version 72.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
