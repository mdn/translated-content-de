---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceEvent`**-Schnittstelle repräsentiert Ereignisse, die in Bezug auf [ICE](/de/docs/Glossary/ICE)-Kandidaten beim Ziel auftreten, normalerweise eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Es gibt nur ein Ereignis dieses Typs: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Da ein `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Enthält den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der mit dem Ereignis verknüpft ist, oder `null`, wenn dieses Ereignis anzeigt, dass keine weiteren Kandidaten folgen werden.

## Konstruktoren

- [`RTCPeerConnectionIceEvent()`](/de/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent)
  - : Gibt ein neues `RTCPeerConnectionIceEvent` zurück. Es akzeptiert zwei Parameter: der erste ist ein String, der den Typ des Ereignisses darstellt; der zweite ist ein Wörterbuch, das den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält, auf den es sich bezieht.

## Instanzmethoden

_Da ein `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften. Es gibt keine spezifische Methode für [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)._

## Beispiele

```js
pc.onicecandidate = (ev) => {
  console.log(
    `The ICE candidate (trsp addr: '${ev.candidate.candidate}') added to connection.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Dessen übliches Ziel: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
