---
title: "MediaStreamEvent: stream-Eigenschaft"
short-title: stream
slug: Web/API/MediaStreamEvent/stream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`MediaStreamEvent.stream`** gibt den mit dem Ereignis verknüpften {{domxref("MediaStream")}} zurück.

## Syntax

```js-nolint
event.stream
```

## Beispiel

```js
pc.onaddstream = (ev) => {
  alert(`Ein Stream (id: '${ev.stream.id}') wurde zu dieser Verbindung hinzugefügt.`);
};
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}}, {{domxref("RTCPeerConnection.removestream_event", "removestream")}}
- {{domxref("RTCPeerConnection")}}
