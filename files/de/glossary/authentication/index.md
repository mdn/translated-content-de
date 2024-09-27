---
title: Authentication
slug: Glossary/Authentication
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{GlossarySidebar}}

**Authentication** ist im Allgemeinen der Prozess, um zu beweisen, dass eine Tatsache echt ist. Spezifischer, in der Web-Sicherheit, ist es der Prozess der Überprüfung der behaupteten Identität einer Entität, wie eines Benutzers. Dies ermöglicht dann zu entscheiden, ob dem Benutzer der angeforderte Zugang gewährt wird, wie z.B. das Einloggen in ein bestimmtes Konto.

Die Authentifizierung wird typischerweise durchgeführt, indem ein Benutzer einen Benutzeridentifikator zusammen mit einem [Credential](/de/docs/Glossary/credential) vorlegt, wie ein Passwort, ein einmaliger SMS-Code oder eine mit einem privaten Schlüssel signierte Bestätigung. Das System überprüft dann die Verbindung zwischen dem Benutzeridentifikator und dem Credential, um entscheiden zu können, ob der Benutzer authentifiziert wird oder nicht.

Arten von Authentifizierungsinformationen, auch _Authentifizierungsfaktoren_ genannt, werden üblicherweise in drei Kategorien unterteilt:

- Etwas, das der Benutzer weiß, wie zum Beispiel ein Passwort.
- Etwas, das der Benutzer hat, wie zum Beispiel ein Telefon.
- Etwas, das der Benutzer ist, wie zum Beispiel ein Fingerabdruck.

Multi-Faktor-Authentifizierung (MFA)-Systeme erfordern, dass der Benutzer mehr als einen Faktor bereitstellt: zum Beispiel ein Passwort kombiniert mit einem einmaligen Code, der an das Telefon des Benutzers gesendet wird.

## Siehe auch

- {{rfc("4949", "Internet Security Glossary")}}
