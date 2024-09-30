---
title: RTCP (RTP Control Protocol)
slug: Glossary/RTCP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Das **RTP Control Protocol** (**RTCP**) ist ein Partnerprotokoll des [RTP](/de/docs/Glossary/RTP). RTCP wird verwendet, um Kontroll- und statistische Informationen über eine RTP-Medienstreaming-Sitzung bereitzustellen.

Dies ermöglicht es, Kontroll- und Statistikpakete logisch und funktional vom Medienstreaming zu trennen, während die zugrunde liegende Paketübertragungsschicht genutzt wird, um die RTCP-Signale sowie die RTP- und Medieninhalte zu übertragen.

RTCP überträgt regelmäßig Kontrollpakete an alle Teilnehmer einer RTP-Sitzung und nutzt dabei denselben Mechanismus, der auch für die Übertragung der Datenpakete verwendet wird. Dieses zugrunde liegende Protokoll kümmert sich um die Multiplexierung der Daten- und Kontrollpakete und kann für jeden Pakettyp separate Netzwerkports verwenden.

## Siehe auch

- [Einführung in das Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP Control Protocol](https://en.wikipedia.org/wiki/RTP_Control_Protocol)
- {{RFC(3550, "RFC 3550 Section 6", 6)}}
