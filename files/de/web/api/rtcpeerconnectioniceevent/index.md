---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceEvent`**-Schnittstelle steht für Ereignisse, die im Zusammenhang mit {{Glossary("ICE")}}-Kandidaten mit dem Ziel auftreten, in der Regel ein {{domxref("RTCPeerConnection")}}.

Nur ein Ereignis hat diesen Typ: {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Ein `RTCPeerConnectionIceEvent` ist ein {{domxref("Event")}}, daher implementiert dieses Ereignis auch diese Eigenschaften_.

- {{domxref("RTCPeerConnectionIceEvent.candidate")}} {{ReadOnlyInline}}
  - : Enthält den {{domxref("RTCIceCandidate")}} mit dem Kandidaten, der mit dem Ereignis verbunden ist, oder `null`, wenn dieses Ereignis anzeigt, dass keine weiteren Kandidaten mehr kommen.

## Konstruktoren

- {{domxref("RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent()", "RTCPeerConnectionIceEvent()")}}
  - : Gibt ein neues `RTCPeerConnectionIceEvent` zurück. Es nimmt zwei Parameter entgegen, der erste ist ein String, der den Typ des Ereignisses darstellt; der zweite ist ein Wörterbuch, das den Referenz-{{domxref("RTCIceCandidate")}} enthält.

## Instanz-Methoden

_Ein `RTCPeerConnectionIceEvent` ist ein {{domxref("Event")}}, daher implementiert dieses Ereignis auch diese Eigenschaften. Es gibt keine spezifische {{domxref("RTCDataChannelEvent")}}-Methode._

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
- Übliches Ziel: {{domxref("RTCPeerConnection")}}.
