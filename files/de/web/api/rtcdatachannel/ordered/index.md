---
title: "RTCDataChannel: ordered-Eigenschaft"
short-title: ordered
slug: Web/API/RTCDataChannel/ordered
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`ordered`** gibt an, ob der Datenkanal die geordnete Zustellung von Nachrichten garantiert oder nicht. Der Standardwert ist `true`, was anzeigt, dass der Datenkanal tatsächlich geordnet ist. Dies wird beim Erstellen des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) festgelegt, indem die `ordered`-Eigenschaft im Objekt gesetzt wird, das als `options`-Parameter von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) übergeben wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn eine geordnete Zustellung garantiert wird, und sonst `false`.

## Beispiel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

if (!dc.ordered) {
  // Handle unordered messaging
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
