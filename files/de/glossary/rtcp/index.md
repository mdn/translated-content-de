---
title: RTCP (RTP Control Protocol)
slug: Glossary/RTCP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das **RTP Control Protocol** (**RTCP**) ist ein Partnerprotokoll des {{Glossary("RTP", "RTP")}} Protokolls. RTCP wird verwendet, um Steuer- und statistische Informationen über eine RTP-Medienstreaming-Sitzung bereitzustellen.

Dadurch können Steuer- und Statistikpakete logisch und funktional vom Medienstreaming getrennt werden, während die zugrunde liegende Paketübertragungsschicht dazu verwendet wird, sowohl die RTCP-Signale als auch die RTP- und Medieninhalte zu übertragen.

RTCP überträgt periodisch Steuerpakete an alle Teilnehmer einer RTP-Sitzung und verwendet dabei denselben Mechanismus, der auch zur Übertragung der Datenpakete verwendet wird. Dieses zugrunde liegende Protokoll behandelt das Multiplexing der Daten- und Steuerpakete und kann separate Netzwerk-Ports für jeden Pakettyp verwenden.

## Siehe auch

- [Einführung in das Echtzeit-Transportprotokoll](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP Control Protocol](https://en.wikipedia.org/wiki/RTP_Control_Protocol)
- {{RFC(3550, "RFC 3550 Abschnitt 6", 6)}}
