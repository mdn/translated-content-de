---
title: Unsichere Passwörter
slug: Web/Security/Insecure_passwords
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Das Ausliefern von Anmeldeformularen über HTTP ist besonders gefährlich wegen der Vielzahl an Angriffen, die genutzt werden können, um das Passwort eines Nutzers zu extrahieren. Netzwerk-Lauscher könnten das Passwort eines Nutzers stehlen, indem sie das Netzwerk abhören oder die unterwegs ausgelieferte Seite verändern.

Das [HTTPS](/de/docs/Glossary/HTTPS)-Protokoll ist dafür ausgelegt, Benutzerdaten auf dem Netzwerk vor Abhören (Vertraulichkeit) und vor Manipulation (Integrität) zu schützen. Websites, die Benutzerdaten verarbeiten, sollten HTTPS verwenden, um ihre Nutzer vor Angreifern zu schützen. Wenn eine Website HTTP statt HTTPS nutzt, ist es trivial, Benutzerinformationen (wie ihre Anmeldedaten) zu stehlen. Dies wurde eindrucksvoll von [Firesheep](https://codebutler.github.io/firesheep/) demonstriert.

Um dieses Problem zu beheben, installieren und konfigurieren Sie ein [TLS](/de/docs/Glossary/TLS)-Zertifikat auf Ihrem Server. Es gibt verschiedene Anbieter, die sowohl kostenlose als auch kostenpflichtige Zertifikate anbieten. Wenn Sie eine Cloud-Plattform nutzen, kann es sein, dass diese eigene Methoden zur Aktivierung von HTTPS hat.

## Hinweis zur Passwort-Wiederverwendung

Manchmal benötigen Websites Benutzernamen und Passwörter, speichern jedoch keine besonders sensiblen Daten. Ein Nachrichtenportal könnte zum Beispiel nur speichern, welche Artikel ein Nutzer später lesen möchte, aber keine weiteren Daten. Webentwickler der Nachrichtenwebsite könnten daher weniger motiviert sein, ihre Website und Benutzerdaten zu sichern.

Leider ist [Passwort-Wiederverwendung ein großes Problem](https://www.lightbluetouchpaper.org/2011/02/09/measuring-password-re-use-empirically/). Nutzer verwenden dasselbe Passwort auf mehreren Websites (Nachrichtenportale, soziale Netzwerke, E-Mail-Anbieter, Banken). Selbst wenn der Zugriff auf den Benutzernamen und das Passwort Ihrer Website für Sie nicht nach einem großen Risiko aussieht, ist es ein erhebliches Risiko für Nutzer, die dieselben Anmeldedaten für ihre Bankkonten verwenden. Angreifer werden immer smarter; sie stehlen Benutzernamen/Passwort-Kombinationen von einer Website und versuchen dann, diese auf lukrativeren Seiten zu verwenden.

## Siehe auch

- [No More Passwords over HTTP, Please!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — Ausführlicher Blogpost mit weiteren Informationen und FAQs.
