---
title: Unsichere Passwörter
slug: Web/Security/Insecure_passwords
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Das Bereitstellen von Login-Formularen über HTTP ist besonders gefährlich aufgrund der Vielzahl von Angriffen, die gegen sie eingesetzt werden können, um das Passwort eines Benutzers zu extrahieren. Netzwerkschnüffler könnten das Passwort eines Benutzers stehlen, indem sie den Netzwerkverkehr abhören oder die bereitgestellte Seite während der Übertragung verändern.

Das {{Glossary("HTTPS", "HTTPS")}}-Protokoll wurde entwickelt, um Benutzerdaten vor Abhöraktionen (Vertraulichkeit) und vor Veränderungen (Integrität) im Netzwerk zu schützen. Websites, die Benutzerdaten verarbeiten, sollten HTTPS verwenden, um ihre Benutzer vor Angreifern zu schützen. Wenn eine Website HTTP anstelle von HTTPS verwendet, ist es ein Leichtes, Benutzerdaten (wie ihre Anmeldedaten) zu stehlen. Dies wurde berüchtigt durch [Firesheep](https://codebutler.github.io/firesheep/) demonstriert.

Um dieses Problem zu beheben, installieren und konfigurieren Sie ein {{Glossary("TLS", "TLS")}}-Zertifikat auf Ihrem Server. Es gibt verschiedene Anbieter, die kostenlose und kostenpflichtige Zertifikate anbieten. Wenn Sie eine Cloud-Plattform nutzen, bietet diese möglicherweise eigene Möglichkeiten zur Aktivierung von HTTPS.

## Hinweis zur Passwortwiederverwendung

Manchmal erfordern Websites Benutzernamen und Passwörter, speichern jedoch keine besonders sensiblen Daten. Zum Beispiel könnte eine Nachrichten-Website speichern, welche Artikel ein Benutzer später lesen möchte, aber keine weiteren Benutzerdaten. Webentwickler der Nachrichten-Website könnten daher weniger motiviert sein, ihre Seite und die Benutzeranmeldeinformationen abzusichern.

Leider ist die [Passwortwiederverwendung ein großes Problem](https://specopssoft.com/blog/password-reuse-hidden-danger/). Benutzer verwenden dasselbe Passwort auf mehreren Websites (Nachrichtenseiten, soziale Netzwerke, E-Mail-Anbieter, Banken). Daher ist der Zugriff auf den Benutzernamen und das Passwort Ihrer Website auch dann ein großes Risiko für Benutzer, wenn es Ihnen nicht so vorkommt, da sie dieselben Anmeldedaten möglicherweise auch bei ihren Bankkonten verwenden. Die Angreifer werden immer schlauer; sie stehlen Benutzernamen-/Passwort-Kombinationen von einer Seite und versuchen, sie auf lukrativeren Seiten wiederzuverwenden.

## Siehe auch

- [Keine Passwörter mehr über HTTP, bitte!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — detaillierter Blogbeitrag mit zusätzlichen Informationen und FAQ.
