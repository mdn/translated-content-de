---
title: SMTP
slug: Glossary/SMTP
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**SMTP** (Simple Mail Transfer Protocol) ist ein {{Glossary("protocol", "Protokoll")}}, das zum Versenden neuer E-Mails verwendet wird. Ähnlich wie {{Glossary("POP", "POP")}} und {{Glossary("NNTP", "NNTP")}} ist es ein von einer {{Glossary("state_machine", "Zustandsmaschine")}} gesteuertes Protokoll.

Das Protokoll ist relativ unkompliziert. Die Hauptschwierigkeiten umfassen die Unterstützung verschiedener Authentifizierungsmechanismen ([GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](https://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN, usw.), das Handhaben von Fehlermeldungen und das Rückfallen, wenn Authentifizierungsmechanismen fehlschlagen (z.B. der Server behauptet, einen Mechanismus zu unterstützen, tut es aber nicht).

## Siehe auch

- [SMTP](https://en.wikipedia.org/wiki/SMTP) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("NNTP", "NNTP")}}
  - {{Glossary("POP", "POP")}}
  - {{Glossary("protocol", "Protokoll")}}
  - {{Glossary("state_machine", "Zustandsmaschine")}}
