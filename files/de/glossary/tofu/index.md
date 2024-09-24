---
title: TOFU
slug: Glossary/TOFU
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Trust On First Use** **(TOFU)** ist ein Sicherheitsmodell, bei dem ein Client eine Vertrauensbeziehung mit einem unbekannten Server aufbauen muss. Dazu wird der Client nach Identifikatoren (zum Beispiel öffentliche Schlüssel) suchen, die lokal gespeichert sind. Wenn ein Identifikator gefunden wird, kann der Client die Verbindung herstellen. Wird kein Identifikator gefunden, kann der Client den Benutzer auffordern zu entscheiden, ob der Client dem Identifikator vertrauen soll.

TOFU wird im SSH-Protokoll verwendet, im {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}), wo ein Browser der Umleitungsregel folgen wird.

## Siehe auch

- Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
