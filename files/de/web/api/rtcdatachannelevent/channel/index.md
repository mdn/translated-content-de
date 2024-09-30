---
title: "RTCDataChannelEvent: channel-Eigenschaft"
short-title: channel
slug: Web/API/RTCDataChannelEvent/channel
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`RTCDataChannelEvent.channel`**
gibt den mit dem Ereignis verbundenen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück.

## Wert

Ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt, das den Datenkanal darstellt, der die empfangende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit ihrem entfernten Peer verbindet.

## Beispiel

Die erste Zeile des Codes im unten gezeigten [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignishandler nimmt den Kanal aus dem Ereignisobjekt und speichert ihn lokal, um ihn durch den Code zu verwenden, der den Datenverkehr verarbeitet.

```js
pc.ondatachannel = (event) => {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
