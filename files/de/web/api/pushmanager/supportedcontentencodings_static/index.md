---
title: "PushManager: supportedContentEncodings statische Eigenschaft"
short-title: supportedContentEncodings
slug: Web/API/PushManager/supportedContentEncodings_static
l10n:
  sourceCommit: 30b362d4dc01954b7303583cb6894649dd60f2c3
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte statische Eigenschaft **`supportedContentEncodings`** der [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle gibt ein Array von unterstützten Inhaltscodierungen zurück, die zur Verschlüsselung der Nutzlast einer Push-Nachricht verwendet werden können.

Benutzeragenten müssen die Inhaltscodierung `aes128gcm` unterstützen, wie sie in {{rfc("8291")}} definiert ist, und können auch Inhaltscodierungen unterstützen, die aus früheren Versionen der Spezifikation stammen. Das zurückgegebene Array ist eingefroren und kann vom Empfänger nicht modifiziert werden.

Der Anwendungsserver benötigt diese Codierung, um Push-Nachrichten für das Senden an den Push-Server zu verschlüsseln. Die für die Verschlüsselung verwendete Codierung wird vom App-Server auch im {{httpheader("Content-Encoding")}} HTTP-Header-Feld jeder Push-Nachricht angegeben.

Die Spezifikation definiert nicht, wie der Client-Code dem Anwendungsserver die unterstützten Codierungen oder die Informationen in der [`PushSubscription`](/de/docs/Web/API/PushSubscription) übermitteln soll, die ebenfalls benötigt werden, um eine Push-Nachricht zu verschlüsseln und zu senden. Ein Ansatz wird im Abschnitt „Beispiele“ unten gezeigt.

## Wert

Ein Array von Zeichenfolgen. Dieses enthält in der Regel nur einen Wert: `"aes128gcm"`.

## Ausnahmen

- `TypeError`
  - : Dieser Fehler wird ausgelöst, wenn versucht wird, einen Wert im zurückgegebenen Array zu setzen.

## Beispiele

### Codierungsinformationen an den Server senden

Push-Nachrichten werden auf dem Anwendungsserver verschlüsselt, um sie an den Push-Server zu senden, und vom Browser entschlüsselt, bevor sie an den Anwendung-Service-Worker weitergeleitet werden. Die öffentlichen und privaten Schlüssel werden vom Browser generiert, und nur der öffentliche Schlüssel und ein zugehöriges Geheimnis werden mit der Web-App geteilt, und somit mit dem Anwendungsserver. Dies gewährleistet, dass Push-Nachrichten privat bleiben, während sie die Infrastruktur des Push-Servers durchlaufen.

Der [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh) öffentliche Schlüssel und das [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth) Geheimnis, die zur Verschlüsselung der Nachricht verwendet werden, werden dem Service-Worker über seine Push-Abonnement mittels der Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey) bereitgestellt, zusammen mit dem Ziel-Endpunkt zum Senden von Push-Nachrichten in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint). Die für die Verschlüsselung zu verwendende Codierung wird von `supportedContentEncodings` bereitgestellt.

Diese Informationen können dem Anwendungsserver über jeden beliebigen Mechanismus übermittelt werden. Ein Ansatz besteht darin, die benötigten Informationen aus [`PushSubscription`](/de/docs/Web/API/PushSubscription) und `supportedContentEncodings` in ein JSON-Objekt zu setzen, es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) zu serialisieren und das Ergebnis an den Anwendungsserver zu senden.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
