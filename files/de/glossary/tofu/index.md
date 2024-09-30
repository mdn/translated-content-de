---
title: TOFU
slug: Glossary/TOFU
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Trust On First Use** **(TOFU**) ist ein Sicherheitsmodell, bei dem ein Client eine Vertrauensbeziehung zu einem unbekannten Server herstellen muss. Dazu suchen Clients nach Identifikatoren (z.B. öffentliche Schlüssel), die lokal gespeichert sind. Wird ein Identifikator gefunden, kann der Client die Verbindung herstellen. Wird kein Identifikator gefunden, kann der Client den Benutzer auffordern zu entscheiden, ob der Client dem Identifikator vertrauen soll.

TOFU wird im SSH-Protokoll verwendet, in {{HTTPHeader("Strict-Transport-Security")}} ([HSTS](/de/docs/Glossary/HSTS)), wo ein Browser der Umleitungsregel folgt.

## Siehe auch

- Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
