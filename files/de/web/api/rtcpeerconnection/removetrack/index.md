---
title: "RTCPeerConnection: removeTrack()-Methode"
short-title: removeTrack()
slug: Web/API/RTCPeerConnection/removeTrack
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Die **`removeTrack()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle teilt dem lokalen Ende der Verbindung mit, dass es aufhören soll, Medien von dem angegebenen Track zu senden, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aus der Liste der Sender zu entfernen, wie sie von [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet wird. Wenn der Track bereits gestoppt ist oder sich nicht in der Senderliste der Verbindung befindet, hat diese Methode keine Wirkung.

Wenn die Verbindung bereits verhandelt wurde ([`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) ist auf `"stable"` gesetzt), wird sie als neu zu verhandeln markiert; der entfernte Peer wird die Änderung erst bemerken, wenn diese Verhandlung erfolgt. Ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um dem lokalen Ende mitzuteilen, dass diese Verhandlung stattfinden muss.

## Syntax

```js-nolint
removeTrack(sender)
```

### Parameter

- `sender`
  - : Ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der den zu entfernenden Sender aus der Verbindung angibt.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verbindung nicht geöffnet ist.

## Beispiel

Dieses Beispiel fügt einer Verbindung einen Videotrack hinzu und richtet einen Listener auf eine Schaltfläche zum Schließen ein, der den Track entfernt, wenn der Benutzer auf die Schaltfläche klickt.

```js
let pc;
let sender;
navigator.getUserMedia({ video: true }, (stream) => {
  pc = new RTCPeerConnection();
  const [track] = stream.getVideoTracks();
  sender = pc.addTrack(track, stream);
});

document.getElementById("closeButton").addEventListener("click", (event) => {
  pc.removeTrack(sender);
  pc.close();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
