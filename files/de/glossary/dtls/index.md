---
title: DTLS (Datagram Transport Layer Security)
slug: Glossary/DTLS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Datagram Transport Layer Security** (**DTLS**) ist ein Protokoll, das verwendet wird, um datagrammbasierte Kommunikation abzusichern. Es basiert auf dem stream-fokussierten Transport Layer Security ([TLS](/de/docs/Glossary/TLS)) und bietet ein ähnliches Sicherheitsniveau. Als Datagrammprotokoll garantiert DTLS nicht die Reihenfolge der Nachrichtenübermittlung oder überhaupt, dass Nachrichten zugestellt werden. DTLS profitiert jedoch auch von den Vorteilen von Datagrammprotokollen, insbesondere dem geringeren Overhead und der reduzierten Latenz.

Diese Eigenschaften sind besonders nützlich für einen der häufigsten Anwendungsbereiche von DTLS: [WebRTC](/de/docs/Glossary/WebRTC). Alle mit WebRTC verbundenen Protokolle müssen ihre Kommunikation mit DTLS verschlüsseln; dazu gehören [SCTP](/de/docs/Glossary/SCTP), [SRTP](/de/docs/Glossary/RTP) und [STUN](/de/docs/Glossary/STUN).

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
