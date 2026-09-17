---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

**Application-Layer Protocol Negotiation** (**ALPN**) ist eine {{Glossary("TLS", "TLS")}}-Erweiterung (definiert in [RFC 7301](https://www.rfc-editor.org/info/rfc7301/)), mit der bestimmt wird, welches Anwendungsschichtprotokoll die verschlüsselte Verbindung aushandelt, ohne dass dafür zusätzliche Roundtrips erforderlich sind.

| Protokoll                                       | Identifikationssequenz                                 |
| ----------------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}                | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` („http/1.1“) |
| {{Glossary("HTTP_2", "HTTP/2")}}                | `0x68 0x32` („h2“)                                     |
| HTTP/2 über Klartext-{{Glossary("TCP", "TCP")}} | `0x68 0x32 0x63` („h2c“)                               |
| {{Glossary("HTTP_3", "HTTP/3")}}                | `0x68 0x33` („h3“)                                     |

## Siehe auch

- Eigenschaft [Performance resource timing `nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol)
- [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver)
- [Bei IANA registrierte ALPN-Identifikatoren](https://www.iana.org/assignments/tls-extensiontype-values#alpn-protocol-ids)
