---
title: "RTCDataChannelEvent: channel-Eigenschaft"
short-title: channel
slug: Web/API/RTCDataChannelEvent/channel
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`RTCDataChannelEvent.channel`**
gibt den mit dem Ereignis verknüpften {{domxref("RTCDataChannel")}} zurück.

## Wert

Ein {{domxref("RTCDataChannel")}}-Objekt, das den Datenkanal darstellt, der die empfangende {{domxref("RTCPeerConnection")}} mit ihrem entfernten Peer verbindet.

## Beispiel

Die erste Codezeile im unten gezeigten {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}}-Ereignishandler entnimmt den Kanal aus dem Ereignisobjekt und speichert ihn lokal für die Verwendung durch den Code, der den Datenverkehr verarbeitet.

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

- {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}}
- {{domxref("RTCDataChannel")}}
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}}
