---
title: RTP (Real-time Transport Protocol) und SRTP (Secure RTP)
slug: Glossary/RTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Das **Real-time Transport Protocol** (**RTP**) ist ein Netzwerkprotokoll, das beschreibt, wie verschiedene Medien (Audio, Video) in Echtzeit von einem Endpunkt zu einem anderen übertragen werden. RTP eignet sich für Video-Streaming-Anwendungen, Telefonie über [IP](/de/docs/Glossary/IP) wie Skype und Konferenztechnologien.

Die sichere Version von RTP, **SRTP**, wird von [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet und nutzt Verschlüsselung und Authentifizierung, um das Risiko von Denial-of-Service-Angriffen und Sicherheitsverletzungen zu minimieren.

RTP wird selten allein verwendet; stattdessen wird es in Verbindung mit anderen Protokollen wie [RTSP](/de/docs/Glossary/RTSP) und [SDP](/de/docs/Glossary/SDP) eingesetzt.

## Siehe auch

- [Einführung in das Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) auf Wikipedia
- {{RFC(3550)}} (eines der Dokumente, das genau beschreibt, wie das Protokoll funktioniert)
