---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceEvent`**-Schnittstelle repräsentiert Ereignisse, die im Zusammenhang mit {{Glossary("ICE", "ICE")}}-Kandidaten mit dem Ziel auftreten, normalerweise eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Nur ein Ereignis ist von diesem Typ: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Da ein `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften._

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Enthält den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der den mit dem Ereignis verknüpften Kandidaten enthält, oder `null`, wenn dieses Ereignis anzeigt, dass keine weiteren Kandidaten folgen werden.
- [`RTCPeerConnectionIceEvent.url`](/de/docs/Web/API/RTCPeerConnectionIceEvent/url) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Enthält eine Zeichenkette, die die URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers angibt, der verwendet wurde, um den Kandidaten zu sammeln, oder `null`, wenn der Kandidat nicht von einem Server gesammelt wurde.

## Konstruktoren

- [`RTCPeerConnectionIceEvent()`](/de/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent)
  - : Gibt ein neues `RTCPeerConnectionIceEvent` zurück. Es nimmt zwei Parameter entgegen, der erste ist eine Zeichenkette, die den Typ des Ereignisses darstellt; der zweite ist ein Wörterbuch, das den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält, auf den es sich bezieht.

## Instanz-Methoden

_Da ein `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften. Es gibt keine spezielle Methode für [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)._

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
- Das übliche Ziel: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
