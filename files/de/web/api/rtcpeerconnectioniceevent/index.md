---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: edfa7accf30f93ad25735fee3bffd118f107bea9
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceEvent`**-Schnittstelle repräsentiert Ereignisse, die in Bezug auf {{Glossary("ICE", "ICE")}}-Kandidaten mit dem Ziel auftreten, in der Regel ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Es gibt nur ein Ereignis dieses Typs: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Da `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Enthält den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der den Kandidaten enthält, der mit dem Ereignis verknüpft ist, oder `null`, wenn dieses Ereignis anzeigt, dass keine weiteren Kandidaten folgen werden.
- [`RTCPeerConnectionIceEvent.url`](/de/docs/Web/API/RTCPeerConnectionIceEvent/url) {{ReadOnlyInline}}
  - : Enthält einen String, der die URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers angibt, der verwendet wurde, um den Kandidaten zu sammeln, oder `null`, wenn der Kandidat nicht von einem Server gesammelt wurde.

## Konstruktoren

- [`RTCPeerConnectionIceEvent()`](/de/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent)
  - : Gibt ein neues `RTCPeerConnectionIceEvent` zurück. Es nimmt zwei Parameter an, wobei der erste ein String ist, der den Typ des Ereignisses darstellt; der zweite ein Wörterbuch, das den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält, auf den es sich bezieht.

## Instanz-Methoden

_Da `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften. Es gibt keine spezifische Methode für [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)._

## Beispiele

```js
pc.onicecandidate = (ev) => {
  console.log(
    `The ICE candidate ('${ev.candidate.candidate}') added to connection.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Sein übliches Ziel: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
