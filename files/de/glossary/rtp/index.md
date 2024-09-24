---
title: RTP (Echtzeit-Transportprotokoll) und SRTP (Sicheres RTP)
slug: Glossary/RTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Das **Echtzeit-Transportprotokoll** (**RTP**) ist ein Netzwerkprotokoll, das beschreibt, wie verschiedene Medien (Audio, Video) in Echtzeit von einem Endpunkt zum anderen übertragen werden können. RTP ist geeignet für Video-Streaming-Anwendungen, Telefonie über {{glossary("IP")}} wie Skype und Konferenztechnologien.

Die sichere Version von RTP, **SRTP**, wird von [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet und nutzt Verschlüsselung sowie Authentifizierung, um das Risiko von Denial-of-Service-Angriffen und Sicherheitsverletzungen zu minimieren.

RTP wird selten allein verwendet; stattdessen wird es in Verbindung mit anderen Protokollen wie {{glossary("RTSP")}} und {{glossary("SDP")}} genutzt.

## Siehe auch

- [Einführung in das Echtzeit-Transportprotokoll](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) auf Wikipedia
- {{RFC(3550)}} (eines der Dokumente, die präzise spezifizieren, wie das Protokoll funktioniert)
