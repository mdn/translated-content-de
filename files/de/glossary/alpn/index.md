---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Application-Layer Protocol Negotiation** (**ALPN**) ist eine {{Glossary("TLS")}}-Erweiterung (definiert in [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301)) zur Identifizierung, welches Protokoll auf Anwendungsebene die verschlüsselte Verbindung aushandelt, ohne zusätzliche Übertragungsrunden dafür zu benötigen.

| Protokoll                                 | Identifikationssequenz                                 |
| ----------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}          | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}          | `0x68 0x32` ("h2")                                     |
| HTTP/2 über Klartext-{{Glossary("TCP")}}  | `0x68 0x32 0x63` ("h2c")                               |
| {{Glossary("HTTP 3", "HTTP/3")}}          | `0x68 0x33` ("h3")                                     |

## Siehe auch

- [Property `nextHopProtocol` der Performance-Resource-Timing-API](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol)
- [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver)
- [IANA-registrierte ALPN-Identifiers](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
