---
title: PushMessageData
slug: Web/API/PushMessageData
l10n:
  sourceCommit: de2ef1e9950eebbacdd55f072dfe03014d113bbd
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`PushMessageData`** Interface des [Push API](/de/docs/Web/API/Push_API) bietet Methoden, mit denen Sie die vom Server gesendeten Push-Daten in verschiedenen Formaten abrufen können.

Im Gegensatz zu den ähnlichen Methoden im [Fetch API](/de/docs/Web/API/Fetch_API), die es nur erlauben, die Methode einmal aufzurufen, können diese Methoden mehrfach aufgerufen werden.

Nachrichten, die über das Push API empfangen werden, werden von Push-Diensten verschlüsselt gesendet und dann automatisch von Browsern entschlüsselt, bevor sie über die Methoden des `PushMessageData` Interfaces zugänglich gemacht werden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`PushMessageData.arrayBuffer()`](/de/docs/Web/API/PushMessageData/arrayBuffer)
  - : Extrahiert die Daten als ein {{jsxref("ArrayBuffer")}} Objekt.
- [`PushMessageData.blob()`](/de/docs/Web/API/PushMessageData/blob)
  - : Extrahiert die Daten als ein [`Blob`](/de/docs/Web/API/Blob) Objekt.
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes)
  - : Extrahiert die Daten als ein {{jsxref("Uint8Array")}} Objekt.
- [`PushMessageData.json()`](/de/docs/Web/API/PushMessageData/json)
  - : Extrahiert die Daten als ein [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) Objekt.
- [`PushMessageData.text()`](/de/docs/Web/API/PushMessageData/text)
  - : Extrahiert die Daten als einfacher Textstring.

## Beispiele

```js
self.addEventListener("push", (event) => {
  const obj = event.data.json();

  if (obj.action === "subscribe" || obj.action === "unsubscribe") {
    fireNotification(obj, event);
    port.postMessage(obj);
  } else if (obj.action === "init" || obj.action === "chatMsg") {
    port.postMessage(obj);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
