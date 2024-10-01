---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceEvent`**-Schnittstelle stellt Ereignisse dar, die in Bezug auf {{Glossary("ICE", "ICE")}}-Kandidaten mit dem Ziel auftreten, normalerweise eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Nur ein Ereignis ist von diesem Typ: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Ein `RTCPeerConnectionIceEvent` als ein [`Event`](/de/docs/Web/API/Event) implementiert auch diese Eigenschaften_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Enthält den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der mit dem Ereignis verknüpft ist, oder `null`, wenn dieses Ereignis anzeigt, dass keine weiteren Kandidaten mehr kommen werden.

## Konstruktoren

- [`RTCPeerConnectionIceEvent()`](/de/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent)
  - : Gibt ein neues `RTCPeerConnectionIceEvent` zurück. Es nimmt zwei Parameter entgegen, der erste ist ein String, der den Typ des Ereignisses darstellt; der zweite ist ein Wörterbuch, das den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält, auf den es sich bezieht.

## Instanz-Methoden

_Ein `RTCPeerConnectionIceEvent` als ein [`Event`](/de/docs/Web/API/Event) implementiert auch diese Eigenschaften. Es gibt keine spezifische [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)-Methode._

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
- Sein übliches Ziel: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
