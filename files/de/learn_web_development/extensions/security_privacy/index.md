---
title: Sicherheit und Privatsphäre
slug: Learn_web_development/Extensions/Security_privacy
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

> [!NOTE]
> Wie Sie unten sehen werden, ist dieses Modul derzeit nur ein Lehrplan/Leitfaden, mit einigen Links zu Einstiegsanleitungen. Wir beabsichtigen, dies in der Zukunft, wenn die Zeit es erlaubt, in einen vollständigen Kurs umzuwandeln.

Es ist entscheidend, zu verstehen, wie Sie Ihre Daten und die Daten Ihrer Nutzer vor potenziellen Angreifern schützen können und sollten, die versuchen könnten, sie zu stehlen. Dieses Modul behandelt sowohl das Absichern von Websites, um den Diebstahl von Daten zu erschweren, als auch das respektvolle Sammeln von Nutzerdaten, ohne sie zu verfolgen oder mit ungeeigneten Dritten zu teilen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics) vertraut sein.

## Lernziele

### 5.1 Grundlagen von Sicherheit und Privatsphäre

> [!NOTE]
>
> - Die Erfüllung aller Kriterien in diesem Modul wird nicht dazu führen, dass ein Student ein qualifizierter Sicherheitstechniker wird, aber es ist auch wichtig, dass Webentwickler die Grundlagen der Websicherheit und des Datenschutzes verstehen.
> - Es ist auch wichtig, dass Studenten verstehen, dass viele Sicherheitsprobleme durch Probleme mit serverseitigem Code oder einer Kombination aus clientseitigem und serverseitigem Code verursacht werden. Viel Code sollte sehr wenige Sicherheitsrisiken darstellen, vorausgesetzt, der Browser erfüllt seine Aufgabe korrekt.

Lernziele:

- Verstehen des Unterschieds zwischen Sicherheit und Privatsphäre.

- Verstehen des allgemeinen HTTP-Modells auf hoher Ebene.

- Lernen, was HTTPS ist und warum es wichtig ist.

- Gleicher Ursprungssicherheit:

  - Warum dies grundlegend für das Web ist.

  - Möglichkeiten, sicher damit umzugehen, wie z.B. Cross-Origin Resource Sharing (CORS).

- Wie Cookies gespeichert werden und deren Sicherheits- und Datenschutzimplikationen, wie z.B. Tracking.

- Lernen über Situationen, in denen Sicherheitsprobleme im Allgemeinen auftreten:

  - Wenn Nutzer gebeten werden, sensible Daten bereitzustellen (wie Passwörter oder Kreditkartendaten) und diese an einen Server zu übertragen.

  - Wenn Daten von einem Server angefordert werden.

  - Wenn Daten zwischen Servern übertragen werden (zum Beispiel, wenn ein Server Daten von einem Webdienst anfordert).

  - Wenn der Nutzerzustand durch Setzen eines Cookies oder anderer Mechanismen erhalten bleibt.

- Lernen über häufige Sicherheitsbedrohungen und wie man diese abmildern kann:

  - Cross-Site Scripting (XSS).

  - Cross-Site Request Forgery (CSRF).

  - Clickjacking.

  - Denial of Service (DoS).

- Verstehen des Zwecks anderer wichtiger Technologien, wie:

  - Content Security Policy (CSP).

  - Permissions-Policy.

  - Das Webmodell für die Nutzeraktivierung von "starken Funktionen" (auch als vorübergehende Aktivierung bezeichnet).

### 5.2 Datenschutzgesetze

Lernziele:

- Verstehen der grundlegenden Konzepte im Zusammenhang mit dem Datenschutz der Nutzer:

  - Personenbezogene Informationen (PII).

  - Vertraulichkeit.

  - Tracking.

  - Fingerprinting.

- Kenntnisnahme von regionalen Datenschutzgesetzen, zum Beispiel:

  - [Allgemeine Datenschutzverordnung (GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) (EU).

  - [Data Protection Act 2018](https://www.gov.uk/data-protection) (UK), gov.uk.

  - [California Consumer Privacy Act (2018)](https://www.oag.ca.gov/privacy/ccpa) (US, CA), ca.gov.

  - [Regel zum Schutz der Privatsphäre von Kindern im Internet (COPPA)](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa) (US), ftc.gov.

- Verstehen, wie man solche Gesetze praktisch umsetzt.

> [!NOTE]:
> Die Erfüllung der oben genannten Kriterien erfordert nicht, dass die Studenten rechtliche Experten in Sachen Datenschutzgesetze werden, aber sie sollten die Auswirkungen dieser Gesetze verstehen und wissen, wie sich diese auf ihre Arbeit auswirken.

## Ressourcen

- [Sicherheit im Web](/de/docs/Web/Security)
- [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Datenschutz im Web](/de/docs/Web/Privacy)
- [Vollständiger Leitfaden zur Einhaltung der DSGVO](https://gdpr.eu/), gdpr.eu

## Siehe auch

- [Datenschutz lernen](https://web.dev/learn/privacy/), web.dev (2023)
