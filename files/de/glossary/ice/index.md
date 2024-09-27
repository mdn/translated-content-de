---
title: ICE
slug: Glossary/ICE
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**ICE** (_Interactive Connectivity Establishment_) ist ein Framework, das von [WebRTC](/de/docs/Glossary/WebRTC) (unter anderen Technologien) verwendet wird, um zwei Peers zu verbinden, unabhängig von der Netzwerk-Topologie (gewöhnlich für Audio- und Video-Chat). Dieses Protokoll ermöglicht es zwei Peers, eine Verbindung zueinander herzustellen, auch wenn beide einen Network Address Translator ([NAT](/de/docs/Glossary/NAT)) verwenden, um eine globale IP-Adresse mit anderen Geräten in ihren jeweiligen lokalen Netzwerken zu teilen.

Der Algorithmus des Frameworks sucht nach dem Weg mit der niedrigsten Latenz, um die zwei Peers zu verbinden und probiert dabei diese Optionen in der Reihenfolge:

1. Direkte UDP-Verbindung (In diesem Fall – und nur in diesem Fall – wird ein [STUN](/de/docs/Glossary/STUN)-Server verwendet, um die netzwerkseitige Adresse eines Peers zu finden)
2. Direkte TCP-Verbindung über den HTTP-Port
3. Direkte TCP-Verbindung über den HTTPS-Port
4. Indirekte Verbindung über einen Relay/[TURN](/de/docs/Glossary/TURN)-Server (falls eine direkte Verbindung fehlschlägt, z. B. wenn ein Peer hinter einer Firewall ist, die NAT-Traversal blockiert)

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API), das Hauptprotokoll im Web, das ICE verwendet
- [WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- {{rfc("8445")}}, die IETF-Spezifikation für ICE
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), die Schnittstelle, die einen ICE-Kandidaten darstellt
