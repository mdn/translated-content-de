---
title: "RTCPeerConnection: createDTMFSender() Methode"
short-title: createDTMFSender()
slug: Web/API/RTCPeerConnection/createDTMFSender
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die **`createDTMFSender()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle erstellt ein neues [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt, das mit dem angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) assoziiert ist, welches verwendet werden kann, um DTMF-Töne über die Verbindung zu senden.

Diese Methode ist veraltet und sollte nicht verwendet werden. Stattdessen sollte die [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft genutzt werden, um auf den DTMF-Sender zuzugreifen, der mit einem bestimmten Sender assoziiert ist.

## Syntax

```js-nolint
createDTMFSender(track)
```

### Parameter

- `track`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das den Track darstellt, der mit dem neuen DTMF-Sender assoziiert werden soll.

### Rückgabewert

Ein neues [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt.

## Beispiele

Dieses Beispiel erstellt einen neuen DTMF-Sender, der mit dem angegebenen Track assoziiert ist.

```js
navigator.getUserMedia({ audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  const track = stream.getAudioTracks()[0];
  const dtmfSender = pc.createDTMFSender(track);
});
```

Dies könnte umgeschrieben werden, indem die [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft verwendet wird:

```js
navigator.getUserMedia({ audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  const track = stream.getAudioTracks()[0];
  const sender = pc.addTrack(track, stream);
  const dtmfSender = sender.dtmf;
});
```

## Spezifikationen

Dieses Merkmal ist nicht standardisiert und Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
