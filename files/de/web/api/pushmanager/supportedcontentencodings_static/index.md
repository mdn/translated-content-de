---
title: "PushManager: supportedContentEncodings statische Eigenschaft"
short-title: supportedContentEncodings
slug: Web/API/PushManager/supportedContentEncodings_static
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`supportedContentEncodings`** schreibgeschützte statische Eigenschaft des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces gibt ein Array von unterstützten Inhaltscodierungen zurück, die verwendet werden können, um die Nutzlast einer Push-Nachricht zu verschlüsseln.

Benutzeragenten müssen die `aes128gcm` Inhaltscodierung unterstützen, die in {{rfc("8291")}} definiert ist, und können auch Inhaltscodierungen aus früheren Versionen der Spezifikation unterstützen.
Das zurückgegebene Array ist eingefroren und darf vom Empfänger nicht modifiziert werden.

Der Anwendungserver benötigt diese Codierung, um Push-Nachrichten zur Versendung an den Push-Server zu verschlüsseln.
Die für die Verschlüsselung verwendete Codierung wird ebenfalls vom Anwendungsserver im {{httpheader("Content-Encoding")}} HTTP-Headerfeld jeder Push-Nachricht aufgenommen.

Die Spezifikation definiert nicht, wie der Client-Code dem Anwendungserver die unterstützten Codierungen oder die Informationen in der [`PushSubscription`](/de/docs/Web/API/PushSubscription) übermitteln soll, die er ebenfalls benötigt, um eine Push-Nachricht zu verschlüsseln und zu versenden.
Ein Ansatz wird im Abschnitt Beispiele unten dargestellt.

## Wert

Ein Array von Zeichenfolgen.
Dies enthält normalerweise nur einen Wert: `"aes128gcm"`.

## Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn versucht wird, einen Wert im zurückgegebenen Array festzulegen.

## Beispiele

### Übermittlung von Codierungsinformationen an den Server

Push-Nachrichten werden auf dem Anwendungserver verschlüsselt, um an den Push-Server gesendet zu werden, und vom Browser entschlüsselt, bevor sie dem Anwendung-Service-Worker übergeben werden.
Die verwendeten öffentlichen und privaten Schlüssel werden vom Browser generiert, und nur der öffentliche Schlüssel und ein zugehöriges Geheimnis werden mit der Web-App und somit dem Anwendungserver geteilt.
Dies stellt sicher, dass Push-Nachrichten privat bleiben, während sie die Infrastruktur des Push-Servers durchlaufen.

Der [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh) öffentliche Schlüssel und das [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth) Geheimnis, die zur Verschlüsselung der Nachricht verwendet werden, werden dem Service-Worker über seine Push-Subscription mithilfe der [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)-Methode zur Verfügung gestellt, zusammen mit dem Zielendpunkt für das Senden von Push-Nachrichten in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint).
Die Codierung, die für die Verschlüsselung verwendet werden soll, wird durch `supportedContentEncodings` bereitgestellt.

Diese Informationen können mit jedem Mechanismus an den Anwendungserver gesendet werden.
Ein Ansatz besteht darin, die benötigten Informationen von [`PushSubscription`](/de/docs/Web/API/PushSubscription) und `supportedContentEncodings` in ein JSON-Objekt zu legen, es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) zu serialisieren und das Ergebnis an den Anwendungserver zu senden.

```js
// Get a PushSubscription object
const pushSubscription =
  await serviceWorkerRegistration.pushManager.subscribe();

// Create an object containing the information needed by the app server
const subscriptionObject = {
  endpoint: pushSubscription.endpoint,
  keys: {
    p256dh: pushSubscription.getKeys("p256dh"),
    auth: pushSubscription.getKeys("auth"),
  },
  encoding: PushManager.supportedContentEncodings,
  /* other app-specific data, such as user identity */
};

// Stringify the object an post to the app server
fetch("https://example.com/push/", {
  method: "POST",
  body: JSON.stringify(pushSubscription),
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
