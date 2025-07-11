---
title: RTP (Real-time Transport Protocol) und SRTP (Secure RTP)
slug: Glossary/RTP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das **Real-time Transport Protocol** (**RTP**) ist ein Netzwerkprotokoll, das beschreibt, wie verschiedene Medien (Audio, Video) in Echtzeit von einem Endpunkt zu einem anderen übertragen werden. RTP eignet sich für Video-Streaming-Anwendungen, Telefonie über {{Glossary("IP", "IP")}} wie Skype und Konferenztechnologien.

Die sichere Version von RTP, **SRTP**, wird von [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet und nutzt Verschlüsselung und Authentifizierung, um das Risiko von Denial-of-Service-Angriffen und Sicherheitsverletzungen zu minimieren.

RTP wird selten allein verwendet; stattdessen wird es in Verbindung mit anderen Protokollen wie {{Glossary("RTSP", "RTSP")}} und {{Glossary("SDP", "SDP")}} eingesetzt.

## Siehe auch

- [Einführung in das Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) auf Wikipedia
- {{RFC(3550)}} (eines der Dokumente, das genau beschreibt, wie das Protokoll funktioniert)
