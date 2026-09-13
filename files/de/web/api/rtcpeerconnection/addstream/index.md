---
title: "RTCPeerConnection: addStream()-Methode"
short-title: addStream()
slug: Web/API/RTCPeerConnection/addStream
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die **`addStream()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle hinzu.
Anstatt diese veraltete Methode zu verwenden, sollten Sie stattdessen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) einmal für jeden Track verwenden, den Sie an den Remote-Peer senden möchten.

Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `closed` gesetzt ist, wird ein `InvalidStateError` ausgelöst. Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `stable` gesetzt ist, wird das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um anzuzeigen, dass die {{Glossary("ICE", "ICE")}}-Verhandlung wiederholt werden muss, um den neuen Stream zu berücksichtigen.

## Syntax

```js-nolint
addStream(mediaStream)
```

### Parameter

- `mediaStream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream angibt, der zur WebRTC-Peerverbindung hinzugefügt werden soll.

### Rückgabewert

Keiner.

## Beispiel

Dieses einfache Beispiel fügt den Audio- und Videostream, der von der Kamera des Benutzers stammt, der Verbindung hinzu.

```js
navigator.mediaDevices.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  pc.addStream(stream);
});
```

## Migration zu addTrack()

[Bei entsprechender Kompatibilität](#browser-kompatibilität) sollten Sie Ihren Code aktualisieren, um stattdessen die [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode zu verwenden:

```js
navigator.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  stream.getTracks().forEach((track) => {
    pc.addTrack(track, stream);
  });
});
```

Die neuere [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-API vermeidet Verwirrung darüber, ob spätere Änderungen der Track-Zusammensetzung eines Streams eine Peer-Verbindung beeinflussen (sie tun es nicht).

Eine Ausnahme bildet Chrome, bei dem `addStream()` _tatsächlich_ die Peer-Verbindung empfindlich gegenüber späteren Stream-Änderungen macht (obwohl solche Änderungen nicht das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis auslösen). Wenn Sie auf dieses Verhalten von Chrome angewiesen sind, beachten Sie, dass andere Browser es nicht haben. Sie können webb-kompatiblen Code schreiben, indem Sie stattdessen Feature-Erkennung verwenden:

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
