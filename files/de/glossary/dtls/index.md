---
title: DTLS (Datagram Transport Layer Security)
slug: Glossary/DTLS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

**Datagram Transport Layer Security** (**DTLS**) ist ein Protokoll, das zur Sicherung von datagrammbasierten Kommunikationsvorgängen verwendet wird. Es basiert auf dem streamfokussierten Transport Layer Security ({{Glossary("TLS", "TLS")}}) und bietet ein ähnliches Sicherheitsniveau. Als Datagramm-Protokoll garantiert DTLS nicht die Reihenfolge der Nachrichtenübermittlung oder sogar, dass Nachrichten überhaupt übermittelt werden. Allerdings profitiert DTLS auch von den Vorteilen von Datagramm-Protokollen, insbesondere dem geringeren Overhead und der reduzierten Latenz.

Diese Merkmale sind besonders nützlich in einem der häufigsten Anwendungsbereiche von DTLS: {{Glossary("WebRTC", "WebRTC")}}. Alle WebRTC-bezogenen Protokolle müssen ihre Kommunikation mit DTLS verschlüsseln; dazu gehören {{Glossary("SCTP", "SCTP")}}, {{Glossary("RTP", "SRTP")}} und {{Glossary("STUN", "STUN")}}.

## Siehe auch

- [Datagram Transport Layer Security](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security) auf Wikipedia
- Spezifikationen:

  - {{RFC(9147, "The Datagram Transport Layer Security (DTLS) Protocol Version 1.3")}}
  - {{RFC(6347, "Datagram Transport Layer Security Version 1.2")}}

- Verwandte Spezifikation
  - {{RFC(5763, "Framework for Establishing a Secure Real-time Transport Protocol (SRTP) Security Context Using DTLS")}}
  - {{RFC(5764, "DTLS Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)")}}
  - {{RFC(6083, "DTLS for Stream Control Transmission Protocol (SCTP)")}}
  - {{RFC(8261, "Datagram Transport Layer Security (DTLS) Encapsulation of SCTP Packets")}}
  - {{RFC(7350, "Datagram Transport Layer Security (DTLS) as Transport for Session Traversal Utilities for NAT (STUN)")}}
  - {{RFC(7925, "TLS / DTLS Profiles for the Internet of Things")}}
