---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`MediaStreamEvent`** Schnittstelle repräsentiert Ereignisse, die in Bezug auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) auftreten. Zwei Ereignisse dieses Typs können ausgelöst werden: [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) und [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event).

## Instanz-Eigenschaften

_Ein `MediaStreamEvent` ist ein [`Event`](/de/docs/Web/API/Event), daher implementiert dieses Ereignis auch diese Eigenschaften_.

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Beinhaltet den [`MediaStream`](/de/docs/Web/API/MediaStream), der den mit dem Ereignis verbundenen Stream enthält.

## Konstruktoren

- [`MediaStreamEvent()`](/de/docs/Web/API/MediaStreamEvent/MediaStreamEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein neues `MediaStreamEvent` zurück. Es nimmt zwei Parameter: Der erste ist ein String, der den Typ des Ereignisses darstellt; der zweite ein Wörterbuch, das den referenzierten [`MediaStream`](/de/docs/Web/API/MediaStream) enthält.

## Instanz-Methoden

Ein `MediaStreamEvent` ist ein [`Event`](/de/docs/Web/API/Event), daher implementiert dieses Ereignis auch diese Eigenschaften. Es gibt keine spezifische `MediaStreamEvent`-Methode.

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
- Üblicher Zielort: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
