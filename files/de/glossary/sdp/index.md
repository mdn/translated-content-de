---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**SDP** (Session Description {{Glossary("Protocol", "Protokoll")}}) ist der Standard zur Beschreibung einer {{Glossary("P2P", "Peer-to-Peer")}}-Verbindung. SDP enthält den {{Glossary("codec", "Codec")}}, die Quelladresse und Zeitinformationen von Audio und Video.

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

SDP wird nie allein verwendet, sondern von Protokollen wie {{Glossary("RTP", "RTP")}} und {{Glossary("RTSP", "RTSP")}}. SDP ist auch ein Bestandteil von {{Glossary("WebRTC", "WebRTC")}}, das SDP als Mittel zur Beschreibung einer Sitzung verwendet.

## Siehe auch

- [WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://en.wikipedia.org/wiki/Session_Description_Protocol) auf Wikipedia
