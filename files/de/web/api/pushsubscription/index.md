---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 30b362d4dc01954b7303583cb6894649dd60f2c3
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `PushSubscription`-Interface der [Push API](/de/docs/Web/API/Push_API) bietet die URL-Endpunkt einer Subscription zusammen mit dem öffentlichen Schlüssel und den Geheimnissen, die für die Verschlüsselung von Push-Nachrichten an diese Subscription verwendet werden sollten.
Diese Informationen müssen mit einem beliebigen anwendungsspezifischen Verfahren an den Anwendungsserver übermittelt werden.

Das Interface bietet außerdem Informationen darüber, wann die Subscription abläuft, und eine Methode, um die Subscription abzubestellen.

## Instanzeigenschaften

- [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) {{ReadOnlyInline}}
  - : Ein Zeichenstring, der den Endpunkt enthält, der mit der Push-Subscription verknüpft ist.
- [`PushSubscription.expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Ablaufzeit der Subscription, die mit der Push-Subscription verknüpft ist, falls vorhanden, oder null andernfalls.
- [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) {{ReadOnlyInline}}
  - : Ein Objekt, das die Optionen enthält, die zur Erstellung der Subscription verwendet wurden.
- [`PushSubscription.subscriptionId`](/de/docs/Web/API/PushSubscription/subscriptionId) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Ein Zeichenstring, der die mit der Push-Subscription verknüpfte Subscription-ID enthält.

## Instanzmethoden

- [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)
  - : Gibt eine {{jsxref("ArrayBuffer")}} zurück, die den öffentlichen Schlüssel des Clients enthält. Dieser kann dann an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden.
- [`PushSubscription.toJSON()`](/de/docs/Web/API/PushSubscription/toJSON)
  - : Standard-Serializer — gibt eine JSON-Darstellung der Subscription-Eigenschaften zurück.
- [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)
  - : Startet den asynchronen Prozess des Abmeldens vom Push-Dienst und gibt ein {{jsxref("Promise")}} zurück, das zu einem booleschen Wert aufgelöst wird, wenn die aktuelle Subscription erfolgreich abgemeldet wurde.

## Beschreibung

Jeder Browser verwendet einen bestimmten Push-Dienst.
Ein Service Worker kann [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) verwenden, um sich für den unterstützten Dienst zu abonnieren und die zurückgegebene `PushSubscription` zu verwenden, um den Endpunkt zu ermitteln, an den Push-Nachrichten gesendet werden sollen.

Das `PushSubscription` wird auch verwendet, um den öffentlichen Schlüssel und das Geheimnis zu erhalten, die der Anwendungsserver zur Verschlüsselung der an den Push-Dienst gesendeten Nachrichten verwenden muss.
Beachten Sie, dass die privaten Schlüssel zur Entschlüsselung von Push-Nachrichten nicht vom Browser geteilt werden und verwendet werden, um Nachrichten zu entschlüsseln, bevor sie an den Service Worker übergeben werden.
Dies stellt sicher, dass Push-Nachrichten privat bleiben, während sie durch die Push-Server-Infrastruktur geleitet werden.

Der Service Worker muss nichts über die Endpunkte oder die Verschlüsselung wissen, außer die relevanten Informationen an den Anwendungsserver weiterzugeben.
Jeder Mechanismus kann verwendet werden, um die Informationen mit dem Anwendungsserver zu teilen.

## Beispiel

### Senden von Kodierungsinformationen an den Server

Der [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh) öffentliche Schlüssel und das [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth) Geheimnis, die zur Verschlüsselung der Nachricht verwendet werden, werden dem Service Worker über seine Push-Subscription zur Verfügung gestellt, indem die Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey) zusammen mit dem Zielendpunkt zum Senden von Push-Nachrichten in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) verwendet wird.
Die Kodierung, die für die Verschlüsselung verwendet werden soll, wird von der statischen Eigenschaft [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings) bereitgestellt.

Dieses Beispiel zeigt, wie Sie die benötigten Informationen aus `PushSubscription` und `supportedContentEncodings` in ein JSON-Objekt einfügen, es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) serialisieren und das Ergebnis an den Anwendungsserver senden könnten.

```js
// Get a PushSubscription object
const pushSubscription = await serviceWorkerRegistration.pushManager.subscribe();

// Create an object containing the information needed by the app server
const subscriptionObject = {
  endpoint: pushSubscription.endpoint,
  keys: {
    p256dh: pushSubscription.getKeys('p256dh'),
    auth: pushSubscription.getKeys('auth'),
  },
  encoding: PushManager.supportedContentEncodings,
  /* other app-specific data, such as user identity */
};

// Stringify the object an post to the app server
fetch(`https://example.com/push/`, {
  method: "post",
  body: JSON.stringify(pushSubscription);
});
```

### Abmelden von einem Push-Manager

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // You've successfully unsubscribed
      })
      .catch((e) => {
        // Unsubscribing failed
      });
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Push API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
