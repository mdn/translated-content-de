---
title: "RTCPeerConnection: addStream() Methode"
short-title: addStream()
slug: Web/API/RTCPeerConnection/addStream
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`addStream()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle hinzu. Statt diese veraltete Methode zu verwenden, sollten Sie stattdessen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) einmal für jede Spur verwenden, die Sie an den entfernten Peer senden möchten.

Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `closed` gesetzt ist, wird ein `InvalidStateError` ausgelöst. Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `stable` gesetzt ist, wird das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um anzuzeigen, dass die [ICE](/de/docs/Glossary/ICE)-Verhandlung wiederholt werden muss, um den neuen Stream in Betracht zu ziehen.

## Syntax

```js-nolint
addStream(mediaStream)
```

### Parameter

- `mediaStream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream angibt, der der WebRTC-Peerverbindung hinzugefügt werden soll.

### Rückgabewert

Keine.

## Beispiel

Dieses einfache Beispiel fügt den Audio- und Videostream von der Kamera des Benutzers zur Verbindung hinzu.

```js
navigator.mediaDevices.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  pc.addStream(stream);
});
```

## Migration zu addTrack()

[Kompatibilität vorausgesetzt](#browser-kompatibilität), sollten Sie Ihren Code aktualisieren, um stattdessen die [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode zu verwenden:

```js
navigator.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  stream.getTracks().forEach((track) => {
    pc.addTrack(track, stream);
  });
});
```

Die neuere [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-API vermeidet Verwirrung darüber, ob spätere Änderungen an der Zusammensetzung eines Streams eine Peerverbindung beeinflussen (sie tun es nicht).

Die Ausnahme ist in Chrome, wo `addStream()` _tatsächlich_ die Peerverbindung empfindlich gegenüber späteren Stream-Änderungen macht (obwohl solche Änderungen nicht das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis auslösen). Wenn Sie sich auf das Verhalten von Chrome verlassen, beachten Sie, dass andere Browser dies nicht haben. Sie können webkompatiblen Code unter Verwendung von Feature-Detection schreiben:

```js
// Add a track to a stream and the peer connection said stream was added to:

stream.addTrack(track);
if (pc.addTrack) {
  pc.addTrack(track, stream);
} else {
  // If you have code listening for negotiationneeded events:
  setTimeout(() => pc.dispatchEvent(new Event("negotiationneeded")));
}

// Remove a track from a stream and the peer connection said stream was added to:

stream.removeTrack(track);
if (pc.removeTrack) {
  pc.removeTrack(pc.getSenders().find((sender) => sender.track === track));
} else {
  // If you have code listening for negotiationneeded events:
  setTimeout(() => pc.dispatchEvent(new Event("negotiationneeded")));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
