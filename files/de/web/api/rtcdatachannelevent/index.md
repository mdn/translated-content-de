---
title: RTCDataChannelEvent
slug: Web/API/RTCDataChannelEvent
l10n:
  sourceCommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannelEvent`**-Schnittstelle
repräsentiert ein Ereignis, das mit einem bestimmten {{DOMxRef("RTCDataChannel")}} verbunden ist.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("RTCDataChannelEvent.RTCDataChannelEvent", "RTCDataChannelEvent()")}}
  - : Erstellt ein neues `RTCDataChannelEvent`.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von {{DOMxRef("Event")}}._

- {{DOMxRef("RTCDataChannelEvent.channel", "channel")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("RTCDataChannel")}} zurück, das mit dem Ereignis verbunden ist.

## Beispiele

In diesem Beispiel wird der `datachannel`-Ereignishandler eingerichtet, um die Datenkanalreferenz zu speichern und Handler für die Ereignisse, die überwacht werden müssen, einzurichten. Die Eigenschaft {{domxref("RTCDataChannelEvent.channel", "channel")}} bietet das {{domxref("RTCDataChannel")}}, das die Verbindung zum anderen Peer darstellt.

```js
pc.ondatachannel = (event) => {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
};
```

Sehen Sie sich [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample) für ein weiteres, vollständigeres Beispiel an, wie Datenkanäle verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}} (die Ziel-Schnittstelle für {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}}-Ereignisse)
