---
title: Authentication
slug: Glossary/Authentication
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{GlossarySidebar}}

**Authentication** ist im Allgemeinen der Prozess, bei dem bewiesen wird, dass eine Tatsache echt ist. Genauer gesagt, ist sie in der Web-Sicherheit der Prozess der Überprüfung der angegebenen Identität einer Entität, zum Beispiel eines Benutzers. Dies ermöglicht es dann, zu entscheiden, ob dem Benutzer der angeforderte Zugriff gewährt wird, wie zum Beispiel das Anmelden in einem bestimmten Konto.

Die Authentifizierung erfolgt typischerweise dadurch, dass ein Benutzer einen Benutzeridentifikator zusammen mit einem {{Glossary("credential", "credential")}}, wie ein Passwort, einen einmaligen SMS-Code oder eine mit einem privaten Schlüssel signierte Assertion, präsentiert. Das System überprüft dann die Verbindung zwischen dem Benutzeridentifikator und dem Berechtigungsnachweis, um zu entscheiden, ob der Benutzer authentifiziert werden soll oder nicht.

Arten von Authentifizierungsinformationen, auch als _Authentifizierungsfaktoren_ bezeichnet, werden üblicherweise in drei Kategorien unterteilt:

- Etwas, das der Benutzer weiß, wie ein Passwort.
- Etwas, das der Benutzer hat, wie ein Telefon.
- Etwas, das der Benutzer ist, wie ein Fingerabdruck.

Multi-Factor-Authentication (MFA)-Systeme erfordern, dass der Benutzer mehr als einen Faktor bereitstellt: zum Beispiel ein Passwort in Kombination mit einem einmaligen Code, der an das Telefon des Benutzers gesendet wird.

## Siehe auch

- {{rfc("4949", "Internet Security Glossary")}}
