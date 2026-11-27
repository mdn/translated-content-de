---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 306ea44240e8d3019883cca081ac13752edb721a
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `PushSubscription`-Schnittstelle der [Push API](/de/docs/Web/API/Push_API) stellt den Endpunkt einer Subscription sowie den öffentlichen Schlüssel und die Geheimnisse bereit, die zum Verschlüsseln von Push-Nachrichten für diese Subscription verwendet werden sollen.
Diese Informationen müssen mit einer beliebigen anwendungsspezifischen Methode an den Anwendungsserver übermittelt werden.

Die Schnittstelle stellt außerdem Informationen darüber bereit, wann die Subscription abläuft, sowie eine Methode zum Beenden der Subscription.

## Instanzeigenschaften

- [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) {{ReadOnlyInline}}
  - : Ein String mit dem Endpunkt, der der Push-Subscription zugeordnet ist.
- [`PushSubscription.expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Ablaufzeitpunkt der Push-Subscription angibt, falls vorhanden; andernfalls null.
- [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) {{ReadOnlyInline}}
  - : Ein Objekt mit den Optionen, die zum Erstellen der Subscription verwendet wurden.

## Instanzmethoden

- [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der den öffentlichen Schlüssel des Clients enthält. Dieser kann anschließend an einen Server gesendet und zum Verschlüsseln von Push-Nachrichtendaten verwendet werden.
- [`PushSubscription.toJSON()`](/de/docs/Web/API/PushSubscription/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PushSubscription`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.
- [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)
  - : Startet den asynchronen Vorgang zum Beenden der Subscription beim Push-Dienst und gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird, wenn die aktuelle Subscription erfolgreich abgemeldet wurde.

## Beschreibung

Jeder Browser verwendet einen bestimmten Push-Dienst.
Ein Service Worker kann mit [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) eine Subscription für den unterstützten Dienst erstellen und anhand der zurückgegebenen `PushSubscription` den Endpunkt ermitteln, an den Push-Nachrichten gesendet werden sollen.

Die `PushSubscription` wird außerdem verwendet, um den öffentlichen Schlüssel und das Geheimnis abzurufen, die der Anwendungsserver zum Verschlüsseln der Nachrichten verwenden muss, die er an den Push-Dienst sendet.
Beachten Sie, dass der Browser die privaten Schlüssel zum Entschlüsseln von Push-Nachrichten nicht weitergibt. Die Nachrichten werden damit entschlüsselt, bevor sie an den Service Worker übergeben werden.
So bleiben Push-Nachrichten vertraulich, während sie die Infrastruktur des Push-Dienstes durchlaufen.

Der Service Worker muss nichts über die Endpunkte oder die Verschlüsselung wissen, außer dass er die entsprechenden Informationen an den Anwendungsserver weitergibt.
Für die Weitergabe der Informationen an den Anwendungsserver kann jeder beliebige Mechanismus verwendet werden.

## Beispiel

### Verschlüsselungsinformationen an den Server senden

Der öffentliche Schlüssel [`p256dh`](/de/docs/Web/API/PushSubscription/getKey#p256dh) und das Geheimnis [`auth`](/de/docs/Web/API/PushSubscription/getKey#auth), die zum Verschlüsseln der Nachricht verwendet werden, werden dem Service Worker über seine Push-Subscription mithilfe der Methode [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey) bereitgestellt. Der Zielendpunkt für Push-Nachrichten steht in [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint).
Die für die Verschlüsselung zu verwendende Kodierung wird durch die statische Eigenschaft [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) angegeben.

Dieses Beispiel zeigt, wie Sie die benötigten Informationen aus `PushSubscription` und `supportedContentEncodings` in ein JSON-Objekt einfügen, es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) serialisieren und das Ergebnis an den Anwendungsserver senden können.

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

### Subscription bei einem Push Manager beenden

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
