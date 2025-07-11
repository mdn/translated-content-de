---
title: TOFU
slug: Glossary/TOFU
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Trust On First Use** **(TOFU)** ist ein Sicherheitsmodell, bei dem ein Client eine Vertrauensbeziehung zu einem unbekannten Server aufbauen muss. Um dies zu erreichen, sucht der Client nach Identifikatoren (zum Beispiel öffentlichen Schlüsseln), die lokal gespeichert sind. Wenn ein Identifikator gefunden wird, kann der Client die Verbindung herstellen. Wird kein Identifikator gefunden, kann der Client den Benutzer fragen, ob dem Identifikator vertraut werden sollte.

TOFU wird im SSH-Protokoll verwendet, im {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}}), wobei ein Browser die Umleitungsregel befolgen wird.

## Siehe auch

- Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
