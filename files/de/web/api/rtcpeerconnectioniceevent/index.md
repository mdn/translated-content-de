---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCPeerConnectionIceEvent`** repräsentiert Ereignisse im Zusammenhang mit {{Glossary("ICE", "ICE")}}-Kandidaten, deren Ziel normalerweise eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist.

Nur ein Ereignis gehört zu diesem Typ: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

{{InheritanceDiagram}}

## Konstruktoren

- [`RTCPeerConnectionIceEvent()`](/de/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent)
  - : Gibt ein neues `RTCPeerConnectionIceEvent` zurück. Der Konstruktor akzeptiert zwei Parameter: Der erste ist ein String, der den Ereignistyp angibt; der zweite ist ein Dictionary mit dem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), auf den sich das Ereignis bezieht.

## Instanzeigenschaften

_Da `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, verfügt es auch über dessen Eigenschaften._

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Enthält den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der den mit dem Ereignis verknüpften Kandidaten enthält, oder `null`, wenn dieses Ereignis anzeigt, dass keine weiteren Kandidaten folgen.
- [`RTCPeerConnectionIceEvent.url`](/de/docs/Web/API/RTCPeerConnectionIceEvent/url) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Enthält einen String mit der URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers, über den der Kandidat ermittelt wurde, oder `null`, wenn der Kandidat nicht über einen Server ermittelt wurde.

## Instanzmethoden

_Da `RTCPeerConnectionIceEvent` ein [`Event`](/de/docs/Web/API/Event) ist, verfügt es auch über dessen Methoden. Es gibt keine spezifische Methode für [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)._

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
- Das übliche Ziel des Ereignisses: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
