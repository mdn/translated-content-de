---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `PushSubscription`-Interface der [Push API](/de/docs/Web/API/Push_API) stellt die URL-Endpunkt einer Abonnements sowie den öffentlichen Schlüssel und die Geheimnisse bereit, die zum Verschlüsseln von Push-Nachrichten an dieses Abonnement verwendet werden sollen. Diese Informationen müssen auf beliebige artenspezifische Weise an den Anwendungsserver übermittelt werden.

Das Interface bietet auch Informationen darüber, wann das Abonnement abläuft, und eine Methode, um das Abonnement zu kündigen.

## Instanzeigenschaften

- [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) {{ReadOnlyInline}}
  - : Ein String, der den mit dem Push-Abonnement assoziierten Endpunkt enthält.
- [`PushSubscription.expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Gültigkeitsdauer des Abonnements im Zusammenhang mit dem Push-Abonnement, falls vorhanden, oder sonst null.
- [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) {{ReadOnlyInline}}
  - : Ein Objekt, das die zum Erstellen des Abonnements verwendeten Optionen enthält.
- [`PushSubscription.subscriptionId`](/de/docs/Web/API/PushSubscription/subscriptionId) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Ein String, der die mit dem Push-Abonnement assoziierte Abonnement-ID enthält.

## Instanzmethoden

- [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das den öffentlichen Schlüssel des Clients enthält, der dann an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden kann.
- [`PushSubscription.toJSON()`](/de/docs/Web/API/PushSubscription/toJSON)
  - : Standardserializer — gibt eine JSON-Darstellung der Abonnementseigenschaften zurück.
- [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)
  - : Startet den asynchronen Prozess des Abmeldens vom Push-Dienst und gibt ein {{jsxref("Promise")}} zurück, das sich in einen booleschen Wert auflöst, wenn das aktuelle Abonnement erfolgreich abgemeldet wurde.

## Beschreibung

Jeder Browser verwendet einen bestimmten Push-Dienst.
Ein Service Worker kann [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) verwenden, um sich beim unterstützten Dienst anzumelden, und die zurückgegebene `PushSubscription` verwenden, um den Endpunkt zu entdecken, an den Push-Nachrichten gesendet werden sollen.

Das `PushSubscription` wird auch verwendet, um den öffentlichen Schlüssel und das Geheimnis zu erhalten, die der Anwendungsserver zum Verschlüsseln der Nachrichten verwenden muss, die er an den Push-Dienst sendet.
Beachten Sie, dass die privaten Schlüssel, die zum Entschlüsseln von Push-Nachrichten verwendet werden, nicht vom Browser freigegeben werden und zum Entschlüsseln von Nachrichten verwendet werden, bevor sie an den Service Worker übergeben werden.
Dies stellt sicher, dass Push-Nachrichten privat bleiben, während sie die Push-Server-Infrastruktur durchlaufen.

Der Service Worker muss nichts über die Endpunkte oder die Verschlüsselung wissen, außer die relevanten Informationen an den Anwendungsserver weiterzugeben.
Es kann jeder Mechanismus verwendet werden, um die Informationen mit dem Anwendungsserver zu teilen.

## Beispiel

### Codierungsinformationen an den Server senden

Der [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh)-öffentliche Schlüssel und das [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth)-Geheimnis, das zur Verschlüsselung der Nachricht verwendet wird, werden dem Service Worker über sein Push-Abonnement bereitgestellt, indem die Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey) zusammen mit dem Zielendpunkt zum Senden von Push-Nachrichten in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) verwendet wird.
Die für die Verschlüsselung zu verwendende Kodierung wird durch die statische Eigenschaft [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) bereitgestellt.

Dieses Beispiel zeigt, wie Sie die benötigten Informationen aus `PushSubscription` und `supportedContentEncodings` möglicherweise in ein JSON-Objekt einfügen, es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) serialisieren und das Ergebnis an den Anwendungsserver senden.

```js
// Get a PushSubscription object
const pushSubscription =
  await serviceWorkerRegistration.pushManager.subscribe();

// Create an object containing the information needed by the app server
const subscriptionObject = {
  endpoint: pushSubscription.endpoint,
  keys: {
    p256dh: pushSubscription.getKey("p256dh"),
    auth: pushSubscription.getKey("auth"),
  },
  encoding: PushManager.supportedContentEncodings,
  /* other app-specific data, such as user identity */
};

// Stringify the object and post to the app server
fetch("https://example.com/push/", {
  method: "post",
  body: JSON.stringify(subscriptionObject),
});
```

### Von einem Push-Manager abmelden

```js
navigator.serviceWorker.ready
  .then((reg) => reg.pushManager.getSubscription())
  .then((subscription) => subscription.unsubscribe())
  .then((successful) => {
    // You've successfully unsubscribed
  })
  .catch((e) => {
    // Unsubscribing failed
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Push API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
