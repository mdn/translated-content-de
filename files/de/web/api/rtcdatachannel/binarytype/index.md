---
title: "RTCDataChannel: binaryType-Eigenschaft"
short-title: binaryType
slug: Web/API/RTCDataChannel/binaryType
l10n:
  sourceCommit: ea27e601462e6435fa35773a5b0504fe78b5cfa5
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`binaryType`** der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle ist ein String, der den Objekttyp angibt, der verwendet werden soll, um binäre Daten zu repräsentieren, die über das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) empfangen werden. Erlaubte Werte der [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType)-Eigenschaft sind auch hier zulässig: `blob`, wenn [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden, oder `arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden. Der Standardwert ist `arraybuffer`.

Wenn eine binäre Nachricht über den Datenkanal empfangen wird, ist die [`message`](/de/docs/Web/API/RTCDataChannel/message_event) Ereignis-Eigenschaft [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) ein Objekt des Typs, der durch `binaryType` angegeben wurde.

## Wert

Ein String, der einen dieser Werte haben kann:

- `"blob"`
  - : Der Inhalt der empfangenen binären Nachrichten wird in [`Blob`](/de/docs/Web/API/Blob)-Objekten enthalten sein.
- `"arraybuffer"`
  - : Der Inhalt der empfangenen binären Nachrichten wird in {{jsxref("ArrayBuffer")}}-Objekten enthalten sein.

## Beispiel

Dieser Code konfiguriert einen Datenkanal, um binäre Daten in {{jsxref("ArrayBuffer")}}-Objekten zu empfangen, und etabliert einen Listener für [`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Ereignisse, der einen String erstellt, der die empfangenen Daten als eine Liste von hexadezimalen Byte-Werten darstellt.

```js
const dc = peerConnection.createDataChannel("Binary");
dc.binaryType = "arraybuffer";

dc.onmessage = (event) => {
  const byteArray = new Uint8Array(event.data);
  let hexString = "";

  byteArray.forEach((byte) => {
    hexString += `${byte.toString(16)} `;
  });
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)
