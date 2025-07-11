---
title: DTLS (Datagram Transport Layer Security)
slug: Glossary/DTLS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Datagram Transport Layer Security** (**DTLS**) ist ein Protokoll, das verwendet wird, um datengrammbasierte Kommunikation zu sichern. Es basiert auf dem streamorientierten Transport Layer Security ({{Glossary("TLS", "TLS")}}) und bietet ein vergleichbares Sicherheitsniveau. Als Datagrammprotokoll garantiert DTLS weder die Reihenfolge der Nachrichtenübermittlung noch, dass Nachrichten überhaupt zugestellt werden. Dennoch profitiert DTLS auch von den Vorteilen der Datagrammprotokolle, insbesondere dem geringeren Overhead und der reduzierten Latenz.

Diese Eigenschaften sind besonders nützlich in einem der häufigsten Anwendungsbereiche von DTLS: {{Glossary("WebRTC", "WebRTC")}}. Alle mit WebRTC zusammenhängenden Protokolle müssen ihre Kommunikation mithilfe von DTLS verschlüsseln; dazu gehören {{Glossary("SCTP", "SCTP")}}, {{Glossary("RTP", "SRTP")}} und {{Glossary("STUN", "STUN")}}.

## Siehe auch

- [Datagram Transport Layer Security](https://de.wikipedia.org/wiki/Datagram_Transport_Layer_Security) auf Wikipedia
- Spezifikationen:
  - {{RFC(9147, "The Datagram Transport Layer Security (DTLS) Protocol Version 1.3")}}
  - {{RFC(6347, "Datagram Transport Layer Security Version 1.2")}}

- Verwandte Spezifikationen
  - {{RFC(5763, "Framework for Establishing a Secure Real-time Transport Protocol (SRTP) Security Context Using DTLS")}}
  - {{RFC(5764, "DTLS Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)")}}
  - {{RFC(6083, "DTLS for Stream Control Transmission Protocol (SCTP)")}}
  - {{RFC(8261, "Datagram Transport Layer Security (DTLS) Encapsulation of SCTP Packets")}}
  - {{RFC(7350, "Datagram Transport Layer Security (DTLS) as Transport for Session Traversal Utilities for NAT (STUN)")}}
  - {{RFC(7925, "TLS / DTLS Profiles for the Internet of Things")}}
