---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Das **`MediaStreamEvent`**-Interface repräsentiert Ereignisse, die in Bezug auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) auftreten. Zwei Ereignisse dieses Typs können ausgelöst werden: [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) und [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event).

## Instanzeigenschaften

_Da ein `MediaStreamEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften_.

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Enthält den [`MediaStream`](/de/docs/Web/API/MediaStream), der den mit dem Ereignis verknüpften Stream enthält.

## Konstruktoren

- [`MediaStreamEvent()`](/de/docs/Web/API/MediaStreamEvent/MediaStreamEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein neues `MediaStreamEvent` zurück. Es benötigt zwei Parameter, wobei der erste ein String ist, der den Typ des Ereignisses darstellt, und der zweite ein Wörterbuch, das den [`MediaStream`](/de/docs/Web/API/MediaStream) enthält, auf den es sich bezieht.

## Instanzmethoden

Da ein `MediaStreamEvent` ein [`Event`](/de/docs/Web/API/Event) ist, implementiert dieses Ereignis auch diese Eigenschaften. Es gibt keine spezifische `MediaStreamEvent`-Methode.

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
- Sein übliches Ziel: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
