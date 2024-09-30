---
title: SMTP
slug: Glossary/SMTP
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**SMTP** (Simple Mail Transfer Protocol) ist ein [Protokoll](/de/docs/Glossary/protocol), das zum Versenden neuer E-Mails verwendet wird. Ähnlich wie [POP](/de/docs/Glossary/POP) und [NNTP](/de/docs/Glossary/NNTP) ist es ein von einer [Zustandsmaschine](/de/docs/Glossary/state_machine) gesteuertes Protokoll.

Das Protokoll ist relativ unkompliziert. Die Hauptschwierigkeiten umfassen die Unterstützung verschiedener Authentifizierungsmechanismen ([GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](https://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN, usw.), das Handhaben von Fehlermeldungen und das Rückfallen, wenn Authentifizierungsmechanismen fehlschlagen (z.B. der Server behauptet, einen Mechanismus zu unterstützen, tut es aber nicht).

## Siehe auch

- [SMTP](https://en.wikipedia.org/wiki/SMTP) (Wikipedia)
- Verwandte Glossarbegriffe:
  - [NNTP](/de/docs/Glossary/NNTP)
  - [POP](/de/docs/Glossary/POP)
  - [Protokoll](/de/docs/Glossary/protocol)
  - [Zustandsmaschine](/de/docs/Glossary/state_machine)
