---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceEvent`**-Schnittstelle stellt Ereignisse dar, die in Bezug auf {{Glossary("ICE", "ICE")}}-Kandidaten mit dem Ziel auftreten, normalerweise einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Nur ein Ereignis ist von diesem Typ: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Ein `RTCPeerConnectionIceEvent` ist ein [`Event`](/de/docs/Web/API/Event), daher implementiert dieses Ereignis auch diese Eigenschaften_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Enthält den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der den mit dem Ereignis verbundenen Kandidaten enthält, oder `null`, wenn dieses Ereignis anzeigt, dass keine weiteren Kandidaten folgen werden.

## Konstruktoren

- [`RTCPeerConnectionIceEvent()`](/de/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent)
  - : Gibt ein neues `RTCPeerConnectionIceEvent` zurück. Es nimmt zwei Parameter, der erste ist ein String, der den Typ des Ereignisses darstellt; der zweite ein Wörterbuch, das den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält, auf den es sich bezieht.

## Instanz-Methoden

_Ein `RTCPeerConnectionIceEvent` ist ein [`Event`](/de/docs/Web/API/Event), daher implementiert dieses Ereignis auch diese Eigenschaften. Es gibt keine spezifische Methode des [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)._

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
