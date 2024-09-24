---
title: Unsichere Passwörter
slug: Web/Security/Insecure_passwords
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Login-Formulare über HTTP bereitzustellen, ist besonders gefährlich wegen der Vielzahl von Angriffen, die gegen sie eingesetzt werden können, um das Passwort eines Benutzers zu extrahieren. Netzwerk-Spione könnten das Passwort eines Benutzers stehlen, indem sie das Netzwerk abhören oder die während der Übertragung bereitgestellte Seite verändern.

Das [HTTPS](/de/docs/Glossary/HTTPS)-Protokoll ist darauf ausgelegt, Benutzerdaten vor Abhörmaßnahmen (Vertraulichkeit) und vor Veränderungen (Integrität) im Netzwerk zu schützen. Websites, die Benutzerdaten verarbeiten, sollten HTTPS verwenden, um ihre Benutzer vor Angreifern zu schützen. Wenn eine Website HTTP anstelle von HTTPS verwendet, ist es trivial, Benutzerdaten (wie ihre Anmeldedaten) zu stehlen. Dies wurde berühmt durch [Firesheep](https://codebutler.github.io/firesheep/) demonstriert.

Um dieses Problem zu beheben, installieren und konfigurieren Sie ein [TLS](/de/docs/Glossary/TLS)-Zertifikat auf Ihrem Server. Es gibt verschiedene Anbieter, die kostenlose und kostenpflichtige Zertifikate anbieten. Wenn Sie eine Cloud-Plattform verwenden, kann diese eigene Methoden zur Aktivierung von HTTPS haben.

## Hinweis zur Wiederverwendung von Passwörtern

Manchmal erfordern Websites Benutzernamen und Passwörter, speichern jedoch keine sehr sensiblen Daten. Zum Beispiel kann eine Nachrichtenseite speichern, welche Nachrichtenartikel ein Benutzer später lesen möchte, aber keine weiteren Daten über einen Benutzer speichern. Webentwickler der Nachrichtenseite könnten weniger motiviert sein, ihre Seite und die Benutzerdaten zu sichern.

Leider ist die [Wiederverwendung von Passwörtern ein großes Problem](https://www.lightbluetouchpaper.org/2011/02/09/measuring-password-re-use-empirically/). Benutzer verwenden dasselbe Passwort auf mehreren Seiten (Nachrichtenseiten, soziale Netzwerke, E-Mail-Anbieter, Banken). Daher ist selbst wenn der Zugriff auf den Benutzernamen und das Passwort Ihrer Seite für Sie kein großes Risiko darstellt, es ein enormes Risiko für Benutzer, die dieselben Anmeldedaten verwenden, um sich bei ihren Bankkonten anzumelden. Angreifer werden immer schlauer; sie stehlen Benutzernamen/Passwort-Kombinationen von einer Seite und versuchen dann, sie auf lukrativeren Seiten wiederzuverwenden.

## Siehe auch

- [No More Passwords over HTTP, Please!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — Detaillierter Blog-Beitrag mit weiteren Informationen und FAQ.
