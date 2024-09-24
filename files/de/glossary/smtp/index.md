---
title: SMTP
slug: Glossary/SMTP
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**SMTP** (Simple Mail Transfer Protocol) ist ein {{glossary("protocol")}}, das zum Versenden einer neuen E-Mail verwendet wird. Ähnlich wie {{glossary("POP")}} und {{glossary("NNTP")}} ist es ein auf einer {{Glossary("state machine")}} basierendes Protokoll.

Das Protokoll ist relativ unkompliziert. Hauptsächliche Herausforderungen umfassen die Unterstützung verschiedener Authentifizierungsmechanismen ([GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](https://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN, usw.), die Behandlung von Fehlermeldungen und das Ausweichen auf andere Mechanismen, wenn Authentifizierungsverfahren fehlschlagen (z.B. der Server behauptet, einen Mechanismus zu unterstützen, tut es aber nicht).

## Siehe auch

- [SMTP](https://en.wikipedia.org/wiki/SMTP) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{glossary("NNTP")}}
  - {{glossary("POP")}}
  - {{glossary("protocol")}}
  - {{Glossary("state machine")}}
