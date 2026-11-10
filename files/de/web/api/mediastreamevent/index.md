---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Die **`MediaStreamEvent`**-Schnittstelle repräsentiert Ereignisse, die im Zusammenhang mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) auftreten. Es können zwei Ereignisse dieses Typs ausgelöst werden: [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) und [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event).

## Konstruktoren

- [`MediaStreamEvent()`](/de/docs/Web/API/MediaStreamEvent/MediaStreamEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein neues `MediaStreamEvent` zurück. Der Konstruktor nimmt zwei Parameter entgegen: Der erste ist eine Zeichenfolge, die den Ereignistyp angibt; der zweite ist ein Dictionary, das den zugehörigen [`MediaStream`](/de/docs/Web/API/MediaStream) enthält.

## Instanzeigenschaften

_Da `MediaStreamEvent` ein [`Event`](/de/docs/Web/API/Event) ist, verfügt es auch über dessen Eigenschaften._

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Enthält den [`MediaStream`](/de/docs/Web/API/MediaStream), der dem Ereignis zugeordnet ist.

## Instanzmethoden

Da `MediaStreamEvent` ein [`Event`](/de/docs/Web/API/Event) ist, verfügt es auch über dessen Eigenschaften. Es gibt keine spezifischen Methoden für `MediaStreamEvent`.

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
- Das übliche Ziel des Ereignisses: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
