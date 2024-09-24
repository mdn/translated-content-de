---
title: "PushManager: subscribe()-Methode"
short-title: subscribe()
slug: Web/API/PushManager/subscribe
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`subscribe()`**-Methode des {{domxref("PushManager")}}-Interfaces abonniert einen Push-Dienst.

Sie gibt ein {{jsxref("Promise")}} zurück, das sich zu einem {{domxref("PushSubscription")}}-Objekt auflöst, das Details eines Push-Abonnements enthält. Ein neues Push-Abonnement wird erstellt, wenn der derzeitige Service Worker kein bestehendes Abonnement hat.

## Syntax

```js-nolint
subscribe(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das optionale Konfigurationsparameter enthält. Es kann die folgenden Eigenschaften haben:

    - `userVisibleOnly`
      - : Ein boolescher Wert, der anzeigt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Wirkung dem Benutzer sichtbar gemacht wird.
    - `applicationServerKey`
      - : Ein Base64-kodierter String oder ein {{jsxref("ArrayBuffer")}}, das einen [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) P-256-Öffentlichen Schlüssel enthält, den der Push-Server zur Authentifizierung Ihres Anwendungsservers verwendet. Wenn angegeben, müssen alle Nachrichten von Ihrem Anwendungsserver das [VAPID](https://datatracker.ietf.org/doc/html/rfc8292)-Authentifizierungsschema verwenden und ein JWT enthalten, das mit dem entsprechenden privaten Schlüssel signiert ist. Dieser Schlüssel **_IST NICHT_** derselbe ECDH-Schlüssel, den Sie zur Verschlüsselung der Daten verwenden. Weitere Informationen finden Sie unter "[Using VAPID with WebPush](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)".

    > [!NOTE]
    > Dieser Parameter ist in einigen Browsern wie Chrome und Edge erforderlich. Sie werden das Promise ablehnen, wenn `userVisibleOnly` nicht auf `true` gesetzt ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem {{domxref("PushSubscription")}}-Objekt auflöst.

## Beispiele

```js
this.onpush = (event) => {
  console.log(event.data);
  // Von hier aus können wir die Daten in IndexedDB schreiben, sie an
  // offene Fenster senden, eine Benachrichtigung anzeigen usw.
};

navigator.serviceWorker.register("serviceworker.js");

// Verwenden Sie serviceWorker.ready, um sicherzustellen, dass Sie sich für Push abonnieren können
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  const options = {
    userVisibleOnly: true,
    applicationServerKey,
  };
  serviceWorkerRegistration.pushManager.subscribe(options).then(
    (pushSubscription) => {
      console.log(pushSubscription.endpoint);
      // Die für den Anwendungsserver benötigten Push-Abonnement-Details
      // sind jetzt verfügbar und können beispielsweise mit der fetch()-API
      // an ihn gesendet werden.
    },
    (error) => {
      // Während der Entwicklung hilft es oft, Fehler im
      // Konsolenprotokoll zu notieren. In einer Produktionsumgebung kann
      // es sinnvoll sein, auch Informationen über Fehler an den
      // Anwendungsserver zu übermitteln.
      console.error(error);
    },
  );
});
```

### Reagieren auf Benutzeraktionen

`subscribe()`-Aufrufe sollten als Antwort auf eine Benutzeraktion ausgeführt werden, z.B. das Klicken auf einen Button:

```js
btn.addEventListener("click", () => {
  serviceWorkerRegistration.pushManager
    .subscribe(options)
    .then((pushSubscription) => {
      // handle subscription
    });
});
```

Dies ist nicht nur Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen überhäufen, denen sie nicht zugestimmt haben — sondern zukünftige Browser-Versionen werden ausdrücklich Benachrichtigungen verbieten, die nicht als Antwort auf eine Benutzeraktion ausgelöst werden. Firefox tut dies beispielsweise bereits ab Version 72.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
