---
title: "RTCDataChannel: Eigenschaft ordered"
short-title: ordered
slug: Web/API/RTCDataChannel/ordered
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`ordered`** gibt an, ob der Datenkanal die geordnete Zustellung von Nachrichten garantiert; der Standardwert ist `true`, was bedeutet, dass der Datenkanal tatsächlich geordnet ist. Dies wird festgelegt, wenn das {{domxref("RTCDataChannel")}} erstellt wird, indem die Eigenschaft `ordered` auf dem Objekt gesetzt wird, das als `options`-Parameter von {{domxref("RTCPeerConnection.createDataChannel()")}} angegeben wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn die geordnete Zustellung garantiert ist, andernfalls `false`.

## Beispiel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

if (!dc.ordered) {
  // Ungeordnete Nachrichtenübermittlung verarbeiten
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
