---
title: "RTCPeerConnection: createDTMFSender() Methode"
short-title: createDTMFSender()
slug: Web/API/RTCPeerConnection/createDTMFSender
l10n:
  sourceCommit: ed6a48a8e1761919b88fd3691af248b702be72b4
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`createDTMFSender()`** Methode der {{domxref("RTCPeerConnection")}} Schnittstelle erstellt ein neues {{domxref("RTCDTMFSender")}} Objekt, das mit dem angegebenen {{domxref("MediaStreamTrack")}} verknüpft ist und verwendet werden kann, um DTMF-Töne über die Verbindung zu senden.

Diese Methode ist veraltet und sollte nicht verwendet werden. Stattdessen sollte die {{domxref("RTCRtpSender.dtmf")}} Eigenschaft verwendet werden, um auf den DTMF-Sender zuzugreifen, der mit einem bestimmten Sender verknüpft ist.

## Syntax

```js-nolint
createDTMFSender(track)
```

### Parameter

- `track`
  - : Ein {{domxref("MediaStreamTrack")}} Objekt, das den Track darstellt, mit dem der neue DTMF-Sender verknüpft werden soll.

### Rückgabewert

Ein neues {{domxref("RTCDTMFSender")}} Objekt.

## Beispiele

Dieses Beispiel erstellt einen neuen DTMF-Sender, der mit dem angegebenen Track verknüpft ist.

```js
navigator.getUserMedia({ audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  const track = stream.getAudioTracks()[0];
  const dtmfSender = pc.createDTMFSender(track);
});
```

Dies könnte umgeschrieben werden, um die {{domxref("RTCRtpSender.dtmf")}} Eigenschaft zu verwenden:

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
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
- {{domxref("RTCPeerConnection")}}
