---
title: RTCP (RTP Control Protocol)
slug: Glossary/RTCP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Das **RTP Control Protocol** (**RTCP**) ist ein Partnerprotokoll zu [RTP](/de/docs/Glossary/RTP). RTCP wird verwendet, um Kontroll- und statistische Informationen über eine RTP-Media-Streaming-Sitzung bereitzustellen.

Dies ermöglicht es, dass Steuer- und Statistikpakete logisch und funktionell vom Media-Streaming getrennt werden, während die zugrunde liegende Paketübertragungsschicht verwendet wird, um RTCP-Signale sowie RTP und Mediainhalte zu übertragen.

RTCP überträgt regelmäßig Steuerpakete an alle Teilnehmer einer RTP-Sitzung unter Verwendung desselben Mechanismus, der auch für die Übertragung der Datenpakete verwendet wird. Dieses zugrunde liegende Protokoll verwaltet das Multiplexen der Daten- und Steuerpakete und kann separate Netzwerkports für jeden Pakettyp verwenden.

## Siehe auch

- [Einführung in das Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP Control Protocol](https://en.wikipedia.org/wiki/RTP_Control_Protocol)
- {{RFC(3550, "RFC 3550 Section 6", 6)}}
