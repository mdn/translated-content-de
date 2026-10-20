---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: 6c2954d3490bd0f445547e1ec359684c5cb36712
---

**SDP** (Session Description {{Glossary("Protocol", "Protocol")}}) ist ein Standard zur Beschreibung von Multimedia-Sitzungen. Es enthält Informationen wie Medientypen, Transportadressen, Zeitangaben und {{Glossary("codec", "Codecs")}}.

Hier ist eine typische SDP-Nachricht:

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

SDP wird zusammen mit Protokollen wie {{Glossary("RTP", "RTP")}} und {{Glossary("RTSP", "RTSP")}} verwendet. Während der WebRTC-[Sitzungsaushandlung](/de/docs/Web/API/WebRTC_API/Session_lifetime) sendet ein Peer ein _Angebot_, das die gewünschte Verbindung beschreibt. Der andere antwortet mit einer _Antwort_, die beschreibt, was er akzeptiert. Beides sind Sitzungsbeschreibungen im SDP-Format. Sie werden über einen Signalisierungskanal ausgetauscht und mit [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) angewendet.

## Siehe auch

- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
- {{RFC(8866, "Session Description Protocol")}}
- [WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://en.wikipedia.org/wiki/Session_Description_Protocol) auf Wikipedia
