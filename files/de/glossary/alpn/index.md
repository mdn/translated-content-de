---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Application-Layer Protocol Negotiation** (**ALPN**) ist eine [TLS](/de/docs/Glossary/TLS)-Erweiterung (definiert in [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301)) zur Identifizierung des Anwendungsschichtprotokolls, das die verschlüsselte Verbindung aushandelt, ohne dass zusätzliche Roundtrips erforderlich sind.

| Protokoll                        | Identifikationssequenz                                    |
| -------------------------------- | --------------------------------------------------------- |
| [HTTP/1.1](/de/docs/Glossary/HTTP)          | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1")   |
| [HTTP/2](/de/docs/Glossary/HTTP_2)          | `0x68 0x32` ("h2")                                       |
| HTTP/2 über Klartext [TCP](/de/docs/Glossary/TCP) | `0x68 0x32 0x63` ("h2c")                                 |
| [HTTP/3](/de/docs/Glossary/HTTP_3)          | `0x68 0x33` ("h3")                                       |

## Siehe auch

- [`nextHopProtocol` Leistungsressourcentiming](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) Eigenschaft
- [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver)
- [Von der IANA registrierte ALPN-Identifikatoren](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
