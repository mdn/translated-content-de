---
title: "RTCPeerConnection: removeStream() Methode"
short-title: removeStream()
slug: Web/API/RTCPeerConnection/removeStream
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`removeStream()`** Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interfaces entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video.
Wenn die Verhandlung bereits stattgefunden hat, wird eine neue notwendig sein, damit der entfernte Teilnehmer sie verwenden kann.
Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden, wenn Ihre Zielbrowser-Versionen sie implementiert haben.

Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `"closed"` gesetzt ist, wird ein `InvalidStateError` ausgelöst.
Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `"stable"` gesetzt ist, wird das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet.

## Syntax

```js-nolint
removeStream(mediaStream)
```

### Parameter

- `mediaStream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der den zu entfernenden Stream aus der Verbindung festlegt.

### Rückgabewert

{{jsxref("undefined")}}.

## Beispiel

```js
let pc;
let videoStream;
navigator.getUserMedia({ video: true }, (stream) => {
  pc = new RTCPeerConnection();
  videoStream = stream;
  pc.addStream(stream);
});
document.getElementById("closeButton").addEventListener(
  "click",
  (event) => {
    pc.removeStream(videoStream);
    pc.close();
  },
  false,
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
- [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)
