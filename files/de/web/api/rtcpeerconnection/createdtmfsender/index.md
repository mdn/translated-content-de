---
title: "RTCPeerConnection: createDTMFSender()-Methode"
short-title: createDTMFSender()
slug: Web/API/RTCPeerConnection/createDTMFSender
l10n:
  sourceCommit: ed6a48a8e1761919b88fd3691af248b702be72b4
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`createDTMFSender()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces erstellt ein neues [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt, das mit dem angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) verknüpft ist. Dieses kann verwendet werden, um DTMF-Töne über die Verbindung zu senden.

Diese Methode ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen die [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft, um auf den DTMF-Sender zuzugreifen, der mit einem bestimmten Sender verknüpft ist.

## Syntax

```js-nolint
createDTMFSender(track)
```

### Parameter

- `track`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das den Track darstellt, der mit dem neuen DTMF-Sender verknüpft werden soll.

### Rückgabewert

Ein neues [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt.

## Beispiele

Dieses Beispiel erstellt einen neuen DTMF-Sender, der mit dem angegebenen Track verknüpft ist.

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

Dieses Feature ist nicht standardisiert und Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
