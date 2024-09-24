---
title: "RTCPeerConnection: removeTrack()-Methode"
short-title: removeTrack()
slug: Web/API/RTCPeerConnection/removeTrack
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`removeTrack()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle weist das lokale Ende der Verbindung an, die Übertragung von Medien von dem angegebenen Track zu stoppen, ohne den entsprechenden {{domxref("RTCRtpSender")}} aus der Liste der Sender zu entfernen, wie sie von {{domxref("RTCPeerConnection.getSenders()")}} gemeldet wird. Wenn der Track bereits gestoppt ist oder nicht in der Senderliste der Verbindung enthalten ist, hat diese Methode keine Wirkung.

Wenn die Verbindung bereits verhandelt wurde ({{domxref("RTCPeerConnection.signalingState", "signalingState")}} ist auf `"stable"` gesetzt), wird sie als erneut zu verhandelnd markiert; der entfernte Peer wird die Änderung erst bemerken, wenn diese Verhandlung erfolgt ist. Ein {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}}-Ereignis wird an die {{domxref("RTCPeerConnection")}} gesendet, um das lokale Ende wissen zu lassen, dass diese Verhandlung erfolgen muss.

## Syntax

```js-nolint
removeTrack(sender)
```

### Parameter

- `sender`
  - : Ein {{domxref("RTCRtpSender")}}, der den zu entfernenden Sender von der Verbindung spezifiziert.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Verbindung nicht offen ist.

## Beispiel

Dieses Beispiel fügt einer Verbindung einen Video-Track hinzu und richtet einen Listener auf einen Schließen-Button ein, der den Track entfernt, wenn der Benutzer auf den Button klickt.

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
