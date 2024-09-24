---
title: RTCP (RTP Control Protocol)
slug: Glossary/RTCP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Das **RTP Control Protocol** (**RTCP**) ist ein Partnerprotokoll des {{Glossary("RTP")}}-Protokolls. RTCP wird verwendet, um Steuerungs- und statistische Informationen über eine RTP-Medien-Streaming-Sitzung bereitzustellen.

Dies ermöglicht es, Steuerungs- und Statistikpakete logisch und funktional von der Medienübertragung zu trennen, während die zugrundeliegende Paketbereitstellungsschicht verwendet wird, um die RTCP-Signale sowie die RTP- und Medieninhalte zu übertragen.

RTCP überträgt regelmäßig Steuerungspakete an alle Teilnehmer einer RTP-Sitzung, wobei derselbe Mechanismus verwendet wird, der auch zur Übertragung der Datenpakete verwendet wird. Dieses zugrundeliegende Protokoll kümmert sich um die Multiplexierung der Daten- und Steuerpakete und kann für jede Art von Paket separate Netzwerkports verwenden.

## Siehe auch

- [Einführung in das Echtzeit-Transportprotokoll](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP Control Protocol](https://en.wikipedia.org/wiki/RTP_Control_Protocol)
- {{RFC(3550, "RFC 3550 Section 6", 6)}}
