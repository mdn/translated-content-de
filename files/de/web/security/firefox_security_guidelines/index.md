---
title: Firefox Sicherheitsrichtlinien
slug: Web/Security/Firefox_Security_Guidelines
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

## Zweck

Dieses Dokument skizziert eine Reihe von Sicherheitsrichtlinien, die allgemein für alle Client-Anwendungen wie Firefox und Thunderbird gelten.

## Sichere Programmierprinzipien

Stellen Sie sicher, dass die Anwendung den [OWASP Secure Coding Principles](https://wiki.owasp.org/index.php/Secure_Coding_Principles) folgt:

1. Minimieren der Angriffsfläche
2. Etablieren von sicheren Standardwerten
3. Prinzip der minimalen Rechte
4. Prinzip der Tiefenverteidigung
5. Sicheres Scheitern
6. Dienstleistungen nicht vertrauen
7. Sicherheit einfach halten
8. Sicherheitsprobleme korrekt beheben

## Eingabeverifizierung

1. Akzeptiert die Anwendung Benutzereingaben?

   1. Überprüfen Sie eine Auswahl an Eingabestellen, um sicherzustellen, dass vernünftige Maximalwerte bei der Annahme von Benutzerdaten vorhanden sind
   2. Überprüfen Sie eine Auswahl an Eingabestellen, um sicherzustellen, dass die Anwendung nur eine definierte Menge akzeptabler Zeichen zulässt
   3. Stellen Sie sicher, dass das Allowlisting anstelle des Denylisting verwendet wird

2. Akzeptiert die Anwendung Benutzereingaben, die auf irgendeine Weise angezeigt werden?
   1. Überprüfen Sie eine Auswahl an Eingabe- und Ausgabestellen, um sicherzustellen, dass vom Benutzer bereitgestellte Inhalte korrekt im Antwortinhalt kodiert sind

## Chrome JS - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und keine besseren Alternativen zur Verfügung stehen.

| Name                     | Risikostufe | Problem                                                                  | Lösung                                                      |
| ------------------------ | ----------- | ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| eval                     | Sehr Hoch   | Ruft den JavaScript-Parser auf - gefährlich bei unzuverlässigen Eingaben | Vermeiden Sie eval wenn möglich.                            |
| setTimeout(string, time) | Sehr Hoch   | Handelt wie eval                                                         | Verwenden Sie setTimeout(function, time, param1, param2, …) |

## C++ - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und keine besseren Alternativen zur Verfügung stehen.

| Name                                                  | Risikostufe | Problem                                                     | Lösung                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------- | ----------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gets                                                  | Sehr Hoch   | Keine Grenzenprüfung                                        | Verwenden Sie nicht gets. Nutzen Sie stattdessen fgets.                                                                                                                                                                                                                                                                           |
| strcpy                                                | Sehr Hoch   | Keine Grenzenprüfung                                        | strcpy ist nur sicher, wenn der Quellstring konstant ist und das Ziel groß genug ist, um ihn aufzunehmen. Andernfalls nutzen Sie strncpy.                                                                                                                                                                                         |
| sprintf                                               | Sehr Hoch   | Keine Grenzenprüfung, Format-String-Angriffe                | sprintf ist sehr schwer sicher zu verwenden. Nutzen Sie snprintf stattdessen.                                                                                                                                                                                                                                                     |
| scanf, sscanf                                         | Hoch        | Möglicherweise keine Grenzenprüfung, Format-String-Angriffe | Stellen Sie sicher, dass alle %-Direktiven den entsprechenden Argumenttypen entsprechen. Verwenden Sie keine '%s'-Direktiven ohne Grenzenprüfung. Nutzen Sie '%xs', wobei x die Puffergröße des entsprechenden Arguments ist. Verwenden Sie keine unzuverlässigen, ungeprüften Daten im Format-String.                            |
| strcat                                                | Hoch        | Keine Grenzenprüfung                                        | Wenn die Eingabegrößen nicht wohlbekannt und festgelegt sind, verwenden Sie strncat stattdessen.                                                                                                                                                                                                                                  |
| printf, fprintf, snprintf, vfprintf, vsprintf, syslog | Hoch        | Format-String-Angriffe                                      | Verwenden Sie keine unzuverlässigen, ungeprüften Daten im Format-String. Falls der Format-String durch Webinhalt oder Benutzereingaben beeinflusst werden kann, validieren Sie ihn auf die richtige Anzahl und Typ der %-Direktiven, bevor Sie diese Funktionen aufrufen. Stellen Sie sicher, dass die Puffergrößen korrekt sind. |
| strncpy, fgets, strncat                               | Niedrig     | Möglicherweise keine Null-Terminierung                      | Stellen Sie immer explizit sicher, dass der Zielpuffer null-terminiert wird. Stellen Sie sicher, dass das Größenargument korrekt ist. Achten Sie darauf, im Zielpuffer Platz für das Null-Zeichen zu lassen!                                                                                                                      |

## URLs

1. Verwendet die Anwendung unzuverlässige Daten, um URLs zu konstruieren?

   - Stellen Sie sicher, dass solche Daten vor der Verwendung ausreichend bereinigt und kodiert werden.
   - Stellen Sie sicher, dass Daten, die aus diesen URLs abgeleitet werden, vor der Verwendung oder Speicherung geprüft werden.

2. Folgt die Anwendung Weiterleitungen?
   - Stellen Sie sicher, dass Sicherheitsprüfungen sowohl bei Weiterleitungen als auch bei der ursprünglichen Anfrage-URI durchgeführt werden.

## Sicherheitskontrollen

1. Implementiert die Anwendung geeignete Berechtigungsprüfungen?
   - Stellen Sie sicher, dass die korrekten APIs genutzt werden, wenn verfügbar (z.B. shouldLoad, etc.)
   - Stellen Sie sicher, dass die Anwendung sicher scheitert.

## Zugriffe auf entfernte Systeme

1. Greift die Anwendung auf irgendwelche entfernten Systeme zu?

- Stellen Sie sicher, dass TLS verwendet wird, es sei denn, es gibt einen _sehr_ guten Grund dagegen.
- Stellen Sie sicher, dass keine Benutzerinformationen ohne die Zustimmung des Benutzers übertragen werden.

## Informationsspeicherung

1. Dateispeicherung

   1. Stellen Sie sicher, dass die Anwendung überprüft, dass alle erstellten Dateien unter erlaubten Pfaden gespeichert werden
   2. Werden Dateinamen aus unzuverlässigen Daten generiert?

      - Stellen Sie sicher, dass die Daten geeignet kodiert sind

   3. Überprüfen Sie, dass Dateien von einem akzeptablen Typ sind
   4. Überprüfen Sie, dass Dateien vernünftige Größenlimits nicht überschreiten

2. Datenbankspeicherung

   1. Stellen Sie sicher, dass alle an die Datenbank gesendeten, unzuverlässigen Informationen ausreichend bereinigt werden
   2. Wenn möglich, verwenden Sie typsichere Parametrisierung zur Vermeidung von Injection-Angriffen

3. Sensible Informationen

   1. Stellen Sie sicher, dass alle sicherheitsrelevanten oder personenbezogenen Informationen ausreichend geschützt sind (siehe Abschnitt Verschlüsselung)
   2. Besondere Vorsicht ist bei Anmeldedaten (Passwörter etc.) geboten - Wenn Sie mit solchen Informationen arbeiten und unsicher sind, was zu tun ist, lohnt es sich immer nachzufragen

4. Protokollierung
   1. Vergessen Sie nicht, dass die obigen Regeln auch für Protokolle sowie Ihre üblichen Anwendungsdaten gelten

## Verschlüsselung

1. Verwendet die Anwendung irgendeine Form von Verschlüsselung?
2. Sind die verwendeten Algorithmen anerkannte Standards?

## Denial of Service

1. Stellen Sie sicher, dass die Anwendung gegen die Erschöpfung von:
   1. Systemspeicher
   2. Speicherplatz

## Sicherheitswarnungen

1. Präsentiert die Anwendung dem Benutzer irgendwelche Sicherheitswarnungen?
2. Sind sie klar verständlich und angemessen?
3. Kann unzuverlässige Daten die Bedeutung von Nachrichten für den Benutzer ändern?

   - Kann Benutzereingaben die Bedeutung von Nachrichten ändern?
   - Kann Benutzereingaben Systemnachrichten außerhalb des sichtbaren Bildschirms erzwingen?
   - Kann Benutzereingaben Sonderzeichen enthalten, die die Bedeutung von Nachrichten ändern können (z.B. Unicode-Rechts-nach-Links-Override U+202E)

4. Kann ein Angreifer das Timing von Dialogen verwenden, um den Benutzer zu täuschen, sodass er auf etwas klickt, was er nicht beabsichtigt hat?

## Informationsweitergabe

1. Gibt die Anwendung Informationen weiter, die den Benutzer gefährden könnten?
2. Gibt die Anwendung Informationen weiter, die sie nicht muss?
3. Gibt die Anwendung etwas weiter, das den Benutzer überraschen oder verärgern könnte?

## Front-End

1. Werden sichere Mechanismen verwendet, um XUL- und HTML-UI-Elemente zu erstellen?

   - Zum Beispiel verwenden Sie createTextNode anstelle von innerHTML oder ähnlichem

2. Erstellt die Anwendung eigene Docshells (Tabs, iframes)?
   - Stellen Sie sicher, dass Sie ausdrücklich den Typ dieser angeben, z.B. iframe.setAttribute("type", "content")

## Referenzen

- [Web Security Verification](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
- [Mozilla Security Review and Best Practices](https://www-archive.mozilla.org/projects/security/components/reviewguide.html)
- [Sicherheitstipps für Mozilla- und Erweiterungsentwickler](https://www.squarefree.com/securitytips/mozilla-developers.html)
