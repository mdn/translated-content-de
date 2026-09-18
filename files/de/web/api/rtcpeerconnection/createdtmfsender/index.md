---
title: "RTCPeerConnection: Methode createDTMFSender()"
short-title: createDTMFSender()
slug: Web/API/RTCPeerConnection/createDTMFSender
l10n:
  sourceCommit: 0fd1f93376bb12cf086a17c4537bbdc7e68dc331
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die Methode **`createDTMFSender()`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt ein neues [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt, das dem angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zugeordnet ist und zum Senden von DTMF-Tönen über die Verbindung verwendet werden kann.

Diese Methode ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen die Eigenschaft [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf), um auf den DTMF-Sender zuzugreifen, der einem bestimmten Sender zugeordnet ist.

## Syntax

```js-nolint
createDTMFSender(track)
```

### Parameter

- `track`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das den Track darstellt, der dem neuen DTMF-Sender zugeordnet werden soll.

### Rückgabewert

Ein neues [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt.

## Beispiele

### Verwendung von createDTMFSender()

Dieses Beispiel erstellt einen neuen DTMF-Sender, der dem angegebenen Track zugeordnet ist.

```js
async function getDtmfSender() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const pc = new RTCPeerConnection();
  const [track] = stream.getAudioTracks();
  return pc.createDTMFSender(track);
}
```

### Stattdessen RTCRtpSender.dtmf verwenden

Das vorherige Beispiel kann mithilfe der Eigenschaft [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) des Senders umgeschrieben werden, der von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zurückgegeben wird:

```js
async function getDtmfSender() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const pc = new RTCPeerConnection();
  const [track] = stream.getAudioTracks();
  const sender = pc.addTrack(track, stream);
  return sender.dtmf;
}
```

## Spezifikationen

Dieses Feature ist nicht standardisiert und nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
