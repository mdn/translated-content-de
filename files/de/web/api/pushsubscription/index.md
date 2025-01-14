---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 8a12e24b1e3ef1bd42d0bd9edc6cea9821943f80
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `PushSubscription`-Interface der [Push API](/de/docs/Web/API/Push_API) liefert die URL-Endpunkt einer Abonnement zusammen mit dem öffentlichen Schlüssel und Geheimnissen, die zum Verschlüsseln von Push-Nachrichten an dieses Abonnement verwendet werden sollen.
Diese Informationen müssen dem Anwendungsserver mit einer beliebigen, anwendungsspezifischen Methode mitgeteilt werden.

Das Interface liefert auch Informationen darüber, wann das Abonnement abläuft, und eine Methode zum Abbestellen des Abonnements.

## Instanzeigenschaften

- [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) {{ReadOnlyInline}}
  - : Ein String, der den Endpunkt des Push-Abonnements enthält.
- [`PushSubscription.expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Ablaufzeit des Abonnements angibt, wenn vorhanden, oder null, falls nicht.
- [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) {{ReadOnlyInline}}
  - : Ein Objekt, das die Optionen enthält, die zur Erstellung des Abonnements verwendet wurden.
- [`PushSubscription.subscriptionId`](/de/docs/Web/API/PushSubscription/subscriptionId) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Ein String, der die mit dem Push-Abonnement verbundene Abonnement-ID enthält.

## Instanzmethoden

- [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der den öffentlichen Schlüssel des Clients enthält, der dann an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden kann.
- [`PushSubscription.toJSON()`](/de/docs/Web/API/PushSubscription/toJSON)
  - : Standard-Serializer — gibt eine JSON-Darstellung der Abonnementeigenschaften zurück.
- [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)
  - : Startet den asynchronen Prozess des Abmeldens vom Push-Dienst und gibt ein {{jsxref("Promise")}} zurück, das zu einem booleschen Wert aufgelöst wird, wenn das aktuelle Abonnement erfolgreich abgemeldet wurde.

## Beschreibung

Jeder Browser verwendet einen bestimmten Push-Dienst.
Ein Service-Worker kann [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) verwenden, um sich beim unterstützten Dienst anzumelden und das zurückgegebene `PushSubscription` nutzen, um den Endpunkt zu ermitteln, an den Push-Nachrichten gesendet werden sollen.

Das `PushSubscription` wird auch verwendet, um den öffentlichen Schlüssel und das Geheimnis zu erhalten, die der Anwendungsserver zur Verschlüsselung der Nachrichten verwenden muss, die er an den Push-Dienst sendet.
Beachten Sie, dass die privaten Schlüssel, die zum Entschlüsseln von Push-Nachrichten verwendet werden, nicht vom Browser geteilt werden und zum Entschlüsseln von Nachrichten verwendet werden, bevor sie an den Service-Worker übergeben werden.
Dies stellt sicher, dass Push-Nachrichten privat bleiben, während sie die Push-Server-Infrastruktur durchlaufen.

Der Service-Worker muss nichts über die Endpunkte oder die Verschlüsselung wissen, außer die relevanten Informationen an den Anwendungsserver weiterzugeben.
Jeder Mechanismus kann verwendet werden, um die Informationen mit dem Anwendungsserver zu teilen.

## Beispiel

### Senden von Kodierungsinformationen an den Server

Der [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh) öffentliche Schlüssel und das [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth) Geheimnis zur Verschlüsselung der Nachricht werden dem Service-Worker über sein Push-Abonnement bereitgestellt, indem die Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey) verwendet wird, zusammen mit dem Zielendpunkt zum Versenden von Push-Nachrichten in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint).
Die Kodierung, die für die Verschlüsselung verwendet werden soll, wird durch die statische Eigenschaft [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings) bereitgestellt.

Dieses Beispiel zeigt, wie Sie die benötigten Informationen aus `PushSubscription` und `supportedContentEncodings` in ein JSON-Objekt einfügen, es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) serialisieren und das Ergebnis an den Anwendungsserver senden können.

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
  body: JSON.stringify(subscriptionObject);
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
