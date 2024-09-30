---
title: "RTCSessionDescription: sdp-Eigenschaft"
short-title: sdp
slug: Web/API/RTCSessionDescription/sdp
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`RTCSessionDescription.sdp`** ist ein schreibgeschützter
String, der das [SDP](/de/docs/Glossary/SDP) enthält, welches die Sitzung beschreibt.

## Syntax

```js-nolint
const value = sessionDescription.sdp
sessionDescription.sdp = value
```

### Wert

Der Wert ist ein String, der eine SDP-Nachricht wie diese enthält:

```plain
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

## Beispiel

```js
// The remote description has been set previously on pc, an RTCPeerConnection

alert(pc.remoteDescription.sdp);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Der Standard für die Verwendung von SDP in einem Offer/Answer-Protokoll {{rfc("3264")}}.
