---
title: ICE
slug: Glossary/ICE
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**ICE** (_Interactive Connectivity Establishment_) ist ein Framework, das von {{Glossary("WebRTC", "WebRTC")}} (neben anderen Technologien) verwendet wird, um zwei Peers miteinander zu verbinden, unabhängig von der Netzwerk-Topologie (üblicherweise für Audio- und Video-Chats). Dieses Protokoll ermöglicht es zwei Peers, eine Verbindung zueinander aufzubauen, selbst wenn sie beide einen Network Address Translator ({{Glossary("NAT", "NAT")}}) nutzen, um eine globale IP-Adresse mit anderen Geräten in ihren jeweiligen lokalen Netzwerken zu teilen.

Der Algorithmus des Frameworks sucht nach dem Weg mit der geringsten Latenzzeit, um die beiden Peers zu verbinden und versucht dabei folgende Optionen in dieser Reihenfolge:

1. Direkte UDP-Verbindung (In diesem Fall — und nur in diesem Fall — wird ein {{Glossary("STUN", "STUN")}}-Server verwendet, um die netzwerkseitige Adresse eines Peers zu ermitteln)
2. Direkte TCP-Verbindung über den HTTP-Port
3. Direkte TCP-Verbindung über den HTTPS-Port
4. Indirekte Verbindung über einen Relay/{{Glossary("TURN", "TURN")}}-Server (falls eine direkte Verbindung scheitert, z. B. wenn ein Peer hinter einer Firewall ist, die NAT-Traversierung blockiert)

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API), das wichtigste webbezogene Protokoll, das ICE verwendet
- [WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- {{rfc("8445")}}, die IETF-Spezifikation für ICE
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), die Schnittstelle, die einen ICE-Kandidaten darstellt
