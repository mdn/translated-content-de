---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`MediaStreamEvent`**-Schnittstelle repräsentiert Ereignisse, die in Bezug auf einen {{domxref("MediaStream")}} auftreten. Zwei Ereignisse dieses Typs können ausgelöst werden: {{domxref("RTCPeerConnection.addstream_event", "addstream")}} und {{domxref("RTCPeerConnection.removestream_event", "removestream")}}.

## Instanz-Eigenschaften

_Ein `MediaStreamEvent` ist ein {{domxref("Event")}}, dieses Ereignis implementiert auch diese Eigenschaften_.

- {{domxref("MediaStreamEvent.stream")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Enthält den {{domxref("MediaStream")}}, der den mit dem Ereignis verbundenen Stream enthält.

## Konstruktoren

- {{domxref("MediaStreamEvent.MediaStreamEvent()", "MediaStreamEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein neues `MediaStreamEvent` zurück. Es nimmt zwei Parameter entgegen, wobei der erste ein String ist, der den Typ des Ereignisses repräsentiert, und der zweite ein Wörterbuch ist, das den betreffenden {{domxref("MediaStream")}} enthält.

## Instanz-Methoden

Ein `MediaStreamEvent` ist ein {{domxref("Event")}}, dieses Ereignis implementiert auch diese Eigenschaften. Es gibt keine spezifische `MediaStreamEvent`-Methode.

## Beispiele

```js
pc.onaddstream = (ev) => {
  alert(`A stream (id: '${ev.stream.id}') has been added to this connection.`);
};
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Sein üblicheres Ziel: {{domxref("RTCPeerConnection")}}.
