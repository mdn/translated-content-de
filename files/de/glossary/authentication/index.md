---
title: Authentifizierung
slug: Glossary/Authentication
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{GlossarySidebar}}

Die **Authentifizierung** ist im Allgemeinen der Prozess, durch den bewiesen wird, dass eine bestimmte Tatsache echt ist. Genauer gesagt, handelt es sich im Bereich der Web-Sicherheit um den Prozess der Überprüfung der behaupteten Identität eines Entitäts, wie z.B. eines Benutzers. Dadurch kann entschieden werden, ob dem Benutzer der Zugriff gewährt wird, den er anfordert, wie zum Beispiel das Anmelden bei einem bestimmten Konto.

Die Authentifizierung erfolgt typischerweise, indem ein Benutzer eine Benutzerkennung zusammen mit einem {{glossary("credential")}} präsentiert, wie z.B. ein Passwort, ein Einmal-SMS-Code oder eine mit einem privaten Schlüssel unterzeichnete Behauptung. Das System überprüft dann die Verbindung zwischen der Benutzerkennung und dem Berechtigungsnachweis, um zu entscheiden, ob der Benutzer authentifiziert werden soll oder nicht.

Arten von Authentifizierungsinformationen, auch _Authentifizierungsfaktoren_ genannt, werden in der Regel in drei Kategorien eingeteilt:

- Etwas, das der Benutzer weiß, wie z.B. ein Passwort.
- Etwas, das der Benutzer besitzt, wie z.B. ein Telefon.
- Etwas, das der Benutzer ist, wie z.B. ein Fingerabdruck.

Multi-Faktor-Authentifizierungssysteme (MFA) erfordern, dass der Benutzer mehr als einen Faktor bereitstellt: beispielsweise kombiniert ein Passwort mit einem Einmalcode, der an das Telefon des Benutzers gesendet wird.

## Siehe auch

- {{rfc("4949", "Internet Security Glossary")}}
