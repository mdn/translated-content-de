---
title: Unsichere Passwörter
slug: Web/Security/Insecure_passwords
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Login-Formulare über HTTP bereitzustellen, ist besonders gefährlich, da viele verschiedene Angriffe gegen sie eingesetzt werden können, um das Passwort eines Nutzers zu extrahieren. Netzwerkschnüffler könnten das Passwort eines Nutzers stehlen, indem sie das Netzwerk abhören oder die Seite während der Übertragung verändern.

Das {{Glossary("HTTPS", "HTTPS")}}-Protokoll wurde entwickelt, um Benutzerdaten vor Abhören (Vertraulichkeit) und vor Veränderung (Integrität) im Netzwerk zu schützen. Websites, die Benutzerdaten verarbeiten, sollten HTTPS verwenden, um ihre Nutzer vor Angreifern zu schützen. Wenn eine Website HTTP anstelle von HTTPS verwendet, ist es ein Leichtes, Benutzerinformationen (wie ihre Anmeldedaten) zu stehlen. Dies wurde eindrucksvoll durch [Firesheep](https://codebutler.github.io/firesheep/) demonstriert.

Um dieses Problem zu beheben, installieren und konfigurieren Sie ein {{Glossary("TLS", "TLS")}}-Zertifikat auf Ihrem Server. Es gibt verschiedene Anbieter, die kostenlose und kostenpflichtige Zertifikate anbieten. Wenn Sie eine Cloud-Plattform verwenden, hat diese möglicherweise eigene Möglichkeiten, HTTPS zu aktivieren.

## Hinweis zur Passwortwiederverwendung

Manchmal benötigen Websites Benutzername und Passwort, speichern jedoch keine sehr sensiblen Daten. Beispielsweise kann eine Nachrichten-Website speichern, welche Nachrichtenartikel ein Nutzer erneut lesen möchte, jedoch keine weiteren Benutzerdaten speichern. Webentwickler der Nachrichten-Website sind möglicherweise weniger motiviert, ihre Seite und die Anmeldeinformationen der Nutzer zu sichern.

Leider ist [Passwortwiederverwendung ein großes Problem](https://specopssoft.com/blog/password-reuse-hidden-danger/). Benutzer verwenden dasselbe Passwort auf mehreren Websites (Nachrichtenseiten, soziale Netzwerke, E-Mail-Anbieter, Banken). Auch wenn der Zugriff auf den Benutzernamen und das Passwort Ihrer Website für Sie nicht wie ein großes Risiko erscheint, stellt es ein großes Risiko für Nutzer dar, die denselben Benutzernamen und dasselbe Passwort für ihre Bankkonten verwendet haben. Angreifer werden immer schlauer; sie stehlen Benutzername/Passwort-Paare von einer Website und versuchen dann, sie auf lukrativeren Websites zu verwenden.

## Siehe auch

- [No More Passwords over HTTP, Please!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — detaillierter Blogbeitrag mit weiteren Informationen und FAQ.
