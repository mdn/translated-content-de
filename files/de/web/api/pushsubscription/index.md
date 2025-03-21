---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: a8fd735da4ee9a8d7b67f05d63d90b12e963bf23
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `PushSubscription`-Schnittstelle der [Push API](/de/docs/Web/API/Push_API) stellt die URL des Endpunkts einer Subscription zusammen mit dem Public Key und den Geheimnissen bereit, die verwendet werden sollen, um Push-Nachrichten für diese Subscription zu verschlüsseln. Diese Informationen müssen mit einer beliebigen, anwendungsspezifischen Methode an den Anwendungsserver übermittelt werden.

Die Schnittstelle gibt außerdem Auskunft darüber, wann die Subscription abläuft, und bietet eine Methode, um sich von der Subscription abzumelden.

## Instanz-Eigenschaften

- [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) {{ReadOnlyInline}}
  - : Ein String, der den Endpunkt enthält, der mit der Push-Subscription verknüpft ist.
- [`PushSubscription.expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Ablaufzeit der Subscription, falls vorhanden, oder `null`, falls nicht.
- [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) {{ReadOnlyInline}}
  - : Ein Objekt, das die Optionen enthält, die für die Erstellung der Subscription verwendet wurden.
- [`PushSubscription.subscriptionId`](/de/docs/Web/API/PushSubscription/subscriptionId) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Ein String, der die mit der Push-Subscription verknüpfte Subscription-ID enthält.

## Instanz-Methoden

- [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der den öffentlichen Schlüssel des Clients enthält. Dieser kann dann an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden.
- [`PushSubscription.toJSON()`](/de/docs/Web/API/PushSubscription/toJSON)
  - : Standard-Serializer — gibt eine JSON-Darstellung der Subscription-Eigenschaften zurück.
- [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)
  - : Startet den asynchronen Prozess der Abmeldung vom Push-Dienst und gibt ein {{jsxref("Promise")}} zurück, das auf einen booleschen Wert aufgelöst wird, wenn die aktuelle Subscription erfolgreich abgemeldet wurde.

## Beschreibung

Jeder Browser verwendet einen bestimmten Push-Dienst. Ein Service Worker kann [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) verwenden, um sich beim unterstützten Dienst anzumelden und die zurückgegebene `PushSubscription` nutzen, um den Endpunkt zu ermitteln, an den Push-Nachrichten gesendet werden sollen.

Die `PushSubscription` wird auch verwendet, um den öffentlichen Schlüssel und das Geheimnis zu erhalten, die der Anwendungsserver verwenden muss, um die Nachrichten zu verschlüsseln, die er an den Push-Dienst sendet. Es ist wichtig zu beachten, dass die privaten Schlüssel, die zur Entschlüsselung der Push-Nachrichten verwendet werden, vom Browser nicht freigegeben werden. Diese Schlüssel werden verwendet, um Nachrichten zu entschlüsseln, bevor sie an den Service Worker weitergeleitet werden. Dies stellt sicher, dass Push-Nachrichten privat bleiben, während sie durch die Push-Server-Infrastruktur geleitet werden.

Der Service Worker muss nichts über die Endpunkte oder Verschlüsselung wissen, außer die relevanten Informationen an den Anwendungsserver weiterzugeben. Jeglicher Mechanismus kann verwendet werden, um die Informationen mit dem Anwendungsserver zu teilen.

## Beispiel

### Übermittlung der Kodierungsinformationen an den Server

Der [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh)-Schlüssel und das [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth)-Geheimnis, die zur Verschlüsselung der Nachricht verwendet werden, werden dem Service Worker über seine Push-Subscription bereitgestellt, mit der Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey), zusammen mit dem Ziel-Endpunkt für das Senden von Push-Nachrichten in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint). Die Kodierung, die für die Verschlüsselung verwendet werden soll, wird durch die statische Eigenschaft [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) bereitgestellt.

Dieses Beispiel zeigt, wie die benötigten Informationen aus `PushSubscription` und `supportedContentEncodings` in ein JSON-Objekt eingefügt, mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) serialisiert und an den Anwendungsserver gesendet werden können.

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

// Stringify the object an post to the app server
fetch("https://example.com/push/", {
  method: "post",
  body: JSON.stringify(subscriptionObject),
});
```

### Abmelden von einem Push-Manager

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
