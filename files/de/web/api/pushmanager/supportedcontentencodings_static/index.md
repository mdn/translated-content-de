---
title: "PushManager: supportedContentEncodings statische Eigenschaft"
short-title: supportedContentEncodings
slug: Web/API/PushManager/supportedContentEncodings_static
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`supportedContentEncodings`** schreibgeschützte statische Eigenschaft des [`PushManager`](/de/docs/Web/API/PushManager) Interface gibt ein Array der unterstützten Inhaltskodierungen zurück, die zur Verschlüsselung der Nutzlast einer Push-Nachricht verwendet werden können.

Benutzeragenten müssen die `aes128gcm` Inhaltkodierung unterstützen, wie in {{rfc("8291")}} definiert, und können auch Inhaltkodierungen aus früheren Versionen der Spezifikation unterstützen. Das zurückgegebene Array ist eingefroren und kann vom Empfänger nicht modifiziert werden.

Der Anwendungsserver benötigt diese Kodierung, um Push-Nachrichten zur Übermittlung an den Push-Server zu verschlüsseln. Die zur Verschlüsselung verwendete Kodierung wird auch vom Anwendungsserver im {{httpheader("Content-Encoding")}} HTTP-Header-Feld jeder Push-Nachricht aufgenommen.

Die Spezifikation definiert nicht, wie der Client-Code dem Anwendungsserver die unterstützten Kodierungen oder die Informationen in der [`PushSubscription`](/de/docs/Web/API/PushSubscription) übermitteln sollte, die ebenfalls benötigt werden, um eine Push-Nachricht zu verschlüsseln und zu senden. Ein Ansatz wird im Abschnitt mit den Beispielen unten gezeigt.

## Wert

Ein Array von Zeichenfolgen. Dies enthält üblicherweise nur einen Wert: `"aes128gcm"`.

## Ausnahmen

- `TypeError`
  - : Dieser wird ausgelöst, wenn versucht wird, einen Wert im zurückgegebenen Array zu setzen.

## Beispiele

### Senden von Kodierungsinformationen an den Server

Push-Nachrichten werden auf dem Anwendungsserver verschlüsselt, um sie an den Push-Server zu senden, und vom Browser entschlüsselt, bevor sie an den Anwendungsservice-Arbeiter weitergegeben werden. Die öffentlichen und privaten Schlüssel werden vom Browser generiert, und nur der öffentliche Schlüssel und ein zugehöriges Geheimnis werden mit der Web-App und damit dem Anwendungsserver geteilt. Dies stellt sicher, dass Push-Nachrichten privat bleiben, während sie durch die Infrastruktur des Push-Servers übertragen werden.

Der [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh) öffentliche Schlüssel und das [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth) Geheimnis, die zur Verschlüsselung der Nachricht verwendet werden, werden dem Service-Arbeiter über dessen Push-Abonnement zur Verfügung gestellt, mithilfe der Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey), zusammen mit dem Ziel-Endpunkt zum Senden von Push-Nachrichten in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint). Die Kodierung, die zur Verschlüsselung verwendet werden soll, wird von `supportedContentEncodings` bereitgestellt.

Diese Informationen können dem Anwendungsserver über jeden Mechanismus übermittelt werden. Ein Ansatz besteht darin, die benötigten Informationen aus [`PushSubscription`](/de/docs/Web/API/PushSubscription) und `supportedContentEncodings` in ein JSON-Objekt zu setzen, es mithilfe von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) zu serialisieren und das Ergebnis an den Anwendungsserver zu senden.

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

// Stringify the object and post to the app server
fetch("https://example.com/push/", {
  method: "POST",
  body: JSON.stringify(pushSubscription),
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
