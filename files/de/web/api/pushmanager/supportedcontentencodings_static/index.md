---
title: "PushManager: Statische Eigenschaft supportedContentEncodings"
short-title: supportedContentEncodings
slug: Web/API/PushManager/supportedContentEncodings_static
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte statische Eigenschaft **`supportedContentEncodings`** des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces gibt ein Array unterstützter Inhaltskodierungen zurück, die zum Verschlüsseln der Nutzdaten einer Push-Nachricht verwendet werden können.

User Agents müssen die in {{rfc("8291")}} definierte Inhaltskodierung `aes128gcm` unterstützen. Sie können auch Inhaltskodierungen aus früheren Versionen der Spezifikation unterstützen. Das zurückgegebene Array ist eingefroren und kann vom Empfänger nicht verändert werden.

Der Anwendungsserver benötigt diese Kodierung, um Push-Nachrichten vor dem Senden an den Push-Server zu verschlüsseln. Der Anwendungsserver gibt die für die Verschlüsselung verwendete Kodierung außerdem im HTTP-Header-Feld {{httpheader("Content-Encoding")}} jeder Push-Nachricht an.

Die Spezifikation legt nicht fest, wie der Client-Code die unterstützten Kodierungen oder die ebenfalls zum Verschlüsseln und Senden einer Push-Nachricht benötigten Informationen aus der [`PushSubscription`](/de/docs/Web/API/PushSubscription) an den Anwendungsserver übermitteln soll. Ein möglicher Ansatz ist im folgenden Abschnitt mit Beispielen dargestellt.

## Wert

Ein Array von Zeichenfolgen. Es enthält üblicherweise nur einen Wert: `"aes128gcm"`.

## Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, einen Wert im zurückgegebenen Array zu setzen.

## Beispiele

### Kodierungsinformationen an den Server senden

Push-Nachrichten werden auf dem Anwendungsserver für die Übermittlung an den Push-Server verschlüsselt und vom Browser entschlüsselt, bevor sie an den Service Worker der Anwendung weitergegeben werden. Die verwendeten öffentlichen und privaten Schlüssel werden vom Browser erzeugt. Nur der öffentliche Schlüssel und ein zugehöriges Geheimnis werden mit der Webanwendung und damit dem Anwendungsserver geteilt. So bleiben Push-Nachrichten vertraulich, während sie die Infrastruktur des Push-Servers durchlaufen.

Der öffentliche Schlüssel [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh) und das Geheimnis [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth), die zum Verschlüsseln der Nachricht verwendet werden, werden dem Service Worker über seine Push-Subscription mithilfe der Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey) bereitgestellt. Der Ziel-Endpunkt für das Senden von Push-Nachrichten steht in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint). Die für die Verschlüsselung zu verwendende Kodierung wird von `supportedContentEncodings` bereitgestellt.

Diese Informationen können über einen beliebigen Mechanismus an den Anwendungsserver gesendet werden. Ein Ansatz besteht darin, die benötigten Informationen aus [`PushSubscription`](/de/docs/Web/API/PushSubscription) und `supportedContentEncodings` in einem JSON-Objekt zusammenzufassen, es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) zu serialisieren und das Ergebnis an den Anwendungsserver zu senden.

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
