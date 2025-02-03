---
title: "MediaStreamEvent: stream-Eigenschaft"
short-title: stream
slug: Web/API/MediaStreamEvent/stream
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`MediaStreamEvent.stream`** gibt den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der mit dem Ereignis verknüpft ist.

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
