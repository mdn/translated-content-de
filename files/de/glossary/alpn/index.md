---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Application-Layer Protocol Negotiation** (**ALPN**) ist eine {{Glossary("TLS", "TLS")}}-Erweiterung (definiert in [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301)) zur Identifizierung, welches Anwendungsprotokoll die verschlüsselte Verbindung aushandelt, ohne zusätzliche Roundtrips zu erfordern.

| Protokoll                                       | Identifikationssequenz                                 |
| ----------------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}                | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP_2", "HTTP/2")}}                | `0x68 0x32` ("h2")                                     |
| HTTP/2 über Klartext {{Glossary("TCP", "TCP")}} | `0x68 0x32 0x63` ("h2c")                               |
| {{Glossary("HTTP_3", "HTTP/3")}}                | `0x68 0x33` ("h3")                                     |

## Siehe auch

- [Performance resource timing `nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) Eigenschaft
- [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver)
- [Von IANA registrierte ALPN-Identifikatoren](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
