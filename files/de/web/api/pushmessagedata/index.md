---
title: PushMessageData
slug: Web/API/PushMessageData
l10n:
  sourceCommit: de2ef1e9950eebbacdd55f072dfe03014d113bbd
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`PushMessageData`**-Schnittstelle der [Push API](/de/docs/Web/API/Push_API) stellt Methoden bereit, mit denen Sie die vom Server gesendeten Push-Daten in verschiedenen Formaten abrufen können.

Im Gegensatz zu den ähnlichen Methoden in der [Fetch API](/de/docs/Web/API/Fetch_API), die nur einmal aufgerufen werden können, können diese Methoden mehrfach aufgerufen werden.

Nachrichten, die über die Push-API empfangen werden, werden von Push-Diensten verschlüsselt gesendet und dann automatisch von Browsern entschlüsselt, bevor sie über die Methoden der `PushMessageData`-Schnittstelle zugänglich gemacht werden.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- {{domxref("PushMessageData.arrayBuffer()")}}
  - : Extrahiert die Daten als ein {{jsxref("ArrayBuffer")}}-Objekt.
- {{domxref("PushMessageData.blob()")}}
  - : Extrahiert die Daten als ein {{domxref("Blob")}}-Objekt.
- {{domxref("PushMessageData.bytes()")}}
  - : Extrahiert die Daten als ein {{jsxref("Uint8Array")}}-Objekt.
- {{domxref("PushMessageData.json()")}}
  - : Extrahiert die Daten als ein [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt.
- {{domxref("PushMessageData.text()")}}
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

## Kompatibilität der Browser

{{Compat}}
