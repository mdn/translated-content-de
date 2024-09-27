---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**SDP** (Session Description [Protocol](/de/docs/Glossary/Protocol)) ist der Standard zur Beschreibung einer [Peer-to-Peer](/de/docs/Glossary/P2P) Verbindung. SDP enthält den [Codec](/de/docs/Glossary/codec), die Quelladresse und Timing-Informationen von Audio und Video.

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

SDP wird nie allein verwendet, sondern von Protokollen wie [RTP](/de/docs/Glossary/RTP) und [RTSP](/de/docs/Glossary/RTSP). SDP ist auch ein Bestandteil von [WebRTC](/de/docs/Glossary/WebRTC), das SDP als eine Möglichkeit zur Beschreibung einer Sitzung nutzt.

## Siehe auch

- [WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://en.wikipedia.org/wiki/Session_Description_Protocol) auf Wikipedia
