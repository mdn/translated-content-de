---
title: Authentifizierung
slug: Glossary/Authentication
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

**Authentifizierung** ist allgemein der Prozess, in dem überprüft wird, ob eine Tatsache echt ist. Spezieller, in der Web-Sicherheit, ist es der Prozess zur Überprüfung der behaupteten Identität einer Entität, wie beispielsweise eines Benutzers. Dadurch wird es möglich zu entscheiden, ob dem Benutzer der angeforderte Zugang gewährt wird, wie beispielsweise die Anmeldung bei einem bestimmten Konto.

Die Authentifizierung erfolgt typischerweise, indem ein Benutzer eine Benutzerkennung zusammen mit einem {{Glossary("credential", "Credential")}} vorlegt, wie ein Passwort, ein einmaliger Code oder eine mit einem privaten Schlüssel signierte Bestätigung. Das System prüft dann die Bindung zwischen der Benutzerkennung und dem Credential, um zu entscheiden, ob der Benutzer authentifiziert wird oder nicht.

Arten von Authentifizierungsinformationen, auch _Authentifizierungsfaktoren_ genannt, werden üblicherweise in drei Kategorien unterteilt:

- Etwas, das der Benutzer weiß, wie ein Passwort.
- Etwas, das der Benutzer hat, wie ein Telefon.
- Etwas, das der Benutzer ist, wie ein Fingerabdruck.

{{Glossary("Multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA)-Systeme erfordern, dass der Benutzer mehr als einen Faktor bereitstellt: zum Beispiel ein Passwort kombiniert mit einem einmaligen Code, der mit einer Authenticator-App auf dem Telefon des Benutzers generiert wird.

## Siehe auch

- {{rfc("4949", "Internet Security Glossary")}}
