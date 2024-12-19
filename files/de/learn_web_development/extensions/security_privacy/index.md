---
title: Sicherheit und Datenschutz
slug: Learn_web_development/Extensions/Security_privacy
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

> [!NOTE]
> Wie Sie unten sehen werden, ist dieses Modul derzeit nur ein Lehrplanentwurf/Syllabus, mit einigen Links zu Einstiegsguides. Wir beabsichtigen, dies in Zukunft, wenn es die Zeit erlaubt, in einen vollständigen Kurs umzuwandeln.

Es ist von entscheidender Bedeutung, zu verstehen, wie Sie Ihre Daten und die Daten Ihrer Nutzer vor potenziellen Angreifern, die versuchen könnten, sie zu stehlen, schützen können und sollten. Dieses Modul behandelt sowohl die Härtung von Websites, um das Stehlen von Daten zu erschweren, als auch das Sammeln von Nutzerdaten auf respektvolle Weise, die das Tracking vermeidet oder das Teilen mit unpassenden Dritten verhindert.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics) vertraut sein.

## Lernziele

### 5.1 Grundlagen der Sicherheit und des Datenschutzes

> [!NOTE]
>
> - Das Erfüllen aller Kriterien in diesem Modul führt nicht dazu, dass ein Student ein qualifizierter Sicherheitsingenieur wird. Aber es ist wichtig, dass Webentwickler die Grundlagen der Websicherheit und des Datenschutzes verstehen.
> - Es ist auch wichtig, dass die Studenten verstehen, dass viele Sicherheitsprobleme durch Probleme mit serverseitigem Code oder einer Kombination aus clientseitigem und serverseitigem Code verursacht werden. Viel Code sollte sehr wenige Sicherheitsrisiken darstellen, vorausgesetzt, der Browser macht seine Arbeit ordnungsgemäß.

Lernziele:

- Verstehen Sie den Unterschied zwischen Sicherheit und Datenschutz.

- Verstehen Sie das allgemeine HTTP-Modell auf hoher Ebene.

- Lernen Sie, was HTTPS ist und warum es wichtig ist.

- Sicherheitsaspekte der gleichen Herkunft:

  - Warum dies grundlegend für das Web ist.

  - Sichere Umgehungsmöglichkeiten, wie z. B. Cross-Origin Resource Sharing (CORS).

- Wie Cookies gespeichert werden und deren Sicherheits- und Datenschutzimplikationen wie Tracking.

- Lernen Sie Situationen kennen, in denen Sicherheitsprobleme im Allgemeinen auftreten:

  - Wenn Benutzer gebeten werden, sensible Daten bereitzustellen (wie Passwörter oder Kreditkartendaten) und diese an einen Server zu übertragen.

  - Beim Anfordern von Daten von einem Server.

  - Bei der Datenübertragung zwischen Servern (zum Beispiel, wenn ein Server Daten von einem Webdienst anfordert).

  - Beim Erhalt des Benutzerzustands durch das Setzen eines Cookies oder anderer Mechanismen.

- Lernen Sie gängige Sicherheitsbedrohungen kennen und wie man sie abmildert:

  - Cross-Site Scripting (XSS).

  - Cross-Site Request Forgery (CSRF).

  - Clickjacking.

  - Denial of Service (DoS).

- Verstehen Sie den Zweck anderer wichtiger Technologien, wie:

  - Content Security Policy (CSP).

  - Berechtigungspolitik (Permissions-Policy).

  - Das Webmodell zur Benutzeraktivierung von "leistungsstarken Funktionen" (auch bekannt als temporäre Aktivierung).

### 5.2 Datenschutzgesetze

Lernziele:

- Verstehen Sie grundlegende Konzepte im Zusammenhang mit der Privatsphäre von Benutzern:

  - Persönlich identifizierbare Informationen (PII).

  - Vertraulichkeit.

  - Tracking.

  - Fingerprinting.

- Sei sich regionaler Datenschutzgesetze bewusst, zum Beispiel:

  - [Datenschutz-Grundverordnung (DSGVO)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) (EU).

  - [Data Protection Act 2018](https://www.gov.uk/data-protection) (UK), gov.uk.

  - [California Consumer Privacy Act (2018)](https://www.oag.ca.gov/privacy/ccpa) (US, CA), ca.gov.

  - [Children's Online Privacy Protection Rule (COPPA)](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa) (US), ftc.gov.

- Verstehen, wie man sich an solche Gesetze anpasst, in Bezug auf die praktische Umsetzung.

> [!NOTE]:
> Die Erfüllung der oben genannten Kriterien erfordert nicht, dass Studenten zu rechtlichen Experten in Sachen Datenschutzgesetze werden, aber sie sollten die Auswirkungen dieser Gesetze verstehen und wissen, wie dies ihre Arbeit beeinflusst.

## Ressourcen

- [Sicherheit im Web](/de/docs/Web/Security)
- [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Datenschutz im Web](/de/docs/Web/Privacy)
- [Kompletter Leitfaden zur DSGVO Einhaltung](https://gdpr.eu/), gdpr.eu

## Siehe auch

- [Lernen Sie den Datenschutz](https://web.dev/learn/privacy/), web.dev (2023)
