---
title: PushMessageData
slug: Web/API/PushMessageData
l10n:
  sourceCommit: de2ef1e9950eebbacdd55f072dfe03014d113bbd
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`PushMessageData`**-Schnittstelle der [Push API](/de/docs/Web/API/Push_API) bietet Methoden, mit denen Sie die Push-Daten, die von einem Server gesendet werden, in verschiedenen Formaten abrufen können.

Im Gegensatz zu den ähnlichen Methoden in der [Fetch API](/de/docs/Web/API/Fetch_API), die nur einmal aufgerufen werden dürfen, können diese Methoden mehrmals aufgerufen werden.

Nachrichten, die über die Push-API empfangen werden, werden von den Push-Diensten verschlüsselt gesendet und dann automatisch von den Browsern entschlüsselt, bevor sie über die Methoden der `PushMessageData`-Schnittstelle zugänglich gemacht werden.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`PushMessageData.arrayBuffer()`](/de/docs/Web/API/PushMessageData/arrayBuffer)
  - : Extrahiert die Daten als ein {{jsxref("ArrayBuffer")}}-Objekt.
- [`PushMessageData.blob()`](/de/docs/Web/API/PushMessageData/blob)
  - : Extrahiert die Daten als ein [`Blob`](/de/docs/Web/API/Blob)-Objekt.
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes)
  - : Extrahiert die Daten als ein {{jsxref("Uint8Array")}}-Objekt.
- [`PushMessageData.json()`](/de/docs/Web/API/PushMessageData/json)
  - : Extrahiert die Daten als ein [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt.
- [`PushMessageData.text()`](/de/docs/Web/API/PushMessageData/text)
  - : Extrahiert die Daten als eine normale Textzeichenfolge.

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
