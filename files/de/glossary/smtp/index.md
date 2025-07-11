---
title: SMTP
slug: Glossary/SMTP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**SMTP** (Simple Mail Transfer Protocol) ist ein {{Glossary("protocol", "Protokoll")}}, das verwendet wird, um eine neue E-Mail zu senden. Wie {{Glossary("POP", "POP")}} und {{Glossary("NNTP", "NNTP")}} ist es ein durch eine {{Glossary("state_machine", "Zustandsmaschine")}} gesteuertes Protokoll.

Das Protokoll ist relativ unkompliziert. Die Hauptkomplikationen beinhalten die Unterstützung verschiedener Authentifizierungsmechanismen ([GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](https://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN usw.), die Behandlung von Fehlermeldungen und das Zurückfallen, wenn Authentifizierungsmechanismen fehlschlagen (z.B. der Server behauptet, einen Mechanismus zu unterstützen, tut es aber nicht).

## Siehe auch

- [SMTP](https://en.wikipedia.org/wiki/SMTP) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("NNTP", "NNTP")}}
  - {{Glossary("POP", "POP")}}
  - {{Glossary("protocol", "Protokoll")}}
  - {{Glossary("state_machine", "Zustandsmaschine")}}
