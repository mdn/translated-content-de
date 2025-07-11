---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**SDP** (Session Description {{Glossary("Protocol", "Protokoll")}}) ist der Standard zur Beschreibung einer {{Glossary("P2P", "Peer-to-Peer")}}-Verbindung. SDP enthält den {{Glossary("codec", "Codec")}}, die Quelladresse und Timing-Informationen von Audio und Video.

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

SDP wird niemals allein verwendet, sondern durch Protokolle wie {{Glossary("RTP", "RTP")}} und {{Glossary("RTSP", "RTSP")}}. SDP ist ebenfalls ein Bestandteil von {{Glossary("WebRTC", "WebRTC")}}, das SDP als eine Möglichkeit zur Beschreibung einer Sitzung verwendet.

## Siehe auch

- [WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://en.wikipedia.org/wiki/Session_Description_Protocol) auf Wikipedia
