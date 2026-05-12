---
title: RTP (Real-time Transport Protocol) und SRTP (Secure RTP)
slug: Glossary/RTP
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Das **Real-time Transport Protocol** (**RTP**) ist ein Netzwerkprotokoll, das beschreibt, wie verschiedene Medien (Audio, Video) in Echtzeit von einem Endpunkt zu einem anderen übertragen werden. RTP ist geeignet für Video-Streaming-Anwendungen, IP-Telefonie wie Skype und Konferenztechnologien.

Die sichere Version von RTP, **SRTP**, wird von [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet und nutzt Verschlüsselung und Authentifizierung, um das Risiko von Denial-of-Service-Angriffen und Sicherheitsverletzungen zu minimieren.

RTP wird selten allein verwendet; stattdessen wird es in Verbindung mit anderen Protokollen wie {{Glossary("RTSP", "RTSP")}} und {{Glossary("SDP", "SDP")}} eingesetzt.

## Siehe auch

- [Einführung in das Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) auf Wikipedia
- {{RFC(3550)}} (eines der Dokumente, das genau festlegt, wie das Protokoll funktioniert)
