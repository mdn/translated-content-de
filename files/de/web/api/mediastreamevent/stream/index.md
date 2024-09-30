---
title: "MediaStreamEvent: stream-Eigenschaft"
short-title: stream
slug: Web/API/MediaStreamEvent/stream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`MediaStreamEvent.stream`** gibt
den mit dem Ereignis verknüpften [`MediaStream`](/de/docs/Web/API/MediaStream) zurück.

## Syntax

```js-nolint
event.stream
```

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
