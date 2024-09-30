---
title: Firefox Sicherheitsrichtlinien
slug: Web/Security/Firefox_Security_Guidelines
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

## Zweck

Dieses Dokument skizziert eine Reihe von Sicherheitsrichtlinien, die im Allgemeinen für alle Client-Anwendungen wie Firefox und Thunderbird gelten.

## Grundsätze des sicheren Programmierens

Stellen Sie sicher, dass die Anwendung den [OWASP Secure Coding Principles](https://wiki.owasp.org/index.php/Secure_Coding_Principles) folgt:

1. Minimieren der Angriffsfläche
2. Festlegen sicherer Standardwerte
3. Prinzip der geringsten Privilegien
4. Prinzip der tiefengestaffelten Abwehr
5. Sichere Fehlerbehandlung
6. Diensten nicht vertrauen
7. Sicherheit einfach halten
8. Sicherheitsprobleme korrekt beheben

## Eingabevalidierung

1. Akzeptiert die Anwendung Benutzereingaben?

   1. Überprüfen Sie eine Auswahl von Eingabestellen, um sicherzustellen, dass beim Akzeptieren von Benutzerdaten angemessene Maximalwerte festgelegt sind
   2. Überprüfen Sie eine Auswahl von Eingabestellen, um sicherzustellen, dass die Anwendung nur eine definierte Menge akzeptabler Zeichen zulässt
   3. Stellen Sie sicher, dass eine Positivliste anstelle einer Negativliste verwendet wird

2. Akzeptiert die Anwendung Benutzereingaben, die in irgendeiner Weise angezeigt werden?

   1. Überprüfen Sie eine Auswahl von Ein- und Ausgabestellen, um sicherzustellen, dass vom Benutzer bereitgestellte Inhalte in der Antwort korrekt kodiert sind

## Chrome JS - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und keine besseren Alternativen verfügbar sind.

| Name                     | Risikoniveau | Problem                                                            | Lösung                                          |
| ------------------------ | ------------ | ------------------------------------------------------------------ | ------------------------------------------------ |
| eval                     | Sehr Hoch    | Ruft den JavaScript-Parser auf - gefährlich bei Verwendung mit unzuverlässigen Eingaben | Vermeiden Sie eval, wenn möglich.                    |
| setTimeout(string, time) | Sehr Hoch    | Wirkt wie eval                                                     | Verwenden Sie setTimeout(function, time, param1, param2, …) |

## C++ - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und keine besseren Alternativen verfügbar sind.

| Name                                                  | Risikoniveau | Problem                                            | Lösung                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------- | ------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gets                                                  | Sehr Hoch    | Keine Prüfung der Grenzen                          | Verwenden Sie gets nicht. Verwenden Sie stattdessen fgets.                                                                                                                                                                                                                      |
| strcpy                                                | Sehr Hoch    | Keine Prüfung der Grenzen                          | strcpy ist nur sicher, wenn der Quellstring eine Konstante ist und das Ziel groß genug ist, um ihn zu halten. Andernfalls verwenden Sie strncpy.                                                                                                                                 |
| sprintf                                               | Sehr Hoch    | Keine Prüfung der Grenzen, Format-String-Angriffe  | sprintf ist sehr schwer sicher zu verwenden. Verwenden Sie stattdessen snprintf.                                                                                                                                                                                                 |
| scanf, sscanf                                         | Hoch         | Möglicherweise keine Prüfung der Grenzen, Format-String-Angriffe | Stellen Sie sicher, dass alle %-Direktiven mit den entsprechenden Argumenttypen übereinstimmen. Verwenden Sie keine '%s'-Direktiven ohne Begrenzungsprüfung. Verwenden Sie '%xs', wobei x die Puffergröße des entsprechenden Arguments ist. Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Format-String. |
| strcat                                                | Hoch         | Keine Prüfung der Grenzen                          | Wenn Eingabegrößen nicht gut bekannt und festgelegt sind, verwenden Sie strncat.                                                                                                                                                                                                |
| printf, fprintf, snprintf, vfprintf, vsprintf, syslog | Hoch         | Format-String-Angriffe                             | Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Format-String. Wenn der Format-String durch Web-Inhalte oder Benutzereingaben beeinflusst werden kann, validieren Sie ihn auf die richtige Anzahl und Typen von %-Direktiven, bevor Sie diese Funktionen aufrufen. Stellen Sie sicher, dass Zielgrößenargumente korrekt sind. |
| strncpy, fgets, strncat                               | Niedrig      | Möglicherweise keine Nullterminierung              | Terminate immer explizit den Zielpuffer. Stellen Sie sicher, dass das Größenargument korrekt ist. Stellen Sie sicher, dass im Zielpuffer Platz für das Nullzeichen bleibt!                                                                                                     |

## URLs

1. Verwendet die Anwendung unzuverlässige Daten, um URLs zu erstellen?

   - Stellen Sie sicher, dass solche Daten vor der Verwendung ausreichend gereinigt und kodiert werden.
   - Stellen Sie sicher, dass alle aus diesen URLs bezogenen Daten vor der Verwendung oder Speicherung überprüft werden.

2. Folgt die Anwendung Umleitungen?

   - Stellen Sie sicher, dass Sicherheitsüberprüfungen sowohl bei Umleitungen als auch bei der ursprünglichen Anfrage-URI durchgeführt werden.

## Sicherheitskontrollen

1. Implementiert die Anwendung geeignete Berechtigungsprüfungen?

   - Stellen Sie sicher, dass die richtigen APIs verwendet werden, wo verfügbar (z.B. shouldLoad, etc.)
   - Stellen Sie sicher, dass die Anwendung sicher ausfällt.

## Fernzugriff auf Systeme

1. Greift die Anwendung auf entfernte Systeme zu?

- Stellen Sie sicher, dass TLS verwendet wird, es sei denn, es gibt einen sehr guten Grund dagegen.
- Stellen Sie sicher, dass keine Benutzerinformationen ohne Zustimmung des Benutzers übermittelt werden.

## Informationsspeicherung

1. Dateispeicherung

   1. Stellen Sie sicher, dass die Anwendung überprüft, ob erstellte Dateien unter erlaubten Pfaden liegen
   2. Werden Dateinamen aus unzuverlässigen Daten generiert?

      - Stellen Sie sicher, dass die Daten geeignet kodiert werden

   3. Überprüfen Sie, ob Dateien von einem akzeptablen Typ sind
   4. Überprüfen Sie, ob Dateien vernünftige Größenbeschränkungen nicht überschreiten können

2. Datenbankspeicherung

   1. Stellen Sie sicher, dass alle unzuverlässigen Informationen, die an die Datenbank gesendet werden, ausreichend gereinigt werden
   2. Verwenden Sie nach Möglichkeit typsichere Parametrisierung, um Injektionsangriffe zu verhindern

3. Sensible Informationen

   1. Stellen Sie sicher, dass alle sicherheitskritischen oder persönlichen Informationen ausreichend geschützt sind (siehe Verschlüsselungsabschnitt)
   2. Besondere Vorsicht ist bei Anmeldedaten (Passwörter, etc.) geboten - Wenn Sie mit Informationen dieser Art arbeiten und unsicher sind, was zu tun ist, lohnt es sich immer, zu fragen

4. Protokollierung

   1. Vergessen Sie nicht, dass die obigen Regeln auch für Protokolle sowie Ihre üblichen Anwendungsdaten gelten

## Verschlüsselung

1. Verwendet die Anwendung irgendeine Form der Verschlüsselung?
2. Sind die verwendeten Algorithmen anerkannte Standards?

## Denial of Service

1. Stellen Sie sicher, dass die Anwendung gegen Erschöpfung von:

   1. Systemspeicher
   2. Speicherplatz

## Sicherheitswarnungen

1. Gibt die Anwendung dem Benutzer Sicherheitswarnungen aus?
2. Sind diese klar verständlich und angemessen?
3. Kann unzuverlässige Daten die Bedeutung von Nachrichten an den Benutzer ändern?

   - Kann Benutzereingaben die Bedeutung von Nachrichten ändern?
   - Kann Benutzereingaben systemeigene Nachrichten vom sichtbaren Bildschirm verdrängen?
   - Kann Benutzereingaben Sonderzeichen enthalten, die die Bedeutung von Nachrichten ändern können (z.B. Unicode-Rechts-nach-links-Override U+202E)

4. Kann ein Angreifer das Timing von Dialogen nutzen, um den Benutzer dazu zu verleiten, auf etwas zu klicken, das er nicht wollte?

## Informationsoffenlegung

1. Gibt die Anwendung Informationen preis, die den Benutzer gefährden könnten?
2. Gibt die Anwendung Informationen preis, die sie nicht benötigt?
3. Gibt die Anwendung etwas preis, das den Benutzer überraschen oder verärgern könnte?

## Front-End

1. Werden sichere Mechanismen zum Erstellen von XUL- und HTML-UI-Elementen verwendet?

   - z.B. verwenden Sie `createTextNode` anstelle von `innerHTML` oder ähnlichem

2. Erstellt die Anwendung ihre eigenen `docshells` (Tabs, iframes)?

   - Stellen Sie sicher, dass Sie den Typ dieser explizit angeben, z.B. `iframe.setAttribute("type", "content")`

## Referenzen

- [Web Security Verification](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
- [Mozilla Security Review and Best Practices](https://www-archive.mozilla.org/projects/security/components/reviewguide.html)
- [Sicherheitstipps für Mozilla und Erweiterungsentwickler](https://www.squarefree.com/securitytips/mozilla-developers.html)
