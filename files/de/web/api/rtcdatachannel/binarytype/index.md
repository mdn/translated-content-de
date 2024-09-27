---
title: "RTCDataChannel: binaryType Eigenschaft"
short-title: binaryType
slug: Web/API/RTCDataChannel/binaryType
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`binaryType`** der
[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle ist ein String, der den Typ des Objekts angibt, das verwendet werden soll, um binäre Daten darzustellen, die auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) empfangen werden. Werte, die durch die
[`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType)-Eigenschaft erlaubt sind, sind auch hier zulässig:
`blob`, wenn [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden, oder
`arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden. Der Standardwert ist `blob`.

Wenn eine binäre Nachricht im Datenkanal empfangen wird, ist die resultierende
[`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Ereignis-Eigenschaft [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) ein Objekt des Typs, der durch `binaryType` spezifiziert wird.

## Wert

Ein String, der einen dieser Werte haben kann:

- `"blob"`
  - : Empfangene binäre Nachrichteninhalte werden in [`Blob`](/de/docs/Web/API/Blob)-Objekten enthalten sein.
- `"arraybuffer"`
  - : Empfangene binäre Nachrichteninhalte werden in {{jsxref("ArrayBuffer")}}
    Objekten enthalten sein.

## Beispiel

Dieser Code konfiguriert einen Datenkanal, um binäre Daten in
{{jsxref("ArrayBuffer")}}-Objekten zu empfangen, und richtet einen Listener für [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
Ereignisse ein, der einen String konstruiert, der die empfangenen Daten als Liste von hexadezimalen
Byte-Werten darstellt.

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
