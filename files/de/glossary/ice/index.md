---
title: ICE
slug: Glossary/ICE
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**ICE** (_Interactive Connectivity Establishment_) ist ein Framework, das von {{glossary("WebRTC")}} (neben anderen Technologien) für die Verbindung von zwei Peers verwendet wird, unabhängig von der Netzwerktopologie (in der Regel für Audio- und Videochats). Dieses Protokoll ermöglicht es zwei Peers, eine Verbindung zueinander herzustellen, selbst wenn beide ein Network Address Translator ({{glossary("NAT")}}) verwenden, um eine globale IP-Adresse mit anderen Geräten in ihren jeweiligen lokalen Netzwerken zu teilen.

Der Algorithmus des Frameworks sucht nach dem Pfad mit der niedrigsten Latenz zur Verbindung der beiden Peers und versucht dabei folgende Optionen in der Reihenfolge:

1. Direkte UDP-Verbindung (in diesem Fall – und nur in diesem Fall – wird ein {{glossary("STUN")}}-Server verwendet, um die netzwerkseitige Adresse eines Peers zu ermitteln)
2. Direkte TCP-Verbindung über den HTTP-Port
3. Direkte TCP-Verbindung über den HTTPS-Port
4. Indirekte Verbindung über einen Relay/{{glossary("TURN")}}-Server (falls eine direkte Verbindung fehlschlägt, z. B. wenn ein Peer hinter einer Firewall steht, die NAT-Traversal blockiert)

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API), das wichtige webbezogene Protokoll, das ICE verwendet
- [WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- {{rfc("8445")}}, die IETF-Spezifikation für ICE
- {{domxref("RTCIceCandidate")}}, die Schnittstelle, die einen ICE-Kandidaten darstellt
