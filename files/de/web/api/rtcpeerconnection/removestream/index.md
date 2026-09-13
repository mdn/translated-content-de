---
title: "RTCPeerConnection: Methode removeStream()"
short-title: removeStream()
slug: Web/API/RTCPeerConnection/removeStream
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Die **`removeStream()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video.
Falls die Aushandlung bereits stattgefunden hat, wird eine neue erforderlich sein, damit der entfernte Teilnehmer sie nutzen kann.
Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden, wenn Ihre Ziel-Browserversionen dies implementiert haben.

Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `"closed"` gesetzt ist, wird ein `InvalidStateError` ausgelöst.
Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `"stable"` gesetzt ist, wird das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst.

## Syntax

```js-nolint
removeStream(mediaStream)
```

### Parameter

- `mediaStream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der den Stream angibt, der aus der Verbindung entfernt werden soll.

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
document.getElementById("closeButton").addEventListener("click", (event) => {
  pc.removeStream(videoStream);
  pc.close();
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
- [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)
