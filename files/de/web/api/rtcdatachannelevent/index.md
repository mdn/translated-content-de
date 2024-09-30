---
title: RTCDataChannelEvent
slug: Web/API/RTCDataChannelEvent
l10n:
  sourceCommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannelEvent`**-Schnittstelle
repräsentiert ein Ereignis, das mit einem bestimmten [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zusammenhängt.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCDataChannelEvent()`](/de/docs/Web/API/RTCDataChannelEvent/RTCDataChannelEvent)
  - : Erstellt ein neues `RTCDataChannelEvent`.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) {{ReadOnlyInline}}
  - : Gibt den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück, der mit dem Ereignis verknüpft ist.

## Beispiele

In diesem Beispiel wird der `datachannel`-Ereignis-Handler eingerichtet, um die Datenkanalreferenz zu speichern und Handler für die zu überwachenden Ereignisse einzurichten. Die [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel)-Eigenschaft liefert den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), der die Verbindung zum anderen Peer darstellt.

```js
pc.ondatachannel = (event) => {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
};
```

Sehen Sie sich [ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample) für ein weiteres, umfassenderes Beispiel zur Nutzung von Datenkanälen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) (die Ziel-Schnittstelle für [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignisse)
