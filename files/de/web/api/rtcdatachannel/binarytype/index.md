---
title: "RTCDataChannel: binaryType-Eigenschaft"
short-title: binaryType
slug: Web/API/RTCDataChannel/binaryType
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`binaryType`**-Eigenschaft des
{{domxref("RTCDataChannel")}}-Interfaces ist ein String, der den Typ des Objekts angibt, welches verwendet werden soll, um empfangene Binärdaten auf dem {{domxref("RTCDataChannel")}} darzustellen. Die für die {{domxref("WebSocket.binaryType")}}-Eigenschaft zulässigen Werte sind auch hier erlaubt: `blob`, wenn {{domxref("Blob")}}-Objekte verwendet werden, oder `arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden. Der Standardwert ist `blob`.

Wenn eine binäre Nachricht über den Datenkanal empfangen wird, ist die {{domxref("MessageEvent.data")}}-Eigenschaft des resultierenden {{DOMxRef("RTCDataChannel.message_event", "message")}}-Events ein Objekt des durch `binaryType` angegebenen Typs.

## Wert

Ein String, der einen der folgenden Werte haben kann:

- `"blob"`
  - : Der Inhalt empfangener binärer Nachrichten wird in {{domxref("Blob")}}-Objekten enthalten sein.
- `"arraybuffer"`
  - : Der Inhalt empfangener binärer Nachrichten wird in {{jsxref("ArrayBuffer")}}-Objekten enthalten sein.

## Beispiel

Dieser Code konfiguriert einen Datenkanal, um Binärdaten in {{jsxref("ArrayBuffer")}}-Objekten zu empfangen, und richtet einen Listener für {{DOMxRef("RTCDataChannel.message_event", "message")}}-Events ein, welcher einen String konstruiert, der die empfangenen Daten als Liste von hexadezimalen Bytewerten darstellt.

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
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.send()")}}
