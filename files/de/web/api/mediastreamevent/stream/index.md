---
title: "MediaStreamEvent: stream-Eigenschaft"
short-title: stream
slug: Web/API/MediaStreamEvent/stream
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`MediaStreamEvent.stream`** gibt den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der mit dem Ereignis assoziiert ist.

## Beispiel

```js
pc.onaddstream = (ev) => {
  alert(`A stream (id: '${ev.stream.id}') has been added to this connection.`);
};
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event), [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
