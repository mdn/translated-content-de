---
title: Unsichere Passwörter
slug: Web/Security/Insecure_passwords
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Login-Formulare über HTTP anzubieten ist besonders gefährlich, da eine Vielzahl von Angriffen gegen sie verwendet werden kann, um das Passwort eines Benutzers zu extrahieren. Netzwerkabhörer könnten das Passwort eines Benutzers stehlen, indem sie das Netzwerk abhören oder die während der Übertragung bereitgestellte Seite modifizieren.

Das [HTTPS](/de/docs/Glossary/HTTPS)-Protokoll ist darauf ausgelegt, Benutzerdaten vor Abhörmaßnahmen (Vertraulichkeit) und vor Modifikationen (Integrität) im Netzwerk zu schützen. Websites, die Benutzerdaten verarbeiten, sollten HTTPS verwenden, um ihre Benutzer vor Angreifern zu schützen. Wenn eine Website HTTP anstelle von HTTPS verwendet, ist es trivial, Benutzerdaten (wie ihre Zugangsdaten) zu stehlen. Dies wurde durch [Firesheep](https://codebutler.github.io/firesheep/) eindrucksvoll demonstriert.

Um dieses Problem zu beheben, installieren und konfigurieren Sie ein [TLS](/de/docs/Glossary/TLS)-Zertifikat auf Ihrem Server. Es gibt verschiedene Anbieter, die kostenlose und kostenpflichtige Zertifikate anbieten. Wenn Sie eine Cloud-Plattform nutzen, hat diese möglicherweise eigene Möglichkeiten zur Aktivierung von HTTPS.

## Hinweis zur Passwort-Wiederverwendung

Manchmal verlangen Websites nach Benutzername und Passwort, speichern jedoch keine besonders sensiblen Daten. Zum Beispiel könnte eine Nachrichtenwebsite, welche Nachrichtenartikel speichert, die ein Benutzer später lesen möchte, keine weiteren Benutzerdaten speichern. Webentwickler der Nachrichtenwebsite sind möglicherweise weniger motiviert, ihre Website und die Zugangsdaten ihrer Nutzer zu sichern.

Leider ist [Passwort-Wiederverwendung ein großes Problem](https://www.lightbluetouchpaper.org/2011/02/09/measuring-password-re-use-empirically/). Benutzer verwenden dasselbe Passwort auf mehreren Websites (Nachrichtenseiten, soziale Netzwerke, E-Mail-Anbieter, Banken). Daher ist selbst dann, wenn Ihnen der Zugriff auf den Benutzernamen und das Passwort Ihrer Website kein großes Risiko erscheint, es ein großes Risiko für Benutzer, die dieselben Anmeldedaten auch für ihre Bankkonten verwenden. Angreifer werden klüger; sie stehlen Benutzername/Passwort-Paare von einer Website und versuchen dann, diese auf lukrativeren Websites wiederzuverwenden.

## Siehe auch

- [Keine Passwörter mehr über HTTP, bitte!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — ausführlicher Blogbeitrag mit weiteren Informationen und FAQ.
