---
title: "RTCPeerConnection: Methode removeStream()"
short-title: removeStream()
slug: Web/API/RTCPeerConnection/removeStream
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`removeStream()`**-Methode der Schnittstelle {{domxref("RTCPeerConnection")}} entfernt einen {{domxref("MediaStream")}} als lokale Quelle für Audio oder Video.
Wenn die Aushandlung bereits stattgefunden hat, ist eine neue erforderlich, damit der entfernte Peers sie verwenden kann.
Da diese Methode veraltet ist, sollten Sie stattdessen {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} verwenden, wenn Ihre Zielbrowser-Versionen dies implementiert haben.

Wenn der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} auf `"closed"` gesetzt ist, wird ein `InvalidStateError` ausgelöst.
Wenn der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} auf `"stable"` gesetzt ist, wird das Ereignis {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} auf der {{domxref("RTCPeerConnection")}} gesendet.

## Syntax

```js-nolint
removeStream(mediaStream)
```

### Parameter

- `mediaStream`
  - : Ein {{domxref("MediaStream")}}, der den Stream angibt, der aus der Verbindung entfernt werden soll.

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
- {{domxref("RTCPeerConnection.removeTrack()")}}
- {{domxref("RTCPeerConnection.addTrack()")}}
- {{domxref("RTCPeerConnection.addStream()")}}
