---
title: Authentifizierung
slug: Glossary/Authentication
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Authentifizierung** ist im Allgemeinen der Prozess des Nachweises der Echtheit eines Sachverhalts. Genauer gesagt ist es im Bereich der Web-Sicherheit der Prozess der Überprüfung der behaupteten Identität einer Entität, wie beispielsweise eines Benutzers. Dies ermöglicht es dann, zu entscheiden, ob dem Benutzer der angeforderte Zugriff gewährt werden soll, wie etwa das Anmelden in einem bestimmten Konto.

Die Authentifizierung wird in der Regel durchgeführt, indem ein Benutzer eine Benutzerkennung zusammen mit einem {{Glossary("credential", "Anmeldedaten")}} präsentiert, wie z. B. ein Passwort, ein einmaliger SMS-Code oder eine mit einem privaten Schlüssel signierte Assertion. Das System prüft dann die Zuordnung zwischen der Benutzerkennung und dem Anmeldedaten, um zu entscheiden, ob der Benutzer authentifiziert werden soll oder nicht.

Typen von Authentifizierungsinformationen, auch _Authentifizierungsfaktoren_ genannt, werden üblicherweise in drei Kategorien unterteilt:

- Etwas, das der Benutzer kennt, wie ein Passwort.
- Etwas, das der Benutzer hat, wie ein Telefon.
- Etwas, das der Benutzer ist, wie ein Fingerabdruck.

Multi-Faktor-Authentifizierungs-Systeme (MFA) erfordern, dass der Benutzer mehr als einen Faktor bereitstellt: zum Beispiel ein Passwort in Kombination mit einem einmaligen Code, der an das Telefon des Benutzers gesendet wird.

## Siehe auch

- {{rfc("4949", "Internet Security Glossary")}}
