---
title: "RTCDataChannel: Eigenschaft ordered"
short-title: ordered
slug: Web/API/RTCDataChannel/ordered
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`ordered`** zeigt an,
ob der Datenkanal die geordnete Zustellung von Nachrichten garantiert;
der Standardwert ist `true`,
was bedeutet, dass der Datenkanal tatsächlich geordnet ist.
Dies wird beim Erstellen des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) festgelegt,
indem die `ordered`-Eigenschaft
an dem Objekt übergeben wird, das als `options`-Parameter der Methode [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) verwendet wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn die geordnete Zustellung
garantiert ist, und ansonsten `false`.

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
