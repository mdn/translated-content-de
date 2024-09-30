---
title: "RTCPeerConnection: Methode removeTrack()"
short-title: removeTrack()
slug: Web/API/RTCPeerConnection/removeTrack
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`removeTrack()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle teilt dem lokalen Ende der Verbindung mit, dass das Senden von Medien von dem angegebenen Track gestoppt werden soll, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) tatsächlich aus der Liste der Sender zu entfernen, die von [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet wird. Wenn der Track bereits gestoppt ist oder sich nicht in der Senderliste der Verbindung befindet, hat diese Methode keine Wirkung.

Wenn die Verbindung bereits verhandelt wurde ([`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) ist auf `"stable"` gesetzt), wird sie als erneut zu verhandeln markiert; der Remote-Peer wird die Änderung erst erleben, wenn diese Verhandlung erfolgt. Ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um das lokale Ende darüber zu informieren, dass diese Verhandlung erfolgen muss.

## Syntax

```js-nolint
removeTrack(sender)
```

### Parameter

- `sender`
  - : Ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der den zu entfernenden Sender der Verbindung spezifiziert.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verbindung nicht geöffnet ist.

## Beispiel

Dieses Beispiel fügt einer Verbindung einen Videotrack hinzu und richtet einen Listener für eine Schaltfläche zum Schließen ein, der den Track entfernt, wenn der Benutzer auf die Schaltfläche klickt.

```js
let pc;
let sender;
navigator.getUserMedia({ video: true }, (stream) => {
  pc = new RTCPeerConnection();
  const [track] = stream.getVideoTracks();
  sender = pc.addTrack(track, stream);
});

document.getElementById("closeButton").addEventListener(
  "click",
  (event) => {
    pc.removeTrack(sender);
    pc.close();
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
