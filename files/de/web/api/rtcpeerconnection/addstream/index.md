---
title: "RTCPeerConnection: Methode addStream()"
short-title: addStream()
slug: Web/API/RTCPeerConnection/addStream
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`addStream()`**-Methode des {{domxref("RTCPeerConnection")}}-Interfaces fügt einen {{domxref("MediaStream")}} als lokale Quelle für Audio oder Video hinzu. Statt diese veraltete Methode zu verwenden, sollten Sie für jede Spur, die Sie an den Remote-Peer senden möchten, {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} einmal verwenden.

Wenn der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} auf `closed` gesetzt ist, wird ein `InvalidStateError` ausgelöst.
Wenn der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} auf `stable` gesetzt ist, wird das Ereignis {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} auf dem {{domxref("RTCPeerConnection")}} gesendet, um anzuzeigen, dass die {{Glossary("ICE")}}-Aushandlung wiederholt werden muss, um den neuen Stream zu berücksichtigen.

## Syntax

```js-nolint
addStream(mediaStream)
```

### Parameter

- `mediaStream`
  - : Ein {{domxref("MediaStream")}}-Objekt, das den Stream angibt, der zur WebRTC-Peer-Verbindung hinzugefügt werden soll.

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

[Kompatibilität vorausgesetzt](#browser-kompatibilität), sollten Sie Ihren Code aktualisieren, um stattdessen die {{domxref("RTCPeerConnection.addTrack", "addTrack()")}}-Methode zu verwenden:

```js
navigator.getUserMedia({ video: true, audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  stream.getTracks().forEach((track) => {
    pc.addTrack(track, stream);
  });
});
```

Die neuere {{domxref("RTCPeerConnection.addTrack", "addTrack()")}}-API vermeidet Verwirrung darüber, ob spätere Änderungen an der Zusammenstellung der Spuren eines Streams eine Peer-Verbindung beeinflussen (sie tun es nicht).

Die Ausnahme ist in Chrome, wo `addStream()` _doch_ die Peer-Verbindung empfindlich gegenüber späteren Stream-Änderungen macht (obwohl solche Änderungen das {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}}-Ereignis nicht auslösen).
Wenn Sie sich auf das Verhalten von Chrome verlassen, beachten Sie, dass andere Browser dies nicht haben. Sie können webbasierten kompatiblen Code mit Feature-Erkennung schreiben:

```js
// Fügen Sie einem Stream eine Spur hinzu und der Peer-Verbindung, zu der dieser Stream hinzugefügt wurde:

stream.addTrack(track);
if (pc.addTrack) {
  pc.addTrack(track, stream);
} else {
  // Wenn Sie Code haben, der auf negotiationneeded-Ereignisse hört:
  setTimeout(() => pc.dispatchEvent(new Event("negotiationneeded")));
}

// Entfernen Sie eine Spur von einem Stream und der Peer-Verbindung, zu der dieser Stream hinzugefügt wurde:

stream.removeTrack(track);
if (pc.removeTrack) {
  pc.removeTrack(pc.getSenders().find((sender) => sender.track === track));
} else {
  // Wenn Sie Code haben, der auf negotiationneeded-Ereignisse hört:
  setTimeout(() => pc.dispatchEvent(new Event("negotiationneeded")));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
