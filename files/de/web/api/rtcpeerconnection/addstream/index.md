---
title: "RTCPeerConnection: addStream()-Methode"
short-title: addStream()
slug: Web/API/RTCPeerConnection/addStream
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`addStream()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle hinzu. Anstatt diese veraltete Methode zu verwenden, sollten Sie stattdessen für jede Spur, die Sie an den entfernten Peer senden möchten, [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) verwenden.

Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `closed` gesetzt ist, wird ein `InvalidStateError` ausgelöst. Ist der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `stable` gesetzt, wird das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um anzuzeigen, dass die [ICE](/de/docs/Glossary/ICE)-Aushandlung wiederholt werden muss, um den neuen Stream zu berücksichtigen.

## Syntax

```js-nolint
addStream(mediaStream)
```

### Parameter

- `mediaStream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream angibt, der zur WebRTC-Peer-Verbindung hinzugefügt werden soll.

### Rückgabewert

Keiner.

## Beispiel

Dieses einfache Beispiel fügt den Audio- und Videostream, der von der Kamera des Benutzers kommt, der Verbindung hinzu.

```js
navigator.mediaDevices.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  pc.addStream(stream);
});
```

## Migration zu addTrack()

[Soweit kompatibel](#browser-kompatibilität), sollten Sie Ihren Code so aktualisieren, dass stattdessen die [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode verwendet wird:

```js
navigator.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  stream.getTracks().forEach((track) => {
    pc.addTrack(track, stream);
  });
});
```

Die neuere [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-API vermeidet Verwirrung darüber, ob spätere Änderungen an der Zusammensetzung eines Streams eine Peer-Verbindung beeinflussen (was sie nicht tun).

Die Ausnahme bildet Chrome, wo `addStream()` _die_ Peer-Verbindung auf spätere Stream-Änderungen empfindlich macht (obwohl solche Änderungen das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis nicht auslösen). Wenn Sie sich auf das Chrome-Verhalten verlassen, beachten Sie, dass andere Browser dieses Verhalten nicht haben. Sie können webkompatiblen Code mit Feature-Erkennung schreiben:

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
